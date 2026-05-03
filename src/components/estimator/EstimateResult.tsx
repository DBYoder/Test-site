import type { EstimateResult, RoomInput } from '@/types/estimator';
import Button from '@/components/ui/Button';

interface Props {
  result: EstimateResult;
}

function fmt(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

const surfaceLabels = { walls: 'Walls', ceiling: 'Ceiling', trim: 'Trim / Baseboards' };

export default function EstimateResultCard({ result }: Props) {
  const { lineItems, materialSubtotal, laborAndOverhead, total, minimumApplied } = result;

  return (
    <div className="border-2 border-brand-coral rounded-2xl overflow-hidden print:shadow-none print:border-0">
      {/* Header */}
      <div className="bg-brand-coral px-6 py-4 flex items-center justify-between">
        <h3 className="font-display text-xl font-bold text-white">Your Estimate</h3>
        <button
          onClick={() => window.print()}
          className="text-white/80 hover:text-white text-sm font-medium transition-colors print:hidden"
        >
          Print
        </button>
      </div>

      {/* Line items */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-offwhite">
              <th className="text-left px-4 py-2 text-brand-slate font-semibold">Room</th>
              <th className="text-left px-4 py-2 text-brand-slate font-semibold">Surface</th>
              <th className="text-right px-4 py-2 text-brand-slate font-semibold">Qty</th>
              <th className="text-right px-4 py-2 text-brand-slate font-semibold">Rate</th>
              <th className="text-right px-4 py-2 text-brand-slate font-semibold">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((li, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="px-4 py-2.5 text-brand-charcoal">{li.roomName}</td>
                <td className="px-4 py-2.5 text-brand-charcoal">{surfaceLabels[li.surface]}</td>
                <td className="px-4 py-2.5 text-right text-brand-charcoal">
                  {Math.round(li.quantity).toLocaleString()} {li.unit === 'lf' ? 'lin. ft.' : 'sq. ft.'}
                </td>
                <td className="px-4 py-2.5 text-right text-brand-charcoal">${li.rate.toFixed(2)}</td>
                <td className="px-4 py-2.5 text-right font-medium text-brand-charcoal">{fmt(li.subtotal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="border-t border-gray-200 px-6 py-4 flex flex-col gap-2">
        <div className="flex justify-between text-sm text-brand-slate">
          <span>Materials subtotal</span>
          <span>{fmt(materialSubtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-brand-slate">
          <span>Labor & overhead</span>
          <span>{fmt(laborAndOverhead)}</span>
        </div>
        {minimumApplied && (
          <p className="text-xs text-brand-slate bg-brand-yellow/20 rounded-lg px-3 py-2 mt-1">
            Minimum job fee of $350 applied.
          </p>
        )}
        <div className="flex justify-between text-lg font-bold text-brand-dark border-t border-gray-200 pt-3 mt-1">
          <span>Estimated Total</span>
          <span className="text-brand-coral">{fmt(total)}</span>
        </div>
      </div>

      {/* Disclaimer & CTA */}
      <div className="bg-brand-offwhite px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 print:hidden">
        <p className="text-xs text-brand-slate flex-1 leading-relaxed">
          This is a ballpark estimate based on standard dimensions. Final pricing depends on surface condition, color changes, and accessibility. Contact us for a precise on-site quote — always free.
        </p>
        <Button href="/contact" variant="primary" size="sm" className="shrink-0">
          Request Exact Quote
        </Button>
      </div>
    </div>
  );
}

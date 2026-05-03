'use client';

import { useState } from 'react';
import type { Rate } from '@/types/rates';

const unitLabels: Record<string, string> = {
  per_sqft: '$/sq ft',
  per_linear_ft: '$/lin ft',
  multiplier: 'multiplier',
  fixed: 'fixed $',
};

export default function RatesTable({ initialRates }: { initialRates: Rate[] }) {
  const [rates, setRates] = useState<Rate[]>(initialRates);
  const [dirty, setDirty] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(id: string, value: string) {
    const num = parseFloat(value);
    if (isNaN(num)) return;
    setRates((prev) => prev.map((r) => (r.id === id ? { ...r, rate: num } : r)));
    setDirty((prev) => new Set(prev).add(id));
    setStatus('idle');
  }

  function discard() {
    setRates(initialRates);
    setDirty(new Set());
    setStatus('idle');
  }

  async function save() {
    setStatus('saving');
    setErrorMsg('');

    const changes = rates
      .filter((r) => dirty.has(r.id))
      .map((r) => ({ id: r.id, rate: r.rate }));

    try {
      const res = await fetch('/api/rates', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(changes),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Save failed');
      }

      setDirty(new Set());
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Save failed');
      setStatus('error');
    }
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  }

  const categoryOrder = ['surface', 'multiplier', 'fixed'];
  const grouped = categoryOrder.reduce<Record<string, Rate[]>>((acc, cat) => {
    acc[cat] = rates.filter((r) => r.category === cat);
    return acc;
  }, {});

  const categoryLabels: Record<string, string> = {
    surface: 'Surface Rates',
    multiplier: 'Multipliers',
    fixed: 'Fixed Fees',
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-dark">Rate Management</h1>
          <p className="text-brand-slate text-sm mt-1">Edit pricing rates used by the estimator tool.</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-brand-slate hover:text-brand-dark text-sm font-medium transition-colors"
        >
          Log Out
        </button>
      </div>

      {/* Status messages */}
      {status === 'saved' && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm font-medium">
          ✓ Rates saved successfully.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Rate groups */}
      {categoryOrder.map((cat) => {
        const group = grouped[cat];
        if (!group?.length) return null;
        return (
          <div key={cat}>
            <h2 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-3">
              {categoryLabels[cat]}
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-offwhite border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-brand-slate font-semibold">Label</th>
                    <th className="text-right px-5 py-3 text-brand-slate font-semibold">Rate</th>
                    <th className="text-left px-5 py-3 text-brand-slate font-semibold">Unit</th>
                    <th className="text-left px-5 py-3 text-brand-slate font-semibold">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {group.map((rate) => (
                    <tr
                      key={rate.id}
                      className={`border-t border-gray-50 transition-colors ${
                        dirty.has(rate.id) ? 'bg-brand-yellow/10' : ''
                      }`}
                    >
                      <td className="px-5 py-3 text-brand-charcoal font-medium">{rate.label}</td>
                      <td className="px-5 py-3 text-right">
                        <input
                          type="number"
                          step="0.01"
                          min="0.01"
                          max="99999"
                          value={rate.rate}
                          onChange={(e) => handleChange(rate.id, e.target.value)}
                          className="w-24 border border-gray-200 rounded-lg px-2 py-1 text-right text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-teal"
                        />
                      </td>
                      <td className="px-5 py-3 text-brand-slate">{unitLabels[rate.unit] ?? rate.unit}</td>
                      <td className="px-5 py-3 text-brand-slate text-xs">
                        {new Date(rate.updated_at).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {/* Save / Discard */}
      {dirty.size > 0 && (
        <div className="flex gap-4 sticky bottom-6">
          <button
            onClick={save}
            disabled={status === 'saving'}
            className="flex-1 bg-brand-coral text-white font-semibold py-3 rounded-xl hover:bg-[#e55a5a] disabled:opacity-50 transition-colors shadow-lg"
          >
            {status === 'saving' ? 'Saving…' : `Save ${dirty.size} Change${dirty.size !== 1 ? 's' : ''}`}
          </button>
          <button
            onClick={discard}
            disabled={status === 'saving'}
            className="px-6 py-3 rounded-xl border border-gray-200 text-brand-slate hover:bg-gray-50 transition-colors font-medium"
          >
            Discard
          </button>
        </div>
      )}
    </div>
  );
}

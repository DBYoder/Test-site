import type { Metadata } from 'next';
import EstimatorForm from '@/components/estimator/EstimatorForm';
import PaintSplash from '@/components/ui/PaintSplash';
import { getRatesMap } from '@/lib/rates';

export const metadata: Metadata = {
  title: 'Free Painting Estimate Tool',
  description:
    'Get an instant ballpark cost for your painting project in Harrisonburg, VA. Enter room dimensions, surfaces, and paint quality to see your estimate.',
};

export default async function EstimatePage() {
  const rates = getRatesMap();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark py-20 overflow-hidden">
        <PaintSplash color="#FF6B6B" className="absolute top-0 right-0 w-64 h-64 opacity-15 translate-x-10 -translate-y-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">Instant Ballpark</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Painting Cost Estimator
          </h1>
          <p className="text-white/70 max-w-xl">
            Add your rooms, pick your surfaces and paint quality, and get an instant estimate. No email required.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <EstimatorForm rates={rates} />

          <div className="mt-12 p-6 bg-brand-offwhite rounded-2xl">
            <h2 className="font-display font-bold text-brand-dark text-lg mb-2">Want a Precise Quote?</h2>
            <p className="text-brand-slate text-sm leading-relaxed">
              Our online estimator gives you a solid ballpark, but nothing beats an in-person look. We&apos;ll measure the actual space, assess surface condition, and give you a firm price — always free, always no pressure.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1 text-brand-teal font-semibold text-sm mt-3 hover:text-[#25a99d] transition-colors"
            >
              Schedule a free on-site estimate →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

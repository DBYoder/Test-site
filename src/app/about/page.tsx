import type { Metadata } from 'next';
import CtaBanner from '@/components/home/CtaBanner';
import PaintSplash from '@/components/ui/PaintSplash';

export const metadata: Metadata = {
  title: "About Yoder's Painting | Family-Owned in Harrisonburg, VA",
  description:
    "Learn about Yoder's Painting — a family-owned painting company serving Harrisonburg and the Shenandoah Valley.",
};

const certifications = [
  { label: 'Licensed in Virginia', icon: '📋' },
  { label: 'Fully Insured', icon: '🛡️' },
  { label: 'Lead-RRP Certified', icon: '✅' },
  { label: 'Better Business Bureau', icon: '⭐' },
];

const areas = [
  'Harrisonburg', 'Rockingham County', 'Staunton', 'Waynesboro',
  'Augusta County', 'Shenandoah County', 'Page County', 'Luray',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark py-20 overflow-hidden">
        <PaintSplash color="#2EC4B6" className="absolute top-0 right-0 w-64 h-64 opacity-15 translate-x-10 -translate-y-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About Yoder&apos;s Painting</h1>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Family-Owned, Personally Invested
            </h2>
            <div className="space-y-4 text-brand-slate leading-relaxed">
              <p>
                Yoder&apos;s Painting was founded on a simple belief: a fresh coat of paint should be stress-free for the homeowner and done right the first time. What started as a one-man operation has grown into a trusted team serving Harrisonburg, Staunton, Waynesboro, and the surrounding Shenandoah Valley.
              </p>
              <p>
                We&apos;re still family-owned, still personally invested in every project, and still answering our own phone. When you call Yoder&apos;s, you talk to the people who will show up to your home — not a call center.
              </p>
              <p>
                Our crew takes pride in treating every home with respect: protecting your furniture, cleaning up every day, and delivering a finish that makes you want to show off every room.
              </p>
            </div>
          </div>
          {/* Photo placeholder */}
          <div className="rounded-2xl bg-brand-offwhite h-80 flex items-center justify-center relative overflow-hidden">
            <PaintSplash color="#FF6B6B" className="absolute inset-0 w-full h-full opacity-20" />
            <div className="relative text-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-16 h-16 text-brand-slate mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p className="text-brand-slate text-xs">Team photo coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-dark text-center mb-10">
            Licensed, Insured &amp; Certified
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map(({ label, icon }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl block mb-3" role="img" aria-label={label}>{icon}</span>
                <p className="text-brand-charcoal font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-teal text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Where We Work
          </span>
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-4">Service Area</h2>
          <p className="text-brand-slate mb-8">We proudly serve communities throughout the Shenandoah Valley and surrounding areas of Virginia.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="bg-brand-offwhite text-brand-charcoal text-sm px-4 py-2 rounded-full font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Work With a Team You Can Trust" buttonText="Get a Free Estimate" />
    </>
  );
}

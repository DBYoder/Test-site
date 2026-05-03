import Button from '@/components/ui/Button';
import PaintSplash from '@/components/ui/PaintSplash';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-dark via-[#1e3a5f] to-brand-teal">
      {/* Decorative paint splashes */}
      <PaintSplash color="#FF6B6B" className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 opacity-20 translate-x-16 -translate-y-16" />
      <PaintSplash color="#FFD166" className="absolute bottom-0 left-0 w-56 h-56 opacity-15 -translate-x-12 translate-y-12" />
      <PaintSplash color="#2EC4B6" className="absolute top-1/2 left-1/4 w-40 h-40 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Harrisonburg&apos;s Trusted Painters
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
            Fresh Coats,{' '}
            <span className="text-brand-coral">Lasting</span>{' '}
            Impressions.
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Yoder&apos;s Painting brings precision, care, and vibrant color to every project — from single rooms to full exteriors. Locally owned, fully insured, and ready to transform your Harrisonburg home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/estimate" size="lg" variant="primary">
              Get a Free Estimate
            </Button>
            <Button href="/services" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark focus:ring-white">
              See Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

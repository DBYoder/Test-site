import Button from '@/components/ui/Button';
import PaintSplash from '@/components/ui/PaintSplash';

interface CtaBannerProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  href?: string;
}

export default function CtaBanner({
  heading = 'Ready to Transform Your Space?',
  subtext = "Get a free, no-obligation estimate and see what Yoder's Painting can do for your home or business.",
  buttonText = 'Get Your Free Estimate',
  href = '/estimate',
}: CtaBannerProps) {
  return (
    <section className="relative bg-brand-coral overflow-hidden py-16 md:py-20">
      <PaintSplash color="#ffffff" className="absolute -top-6 -right-6 w-48 h-48 opacity-10" />
      <PaintSplash color="#FFD166" className="absolute bottom-0 left-10 w-36 h-36 opacity-15" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
        <Button
          href={href}
          size="lg"
          className="bg-white text-brand-coral hover:bg-brand-offwhite focus:ring-white border-0"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}

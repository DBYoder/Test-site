import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/home/CtaBanner';
import PaintSplash from '@/components/ui/PaintSplash';

export const metadata: Metadata = {
  title: 'Painting Services | Interior, Exterior & Commercial',
  description:
    "Explore the full range of painting services from Yoder's Painting: interior rooms, exterior siding, trim, decks, and commercial spaces throughout Harrisonburg, VA.",
};

const services = [
  {
    id: 'interior',
    title: 'Interior Painting',
    badge: 'Most Popular',
    description:
      'Your home\'s interior sets the tone for daily life. We specialize in smooth, even finishes that look perfect in every light — and last for years. From patching and priming to the final coat, we handle every step.',
    details: [
      'Living rooms & bedrooms',
      'Kitchens & bathrooms',
      'Basements & bonus rooms',
      'Hallways & stairwells',
      'Ceilings & trim',
      'Accent walls & specialty finishes',
    ],
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    badge: null,
    description:
      "The Shenandoah Valley's seasons are no joke. Our exterior projects use 100% acrylic paints rated for freeze-thaw cycles, applied over a two-coat primer system so your home stays protected and beautiful year-round.",
    details: [
      'Siding (wood, vinyl, fiber cement)',
      'Fascia, soffits & eaves',
      'Doors & shutters',
      'Decks & fences',
      'Trim & window frames',
      'Garages & outbuildings',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Painting',
    badge: null,
    description:
      'Offices, retail spaces, restaurants, and more — painted with minimal disruption to your business. We work before hours, after hours, and on weekends to keep your operations running.',
    details: [
      'Office suites & common areas',
      'Retail & restaurant spaces',
      'Warehouses & industrial',
      'Property management',
      'HOA & multi-unit buildings',
      'Flexible scheduling',
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Finishes',
    badge: null,
    description:
      'Beyond standard painting, we offer specialty finishes that add character and uniqueness to any space.',
    details: [
      'Accent & feature walls',
      'Textured wall finishes',
      'Cabinet painting & refinishing',
      'Staining & varnishing',
      'Garage floor coatings',
      'Color consultation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-brand-dark py-20 overflow-hidden">
        <PaintSplash color="#FF6B6B" className="absolute top-0 right-0 w-64 h-64 opacity-15 translate-x-10 -translate-y-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Painting Services</h1>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className={`grid md:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark">{service.title}</h2>
                  {service.badge && (
                    <span className="bg-brand-yellow text-brand-dark text-xs font-bold uppercase px-3 py-1 rounded-full">{service.badge}</span>
                  )}
                </div>
                <p className="text-brand-slate leading-relaxed text-lg">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-brand-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image placeholder */}
              <div className={`rounded-2xl bg-brand-offwhite h-64 md:h-80 flex items-center justify-center relative overflow-hidden ${idx % 2 === 1 ? 'md:order-first' : ''}`}>
                <PaintSplash color={idx % 2 === 0 ? '#2EC4B6' : '#FF6B6B'} className="absolute inset-0 w-full h-full opacity-20" />
                <div className="relative text-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-16 h-16 text-brand-slate mx-auto mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <p className="text-brand-slate text-xs">Photo coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner heading="Ready to Get Started?" buttonText="Get a Free Estimate" />
    </>
  );
}

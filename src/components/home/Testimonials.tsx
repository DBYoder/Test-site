import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const testimonials = [
  {
    quote: "Yoder's painted our entire first floor and the results were stunning. The crew was professional, fast, and incredibly tidy.",
    name: 'Sarah M.',
    location: 'Harrisonburg, VA',
  },
  {
    quote: "They repainted our Victorian's exterior and it looks brand new. Couldn't be happier with the color advice and the workmanship.",
    name: 'Tom & Linda K.',
    location: 'Staunton, VA',
  },
  {
    quote: "Hired them for our office suite. Minimal disruption, perfect finish. We'll be calling them every time.",
    name: 'Derek R.',
    location: 'Winchester, VA',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-brand-yellow">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            label="Happy Customers"
            title="What Our Clients Say"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, location }) => (
            <Card key={name} hover className="p-8 flex flex-col gap-6">
              <Stars />
              <blockquote className="text-brand-charcoal italic leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-brand-dark text-sm">{name}</p>
                <p className="text-brand-slate text-xs">{location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

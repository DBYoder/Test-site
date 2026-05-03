import Link from 'next/link';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Interior Painting',
    description: 'Transform every room with smooth, even finishes that look perfect in every light. From a single accent wall to a full-home repaint.',
    href: '/services#interior',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: 'Exterior Painting',
    description: 'Protect your home from the Shenandoah Valley seasons with premium acrylic paints applied over a professional primer system.',
    href: '/services#exterior',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-brand-teal">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Commercial Painting',
    description: 'Offices, retail, and commercial spaces painted with minimal disruption to your business — before hours, after hours, weekends.',
    href: '/services#commercial',
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            label="What We Do"
            title="Painting Services for Every Project"
            subtitle="From refreshing a single bedroom to repainting a full commercial building, we bring the same care and craftsmanship to every job."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon, title, description, href }) => (
            <Card key={title} hover className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center">
                {icon}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark">{title}</h3>
              <p className="text-brand-slate leading-relaxed flex-1">{description}</p>
              <Link href={href} className="text-brand-teal font-semibold text-sm hover:text-[#25a99d] transition-colors inline-flex items-center gap-1">
                Learn More
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

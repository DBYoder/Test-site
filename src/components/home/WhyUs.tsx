import SectionHeading from '@/components/ui/SectionHeading';
import PaintSplash from '@/components/ui/PaintSplash';

const points = [
  {
    title: 'Meticulous Prep Work',
    body: 'Great paint jobs start before the brush touches the wall. We protect every surface, fill every crack, and sand every edge.',
    icon: '🛡️',
  },
  {
    title: 'Premium Materials Only',
    body: 'We use Benjamin Moore and Sherwin-Williams paints — because the brand on the can matters as much as the hand holding the brush.',
    icon: '✨',
  },
  {
    title: 'Clean Every Single Day',
    body: "We treat your home like our own. Every evening we clean up, cover everything, and leave your space livable.",
    icon: '🧹',
  },
  {
    title: 'Satisfaction Guaranteed',
    body: "If something's not right, we come back and make it right. No arguments, no fees.",
    icon: '✅',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <PaintSplash color="#FFD166" className="absolute -top-10 right-10 w-48 h-48 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            label="Why Yoder's"
            title="The Difference You Can See"
            subtitle="Anyone can paint a wall. We obsess over the details that turn a good paint job into a great one."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map(({ title, body, icon }) => (
            <div key={title} className="flex flex-col gap-4 p-6 rounded-2xl bg-brand-offwhite hover:bg-white hover:shadow-md transition-all duration-300">
              <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
              <h3 className="font-display font-bold text-lg text-brand-dark">{title}</h3>
              <p className="text-brand-slate text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

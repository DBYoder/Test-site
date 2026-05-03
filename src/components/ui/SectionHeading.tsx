interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const itemsAlign = align === 'center' ? 'items-center' : 'items-start';

  return (
    <div className={`flex flex-col gap-3 ${itemsAlign} ${textAlign}`}>
      {label && (
        <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            light ? 'text-white/80' : 'text-brand-slate'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

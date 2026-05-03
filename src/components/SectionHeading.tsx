import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ tag, title, description, center = true }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-navy-500 text-lg max-w-2xl leading-relaxed mx-auto">{description}</p>
      )}
    </ScrollReveal>
  );
}

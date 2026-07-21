import { SITE_URL, EMAIL } from '../lib/constants';

export function buildProfessionalServiceSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NextArc',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Full-service ecommerce ad agency managing brands on Amazon, Noon, and Trendyol, with international expansion into USA and UK markets.',
    telephone: '+971585142952',
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: ['AE', 'SA', 'US', 'GB', 'TR'],
  };
}

export function buildServiceSchema(name: string, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'NextArc',
      url: SITE_URL,
    },
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function buildFAQSchema(faqs: FAQItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

interface BlogPostingSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
}

export function buildBlogPostingSchema({ headline, description, datePublished, url }: BlogPostingSchemaProps): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    url,
    author: {
      '@type': 'Organization',
      name: 'NextArc',
      url: SITE_URL,
    },
  };
}

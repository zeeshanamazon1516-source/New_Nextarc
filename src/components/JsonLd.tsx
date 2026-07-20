import { Helmet } from 'react-helmet-async';
import { SITE_URL, EMAIL } from '../lib/constants';

export function ProfessionalServiceSchema() {
  const schema = {
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
}

export function ServiceSchema({ name, description }: ServiceSchemaProps) {
  const schema = {
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface BlogPostingSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
}

export function BlogPostingSchema({ headline, description, datePublished, url }: BlogPostingSchemaProps) {
  const schema = {
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

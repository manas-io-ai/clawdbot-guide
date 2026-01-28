// Schema.org Structured Data Components for GEO (Generative Engine Optimization)

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  lastModified?: string;
  tags: string[];
}

export function ArticleSchema({ title, description, slug, publishDate, lastModified, tags }: ArticleSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: 'Manas AI',
      url: 'https://manasexp.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Manas AI',
      url: 'https://manasexp.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://clawdbot.guide/logo.png',
      },
    },
    datePublished: publishDate,
    dateModified: lastModified || publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://clawdbot.guide/guides/${slug}`,
    },
    keywords: tags.join(', '),
    url: `https://clawdbot.guide/guides/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface HowToStep {
  text: string;
}

export function HowToSchema({ name, description, steps }: { name: string; description: string; steps: HowToStep[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    author: {
      '@type': 'Organization',
      name: 'Manas AI',
      url: 'https://manasexp.com',
    },
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Manas AI',
    url: 'https://manasexp.com',
    logo: 'https://clawdbot.guide/logo.png',
    description: 'Manas AI provides expert Clawdbot (Moltbot) setup services, guides, and AI agent consulting.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'io@manasexp.com',
      contactType: 'customer service',
      telephone: '+1-213-276-9773',
    },
    sameAs: [
      'https://manasexp.com',
      'https://clawdbot.guide',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Clawdbot Guide',
    url: 'https://clawdbot.guide',
    description: 'The definitive resource for Clawdbot (Moltbot) — setup guides, skill tutorials, troubleshooting, and tips for your personal AI assistant.',
    publisher: {
      '@type': 'Organization',
      name: 'Manas AI',
      url: 'https://manasexp.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://clawdbot.guide/guides?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

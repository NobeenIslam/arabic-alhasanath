import { siteConfig } from '@/lib/site-config';

export const SchemaMarkup = () => {
  const priceValidUntil = `${new Date().getFullYear()}-12-31`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/open-book.svg`,
          width: 112,
          height: 112,
        },
        description: `Learn Arabic online with ${siteConfig.name}. Small groups, remote sessions, and courses for all levels.`,
        sameAs: [
          'https://www.facebook.com/abusarabic',
          'https://www.instagram.com/abusarabic',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: `${siteConfig.name} - Learn Arabic Online`,
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${siteConfig.url}/#organization`,
        },
        description: `Learn Arabic online with ${siteConfig.name}. Small groups, remote sessions, and courses for all levels.`,
        mainEntity: [
          {
            '@type': 'Course',
            name: 'Online Arabic Language Course - Bronze Plan',
            description:
              'Learn Arabic online with small groups of 5, 12.5 hours per month. Flexible start dates available.',
            provider: {
              '@id': `${siteConfig.url}/#organization`,
            },
            offers: {
              '@type': 'Offer',
              category: 'Arabic Language Course',
              price: '100',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
              priceValidUntil,
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseWorkload: '12.5 hours per month',
              courseMode: 'online',
              duration: 'P1Y',
              startDate: '2024-01-01',
            },
          },
          {
            '@type': 'Course',
            name: 'Online Arabic Language Course - Silver Plan',
            description:
              'Learn Arabic online with enhanced features and more personalized attention. Flexible start dates available.',
            provider: {
              '@id': `${siteConfig.url}/#organization`,
            },
            offers: {
              '@type': 'Offer',
              category: 'Arabic Language Course',
              price: '150',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
              priceValidUntil,
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseWorkload: '12.5 hours per month',
              courseMode: 'online',
              duration: 'P1Y',
              startDate: '2024-01-01',
            },
          },
          {
            '@type': 'Course',
            name: 'Online Arabic Language Course - Gold Plan',
            description:
              'Learn Arabic online with personal 1-on-1 tuition, 25 hours per month. Flexible start dates available.',
            provider: {
              '@id': `${siteConfig.url}/#organization`,
            },
            offers: {
              '@type': 'Offer',
              category: 'Arabic Language Course',
              price: '200',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
              priceValidUntil,
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseWorkload: '12.5 hours per month',
              courseMode: 'online',
              duration: 'P1Y',
              startDate: '2024-01-01',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
};

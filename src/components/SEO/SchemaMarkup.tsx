import { siteConfig } from '@/lib/site-config';

export const SchemaMarkup = () => {
  const priceValidUntil = `${new Date().getFullYear()}-12-31`;
  const description =
    'Private online Arabic tuition with Ustādh Abu Hasnath for beginners, Dars-i-Nizami students and graduates. 1-on-1 at £25/hr or small groups from £8/hr.';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description,
        founder: { '@id': `${siteConfig.url}/#teacher` },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#teacher`,
        name: 'Ustādh Abu Hasnath',
        jobTitle: 'Arabic teacher',
        worksFor: { '@id': `${siteConfig.url}/#organization` },
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
        name: `${siteConfig.name} | Online Arabic Tuition with Ustādh Abu Hasnath`,
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${siteConfig.url}/#organization`,
        },
        description,
        mainEntity: [
          {
            '@type': 'Course',
            name: '1-on-1 online Arabic lessons',
            description:
              'Private online Arabic lessons with Ustādh Abu Hasnath, planned around your goals. Lessons run for an hour or more at weekends.',
            provider: {
              '@id': `${siteConfig.url}/#organization`,
            },
            offers: {
              '@type': 'Offer',
              category: 'Paid',
              price: '25',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
              priceValidUntil,
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '25',
                priceCurrency: 'GBP',
                unitCode: 'HUR',
              },
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: 'PT1H',
              instructor: { '@id': `${siteConfig.url}/#teacher` },
            },
          },
          {
            '@type': 'Course',
            name: 'Small-group online Arabic lessons',
            description:
              'Online Arabic lessons in groups of 3 to 5 students at your level, with Ustādh Abu Hasnath. From £8 per person, per hour.',
            provider: {
              '@id': `${siteConfig.url}/#organization`,
            },
            offers: {
              '@type': 'AggregateOffer',
              category: 'Paid',
              lowPrice: '8',
              highPrice: '10',
              priceCurrency: 'GBP',
              offerCount: 3,
              availability: 'https://schema.org/InStock',
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: 'PT1H',
              instructor: { '@id': `${siteConfig.url}/#teacher` },
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

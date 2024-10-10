"use client";

import Script from "next/script";

export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://abusarabic.com/#organization",
        name: "Abu's Arabic",
        url: "https://abusarabic.com",
        logo: {
          "@type": "ImageObject",
          url: "https://abusarabic.com/open-book.svg",
          width: 112,
          height: 112,
        },
        description:
          "Learn Arabic online with Abu's Arabic. Small groups, remote sessions, and courses for all levels.",
        sameAs: [
          "https://www.facebook.com/abusarabic",
          "https://www.instagram.com/abusarabic",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://abusarabic.com/#website",
        url: "https://abusarabic.com",
        name: "Abu's Arabic",
        publisher: {
          "@id": "https://abusarabic.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://abusarabic.com/#webpage",
        url: "https://abusarabic.com",
        name: "Abu's Arabic - Learn Arabic Online",
        isPartOf: {
          "@id": "https://abusarabic.com/#website",
        },
        about: {
          "@id": "https://abusarabic.com/#organization",
        },
        description:
          "Learn Arabic online with Abu's Arabic. Small groups, remote sessions, and courses for all levels.",
        mainEntity: [
          {
            "@type": "Course",
            name: "Online Arabic Language Course - Bronze Plan",
            description:
              "Learn Arabic online with small groups of 5, 12.5 hours per month. Flexible start dates available.",
            provider: {
              "@id": "https://abusarabic.com/#organization",
            },
            offers: {
              "@type": "Offer",
              price: "100",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              priceValidUntil: "2025-12-31",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              duration: "P1Y",
              startDate: "2024-01-01",
            },
          },
          {
            "@type": "Course",
            name: "Online Arabic Language Course - Silver Plan",
            description:
              "Learn Arabic online with enhanced features and more personalized attention. Flexible start dates available.",
            provider: {
              "@id": "https://abusarabic.com/#organization",
            },
            offers: {
              "@type": "Offer",
              price: "150",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              priceValidUntil: "2025-12-31",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              duration: "P1Y",
              startDate: "2024-01-01",
            },
          },
          {
            "@type": "Course",
            name: "Online Arabic Language Course - Gold Plan",
            description:
              "Learn Arabic online with personal 1-on-1 tuition, 25 hours per month. Flexible start dates available.",
            provider: {
              "@id": "https://abusarabic.com/#organization",
            },
            offers: {
              "@type": "Offer",
              price: "200",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              priceValidUntil: "2025-12-31",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              duration: "P1Y",
              startDate: "2024-01-01",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script id="schema-markup" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
};

export default SchemaMarkup;

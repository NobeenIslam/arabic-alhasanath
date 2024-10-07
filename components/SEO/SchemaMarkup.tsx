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
        mainEntity: {
          "@type": "Course",
          name: "Online Arabic Language Course",
          description:
            "Learn Arabic online with small groups of 5 or less, weekly 2-hour sessions for beginner, intermediate, and advanced levels.",
          provider: {
            "@id": "https://abusarabic.com/#organization",
          },
        },
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

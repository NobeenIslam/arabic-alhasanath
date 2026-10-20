import type { LegalDocumentProps } from '@/components/blocks/LegalDocument';
import { SITE_NAME } from '@/lib/constants/site.constants';

export const privacyContent: LegalDocumentProps = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: 20 October 2026',
  intro: `This policy explains what personal information ${SITE_NAME} ("we", "us") collects through this website, why we collect it, and the choices you have.`,
  sections: [
    {
      heading: 'Information you give us',
      paragraphs: [
        'When you submit the sign-up form we collect your full name, phone number and email address.',
        'We use these details only to contact you about joining our Arabic classes and to arrange your lessons. We do not sell them or use them for unrelated marketing.',
      ],
    },
    {
      heading: 'Analytics and cookies',
      paragraphs: [
        'We use PostHog to understand how visitors use the site, such as which pages are viewed and which buttons are clicked.',
        'Until you accept tracking in the cookie banner, analytics run without cookies and nothing is stored on your device to recognise you on later visits.',
        'If you accept, PostHog stores an identifier in a cookie and local storage so it can recognise return visits, and it may record your session (page interactions such as clicks and scrolling) to help us improve the site.',
        'Your cookie choice itself is saved in your browser’s local storage so we do not ask again. You can change it at any time by clearing this site’s data in your browser.',
      ],
    },
    {
      heading: 'Embedded video',
      paragraphs: [
        'The course structure video is hosted by Wistia. When the video loads, Wistia may collect viewing information and set its own cookies under its privacy policy.',
      ],
    },
    {
      heading: 'Who we share information with',
      paragraphs: [
        'We use a small number of service providers to run the site. They process data on our behalf and only for the purposes described here.',
      ],
      items: [
        'Resend, which delivers sign-up form submissions to us by email.',
        'PostHog, which provides website analytics using its EU-hosted service.',
        'Netlify, which hosts the website and may keep standard server logs such as IP addresses.',
        'Wistia, which hosts the embedded course video.',
      ],
    },
    {
      heading: 'International transfers',
      paragraphs: [
        'Some of these providers are based in, or use infrastructure in, the United States. Where personal data is transferred outside the UK, we rely on the safeguards those providers put in place, such as standard contractual clauses.',
      ],
    },
    {
      heading: 'How long we keep information',
      paragraphs: [
        'We keep sign-up details for as long as we need them to arrange and deliver your lessons, and delete them when they are no longer needed or when you ask us to.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: ['Under UK data protection law you have the right to:'],
      items: [
        'ask for a copy of the personal information we hold about you',
        'ask us to correct or delete it',
        'object to or ask us to restrict how we use it',
        'withdraw your consent to analytics cookies at any time',
        'complain to the Information Commissioner’s Office (ico.org.uk) if you are unhappy with how we handle your information',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        'To exercise any of these rights or ask a question about this policy, reply to any email we have sent you.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The date at the top shows when it was last changed.',
      ],
    },
  ],
};

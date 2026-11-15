import type { LegalDocumentProps } from '@/components/blocks/LegalDocument';
import { SITE_NAME } from '@/lib/constants/site.constants';

export const termsContent: LegalDocumentProps = {
  title: 'Terms of Service',
  lastUpdated: 'Last updated: 15 November 2026',
  intro: `These terms apply to your use of the ${SITE_NAME} website. By using the site, registering your interest or booking an intro call, you agree to them.`,
  sections: [
    {
      heading: 'Registering and booking',
      paragraphs: [
        'Registering your interest or booking a free intro call tells us you are interested in lessons. Neither creates a contract for lessons.',
        'We will contact you to discuss your level, 1-on-1 or group lessons, lesson times and fees. Your lessons are confirmed only once we have agreed these with you directly.',
      ],
    },
    {
      heading: 'Course information and prices',
      paragraphs: [
        'We aim to keep course details and prices on this site accurate, but they may change. The details we confirm with you directly take precedence over anything shown on the site.',
      ],
    },
    {
      heading: 'Testimonials',
      paragraphs: [
        'Testimonials reflect the individual experiences of past and current students. Progress depends on each student, and we cannot guarantee particular results.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        `The text, design and original images on this site belong to ${SITE_NAME}. Course book titles belong to their publishers.`,
        'You may view and share links to the site for personal use, but you may not copy or reuse its content commercially without our permission.',
      ],
    },
    {
      heading: 'Third-party content',
      paragraphs: [
        'The site includes content from third parties, such as the embedded Calendly scheduler. We are not responsible for third-party services or their terms.',
      ],
    },
    {
      heading: 'Liability',
      paragraphs: [
        'We provide this website as is and do not guarantee that it will always be available or error-free. Nothing in these terms limits any liability that cannot be limited under the law of England and Wales.',
      ],
    },
    {
      heading: 'Privacy',
      paragraphs: [
        'How we handle your personal information is explained in our Privacy Policy.',
      ],
    },
    {
      heading: 'Changes and governing law',
      paragraphs: [
        'We may update these terms from time to time. The date at the top shows when they were last changed.',
        'These terms are governed by the law of England and Wales.',
      ],
    },
  ],
};

import type { Metadata } from 'next';
import { PrivacyPage } from '@/features/privacy/PrivacyPage';
import { privacyContent } from '@/features/privacy/content';

export const metadata: Metadata = {
  title: privacyContent.title,
  alternates: { canonical: '/privacy' },
};

const Privacy = () => <PrivacyPage />;

export default Privacy;

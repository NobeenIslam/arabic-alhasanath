import type { Metadata } from 'next';
import { TermsPage } from '@/features/terms/TermsPage';
import { termsContent } from '@/features/terms/content';

export const metadata: Metadata = {
  title: termsContent.title,
  alternates: { canonical: '/terms' },
};

const Terms = () => <TermsPage />;

export default Terms;

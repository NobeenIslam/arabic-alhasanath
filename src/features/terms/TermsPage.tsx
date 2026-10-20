import { LegalDocument } from '@/components/blocks/LegalDocument';
import { SiteShell } from '@/features/landing/SiteShell';
import { termsContent } from '@/features/terms/content';

export const TermsPage = () => (
  <SiteShell>
    <LegalDocument {...termsContent} />
  </SiteShell>
);

import { LegalDocument } from '@/components/blocks/LegalDocument';
import { SiteShell } from '@/features/landing/SiteShell';
import { privacyContent } from '@/features/privacy/content';

export const PrivacyPage = () => (
  <SiteShell>
    <LegalDocument {...privacyContent} />
  </SiteShell>
);

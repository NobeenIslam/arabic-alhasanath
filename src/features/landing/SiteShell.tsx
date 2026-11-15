import type { ReactNode } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Wordmark } from '@/components/blocks/Wordmark';
import {
  footerData,
  navigationData,
  sectionIds,
  wordmarkData,
} from '@/features/landing/content';
import { homeSection } from '@/lib/constants/routes.constants';

type SiteShellProps = {
  children: ReactNode;
  isNavSolidAtTop?: boolean;
};

export const SiteShell = ({ children, isNavSolidAtTop }: SiteShellProps) => (
  <>
    <Navigation
      logo={
        <a
          href={homeSection(sectionIds.top)}
          aria-label={wordmarkData.homeLabel}
          className="tap-target"
        >
          <Wordmark
            arabic={wordmarkData.arabic}
            latin={wordmarkData.latin}
            size="header"
          />
        </a>
      }
      links={navigationData.links}
      cta={navigationData.cta}
      menuLabel={navigationData.menuLabel}
      isSolidAtTop={isNavSolidAtTop}
    />
    <main id="main-content">{children}</main>
    <Footer
      brand={
        <Wordmark
          arabic={wordmarkData.arabic}
          latin={wordmarkData.latin}
          size="footer"
        />
      }
      tagline={footerData.tagline}
      contact={
        <a
          href={footerData.whatsapp.href}
          className="tap-target text-[20px] font-bold text-gold"
        >
          {footerData.whatsapp.name}
        </a>
      }
      copyright={footerData.copyright}
    />
  </>
);

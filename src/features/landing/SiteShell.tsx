import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OpenBook from '@/assets/open-book.svg';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import {
  componentIds,
  footerData,
  navigationData,
} from '@/features/landing/content';
import { ROUTES } from '@/lib/constants/routes.constants';

const TopLink = ({ label }: { label: string }) => (
  <Link href={`${ROUTES.home}#${componentIds.hero}`} aria-label={label}>
    <Image src={OpenBook} alt="" width={50} height={50} />
  </Link>
);

export const SiteShell = ({ children }: { children: ReactNode }) => (
  <>
    <Navigation
      logo={<TopLink label={navigationData.logoLabel} />}
      navLinks={navigationData.links}
    />
    <main id="main-content">{children}</main>
    <Footer
      logo={<TopLink label={footerData.logoLabel} />}
      navLinks={navigationData.links}
      contactHeading={footerData.legalHeading}
      contact={footerData.legalLinks.map((legalLink) => (
        <Link
          key={legalLink.href}
          href={legalLink.href}
          className="transition-colors duration-200 hover:text-foreground"
        >
          {legalLink.name}
        </Link>
      ))}
      copyright={footerData.copyright}
    />
  </>
);

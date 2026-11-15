import type { Metadata } from 'next';
import {
  Amiri,
  Aref_Ruqaa,
  Cormorant_Garamond,
  Manrope,
} from 'next/font/google';
import './globals.css';
import { SchemaMarkup } from '@/components/SEO/SchemaMarkup';
import { siteConfig } from '@/lib/site-config';
import { Toaster } from '@/components/ui/sonner';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { ConsentProvider } from '@/providers/ConsentProvider';
import { PostHogProvider } from '@/providers/PosthogProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-manrope',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--ff-cormorant-garamond',
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--ff-aref-ruqaa',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--ff-amiri',
});

const fontVariables = [manrope, cormorantGaramond, arefRuqaa, amiri]
  .map((font) => font.variable)
  .join(' ');

const title = `${siteConfig.name} | Online Arabic Tuition with Ustādh Abu Hasnath`;
const description =
  'Private online Arabic lessons for beginners, Dars-i-Nizami students and graduates. 1-on-1 at £25/hr or small groups from £8/hr. Register your interest online.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords:
    'online Arabic tuition, Arabic lessons, learn Arabic online, Dars-i-Nizami, spoken Arabic, Arabic teacher UK',
  authors: [{ name: 'Ustādh Abu Hasnath' }],
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`scroll-smooth ${fontVariables}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <SchemaMarkup />
        <ConsentProvider>
          <PostHogProvider>
            <ReactQueryProvider>
              {children}
              <Toaster />
              <CookieBanner />
            </ReactQueryProvider>
          </PostHogProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}

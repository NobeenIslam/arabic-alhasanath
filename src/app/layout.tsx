import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { SchemaMarkup } from '@/components/SEO/SchemaMarkup';
import { siteConfig } from '@/lib/site-config';
import { Toaster } from '@/components/ui/sonner';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { ConsentProvider } from '@/providers/ConsentProvider';
import { PostHogProvider } from '@/providers/PosthogProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Learn Arabic Online with Expert Instruction`,
  description: `Master Arabic with ${siteConfig.name}. Small online groups, expert instruction for all levels. Start your Arabic journey today with our personalized approach.`,
  keywords: `Arabic lessons, online Arabic course, learn Arabic, Arabic language, ${siteConfig.name}`,
  authors: [{ name: 'Abu Hasanath' }],
  openGraph: {
    title: `${siteConfig.name} - Expert Online Arabic Instruction`,
    description: `Join ${siteConfig.name} for personalized Arabic lessons. Small groups, all levels welcome. Start your Arabic journey now!`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Learn Arabic Online`,
    description: `Expert Arabic instruction in small online groups. Join ${siteConfig.name} today!`,
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
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

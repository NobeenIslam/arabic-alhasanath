import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { navBarData, footerData } from "./Data";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "AbusArabic | Learn Arabic Online with Expert Instruction",
  description:
    "Master Arabic with AbusArabic. Small online groups, expert instruction for all levels. Start your Arabic journey today with our personalized approach.",
  keywords:
    "Arabic lessons, online Arabic course, learn Arabic, Arabic language, AbusArabic",
  authors: [{ name: "Abu Hasanath" }],
  openGraph: {
    title: "AbusArabic - Expert Online Arabic Instruction",
    description:
      "Join AbusArabic for personalized Arabic lessons. Small groups, all levels welcome. Start your Arabic journey now!",
    url: "https://abusarabic.com",
    siteName: "AbusArabic",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AbusArabic - Learn Arabic Online",
    description:
      "Expert Arabic instruction in small online groups. Join AbusArabic today!",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        {/* Skip to main content for accessibility  */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <NavBar {...navBarData} />
        <main id="main-content">{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}

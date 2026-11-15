import type { ReactNode } from 'react';

type FooterProps = {
  brand: ReactNode;
  tagline: string;
  contact: ReactNode;
  copyright: string;
};

const Footer = ({ brand, tagline, contact, copyright }: FooterProps) => (
  <footer className="bg-green px-6 py-14 text-cream">
    <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6">
      <div className="flex flex-col gap-1.5">
        {brand}
        <p className="text-[15px] text-muted-on-green">{tagline}</p>
      </div>
      <div className="flex flex-col items-end gap-1 text-[15px]">
        {contact}
        <span className="text-muted-on-green">{copyright}</span>
      </div>
    </div>
  </footer>
);

export { Footer };
export type { FooterProps };

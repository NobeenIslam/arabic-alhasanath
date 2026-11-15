import type { ReactNode } from 'react';

type NavLink = {
  name: string;
  href: string;
};

type NavigationProps = {
  logo: ReactNode;
  links: NavLink[];
  cta: NavLink;
};

const Navigation = ({ logo, links, cta }: NavigationProps) => (
  <header className="border-b border-rule-header bg-green px-6 py-4 text-cream">
    <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-x-8 gap-y-3.5">
      {logo}
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center gap-x-7 gap-y-2.5 text-[16px] font-medium"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} className="tap-target">
            {link.name}
          </a>
        ))}
        <a href={cta.href} className="bg-gold px-5 py-3 font-bold text-green">
          {cta.name}
        </a>
      </nav>
    </div>
  </header>
);

export { Navigation };
export type { NavLink, NavigationProps };

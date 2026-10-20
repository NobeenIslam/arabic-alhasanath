import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FooterLink = {
  name: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type FooterProps = {
  logo?: ReactNode;
  description?: ReactNode;
  navLinks?: FooterLink[];
  navHeading?: string;
  socialLinks?: SocialLink[];
  contact?: ReactNode;
  contactHeading?: string;
  copyright?: ReactNode;
  className?: string;
};

const Footer = ({
  logo = <span className="text-xl font-semibold">Logo</span>,
  description,
  navLinks = [],
  navHeading = 'Quick Links',
  socialLinks = [],
  contact,
  contactHeading = 'Contact',
  copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  className,
}: FooterProps) => {
  return (
    <footer
      className={cn(
        'border-t border-border bg-card pt-16 pb-8 text-card-foreground',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6">{logo}</div>
            {description ? (
              <p className="mb-6 max-w-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
            {socialLinks.length > 0 ? (
              <div className="flex gap-4">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent p-2 text-accent-foreground transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg motion-reduce:transition-none"
                    aria-label={socialLink.label}
                  >
                    {socialLink.icon ?? socialLink.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {navLinks.length > 0 ? (
            <div>
              <h4 className="mb-6 font-semibold">{navHeading}</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((navLink) => (
                  <li key={navLink.name}>
                    <a
                      href={navLink.href}
                      className="rounded-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none motion-reduce:transition-none"
                    >
                      {navLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {contact ? (
            <div>
              <h4 className="mb-6 font-semibold">{contactHeading}</h4>
              <div className="flex flex-col gap-3 text-muted-foreground">
                {contact}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-between border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
export type { FooterLink, SocialLink, FooterProps };

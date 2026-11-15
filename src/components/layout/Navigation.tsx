'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavLink = {
  name: string;
  href: string;
};

type NavigationProps = {
  logo: ReactNode;
  links: NavLink[];
  cta: NavLink;
  menuLabel: string;
  isSolidAtTop?: boolean;
  scrollThreshold?: number;
};

const mobileMenuId = 'mobile-navigation';

const Navigation = ({
  logo,
  links,
  cta,
  menuLabel,
  isSolidAtTop = false,
  scrollThreshold = 20,
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current !== null) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        const nextScrollY = window.scrollY;
        if (lastScrollYRef.current === nextScrollY) {
          return;
        }

        lastScrollYRef.current = nextScrollY;
        setIsScrolled(nextScrollY > scrollThreshold);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollThreshold]);

  const isSolid = isScrolled || isSolidAtTop || isMobileMenuOpen;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-40 px-4 text-cream transition-all duration-300 ease-out motion-reduce:transition-none',
        isScrolled ? 'top-4' : 'top-0'
      )}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-300 ease-out motion-reduce:transition-none',
          isScrolled ? 'max-w-[1100px]' : 'max-w-site'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between gap-8 border px-2 py-4 transition-all duration-300 ease-out motion-reduce:transition-none',
            isSolid
              ? 'border-rule-header bg-green/95 shadow-lg backdrop-blur-md'
              : 'border-transparent bg-transparent',
            isScrolled && 'px-5 py-2.5 md:px-7'
          )}
        >
          {logo}

          <nav
            aria-label="Main"
            className="hidden items-center gap-7 text-[16px] font-medium md:flex"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="tap-target transition-colors duration-200 hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href={cta.href}
              className="bg-gold px-5 py-3 font-bold text-green"
            >
              {cta.name}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex size-11 items-center justify-center md:hidden"
            aria-label={menuLabel}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id={mobileMenuId}
            aria-label="Main"
            className="mt-2 border border-rule-header bg-green px-5 pt-2 pb-6 shadow-2xl motion-safe:animate-in motion-safe:duration-200 motion-safe:fade-in motion-safe:slide-in-from-top-2 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block border-b border-rule-on-green py-4 text-[18px] font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={cta.href}
              onClick={closeMobileMenu}
              className="mt-6 block bg-gold px-5 py-3.5 text-center font-bold text-green"
            >
              {cta.name}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export { Navigation };
export type { NavLink, NavigationProps };

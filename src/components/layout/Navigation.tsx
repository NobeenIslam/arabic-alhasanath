'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavLink = {
  name: string;
  href: string;
  description?: string;
};

type NavigationProps = {
  logo?: ReactNode;
  navLinks?: NavLink[];
  cta?: ReactNode;
  scrollThreshold?: number;
  className?: string;
};

const defaultNavLinks: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navigation = ({
  logo = <span className="font-semibold">Logo</span>,
  navLinks = defaultNavLinks,
  cta,
  scrollThreshold = 20,
  className,
}: NavigationProps) => {
  const mobileMenuId = 'mobile-navigation';
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollThreshold]);

  return (
    <nav
      aria-label="Primary navigation"
      data-scrolled={isScrolled}
      className={cn(
        'fixed z-40 w-full transition-all duration-300 ease-out motion-safe:animate-in motion-safe:duration-500 motion-safe:fade-in motion-safe:slide-in-from-top-4 motion-reduce:transition-none',
        isScrolled ? 'top-4' : 'top-0',
        className
      )}
    >
      <div
        className={cn(
          'mx-auto px-4 transition-all duration-300 ease-out motion-reduce:transition-none sm:px-6 lg:px-8',
          isScrolled ? 'max-w-4xl md:max-w-6xl' : 'max-w-7xl'
        )}
      >
        <div
          className={cn(
            'transition-all duration-300 ease-out motion-reduce:transition-none',
            isScrolled
              ? 'rounded-full border border-border bg-card/80 px-6 py-2 shadow-lg backdrop-blur-md md:px-8 md:py-3'
              : 'bg-transparent py-5'
          )}
        >
          <div className="flex items-center justify-between">
            {logo}

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((navLink) => (
                <a
                  key={navLink.name}
                  href={navLink.href}
                  className={cn(
                    'rounded-md px-3 py-2 font-medium text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none motion-reduce:transition-none',
                    isScrolled ? 'text-xs md:text-sm' : 'text-sm'
                  )}
                >
                  {navLink.name}
                </a>
              ))}
              {cta}
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors duration-200 ease-out hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none motion-reduce:transition-none"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls={mobileMenuId}
                aria-haspopup="true"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div
          id={mobileMenuId}
          className={cn(
            'absolute mt-2 w-full px-4 motion-safe:animate-in motion-safe:duration-200 motion-safe:zoom-in-95 motion-safe:fade-in md:hidden',
            isScrolled ? 'left-1/2 max-w-4xl -translate-x-1/2' : ''
          )}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl backdrop-blur-md">
            <div className="space-y-2 px-4 pt-2 pb-8">
              {navLinks.map((navLink) => (
                <a
                  key={navLink.name}
                  href={navLink.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md border-b border-border px-3 py-4 text-base font-medium text-foreground transition-colors duration-200 ease-out hover:bg-accent hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none motion-reduce:transition-none"
                >
                  {navLink.name}
                  {navLink.description ? (
                    <span className="mt-1 block text-sm font-normal text-muted-foreground">
                      {navLink.description}
                    </span>
                  ) : null}
                </a>
              ))}
              {cta ? <div className="pt-4">{cta}</div> : null}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export { Navigation };
export type { NavLink, NavigationProps };

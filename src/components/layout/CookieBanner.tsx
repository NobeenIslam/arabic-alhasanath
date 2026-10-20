'use client';

import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConsent } from '@/providers/ConsentProvider';

type CookieBannerProps = {
  title?: string;
  description?: ReactNode;
  acceptLabel?: string;
  declineLabel?: string;
};

const CookieBanner = ({
  title = 'Privacy-first analytics',
  description = 'We use privacy-friendly analytics to understand how our site is used. We only set cookies if you choose to accept tracking.',
  acceptLabel = 'Accept',
  declineLabel = 'Decline',
}: CookieBannerProps) => {
  const { consentStatus, acceptConsent, declineConsent, isLoading } =
    useConsent();

  if (isLoading) {
    return null;
  }

  if (consentStatus === 'accepted' || consentStatus === 'declined') {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl">
        <button
          type="button"
          onClick={declineConsent}
          className="absolute top-3 right-3 rounded-full p-1 text-muted-foreground transition-colors duration-200 ease-out hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none motion-reduce:transition-none"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button type="button" onClick={acceptConsent}>
            {acceptLabel}
          </Button>
          <Button type="button" variant="outline" onClick={declineConsent}>
            {declineLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CookieBanner };
export type { CookieBannerProps };

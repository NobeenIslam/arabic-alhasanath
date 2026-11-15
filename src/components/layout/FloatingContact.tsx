'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import posthog from 'posthog-js';
import { cn } from '@/lib/utils';
import { POSTHOG_KEY } from '@/lib/constants/analytics.constants';

type FloatingContactProps = {
  href: string;
  label: string;
  message: string;
  icon?: ReactNode;
  eventName?: string;
};

const FloatingContact = ({
  href,
  label,
  message,
  icon = <MessageCircle className="size-6" />,
  eventName = 'floating_contact_clicked',
}: FloatingContactProps) => {
  const [isMessageShown, setIsMessageShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsMessageShown(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!POSTHOG_KEY) {
      return;
    }

    posthog.capture(eventName, { source: 'floating_button' });
  };

  return (
    <div className="group fixed right-6 bottom-6 z-50">
      <div
        className={cn(
          'pointer-events-none absolute right-0 bottom-full mb-3 hidden transition-opacity duration-500 ease-out motion-reduce:transition-none md:block',
          isMessageShown ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        )}
      >
        <div className="border border-rule bg-card px-3 py-2 text-[15px] whitespace-nowrap text-ink shadow-md">
          {message}
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={label}
        className="flex size-14 items-center justify-center rounded-full border border-gold bg-green text-cream shadow-2xl transition-transform duration-200 ease-out motion-safe:hover:scale-110 motion-reduce:transition-none"
      >
        {icon}
      </a>
    </div>
  );
};

export { FloatingContact };
export type { FloatingContactProps };

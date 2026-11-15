import Script from 'next/script';
import type { BookingContent } from '@/features/landing/types';

type BookingCardProps = BookingContent & {
  id: string;
  calendlyUrl: string | null;
};

export const BookingCard = ({
  id,
  calendlyUrl,
  title,
  intro,
  unavailableMessage,
  unavailableLink,
}: BookingCardProps) => (
  <div
    id={id}
    className="flex flex-col gap-5 border-2 border-green bg-card px-[30px] py-8"
  >
    <div className="flex flex-col gap-2">
      <h3 className="font-serif text-[32px] leading-[1.1] font-bold">
        {title}
      </h3>
      <p className="text-[17px] text-muted">{intro}</p>
    </div>
    {calendlyUrl ? (
      <>
        <div
          className="calendly-inline-widget h-[700px] w-full"
          data-url={calendlyUrl}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </>
    ) : (
      <div className="flex flex-col items-start gap-2 border border-dashed border-input-border px-5 py-6 text-[16px] text-muted">
        <p>{unavailableMessage}</p>
        <a
          href={unavailableLink.href}
          className="tap-target font-semibold text-green underline underline-offset-5"
        >
          {unavailableLink.name}
        </a>
      </div>
    )}
  </div>
);

import Script from 'next/script';
import type { BookingContent } from '@/features/landing/types';

type BookingCardProps = BookingContent & {
  id: string;
  calendlyUrl: string;
};

export const BookingCard = ({
  id,
  calendlyUrl,
  title,
  intro,
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
    <div
      className="calendly-inline-widget h-[700px] w-full"
      data-url={calendlyUrl}
    />
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
    />
  </div>
);

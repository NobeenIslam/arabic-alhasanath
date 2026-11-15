import { SectionHeading } from '@/components/blocks/SectionHeading';
import { BookingCard } from '@/features/landing/sections/BookingCard';
import { RegisterForm } from '@/features/landing/sections/RegisterForm';
import type { GetStartedContent } from '@/features/landing/types';

type GetStartedProps = GetStartedContent & {
  id: string;
  bookingId: string;
  registerId: string;
  calendlyUrl: string;
};

export const GetStarted = ({
  id,
  bookingId,
  registerId,
  calendlyUrl,
  eyebrow,
  title,
  intro,
  booking,
  form,
  whatsapp,
}: GetStartedProps) => (
  <section id={id} className="bg-panel px-6 py-24">
    <div className="mx-auto flex max-w-site flex-col gap-10">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className="grid grid-fit-440 items-start gap-6">
        <BookingCard id={bookingId} calendlyUrl={calendlyUrl} {...booking} />
        <RegisterForm id={registerId} {...form} />
      </div>
      <a
        href={whatsapp.href}
        className="tap-target self-center font-semibold text-green underline underline-offset-5"
      >
        {whatsapp.name}
      </a>
    </div>
  </section>
);

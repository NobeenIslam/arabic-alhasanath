import { SectionHeading } from '@/components/blocks/SectionHeading';
import { RegisterForm } from '@/features/landing/sections/RegisterForm';
import type { GetStartedContent } from '@/features/landing/types';

type GetStartedProps = GetStartedContent & {
  id: string;
  registerId: string;
};

export const GetStarted = ({
  id,
  registerId,
  eyebrow,
  title,
  intro,
  form,
  whatsapp,
}: GetStartedProps) => (
  <section id={id} className="bg-panel px-6 py-24">
    <div className="mx-auto flex max-w-site flex-col gap-10">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <RegisterForm id={registerId} {...form} />
      <a
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-target self-center font-semibold text-green underline underline-offset-5"
      >
        {whatsapp.name}
      </a>
    </div>
  </section>
);

import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/blocks/Eyebrow';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'center' | 'start';
  balance?: boolean;
};

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = 'center',
  balance = true,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'flex flex-col',
      align === 'center' ? 'items-center gap-2.5 text-center' : 'gap-3.5'
    )}
  >
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2
      className={cn(
        'font-serif text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-semibold',
        balance && 'text-balance'
      )}
    >
      {title}
    </h2>
    {intro ? (
      <p
        className={cn(
          'text-pretty text-muted',
          align === 'center' && 'max-w-[620px]'
        )}
      >
        {intro}
      </p>
    ) : null}
  </div>
);

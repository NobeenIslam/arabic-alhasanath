import { cn } from '@/lib/utils';

type WordmarkProps = {
  arabic: string;
  latin: string;
  size: 'header' | 'footer';
};

const sizes = {
  header: {
    gap: 'gap-3.5',
    arabic: 'text-[34px]/[1.2]',
    latin: 'text-[28px]/none',
  },
  footer: {
    gap: 'gap-3',
    arabic: 'text-[30px]/[1.2]',
    latin: 'text-[26px]',
  },
};

export const Wordmark = ({ arabic, latin, size }: WordmarkProps) => (
  <span className={cn('flex items-center', sizes[size].gap)}>
    <span
      lang="ar"
      dir="rtl"
      className={cn('font-ruqaa font-bold text-gold', sizes[size].arabic)}
    >
      {arabic}
    </span>
    <span className={cn('font-serif font-bold', sizes[size].latin)}>
      {latin}
    </span>
  </span>
);

import { cn } from '@/lib/utils';

type EyebrowProps = {
  children: string;
  tone?: 'light' | 'dark';
};

export const Eyebrow = ({ children, tone = 'light' }: EyebrowProps) => (
  <div
    className={cn(
      'text-[14px] font-bold tracking-[0.22em] uppercase',
      tone === 'light' ? 'text-gold-dark' : 'text-gold'
    )}
  >
    {children}
  </div>
);

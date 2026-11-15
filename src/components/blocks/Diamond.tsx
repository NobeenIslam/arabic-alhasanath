import { cn } from '@/lib/utils';

type DiamondProps = {
  className?: string;
};

export const Diamond = ({ className }: DiamondProps) => (
  <span
    aria-hidden="true"
    className={cn('block size-2 flex-none rotate-45 bg-gold', className)}
  />
);

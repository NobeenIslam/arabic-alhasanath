import { env } from '@/lib/env';

export const siteConfig = {
  url: env.NEXT_PUBLIC_URL.replace(/\/$/, ''),
};

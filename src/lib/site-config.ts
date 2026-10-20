import { env } from '@/lib/env';
import { SITE_NAME } from '@/lib/constants/site.constants';

export const siteConfig = {
  name: SITE_NAME,
  url: env.NEXT_PUBLIC_URL.replace(/\/$/, ''),
};

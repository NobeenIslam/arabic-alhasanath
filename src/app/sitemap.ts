import type { MetadataRoute } from 'next';
import { ROUTES } from '@/lib/constants/routes.constants';
import { siteConfig } from '@/lib/site-config';

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...[ROUTES.privacy, ROUTES.terms].map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
};

export default sitemap;

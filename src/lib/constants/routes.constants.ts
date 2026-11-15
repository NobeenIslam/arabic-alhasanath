export const ROUTES = {
  home: '/',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export const homeSection = (id: string) => `${ROUTES.home}#${id}`;

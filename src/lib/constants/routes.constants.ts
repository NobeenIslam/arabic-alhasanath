export const ROUTES = {
  home: '/',
  privacy: '/privacy',
} as const;

export const homeSection = (id: string) => `${ROUTES.home}#${id}`;

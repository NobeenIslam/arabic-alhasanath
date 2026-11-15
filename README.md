# Lisaan Arabic Landing Page

Marketing site for Lisaan Arabic, online Arabic tuition with Ustādh Abu Hasnath. Built on the landing page starter: Next.js 16, React 19, Tailwind CSS 4 and Bun.

## Getting Started

Install dependencies:

```bash
bun install
```

Copy `.env.example` to `.env` and fill in the values, then run the development server:

```bash
bun dev
```

Open [http://localhost:3100](http://localhost:3100).

## Environment Variables

All variables are required and validated at startup by `src/lib/env.ts`.

- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog project key for analytics.
- `RESEND_API_KEY`: Resend API key for registration emails.
- `RESEND_FROM_EMAIL`: Sender address. Must be on a domain verified in Resend.
- `BOOKING_EMAIL_RECIPIENT`: Address that receives new registrations of interest.
- `NEXT_PUBLIC_URL`: Public site URL used for metadata, the sitemap and JSON-LD.

## Before Launch

- [ ] `NEXT_PUBLIC_URL`: set it to `https://lisaanarabic.co.uk` in Netlify.

Anything else that waits on a decision should carry a `PENDING_` prefix and be listed here.

## Share Image

`src/app/opengraph-image.png` and `src/app/twitter-image.png` are static because the image renderer in `next/og` lays Arabic out left to right. Re-render them in a browser if the brand or hero line changes.

## Key Commands

- `bun dev`: Start the development server on port 3100
- `bun run build`: Build for production
- `bun run lint`: Run ESLint
- `bun run type-check`: Run the TypeScript compiler
- `bun run format:fix`: Format with Prettier
- `bunx --bun shadcn@latest add <component>`: Add a Shadcn UI component

## Development Guidelines

Stack, structure and conventions are documented in [AGENTS.md](./AGENTS.md).

## Deployment

Deployed on Netlify. `netlify.toml` configures the PostHog proxy redirects. Set the environment variables above in the Netlify site settings.

## License

[MIT](https://choosealicense.com/licenses/mit/)

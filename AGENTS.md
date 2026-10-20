# Project Overview

This file is a baseline for agents such as Claude, Codex, Cursor, Antigravity, Warp to use for improved responses.

## Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **Package Manager**: [Bun](https://bun.sh/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/) patterns
- **State Management & Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Analytics**: [PostHog](https://posthog.com/)
- **Email**: [Resend](https://resend.com/) with [React Email](https://react.email/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `cn`, `class-variance-authority`

## Project Structure

The project follows a **Page-Based Feature Architecture**.

```text
src/
├── app/                  # Routing Layer ONLY (No business logic)
│   ├── page.tsx          # Imports and renders <LandingPage />
│   ├── about/
│   │   └── page.tsx      # Imports and renders <AboutPage />
│   ├── layout.tsx        # Global Root Layout
│   └── globals.css       # Global Tailwind styles
│
├── actions/              # Server Actions (Preferred for server-side logic)
│   └── *.actions.ts      # Server actions (e.g., email.actions.ts, auth.actions.ts)
│
├── features/             # Business Logic & Page Content (Vertical Slices)
│   ├── landing/          # 🟢 FEATURE: Home Page
│   │   ├── sections/     # Visual sections (Hero, Pricing, Testimonials)
│   │   ├── content.ts    # Text copy, image imports, data objects
│   │   ├── types.ts      # Feature-specific types (e.g., PricingTier)
│   │   └── LandingPage.tsx # Assembler Component
│   │
│   ├── contact/          # 🔴 FEATURE: Contact Page
│   │   ├── sections/     # ContactForm, MapEmbed
│   │   ├── schemas.ts    # Zod Schemas for this feature
│   │   └── ContactPage.tsx
│   │
│
├── components/           # Shared UI Primitives
│   ├── ui/               # Shadcn UI (Button, Input, Card) - DO NOT EDIT LOGIC
│   ├── emails/            # For resend email templates
│   ├── layout/           # Global Shells (Navbar, Footer, Sidebar)
│   ├── blocks/           # Larger reusable componentised components with props that sections will be built out of
│
├── hooks/                # Reusable custom hooks (shared state logic)
├── lib/                  # Shared utilities (env.ts, utils.ts any global shared constants)
├── providers/            # Context providers (PostHog, React Query)
└── types/                # Global Domain Entities (User, BookingStatus)
```

## Key Patterns & Conventions

### 1. Architecture: The Assembler Pattern

- **App Router is Thin**: Files in `src/app` must strictly contain zero logic. They simply import a page component from `src/features`.
- **Context Isolation**: Every route (e.g., `/about`) has a corresponding folder in `src/features/about`.

### 2. Component Implementation

- **Content-First**: Components must not contain hardcoded text. Use `src/features/[feature]/content.ts`.
- **UI Primitives**: Always use the **Shadcn UI CLI** (`bunx --bun shadcn@latest add <component>`) to install new components into `src/components/ui`. Do NOT manually generate or hallucinate these primitives.
- **ES6 Arrow Functions**: Use arrow functions for all components.
- **Styling**: Use the `cn()` utility for conditional Tailwind classes.

### 3. Type Safety (The Three-Bucket Rule)

- **Global Domain Types**: Entities shared across the app go in `src/types/`.
- **Feature Types**: Data shapes specific to a page go in `src/features/[feature]/types.ts`.
- **Component Props**: Define props interface inside the component file itself.
- **Zod**: Used for schema validation (forms, environment variables).

### 4. Forms

- Use `react-hook-form` with `@hookform/resolvers/zod`.
- Co-locate Zod schemas in `src/features/[feature]/schemas.ts`.
- Leverage React Hook Form's API instead of custom React state for errors.

### 5. Server Actions (Default Pattern)

- **Preferred Approach**: Use Server Actions in `src/actions/` for all server-side operations unless external API endpoints are explicitly required.
- **Naming Convention**: Use the pattern `{domain}.actions.ts` (e.g., `email.actions.ts`, `auth.actions.ts`, `booking.actions.ts`).
- **'use server' Directive**: All action files must start with `'use server';` at the top.
- **Return Pattern**: Return objects with `{ success: boolean, data?: T, error?: T }` for consistent error handling.
- **When to Use API Routes**: Only create API routes in `src/app/api/` when you need:
  - Webhooks from external services
  - Public REST endpoints for third-party integrations
  - Non-Next.js clients consuming your API

### 6. Analytics & Environment

- **PostHog**: Pre-configured in `src/providers/PosthogProvider.tsx`, gated by `src/providers/ConsentProvider.tsx`. Use it for event tracking and feature flags.
- **Env Vars**: Defined in `.env` and validated in `src/lib/env.ts`.

### 7. Email Service (Resend)

- **Implementation**: Logic located in `src/actions/email.actions.ts` as a server action.
- **Templates**: Use React Email components stored in `src/components/emails/` (e.g. `SignUpEmail.tsx`).

### 8. Custom Hooks

- Place reusable stateful logic in `src/hooks/`.
- Use descriptive names starting with `use` (e.g., `useDebounce`).

## Guidelines for AI Agents

- **Package Manager**: Use **Bun** for all commands (e.g., `bun add`, `bun run`, `bunx`).
- **Shadcn CLI**: When new UI components are needed, use the Shadcn CLI via `bunx --bun shadcn@latest add`. Do not hallucinate primitives.
- **Server Actions First**: For any server-side logic (database operations, email sending, API calls), create a server action in `src/actions/{domain}.actions.ts` with the `'use server';` directive. Only use API routes when webhooks or external integrations are explicitly required.
- **Feature Creation**: If creating a new page (e.g., "Services"), immediately create the folder structure: `src/features/services/` with `components/`, `content.ts`, and `LandingPage.tsx` (or `ServicesPage.tsx`).
- **Content Separation**: If asked to "change the text", edit `content.ts`, NOT the React component.
- **No Classes**: Avoid using classes; use functional components and hooks.
- **Validation**: Always validate external data (forms, API responses) using Zod.
- **Hooks**: Check `src/hooks/` for existing logic before creating new ones.
- **Early Returns**: Use early returns in functions to reduce nesting.

## Project Notes

- **Site**: Abu's Arabic, a single landing page assembled in `src/features/landing/LandingPage.tsx`.
- **Deployment**: Netlify. `netlify.toml` and `next.config.ts` both proxy PostHog through `/ph`.
- **SEO**: `src/lib/site-config.ts` derives the site URL from `NEXT_PUBLIC_URL`. JSON-LD lives in `src/components/SEO/SchemaMarkup.tsx`.
- **Breakpoints**: Custom `md`, `lg` and `xl` breakpoints are defined in `src/app/globals.css` in `rem`. Keep them in `rem` so media queries sort correctly against the default `sm`.
- **Shadcn lint override**: `react-hooks/set-state-in-effect` is off for `src/components/ui/**` because generated primitives trip it.
- **cn**: Class merging uses shadcn's `cn` package, which replaces `clsx` and `tailwind-merge`. Generated primitives import it from `cn` and app code imports it from `@/lib/utils`, which re-exports it. Leave the generated imports as they are.

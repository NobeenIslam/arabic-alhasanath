# Lisaan Arabic: landing page handover

## Files

- `site-a.html`: the approved design, with the final copy. Open it in a browser to see the target.
- `photo.jpg`: the teacher's photo, used in the "Your teacher" section.

## The brief

Build `site-a.html` as the landing page in this starter.

- **Match it exactly.** Keep the colours, fonts, sizes, spacing and copy as they are. Don't redesign anything or rewrite the copy.
- **Restructure freely.** Convert the inline styles to the starter's styling approach (tokens, components and so on), but keep the values.
- **Read the starter first.** Map each `<section>` to the starter's components before you write any code.

## Design tokens

| Token | Value | Use |
|---|---|---|
| green | `#0E3B2C` | header, hero, teacher section, footer, primary buttons |
| gold | `#D9B46A` | accents on green, hero buttons |
| gold-dark | `#7A5A1E` | small labels on light backgrounds |
| cream | `#F4EEDF` | page background, text on green |
| panel | `#EBE2CC` | alternating section background |
| card | `#FFFDF7` | cards and inputs |
| ink | `#16241D` | body text |
| muted | `#4F5348` | secondary text on light backgrounds |
| muted-on-green | `#D8D2C2` | secondary text on green |
| rule | `#CDBF9E` | card borders |
| rule-on-green | `#4F6E5E` | dividers on green |
| input-border | `#8C7F63` | form fields |

- **Fonts** (Google Fonts, link in `<head>`):
  - Cormorant Garamond for headings.
  - Manrope for body text.
  - Aref Ruqaa for the Arabic logo and the hero verse.
  - Amiri for other Arabic text.
- **Corners:** square, apart from the arched photo.
- **Container:** max width 1180px, with 24px side padding.
- **Section spacing:** 96px top and bottom.

## Sections, in order (anchor ids)

1. Header: logo, nav links, "Book a free intro call" button
2. `#top`: hero
3. `#who`: who it's for
4. `#how`: how lessons work
5. `#prices`: prices
6. `#teacher`: your teacher
7. `#reviews`: reviews
8. `#start`: "Get started", which holds `#book` (call booking) and `#register` (form) side by side
9. Footer

## Behaviour

- **Navigation:**
  - Nav links scroll smoothly to their sections.
  - Every "Book a free intro call" button goes to `#start`.
  - "Or register your interest" goes to `#register`.
- **Call booking:**
  - The calendar between the `MOCK SCHEDULER START` and `MOCK SCHEDULER END` comments is fake.
  - Replace it with a Calendly inline embed. Put the URL in config as `CALENDLY_URL`.
  - Keep the card's heading, intro line and border.
- **Form:**

  | Field | Name | Required |
  |---|---|---|
  | Full name | `name` | yes |
  | Phone number | `phone` | yes |
  | Email address | `email` | yes |
  | Your level (4 fixed options) | `level` | yes |
  | Lesson type: `one-to-one` (default) or `group` | `lesson_type` | yes |
  | Preferred weekend times | `preferred_times` | no |

  - Where submissions go hasn't been decided. Use the starter's form handling if it has some. If not, leave a clear `TODO`.
  - Add a success state that reads "Thanks — Ustādh Abu Hasnath will be in touch soon." Add an error state too.
- **WhatsApp:** all WhatsApp links go to `https://wa.me/447828559720`.
- **Photo:**
  - Serve an optimised version (WebP, about 800px wide).
  - Keep `object-position: 50% 22%` and the alt text.

## Layout on phones

- The layout is already fluid: the grids collapse to one column.
- At 390px wide, check there is no sideways scrolling.
- In "Get started", the booking card stacks above the form.

## Accessibility

- Keep the `<label>`s and the `lang="ar" dir="rtl"` on Arabic text.
- Keep tap targets at 44px or more.
- Keep `aria-hidden` on the decorative pattern and ornaments.
- Don't lighten any text colours. They were chosen to pass contrast.

## Search and sharing

- The `<title>` and meta description are already in `<head>`.
- Add Open Graph and Twitter tags using the same title and description.
- `og:image` and the favicon are still to come. A gold "ل" on green would suit the favicon.
- Keep one `<h1>`, which is the hero line.

## Placeholders (leave clearly marked)

- `CALENDLY_URL`
- Where form submissions go
- Domain (intended: lisaanarabic.com)
- `og:image` and favicon
- The Quranic verse in the hero, pending the teacher's final approval of its use and wording

## Done when

- [ ] The page matches `site-a.html` side by side at 1280px and 390px wide.
- [ ] All anchors and buttons scroll to the right section.
- [ ] The form validates the required fields and shows success and error states.
- [ ] The Calendly embed is in place, or a marked placeholder if there's no URL yet.
- [ ] There's no sideways scrolling on mobile, and no console errors.

# Portfolio — Jean-Jacques Delegue

Bilingual (FR/EN) personal portfolio of Jean-Jacques Delegue, fullstack developer and 5th year student at Epitech Paris.

## Features

- Statically generated pages, localized routes (`/fr`, `/en`) with `next-intl`
- Projects, skills and experience driven by JSON files in `src/content/`
- Dark / light theme, scroll-reveal animations
- Contact form ([Web3Forms](https://web3forms.com)), legal notice and privacy policy pages
- SEO: sitemap, robots, localized metadata

## Stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript (strict)
- Tailwind CSS v4, Base UI, shadcn tooling
- pnpm, deployed on [Vercel](https://vercel.com) (Analytics and Speed Insights)

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Variable                       | Purpose                                            |
| ------------------------------ | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Public site URL (sitemap, robots, metadata)        |
| `NEXT_PUBLIC_FORM_ACCESS_KEY`  | Web3Forms access key for the contact form          |

## Scripts

| Command      | Description                   |
| ------------ | ----------------------------- |
| `pnpm dev`   | Development server            |
| `pnpm build` | Production build              |
| `pnpm start` | Serve the production build    |
| `pnpm lint`  | ESLint (flat config)          |

## Content

- `src/content/projects/*.json`, `experiences/*.json`, `skills/*.json`: one file per entry, with `en` and `fr` texts and an `order` field
- `messages/{en,fr}.json`: UI strings

## License

All rights reserved, see [LICENSE](LICENSE). The code is published for reference only.
Third-party dependencies keep their own permissive licenses (MIT, Apache-2.0, ISC, BSD, 0BSD; CC-BY-4.0 for browser data packages).

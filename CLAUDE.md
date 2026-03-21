# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Portfolio personnel de Jean-Jacques Delegue, étudiant en 4ème année à Epitech Paris (actuellement à Epitech Bruxelles). Développeur fullstack en formation.

## Stack

- **Framework**: Next.js 16.2.1 (App Router) — React 19
- **Langage**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Fonts**: Geist Sans & Geist Mono (via `next/font/google`)
- **Linting**: ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript)
- **Path alias**: `@/*` → `./src/*`

## Commands

```bash
pnpm dev      # Serveur de développement
pnpm build    # Build de production
pnpm start    # Servir le build de production
pnpm lint     # Linter (eslint, flat config)
```

## Architecture

Structure App Router dans `src/app/`. Layout racine dans `layout.tsx`, page d'accueil dans `page.tsx`. Les assets statiques sont dans `public/`.

## Conventions

- Tailwind CSS v4 : les styles se configurent directement dans `globals.css` avec `@theme`, pas via `tailwind.config.js`.
- Dark mode supporté (classes `dark:` dans le markup).
- Langue du code et des composants : anglais. Langue de communication : français.

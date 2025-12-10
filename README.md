# Lumasha Website

A modern, playful, multilingual learning platform for kids built with React, Vite, TypeScript, TailwindCSS, Framer Motion, Zustand, and Supabase-ready schema.

## Getting Started
1. Install dependencies (npm registry access required):
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Lint & format:
   ```bash
   npm run lint
   npm run format
   ```

## Features
- Montessori-inspired bright design with rounded cards and micro-animations.
- Homepage sections for hero, highlights, categories, games playground, products, news, testimonials, mission, app promo, and newsletter.
- Mini games: Alphabet Match, Memory Flip, Tracing, Digital Coloring, Sound Guess, and Word Builder, each playable as React components.
- Global state store (Zustand) for cart, language, and sound toggle.
- i18n with English and Nepali copy plus language detector.
- Supabase schema for products, orders, games, and profiles.
- Placeholder illustrations and sound effects (sine-wave chimes) ready for replacement with final assets.

## File Map
- `src/pages/HomePage.tsx` – Composed homepage layout.
- `src/components/sections/*` – Reusable page sections.
- `src/components/games/*` – Mini-game implementations.
- `src/store/useLumashaStore.ts` – Cart, language, and sound state.
- `supabase/schema.sql` – Admin-ready Supabase tables.
- `public/assets/illustrations` – Placeholder artwork for layout.

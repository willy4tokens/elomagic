# Elo Agency — Claude Code Master Instructions

You are building conversion-optimized websites for small business clients.
Every decision — design, copy, structure — must serve one goal: turn visitors into leads.

## Stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Deployed on Vercel via GitHub
- Forms POST to Make.com webhook → Google Sheets

## Design Philosophy
- Always import 2 fonts from Google Fonts: one display, one body
- Good pairings: Plus Jakarta Sans + DM Sans / Syne + Inter / Fraunces + Outfit
- Headings: extrabold 800, tight line-height 1.1
- Never use pure white backgrounds
- Cards: subtle shadow, rounded-2xl, border
- Add subtle entrance animations

## Copywriting Framework
- Hero headline: customer outcome + differentiator
- Never start with the business name
- Subheadline: 1-2 sentences max
- Primary CTA: action verb + outcome
- Trust line: 3 micro-commitments below CTA
- Problem section: name the pain using "you" language
- Value section: benefits not features
- Social proof: name + result
- Urgency: soft, no fake scarcity
- CTA section: repeat benefit + form

## Checklist
- Google Fonts imported
- CSS variables defined
- Navbar CTA scrolls to #cta
- CTAForm has id="cta"
- Mobile responsive
- npm run build passes
- No Lorem Ipsum
- Real copy only

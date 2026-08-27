UX designer portfolio — Next.js (App Router) + Tailwind CSS v4 + shadcn/ui, black & white minimal theme.

## Structure

- `/` — hero, 3 featured projects, about teaser, contact CTA
- `/work` — full project grid
- `/work/[slug]` — case study template (see below)
- `/about` — bio, experience, skills/tools
- `/contact` — contact form (client-side placeholder handler, wire to an API route/Formspree/Resend before going live)

Project content lives in `src/data/projects.ts` — edit that file to add/update case studies. Replace `ImageBlock` placeholders with real screenshots (`next/image`) once available; they share the same aspect ratios so swapping is a drop-in change.

## Case study page structure (what to show / what to leave out)

Each `/work/[slug]` page follows a fixed template so every case study is scannable and comparable:

1. **Header** — title, one-line tagline, role/duration/year/tools meta row.
2. **Cover image** — a single strong hero visual (final UI or key screen).
3. **Overview** — 2–4 sentences: what it was, your role, the outcome. This is the only part many visitors read — make it stand alone.
4. **Problem** — the actual business/user problem and constraints, not just "the client wanted a redesign."
5. **Process** — 3 short phases (discovery/definition/iteration or similar), plus 1–2 supporting visuals (research synthesis, flows, wireframes).
6. **Key insights** — 2–4 bullet findings that shaped decisions, framed as "so what," not raw data dumps.
7. **Solution** — 2–4 named decisions, each paired with one polished screen, explaining the *why* behind the UI, not just showing screens.
8. **Outcomes** — quantified impact (metrics) plus a short reflection/learning — signals seniority and honesty.
9. **More projects + contact CTA** — keeps visitors moving instead of dead-ending.

**Deliberately excluded / minimized:**
- Raw research artifacts (full transcripts, unredacted survey data, screen recordings) — summarize, don't dump.
- Every screen you designed — curate 3–6 the way a magazine spread would, not a Figma export.
- Confidential/NDA business data, real user PII, or unreleased competitor intel.
- Low-fidelity exploration for its own sake — only include early sketches/wireframes when they support a specific insight.
- Long paragraphs — favor short blocks, bullets, and visuals; the layout enforces this by design.
- Salary, contract, or client-relationship specifics.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

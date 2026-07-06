# Jay Patel — Data Analyst Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Supabase.

## File structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Composes all sections
  globals.css           Tailwind base + global tweaks
components/
  Navbar.tsx
  Hero.tsx
  Projects.tsx
  GitHubShowcase.tsx    Server component, fetches live repos
  GithubCalendar.tsx    Server component, fetches contribution graph
  Skills.tsx
  Experience.tsx
  Education.tsx
  Contact.tsx           Supabase-backed contact form
  Footer.tsx
  ui/
    MagneticButton.tsx
    GlowCard.tsx
    SectionHeading.tsx
lib/
  data.ts               All resume content (single source of truth)
  github.ts             GitHub REST API helpers (server-side, cached)
  supabase.ts           Supabase browser client
supabase/
  schema.sql            contact_messages table + RLS policy
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.local.example .env.local
# then fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
# from your Supabase project's Settings → API page.

# 3. Create the database table
# Open the Supabase SQL editor and run the contents of supabase/schema.sql

# 4. Run locally
npm run dev

# 5. Production build
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as Environment Variables in the Vercel project settings.
4. Deploy — no other configuration needed. `GitHubShowcase` and `GithubCalendar` are server components with `revalidate: 3600`, so they run at the edge without hitting the GitHub API on every request.

## Notes

- The contact form writes directly to `contact_messages` using the Supabase anon key; RLS only permits `insert`, so submissions cannot be read back or tampered with from the client.
- Update `lib/data.ts` to change any resume content — it's the single source of truth for Hero, Skills, Experience, Projects, Education, and Certifications.
- `profile.githubUsername` in `lib/data.ts` drives both the repo grid and the contribution calendar.

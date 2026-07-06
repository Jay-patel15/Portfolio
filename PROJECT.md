# Project Context — Jay Patel Portfolio

This file exists so a new engineer (human or AI) can pick up this repo cold
and be productive immediately. Read this before touching code.

## What this is

A single-page personal portfolio for Jay Patel, a Data Analyst. Built with
Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Supabase. It is
mostly server-rendered/static; the only dynamic runtime pieces are two
server components that fetch live GitHub data, and a client-side contact
form that writes to Supabase.

There is no CMS, no auth, no multi-page routing, and no test suite. Content
lives in one TypeScript file (`lib/data.ts`). This is intentional — the site
is small enough that a database or headless CMS would be overkill.

## Tech stack and why

- **Next.js 14 App Router** — server components by default, so the GitHub
  fetches happen server-side (cached, no client-exposed API calls) and the
  client JS bundle stays small (~194 kB first load, see build output).
- **Tailwind CSS** — all styling is utility classes in JSX; there are no
  CSS Modules or styled-components. Custom design tokens (colors, fonts,
  shadows) are extended in `tailwind.config.ts`, not hardcoded hex values
  scattered through components.
- **Framer Motion** — used for scroll-reveal (`whileInView`), the staggered
  hero headline animation, and the magnetic-button hover effect. All motion
  components are client components (`"use client"` at the top of the file).
- **Supabase** — Postgres + client SDK, used only for the contact form.
  There is no Supabase Auth, no other tables, no server-side Supabase admin
  client. The anon key is safe to expose because RLS restricts it to
  insert-only (see `supabase/schema.sql`).
- **lucide-react** — icon set, tree-shaken imports (`import { Github } from
  "lucide-react"`).
- **clsx** — conditional className joining in `MagneticButton.tsx` and
  `GlowCard.tsx`.

No test framework, no CI config, no ESLint customization beyond
`eslint-config-next` — the project is intentionally lightweight.

## How to run it

```bash
npm install
cp .env.local.example .env.local   # then fill in real Supabase values
npm run dev                        # http://localhost:3000
npm run build && npm run start     # production build/serve
```

Without a real `.env.local`, the site still builds and runs — `lib/supabase.ts`
falls back to placeholder values so `next build` doesn't crash on missing
env vars. The contact form will silently fail against the placeholder
project if you don't set real credentials.

### "Port 3000 is in use, trying 3001 instead."

Not an error. Next.js dev server binds to 3000 by default; if something
else already holds that port (most often a previous `npm run dev` you
forgot to stop, or a leftover process from a killed terminal), Next just
moves to the next free port and tells you which one it picked — check the
`- Local:` line it prints. Open that URL instead.

To free port 3000 so it's always the one used, find and kill whatever's
holding it:

```bash
netstat -ano | findstr :3000       # note the PID in the last column
taskkill /PID <pid> /F             # or: Ctrl+C in whichever terminal owns it
```

`Terminate batch job (Y/N)?` after `Ctrl+C` is a normal Windows `cmd.exe`
prompt for stopping a running npm script — answer `y` (or `n` to keep it
running in that terminal, which is how you can end up with a stray dev
server still bound to 3000 later).

### Terminal stuck on "✓ Starting..." and never finishes compiling

Seen on Windows when an old `next dev` process from an earlier, interrupted
session is still alive and squatting on a port (e.g. 3000), holding onto
several GB of RAM. The *new* `npm run dev` you just launched isn't actually
frozen — it's real work, just starved of CPU/memory by the zombie process,
so first-compile takes far longer than the couple of seconds it normally
does. Symptom: the new server falls back to 3001 (see above) and then sits
at "Starting..." for a long time instead of printing "Ready".

Diagnose and fix:

```bash
netstat -ano | grep ":3000\|:3001"        # find PIDs bound to either port
tasklist //FI "PID eq <pid>"              # confirm it's a stale node.exe
taskkill //PID <pid> //F                  # kill it
```

After killing the stale process, the new dev server should finish
compiling almost immediately. Don't kill the terminal/process you're
actively working in without checking first — inspect the PID before you
kill it.

## File-by-file map

### `app/` — Next.js App Router shell

- **`app/layout.tsx`** — root HTML shell. Loads two Google fonts via
  `next/font/google` (Inter → `--font-display`, JetBrains Mono →
  `--font-mono`, both wired into `tailwind.config.ts` under
  `theme.fontFamily`). Sets all SEO/OpenGraph/Twitter metadata via the
  `metadata` export (Next's built-in metadata API, no `next/head`). Also
  renders a visually-hidden "Skip to content" link for keyboard users.
- **`app/page.tsx`** — the entire site is one page. It just imports every
  section component in order and renders them inside `<main>`. If you're
  asked to "add a section," this is where you'd insert it.
- **`app/globals.css`** — Tailwind's three `@tailwind` directives plus a
  handful of global resets: smooth scroll, selection color, focus-visible
  outline color, and custom scrollbar styling. Nothing else — component
  styling is 100% Tailwind utility classes, not here.

### `lib/` — data and integrations, no UI

- **`lib/data.ts`** — **the single source of truth for all resume content.**
  Exports `profile`, `skills`, `experience`, `projects`, `education`,
  `certifications`. Every component imports from here rather than hardcoding
  strings. **To update the site's content (new job, new project, changed
  bio), edit this file — never hardcode text directly into a component.**
  Notable fields on `profile`: `resumeUrl` (Google Drive link used by the
  navbar's Download Resume button — currently a placeholder, swap in the
  real share link) and `githubUsername` (drives both the repo carousel and
  the contribution calendar). `certifications` is an array of
  `{ name, url }` — `url` is a placeholder Credly/Drive link per entry, not
  a real one yet. `education` is an array consumed as a timeline — append
  new entries (e.g. schooling) here and they render automatically, oldest
  styling assumptions unchanged. `about` is just `{ paragraphs: string[] }`
  rendered verbatim by `About.tsx`.
- **`lib/github.ts`** — server-side fetch helpers against the GitHub REST
  API (`api.github.com`). `getPinnedOrRecentRepos(username, limit)` pulls
  the user's repos, filters out forks, sorts by star count, and returns the
  top N. `getGithubUser` fetches profile metadata (currently unused by any
  component, kept for future use). Both use `next: { revalidate: 3600 }` —
  Next's fetch cache — so GitHub isn't hit on every request, only once per
  hour at most across all visitors.
- **`lib/supabase.ts`** — creates and exports a single Supabase browser
  client (`createClient` from `@supabase/supabase-js`) using the two
  `NEXT_PUBLIC_*` env vars. This is the *anon* client — safe to import into
  client components since RLS on the Supabase side restricts what it can
  do. Falls back to placeholder strings if env vars are absent (see "How to
  run it" above) purely so builds don't fail before Supabase is configured.

### `components/` — one section = one file

Each top-level component in `components/` corresponds 1:1 to a visual
section of the page, in the order they're rendered in `app/page.tsx`:

- **`Navbar.tsx`** (client) — fixed header, becomes blurred/opaque on
  scroll (`useState` + scroll listener). Anchor links to each section's
  `id`. **The `links` array order must match the actual section order in
  `app/page.tsx`** (About → Work → Skills → Experience → Contact) — it's
  a plain hardcoded array, not derived from the page, so if you reorder
  sections in `page.tsx` you must reorder `links` here too or the nav
  will scroll out of sequence. `github`/`education` have no nav entry by
  design (reachable by scrolling, not from the header). Social icons link
  out via `lib/data.ts`'s `profile`, plus a "Resume" pill (`Download` icon
  + text, hidden below `sm:`) that links to `profile.resumeUrl` — this is
  the *only* place the resume download link lives; it is not duplicated
  in Education/Certifications.
- **`Hero.tsx`** (client) — the big headline. Uses Framer Motion
  `variants`/`staggerChildren` to animate each word of "Jay Patel." in on
  load, with "Patel." colored in the accent (signal) color. The
  availability badge just reads "Available for work" (no timezone). Each
  word wrapper has `pb-[0.12em]` added to its `overflow-hidden` clip mask
  so descenders (e.g. the "y" in "Jay") aren't cut off by the reveal
  animation. Contains the two CTA buttons (`MagneticButton`) linking to
  `#projects` and `#contact`.
- **`About.tsx`** (client) — section index `01`, the first numbered
  section after the hero. Just maps `about.paragraphs` from `lib/data.ts`
  into a single `GlowCard`. To edit the bio copy, edit that array, not
  this component.
- **`Projects.tsx`** (client) — renders `projects` from `lib/data.ts` as
  two `GlowCard`s with scroll-triggered fade/slide-in and a hover lift.
- **`GitHubShowcase.tsx`** (**server** component, no `"use client"`) —
  calls `getPinnedOrRecentRepos` at render time (fetches up to 24 repos)
  and hands them to `RepoGrid` for rendering. Also renders
  `<GithubCalendar />`. If the fetch fails or returns nothing, shows a
  plain-text fallback instead of an empty grid.
- **`RepoGrid.tsx`** (client) — takes the full repo list and a `pageSize`
  (defaults to 6) and renders one page of `GlowCard` repo cards at a time,
  carousel-style. `page` state + prev/next buttons and dot indicators
  (wraparound via modulo) page through the set; no "view more" button and
  no separate route — everything after the first 6 repos is reached by
  clicking through the carousel. If `repos.length <= pageSize`, the
  prev/next controls don't render at all.
- **`GithubCalendar.tsx`** (**server** component) — separate from
  `lib/github.ts` because it hits a *different* API
  (`github-contributions-api.jogruber.de`, a third-party wrapper around
  GitHub's contribution graph, which has no public official REST endpoint).
  Renders **every** week returned by the API (no slicing) in a CSS grid
  (`grid-template-columns: repeat(weeks.length, minmax(0,1fr))`) with
  `aspect-square w-full` cells, so the heatmap always stretches to fill
  its container width regardless of how many weeks of history exist.
  Returns `null` (renders nothing) if the fetch fails, so a network
  hiccup never breaks the page layout.
- **`Skills.tsx`** (client) — bento-grid layout driven by `skills` in
  `lib/data.ts`, where each skill group has a `span` string (e.g.
  `"md:col-span-2 md:row-span-2"`) controlling its grid footprint. **To
  resize a skill card, edit its `span` value in `lib/data.ts`, not the
  component.**
- **`Experience.tsx`** (client) — vertical timeline with a gradient line
  down the left edge, one `GlowCard` per entry in `experience`. Each entry
  has an `experienceLetterUrl` field in `lib/data.ts` — `null` while the
  role is ongoing, or a Drive share link once it's completed. The card
  only renders the "Experience Letter" button when that field is
  non-null, so finishing a role is just: set the real Drive URL on that
  entry.
- **`Education.tsx`** (client) — mirrors `Experience.tsx`'s pattern:
  `education` entries render as a vertical timeline (gradient line down
  the left edge, one `GlowCard` per entry) so new schooling entries can
  just be appended to `lib/data.ts` and will slot into the timeline
  automatically. Each entry also has a `marksheetUrl` field — `null` hides
  the button, a Drive link shows a "View Result" button beneath the
  passing-year label (same right-aligned column layout as the
  "View Letter" button in `Experience.tsx`). Below the timeline, a
  separate `GlowCard` lists `certifications` as clickable links
  (`cert.url`, opens in a new tab) — each has an `ExternalLink` icon and an
  underline that highlights signal-
  red on hover. Certification URLs are still placeholders (Credly/Drive)
  until the user supplies the real ones.
- **`Contact.tsx`** (client) — the only component with real form state and
  a side effect. Controlled inputs (`name`, `email`, `message`) →
  `supabase.from("contact_messages").insert(...)` on submit → `status`
  state machine (`idle | loading | success | error`) drives the button
  spinner and the success/error `AnimatePresence` banners.
- **`Footer.tsx`** — static, just copyright + social icons.

### `components/ui/` — shared primitives, no content awareness

- **`MagneticButton.tsx`** (client) — a button/anchor that follows the
  cursor slightly on hover (spring-animated `x`/`y` transform based on
  pointer offset from center). Two visual variants: `solid` (white pill,
  inverts to signal-red on hover) and `ghost` (bordered, transparent).
  Renders as `<a>` if given an `href` prop, otherwise `<button>`.
- **`GlowCard.tsx`** (client) — the glassmorphic card shell used
  everywhere (Projects, GitHub repos, Skills, Experience, Education). On
  mouse move, sets CSS custom properties `--mx`/`--my` to the cursor
  position and uses them in a `radial-gradient` background — this is a
  pure-CSS pointer-follow glow, not a per-frame React re-render, so it's
  cheap.
- **`SectionHeading.tsx`** (client) — the "01 — Section Title" heading
  pattern used at the top of every section. Takes `index`, `title`,
  `description`. Animates in on scroll via `whileInView`.
- **`ScrollToTop.tsx`** (client) — fixed bottom-right circular arrow-up
  button, rendered once in `app/page.tsx` after `<Footer />` (so it floats
  over the whole page, not scoped to one section). Hidden until
  `window.scrollY > 480`, then fades/scales in via `AnimatePresence`;
  click smooth-scrolls to the top (`window.scrollTo({ top: 0, behavior:
  "smooth" })`).

### `supabase/schema.sql`

Run this once in the Supabase SQL editor for a new project. Creates
`contact_messages` (id, name, email, message, created_at) and an RLS policy
that allows the `anon` role to `insert` only — no `select`/`update`/`delete`
grant, so a leaked anon key can't be used to read or tamper with prior
submissions. To read submissions, use the Supabase dashboard's table editor
or a service-role key from a server context (neither is wired up in this
codebase).

## Design system (do not reinvent — read this before styling anything)

Everything lives in `tailwind.config.ts`:

- **Colors** — `void-{950..600}` is the near-black background scale
  (`void-950` = page background). `signal` (`#ff2b45`, with `dim` and
  `glow` variants) is the single accent color — used for hover states,
  the timeline dot, headline index numbers, and card glow. There is no
  second accent color; don't introduce one.
- **Typography** — `font-display` (Inter) for all headings/body,
  `font-mono` (JetBrains Mono) only for small numeric/label text (section
  index numbers, timestamps). `text-hero-sm/md/lg` are the three
  responsive hero headline sizes (mobile/tablet/desktop), each with a
  matching negative letter-spacing baked in — don't override
  `tracking-*` on the hero heading.
- **Shadows** — `shadow-neu-dark` / `shadow-neu-dark-inset` give the
  soft-skeuomorphic depth on pills and inset inputs. `shadow-glass` is the
  softer shadow under the frosted contact form. `shadow-signal` is a red
  glow used behind the timeline dot.
- **`bg-grid-fade`** — the faint grid background behind the hero, combined
  with a blurred radial `signal` glow positioned absolutely behind the
  headline.

Pattern to follow for any new section: `SectionHeading` at the top with the
next sequential index number, content in one or more `GlowCard`s, entrance
animation via `whileInView` + `viewport={{ once: true, margin: "-Npx" }}`,
color accents restricted to `signal`/white/white-with-opacity. Don't add a
new shadow, font, or color without adding it to `tailwind.config.ts` first.

## Known constraints / things to not "fix"

- **Next.js version is pinned to `14.2.35`**, not the latest 15/16. This
  was a deliberate bump from `14.2.5` only to patch a disclosed security
  advisory — don't upgrade further without checking Framer Motion 11 and
  the App Router APIs used here (`revalidate`, `next/font/google`) are
  still compatible.
- **`lib/supabase.ts` placeholder fallback is intentional**, not a bug —
  it lets `next build` succeed in CI/sandboxes without real Supabase
  secrets. Don't remove the `||` fallback and don't add a runtime
  `throw` if the env vars are missing.
- **`GithubCalendar.tsx` depends on a third-party API**
  (`github-contributions-api.jogruber.de`) because GitHub has no official
  public REST endpoint for the contribution graph. If that service goes
  down, the component silently renders nothing (`return null`) — this is
  the intended degraded state, not an error to fix with a retry loop.
- **No test suite exists.** Verification so far has been: `npm run build`
  (type-check + compile) and manually curling the dev server to confirm
  each section's content renders. If you add non-trivial logic, consider
  whether it needs tests, but don't add a testing framework speculatively.

## Where content actually comes from

Every string on the page traces back to Jay Patel's resume
(`Jay_Patel_resume (1).pdf` in the repo root). If resume content and
`lib/data.ts` ever disagree, treat the resume as source of truth and update
`lib/data.ts` — don't edit components to patch a content mismatch.

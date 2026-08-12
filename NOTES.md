# Alcove marketing site — draft mockup (for review)

Two static pages, no framework, no build step, nothing published. Open
`index.html` in a browser. Toggle dark/light with the ☀/☽ button (top right).

- `index.html` — landing
- `features.html` — all 15 categories / 172 features, generated from `docs/FEATURES.md`
- `assets/site.css` — shared styles (teal accent, Fraunces display serif, sharp corners, dark default + light)
- `assets/site.js` — theme toggle only

Fonts load from Google Fonts (needs internet); they degrade to system serif/sans offline.

## What each section claims, and where the claim comes from

Everything traces to `D:\Websites\Alcove\docs\FEATURES.md` (features) or
`tools\bench\results\RESULTS.md` (numbers). No claim is invented; no testimonials,
user counts, or reviews appear anywhere.

### Landing

| Section | Claim | Source |
|---|---|---|
| Hero stats | "428,523 books in one container", "~14 min to first full sync", "6 reading surfaces" | RESULTS.md scale demo (428,523 items; 13:51 first sync). Surfaces = Web/Android/Kobo/KOReader/Kindle/OPDS per FEATURES.md |
| Folder or Calibre | Point at a folder OR read-only Calibre libraries, originals untouched; 428K ingests in ~14 min | FEATURES.md "Calibre/Folder library sources", "Multi-library catalogue"; RESULTS.md 13:51 |
| Custom columns | Auto-discovered, shown as facets + detail fields | FEATURES.md "Custom-column display" |
| Every format | Books/novels/manga/comics/magazines + articles as real sections | FEATURES.md "Section model", "Per-section landing pages" |
| Fast and light | 428K under a hard 3 GB cap, no OOM-kill, no external DB | RESULTS.md 3GB-cap row (peak 2513 MB, exit 0); RESULTS.md intro (no external DB) |
| Formats grid | Section codenames Nook/Novels/Koma/Panel/Strand/Pocket + reader traits | FEATURES.md section list + Reading category |
| Reads everywhere | Cross-device resume; Kobo two-way; KOReader sync; send-to-Kindle; clock-skew-safe | FEATURES.md "Cross-device progress resume", "Kobo two-way progress", "KOReader position sync", "Send to Kindle", "Clock-skew-safe sync" |
| Performance metrics + table | 0:16 @ 100K; 13:51 @ 428K; 2.5 GB peak under 3 GB cap; ~324 MB steady idle; per-tier table | RESULTS.md synthetic table + scale-demo table + tracemalloc RSS ~324 MB |
| BookOrbit callout | 100K peak 406 MB vs BookOrbit's published 781 MB (which includes PostgreSQL) | RESULTS.md 100K row (406 MB) + reference table (781 MB) |
| Head-to-head | Marked **PENDING** placeholder, no rows | RESULTS.md — same-machine table not yet produced |
| Pricing | One-time, self-hosted, price shown as "$ TBD" | Positioning from the brief; price is a placeholder |
| Demo server / checkout buttons | Non-functional placeholders (`href="#"`, titled as placeholders) | Per brief — no real checkout, no analytics |

### Features page

Every card is one feature from FEATURES.md, verbatim name + one-line description,
with its surface tags as badges. `[Owner]` items are **included** but badged
`Owner` with an explainer that they're admin-only — transparent rather than hidden.
Counts (15 categories, 172 features) are computed from the file, not typed.

## Deliberately NOT done (per brief)

- No analytics, no tracking of any kind.
- No payment/checkout form with entry fields — the buy button is an inert placeholder.
- No fabricated testimonials, reviews, or user counts.
- No same-machine head-to-head rows — that table is a marked-pending slot.
- No framework, hosting, deployment, or purchases.

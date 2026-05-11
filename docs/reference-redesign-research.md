# Reference Redesign Research

Date: 2026-05-11

Scope: research only. No production website files were changed during this pass.

## Raw Captures

SkillUI ultra-mode captures are saved here:

- Soar With Us: `.skillui/reference-sites/soarwithus-design/`
- Common Thread Collective: `.skillui/reference-sites/commonthreadco-design/`
- Vervaunt: `.skillui/reference-sites/vervaunt-design/`
- Wolfgang Digital: `.skillui/reference-sites/wolfgangdigital-design/`
- Darkroom: `.skillui/reference-sites/darkroomagency-design/`

Live Playwright scroll screenshots are saved here:

- `.skillui/reference-sites/live-audit/soarwithus-000.png` through `soarwithus-100.png`
- `.skillui/reference-sites/live-audit/commonthreadco-000.png` through `commonthreadco-100.png`
- `.skillui/reference-sites/live-audit/vervaunt-000.png` through `vervaunt-100.png`
- `.skillui/reference-sites/live-audit/wolfgangdigital-000.png` through `wolfgangdigital-100.png`
- `.skillui/reference-sites/live-audit/darkroomagency-000.png` through `darkroomagency-100.png`

## Current Leading Social Baseline

The current homepage has a strong dark globe hero, then moves into conventional repeated sections:

- Trusted-by marquee
- Metrics grid
- Four service cards
- Case-study cards
- Principle list
- Insight cards

The visual issue is mostly below the hero: the page becomes too card-grid heavy, with simple reveal fades and little section-to-section drama. The references solve this with long-form editorial blocks, scroll-pinned systems, kinetic media strips, big proof sections, and horizontally moving case/media rails.

## Reference Findings

### Soar With Us

Source: `https://www.soarwithus.co/`

Raw data:

- Design report: `.skillui/reference-sites/soarwithus-design/DESIGN.md`
- Animation report: `.skillui/reference-sites/soarwithus-design/references/ANIMATIONS.md`
- Screens: `.skillui/reference-sites/soarwithus-design/screens/`
- Live screenshots: `.skillui/reference-sites/live-audit/soarwithus-*.png`

Detected stack:

- Theme: dark, bold ecommerce agency style
- Motion: CSS/Webflow transforms, 13 videos, 1 sticky process area
- Primary movement: vertical media rails in the hero and stacked process cards that move on scroll
- Section structure:
  1. Hero with fixed copy on the left and tall moving proof/media columns on the right
  2. Proof/authority block: "Proven. Preferred. Performance at scale."
  3. Testimonial proof strip
  4. Creative/video showcase
  5. Services split: Paid Ads and Performance Creative
  6. Long sticky process: "How our Creative Growth Engine works"
  7. Capability table
  8. Video testimonials
  9. Case-study cards

Useful for Leading Social:

- Best fit for the section immediately after hero: replace the current plain trusted-by strip and metrics grid with a stronger proof block.
- Best fit for services: turn the current four service cards into a sticky "growth engine" process with each pillar entering as the user scrolls.
- Best fit for motion: subtle vertical transform rails and pinned process cards, not excessive transitions.

Do not copy:

- Too much video density for our current asset set.
- The exact blue/yellow palette; Leading Social already has a stronger dark/chartreuse identity.

### Common Thread Collective

Source: `https://commonthreadco.com`

Raw data:

- Design report: `.skillui/reference-sites/commonthreadco-design/DESIGN.md`
- Animation report: `.skillui/reference-sites/commonthreadco-design/references/ANIMATIONS.md`
- Screens: `.skillui/reference-sites/commonthreadco-design/screens/`
- Live screenshots: `.skillui/reference-sites/live-audit/commonthreadco-*.png`

Detected stack:

- Theme: light, warm, editorial SaaS/commerce advisory
- Motion: Web Animations API with 12 active animations; 2 videos; sticky/compressed nav; carousel/ticker transforms
- Primary movement: animated hero/proof blocks, delayed translate-y reveal, ticker/carousel movement
- Section structure:
  1. Hero: "ecommerce profit partner"
  2. Productized operating system: "Introducing the Prophit Engine"
  3. Explainer/video module: "How it Works"
  4. Outcome stats: forecast-to-target, revenue growth, contribution margin
  5. Latest insights/editorial cards
  6. Logo carousel/ticker
  7. Experience/company footer content

Useful for Leading Social:

- Best fit for the metrics area: present metrics as outcome proof attached to an operating system, not as isolated cards.
- Best fit for insights: a more editorial "Latest Insights" treatment with stronger hierarchy.
- Best fit for interactions: sticky header compression, ticker/carousel movement, translate-y reveal on proof blocks.

Do not copy:

- Full light theme. It would fight the current hero unless used as a deliberate contrast band.
- Ecommerce software language too literally; Leading Social should stay agency/operator-led.

### Vervaunt

Source: `https://vervaunt.com/`

Raw data:

- Design report: `.skillui/reference-sites/vervaunt-design/DESIGN.md`
- Animation report: `.skillui/reference-sites/vervaunt-design/references/ANIMATIONS.md`
- Screens: `.skillui/reference-sites/vervaunt-design/screens/`
- Live screenshots: `.skillui/reference-sites/live-audit/vervaunt-*.png`

Detected stack:

- Theme: dark, minimal, restrained consultancy
- Motion: pure CSS, 12 sticky/parallax patterns, marquee keyframe
- Primary movement: sticky navigation and sticky content panels rather than flashy animation
- Section structure:
  1. Hero with navigation-forward consultancy positioning
  2. Featured clients with services tied to recognizable brands
  3. About section
  4. Logo wall: "Brands we have worked with"
  5. Testimonial
  6. B Corp/credibility content
  7. Labs/innovation content
  8. Awards
  9. Newsletter

Useful for Leading Social:

- Best fit for credibility: replace generic brand marquee with a more premium "featured clients / selected outcomes" band.
- Best fit for about/principles: use sticky text columns and reserved spacing instead of repeated cards.
- Best fit for motion: minimal sticky panels, clean marquee, and restrained fade/position changes.

Do not copy:

- Overly plain typography scale for the homepage. Leading Social needs more impact below the hero.
- Cookie/modal artifacts from the live scrape.

### Wolfgang Digital

Source: `https://www.wolfgangdigital.com/`

Raw data:

- Design report: `.skillui/reference-sites/wolfgangdigital-design/DESIGN.md`
- Animation report: `.skillui/reference-sites/wolfgangdigital-design/references/ANIMATIONS.md`
- Screens: `.skillui/reference-sites/wolfgangdigital-design/screens/`
- Live screenshots: `.skillui/reference-sites/live-audit/wolfgangdigital-*.png`

Detected stack:

- Theme: dark green/black with lime accents
- Motion: GSAP 3.13, ScrollTrigger, horizontal tickers, character/stat transforms, 1 background video
- Primary movement: cinematic hero video, rotating/cycling headline phrase, horizontal image strips, animated statistic characters
- Section structure:
  1. Hero with background video and cycling phrase: "Partners in Growth / Search Experts / Social Creators / CRM Architects"
  2. Authority statement: global agency winner, employee-owned
  3. Trusted brands
  4. Results/case-study rail
  5. One strategy / every channel service section
  6. Employee-owned proof
  7. Testimonials
  8. Awards
  9. News and insights

Useful for Leading Social:

- Best fit for case studies: turn current case-study cards into a horizontal results rail with stronger movement.
- Best fit for metrics: animate statistic characters/counters more deliberately.
- Best fit for service positioning: "One Strategy. Every Channel. Clear Results" maps well to Leading Social's acquisition, creative, retention, forecasting system.

Do not copy:

- Their green/purple palette.
- Full GSAP dependency unless we need it. Current app already has Framer Motion, which can reproduce most scroll-linked transforms.

### Darkroom

Source: `https://www.darkroomagency.com/`

Raw data:

- Design report: `.skillui/reference-sites/darkroomagency-design/DESIGN.md`
- Animation report: `.skillui/reference-sites/darkroomagency-design/references/ANIMATIONS.md`
- Screens: `.skillui/reference-sites/darkroomagency-design/screens/`
- Live screenshots: `.skillui/reference-sites/live-audit/darkroomagency-*.png`

Detected stack:

- Theme: mostly light/monochrome Framer layout with dark/media sections
- Motion: Web Animations API, 11 videos, 3 sticky areas, Framer-style transform matrices
- Primary movement: media mosaic, sticky service journey, subtle 3D/perspective card transforms, video section with "unmute" control
- Section structure:
  1. Hero: "Unlock the next stage of growth"
  2. Dense media/video mosaic
  3. Proof/data points
  4. Sticky service list: Amazon, TikTok Shop, Paid Media, Performance Creative, Retention, Website Optimization
  5. Video proof section
  6. Numbered thesis list: social commerce, marketplaces, creative, measurement, AI agents
  7. FAQ
  8. Global offices/contact footer

Useful for Leading Social:

- Best fit for service section: sticky service list with one active service at a time.
- Best fit for principles: numbered thesis list would be stronger than the current two-column principles grid.
- Best fit for proof: media mosaic could become a creative/ad-output wall if assets exist.

Do not copy:

- Full light Framer aesthetic unless used as one contrast section.
- Amazon/TikTok Shop-specific service framing unless the Leading Social offer explicitly includes marketplace management.

## One-By-One Fit Map For Leading Social

Recommended homepage order after the existing hero:

1. Proof bridge inspired by Soar + Common Thread
   - Replace current trusted-by strip plus isolated metrics grid.
   - Use a large statement: "Profit-led growth, proven across acquisition, creative, retention, and forecasting."
   - Add 3 to 4 metrics integrated into the statement rather than separate cards.
   - Motion: small y-reveal and number counters.

2. Logo/client credibility band inspired by Vervaunt
   - Keep the existing brands, but present them as a premium logo wall or sticky marquee.
   - Motion: slow marquee, no heavy animation.

3. Growth operating system inspired by Soar's sticky process
   - Replace current four service cards.
   - Left side sticky: "The system"
   - Right side scroll stack:
     - Paid Acquisition
     - Creative Strategy
     - Retention
     - Financial Forecasting
   - Motion: each service card translates/settles as scroll progresses; active item gets accent line.

4. Outcome/results rail inspired by Wolfgang
   - Replace current static case-study cards.
   - Use a horizontal case-study rail or wide editorial case blocks.
   - Motion: horizontal translate tied to scroll or a restrained carousel.
   - Keep current case study data from `lib/content.ts`.

5. Creative/proof media strip inspired by Soar + Darkroom
   - Add only if we have real ad creative/video assets.
   - Without real assets, use case-study images and performance snapshots; avoid fake media density.
   - Motion: vertical or horizontal media rail.

6. Operating principles inspired by Darkroom's numbered thesis list
   - Replace the current principles grid.
   - Use large numbered statements with short supporting copy.
   - Motion: sticky side label plus reveal per principle.

7. Insights inspired by Common Thread
   - Keep insights, but make it editorial: one featured insight + two smaller articles.
   - Motion: simple reveal and hover underline/arrow movement.

## Animation Vocabulary To Recreate

Use Framer Motion, already installed in this app, unless a future section truly requires GSAP.

- Scroll-linked transforms:
  - `useScroll` and `useTransform` for vertical media rails and horizontal result rails.
  - Use slow transforms: about 40px to 180px travel, not sudden fly-ins.
- Sticky process:
  - `position: sticky; top: 96px`
  - Cards enter with opacity and y transform.
  - Active progress line or index changes as sections enter.
- Marquee:
  - Keep CSS keyframe marquee for logos/short phrases.
  - Slow, linear, 30s to 45s.
- Statistic motion:
  - Keep existing counter component, but place it in bigger proof layouts.
- Hero carry-through:
  - Preserve the current globe hero.
  - Echo the hero's dark/chartreuse visual language in the rest of the homepage.

## Implementation Guardrails

- Do not implement until the section plan is approved.
- Do not copy reference sites literally; extract the structure and motion behavior.
- Keep Leading Social dark/chartreuse as the primary visual identity.
- Avoid turning the rest of the page into nested cards.
- Favor fewer, larger sections with real hierarchy and scroll behavior.
- Respect `prefers-reduced-motion`.
- Before coding, inspect Next docs in `node_modules/next/dist/docs/` as required by `AGENTS.md`.


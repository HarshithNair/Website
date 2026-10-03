# Harshith Nair — The Garage

Interactive React / Vinext portfolio with a photorealistic 2.5D workshop, object navigation, camera transitions and separate mobile inspection controls.

## Run
npm install
npm run dev -- --port 5187
npm run build

## Update content
Edit app/content.ts for profile, project order/featured status, titles, descriptions, thumbnails, tech, live URLs, achievements, experience, current work and coffee facts. Add the authentic résumé at public/resume/Harshith-Nair-Resume.pdf and set resume.available to true.

GitHub metadata is fetched for manually curated, non-fork projects only. The API route caches successful responses for six hours, sends cache headers, and falls back gracefully. Browser metadata is cached for six hours. Curated stories remain available offline from GitHub.

## Content provenance and remaining owner input
Project descriptions were checked against public GitHub repositories on 2026-10-02. Achievements and experience metrics were supplied by the owner. The final-year Thrust Vectoring Drone name was supplied by the owner. Its displayed drawing is explicitly conceptual, not a project schematic. Add actual prototype photos, specifications and video before claiming particular capabilities. KRU is a work in progress; the linked public repository is PairUp. Public GitHub profile calls Vaulted's recognition event HackwithMumbai 3.0, while the owner brief says HackWithIndia 3.0; the site follows the brief pending owner clarification. No personal anecdotes, project failures or results have been invented.

## Accessibility / performance
Keyboard object navigation, accessible dialogs, focus return, Escape, reduced motion, optimized WebP background, bounded animations, touch-friendly mobile room zones, optional ambient sound off by default. Room visual is generated environment artwork, not a photograph of the owner's actual workshop. It uses a lightweight 2.5D image stage rather than WebGL geometry.

## Art asset
public/garage.webp was generated with the built-in imagegen tool and converted to WebP. Prompt: Photorealistic front-on wide shot of a young inventor's garage late at night; charcoal concrete, warm amber lamps, cool laptop glow, worn wooden bench, laptop, notebook, smartphone, coffee, drone, whiteboard, trophies, employee badges, clipboard, sticky notes, wires and electronics. No person, interface labels, watermarks, cartoon or neon. Wide 16:9 cinematic environment with readable props.

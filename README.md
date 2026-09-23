Premier Model Management — Landing Page
A responsive, animation-rich landing page for a fictional fashion/model management agency ("Premier Model Management"), built with plain HTML, CSS, and JavaScript, and animated using GSAP + ScrollTrigger.
✨ Features
Scroll-triggered animations — sections fade, slide, and reveal as the user scrolls, powered by GSAP's `ScrollTrigger` plugin.
Hero video banner with an animated overlay and entrance animation on page load.
Infinite auto-scrolling model carousel showcasing model cards.
A–Z alphabet filter bar (UI only, not yet wired to filtering logic).
Pinned image reveal section using `scrub` and `pin` for a cinematic scroll effect.
Rotating circular text badge built with an inline SVG `textPath`.
Marquee ticker with the brand name.
Blog preview cards and a full footer with social links.
Mobile hamburger menu with a slide-in panel and staggered link animations.
Landscape-only notice for small/portrait devices.
🛠️ Built With
HTML5
CSS3 (Flexbox, custom fonts, responsive layout)
Vanilla JavaScript
GSAP 3.13 — core animation engine
GSAP ScrollTrigger — scroll-based animation triggers
Remix Icon — icon set
Google Fonts: `Dancing Script`, `Pacifico`, `Tinos`, `Geom`, `Playwrite CU Guides`
📁 Project Structure
```
.
├── index.html      # Page markup
├── styles.css      # Styling and layout
├── script.js       # GSAP animations and mobile menu logic
└── imgs/           # Model, editorial, and background images (not included in repo)
└── Videos/         # Hero background video (not included in repo)
```
> **Note:** The `imgs/` and `Videos/` folders referenced in `index.html` are not part of this repository export. You'll need to add your own media assets with matching filenames, or update the paths in `index.html` to point to your own assets.


🚀 Getting Started
No build step or package manager is required — this is a static site.
Clone the repository:
```bash
   git clone https://github.com/Sahild12/premier-pro-.git
   cd premier-pro-
   ```
Add your media assets into `imgs/` and `Videos/` folders (see file names referenced in `index.html`).
Open `index.html` directly in a browser, or serve it locally, e.g.:
```bash
   npx serve .
   ```
or with Python:
```bash
   python3 -m http.server
   ```


Visit `http://localhost:PORT` in your browser.
📱 Browser & Device Notes
The site is designed for landscape orientation; a full-screen warning appears on portrait/small-screen devices, prompting users to rotate.
Animations rely on `ScrollTrigger`, so JavaScript must be enabled.



🗺️ Roadmap / Known TODOs
Wire up the A–Z alphabet filter to actually filter models.
Make the mobile-menu / landscape-warning breakpoints more granular.
Add real routing or content for `Model`, `Woman/Man`, `Agency/Blog/Information` nav links (currently placeholders).
Optimize video/image assets for faster load.



📄 License
© 2026 Sahil Dalavi. All rights reserved.
---
Feel free to fork and adapt this template for your own portfolio or agency site.

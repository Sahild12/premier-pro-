# Premier Model Management

A fashion and model-management agency landing page concept built with **HTML5, CSS3, Vanilla JavaScript, and GSAP**. The page focuses on a polished editorial layout, large fashion imagery, smooth scrolling interactions, and animated content sections.

**Live Demo:** https://premier-pro.vercel.app/  
**GitHub Repository:** https://github.com/Sahild12/premier-pro-

## Project Overview

Premier Model Management is a front-end website concept for a fictional modeling agency. It presents the agency's visual identity through a hero video, model showcase, editorial sections, updates, blog previews, and a footer with social links.

This is a **static front-end project**. It does not currently include a backend, database, model-management dashboard, or real search/filter functionality.

## Features

- **Hero section:** Full-width fashion video banner with an overlay, headline, and entrance animation.
- **Animated model showcase:** Continuously scrolling model cards created with CSS animation.
- **A–Z navigation bar:** Alphabet interface is present visually; filtering models by letter is not implemented yet.
- **Scroll-based reveals:** GSAP ScrollTrigger animates selected headings, images, and content sections as they enter the viewport.
- **Pinned image reveal:** A scroll-scrubbed image expansion effect creates a cinematic transition.
- **Editorial content:** Fashion-story layouts, model updates, and blog preview cards.
- **Animated brand elements:** Rotating circular SVG text and a moving marquee ticker.
- **Mobile navigation:** Hamburger menu opens a slide-in panel with staggered link animations.
- **Responsive styling:** CSS breakpoints adjust layouts for tablet and mobile screen sizes.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, styling, responsive breakpoints, hover effects, and keyframe animations |
| Vanilla JavaScript | DOM interactions and animation setup |
| GSAP 3.13 | Entrance and section animations |
| GSAP ScrollTrigger | Scroll-based animations, pinning, and scrub effects |
| Remix Icon | Interface and social icons |
| Google Fonts | Typography |

GSAP, ScrollTrigger, Remix Icon, and Google Fonts are loaded using CDN/font links in the HTML file. A package manager or build step is not required for the current version.

## Project Structure

```text
premier-pro-/
├── premier-models/
│   ├── index.html       # Page structure and content
│   ├── styles.css       # Styling, responsive layouts, and CSS animations
│   ├── script.js        # GSAP animations and mobile-menu interactions
│   ├── imgs/            # Image assets referenced by the page (add locally)
│   └── Videos/          # Hero video referenced by the page (add locally)
├── .gitignore
└── README.md
```

> **Media assets:** The repository version does not include the `imgs/` and `Videos/` media folders, although `index.html` references files inside them. Add the required assets using the referenced paths and filenames, or update the paths in `index.html`. Without those assets, some images and the hero video will not appear.

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Sahild12/premier-pro-.git
   ```

2. Open the project folder:

   ```bash
   cd premier-pro-/premier-models
   ```

3. Add the required files to the `imgs/` and `Videos/` folders, keeping the paths in `index.html` consistent.

4. Start a local server. For example, with Python:

   ```bash
   # Windows
   py -m http.server 5500

   # macOS / Linux
   python3 -m http.server 5500
   ```

5. Open this address in your browser:

   ```text
   http://localhost:5500
   ```

You can also open `index.html` with the VS Code Live Server extension.

## Current Limitations

- The A–Z alphabet bar is a visual element; it does not filter the model cards yet.
- Several navigation items and footer links are placeholders and do not lead to complete pages.
- The page is a front-end concept only; there is no backend, database, authentication, or content-management system.
- Image and video assets need to be supplied locally because they are not included in the repository export.
- Large media files should be optimized before production deployment to improve loading performance.

## Future Improvements

- Implement working A–Z model filtering and model detail pages.
- Add real destinations for the navigation and footer links.
- Optimize images and video, and add appropriate lazy-loading behavior.
- Improve accessibility with keyboard support, semantic controls, and reduced-motion handling.
- Further test the layout and animations across devices and browsers.

## Author

**Sahil Dalavi**

- GitHub: https://github.com/Sahild12
- Live Project: https://premier-pro.vercel.app/

---

© 2026 Sahil Dalavi. All rights reserved.

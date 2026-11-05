# Moyinoluwa Adigun · Portfolio

A responsive React and Vite portfolio with light and dark themes, selected projects, an interactive portrait postcard, experience, and an EmailJS contact form.

## Development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## Content

- Page content and project links: `src/App.jsx`
- Styles and responsive layouts: `src/index.css`
- Contact form: `src/Component/Contact.jsx`
- Résumé: `public/Adigun-Moyinoluwa-CV.pdf`
- Portrait: `public/images/moyinoluwa.jpg`

Virtuo for Schools and Virtuo Facility use public product dashboard images from De-Virtuosphere, with light and dark variants. ChainStats uses the supplied light and dark website screenshots, matched to the portfolio theme. Buyly uses the supplied storefront screenshot. The live website and source links lead to the actual projects. Contact delivery uses the existing EmailJS service; its templates and allowed origins must remain configured in EmailJS. No database or backend credentials are needed by this website.

## Product image sources

Virtuo screenshots were sourced from the public [Schools](https://www.devirtuosphere.com/solutions/schools) and [Facility](https://www.devirtuosphere.com/solutions/facility) product pages. Portfolio copy describes a frontend team contribution.

## Motion and charts

Dashboard images retain their original layouts. SVG line and bar charts fill the existing empty plot areas with illustrative sample data; they are not production analytics. Charts draw on reveal and replay on hover. IntersectionObserver reveals, navigation state, and CSS interaction feedback respect reduced-motion settings.

# React-proPort

A sleek, animated, single-page portfolio built with React, TailwindCSS (v4), Framer Motion, and React Icons. Features light/dark mode with smooth transitions and section-based animations using a `SectionWrapper` HOC.

## Features

- Modular architecture: Hero, About, Projects, Skills, Testimonials, Pricing, Footer components
- Light/Dark mode toggle with animated icon transitions
- Smooth fade-in & slide-up animations on scroll
- Tailwind v4 integration with full dark mode support
- Responsive, minimalist design with clean whitespace and Inter font

## Setup

```bash
npm install
npm start
```

Ensure your `tailwind.config.js` includes:

```js
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: { preflight: true },
  theme: { extend: {} },
  plugins: [],
};
```

## Usage

- Toggle between Light/Dark modes using the header button.
- Sections animate on scroll and hover effects on interactive elements.

## Deployment

Build and deploy like any Create-React-App or Vite project. All assets, including the headshot, should be placed in the `public/` folder and referenced via root-relative URLs (`/assets/...`) for proper loading.

## Author

Imamul Kadir – modern, animated React portfolio.

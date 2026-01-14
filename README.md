# Personal Website

A professional personal website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Landing Page**: Hero section with name, social links, and scroll indicator
- **Details Page**: Five sections (MYSELF, SKILLS, PROJECTS, CV, CONNECT) with smooth scrolling navigation
- **Loading Screen**: Animated P23 logo with gradient glow
- **Page Transitions**: Dragon fire gradient effect between routes
- **Responsive Design**: Fully responsive across all device sizes
- **Form Validation**: Contact form with proper validation and error handling

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── MyselfSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── CVSection.jsx
│   │   │   └── ConnectSection.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── PageTransition.jsx
│   │   ├── NavigationBar.jsx
│   │   ├── SocialLinks.jsx
│   │   └── ScrollIndicator.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   └── Details.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- `navy`: Dark background colors
- `orange`: Primary accent color
- `pink`: Secondary accent color

### Content

- Update social links in `src/components/SocialLinks.jsx`
- Modify sections content in `src/components/sections/`
- Add your CV PDF to `public/cv.pdf` (or update the path in `CVSection.jsx`)

## Notes

- The contact form is frontend-only. Connect it to your backend API in `ConnectSection.jsx`
- Replace placeholder content with your actual information
- Update the CV download path in `CVSection.jsx` to point to your actual PDF

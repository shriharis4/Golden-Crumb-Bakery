# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Cake De Lite Website - Tech Stack & Structure

This is a modern responsive cake shop website built with:
- React (functional components)
- Tailwind CSS for styling
- React Router for navigation
- WhatsApp integration for ordering

## Project Structure

```
/src
  /components
    Navbar.jsx          - Navigation menu with logo, links, and CTA buttons
    HeroSection.jsx     - Hero section with headline and WhatsApp CTA
    CakeGrid.jsx        - Grid displaying cake categories with WhatsApp ordering
    WhatsAppButton.jsx  - Reusable WhatsApp button component
  /pages
    Home.jsx            - Homepage combining HeroSection and CakeGrid
    Gallery.jsx         - Image gallery with filtering and hover effects
    Contact.jsx         - Contact form with WhatsApp integration
  /utils
    whatsapp.js         - Utility for generating WhatsApp links
  App.jsx               - Main app component with routing
  main.jsx              - Entry point
  index.css             - Tailwind CSS base styles

## Development Commands

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Key Features Implemented

1. **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
2. **WhatsApp Integration**: Floating button and product-specific WhatsApp ordering
3. **Component Architecture**: Reusable components for Navbar, WhatsApp buttons, etc.
4. **Smooth Interactions**: Hover effects, transitions, and responsive grids
5. **Accessible Forms**: Proper labeling and focus states in contact form
6. **Image Gallery**: Filterable grid with hover zoom effects

## Styling Guidelines

Colors (defined in tailwind.config.cjs):
- Primary Yellow: #FFF4CC
- Secondary Yellow: #FFE8A3
- Dark Brown: #4A2C2A
- Caramel Brown: #8B5E3C
- Cream: #FFF8DC
- WhatsApp Green: #25D366

Typography:
- Headings: Fustat font
- Body: Inter/Noto Sans
- Logo: Schibsted Grotesk

Component Patterns:
- Buttons: Dark brown background with caramel brown hover
- Cards: White background with soft shadows and rounded corners
- Spacing: Consistent padding and margins using Tailwind spacing scale
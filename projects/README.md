
# GearUpToFit Landing Pages - Individual Projects

This directory contains 7 separate, standalone projects for each GearUpToFit landing page. Each project is designed to be deployed independently to its own GitHub repository and Cloudflare Pages project.

## Project Structure

Each project folder contains:
- `package.json` - Complete dependencies for that specific landing page
- `vite.config.ts` - Build configuration
- `index.html` - Entry point with SEO metadata
- `src/App.tsx` - App component that renders only that page
- `src/main.tsx` - Entry point
- `src/` folder structure for pages and components (to be copied from main project)

## Projects

1. **gearuptofit-home** - Main homepage
2. **gearuptofit-fitness** - Fitness landing page
3. **gearuptofit-running** - Running landing page
4. **gearuptofit-nutrition** - Nutrition landing page
5. **gearuptofit-weight-loss** - Weight loss landing page
6. **gearuptofit-calculators** - Calculators landing page
7. **gearuptofit-reviews** - Reviews landing page

## Next Steps

For each project:

1. **Copy Required Files**: Copy the necessary components, pages, and assets from the main project
2. **Create GitHub Repository**: Create a separate GitHub repo for each project
3. **Connect to Cloudflare Pages**: Set up individual Cloudflare Pages projects
4. **Configure Domains**: Set up custom domains/subdomains for each

## Build Commands

Each project uses standard Vite commands:
```bash
npm install
npm run dev      # Development
npm run build    # Production build
npm run preview  # Preview build
```

## Domain Strategy

Recommended domain structure:
- `gearuptofit.com` → Home
- `fitness.gearuptofit.com` → Fitness
- `running.gearuptofit.com` → Running
- `nutrition.gearuptofit.com` → Nutrition
- `weightloss.gearuptofit.com` → Weight Loss
- `calculators.gearuptofit.com` → Calculators
- `reviews.gearuptofit.com` → Reviews

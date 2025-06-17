
# Individual Landing Page Deployment Guide

This guide explains how to deploy each landing page as a separate Cloudflare Pages project.

## Prerequisites
- Cloudflare account
- GitHub repository with this code
- Domain configured in Cloudflare (optional)

## Deployment Steps

### 1. Build Individual Pages
Each landing page can be built individually using:

```bash
# Home page
npm run build -- --config vite.config.home.ts --outDir dist-home

# Fitness page
npm run build -- --config vite.config.fitness.ts --outDir dist-fitness

# Running page
npm run build -- --config vite.config.running.ts --outDir dist-running

# Nutrition page
npm run build -- --config vite.config.nutrition.ts --outDir dist-nutrition

# Weight Loss page
npm run build -- --config vite.config.weight-loss.ts --outDir dist-weight-loss

# Calculators page
npm run build -- --config vite.config.calculators.ts --outDir dist-calculators

# Reviews page
npm run build -- --config vite.config.reviews.ts --outDir dist-reviews
```

### 2. Cloudflare Pages Setup

For each landing page, create a separate Cloudflare Pages project:

#### A. Create Project
1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project"
3. Connect to your GitHub repository

#### B. Configure Build Settings
For each page, use these settings:

**Home Page:**
- Build command: `npm run build -- --config vite.config.home.ts --outDir dist-home`
- Build output directory: `dist-home`

**Fitness Page:**
- Build command: `npm run build -- --config vite.config.fitness.ts --outDir dist-fitness`
- Build output directory: `dist-fitness`

**Running Page:**
- Build command: `npm run build -- --config vite.config.running.ts --outDir dist-running`
- Build output directory: `dist-running`

**Nutrition Page:**
- Build command: `npm run build -- --config vite.config.nutrition.ts --outDir dist-nutrition`
- Build output directory: `dist-nutrition`

**Weight Loss Page:**
- Build command: `npm run build -- --config vite.config.weight-loss.ts --outDir dist-weight-loss`
- Build output directory: `dist-weight-loss`

**Calculators Page:**
- Build command: `npm run build -- --config vite.config.calculators.ts --outDir dist-calculators`
- Build output directory: `dist-calculators`

**Reviews Page:**
- Build command: `npm run build -- --config vite.config.reviews.ts --outDir dist-reviews`
- Build output directory: `dist-reviews`

### 3. Domain Configuration

#### Option 1: Subdomains
Set up custom domains for each page:
- `gearuptofit.com` → Home
- `fitness.gearuptofit.com` → Fitness
- `running.gearuptofit.com` → Running
- `nutrition.gearuptofit.com` → Nutrition
- `weightloss.gearuptofit.com` → Weight Loss
- `calculators.gearuptofit.com` → Calculators
- `reviews.gearuptofit.com` → Reviews

#### Option 2: Path-based (with redirects)
Use redirects in Cloudflare to route:
- `gearuptofit.com/fitness` → Fitness Cloudflare Pages
- `gearuptofit.com/running` → Running Cloudflare Pages
- etc.

### 4. WordPress Integration

#### Update Navigation
In your WordPress admin:
1. Go to Appearance → Menus
2. Update navigation links to point to new Cloudflare Pages URLs
3. Example: Change fitness link from `/fitness` to `https://fitness.gearuptofit.com`

#### Set Up Redirects
Add these redirects in WordPress or Cloudflare:
```
/fitness → https://fitness.gearuptofit.com
/running → https://running.gearuptofit.com
/nutrition → https://nutrition.gearuptofit.com
/weight-loss → https://weightloss.gearuptofit.com
/calculators → https://calculators.gearuptofit.com
/reviews → https://reviews.gearuptofit.com
```

### 5. SEO Configuration

Each HTML file includes:
- Proper meta tags
- Open Graph properties
- Canonical URLs
- Descriptive titles and descriptions

Update the canonical URLs in each HTML file to match your final domain setup.

### 6. Testing

After deployment:
1. Test each landing page loads correctly
2. Verify RSS feeds work across domains
3. Check mobile responsiveness
4. Test all internal links point back to WordPress content
5. Verify analytics tracking (if implemented)

## Benefits of This Approach

✅ **Solves 404 Issues**: Content remains on WordPress, only landing pages are replaced
✅ **Independent Deployments**: Update each page without affecting others
✅ **Better Performance**: Each page is optimized individually
✅ **Easier Maintenance**: Clear separation of concerns
✅ **SEO Friendly**: Proper canonical URLs and meta tags
✅ **Mobile Optimized**: Each page is perfectly responsive

## Troubleshooting

### RSS Feed Issues
If RSS feeds don't work across domains, add CORS headers in Cloudflare Pages:
```
_headers file:
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Access-Control-Allow-Origin: *
```

### Link Issues
Ensure all article links in the landing pages point to your WordPress domain:
- Example: `https://gearuptofit.com/article-slug`
- Not: `/article-slug` (relative links)


#!/bin/bash

echo "Building all landing pages..."

# Build Home page
echo "Building Home page..."
npm run build -- --config vite.config.home.ts --outDir dist-home

# Build Fitness page
echo "Building Fitness page..."
npm run build -- --config vite.config.fitness.ts --outDir dist-fitness

# Build Running page
echo "Building Running page..."
npm run build -- --config vite.config.running.ts --outDir dist-running

# Build Nutrition page
echo "Building Nutrition page..."
npm run build -- --config vite.config.nutrition.ts --outDir dist-nutrition

# Build Weight Loss page
echo "Building Weight Loss page..."
npm run build -- --config vite.config.weight-loss.ts --outDir dist-weight-loss

# Build Calculators page
echo "Building Calculators page..."
npm run build -- --config vite.config.calculators.ts --outDir dist-calculators

# Build Reviews page
echo "Building Reviews page..."
npm run build -- --config vite.config.reviews.ts --outDir dist-reviews

echo "All builds completed!"

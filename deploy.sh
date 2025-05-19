#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🏗️ Building the application..."
npm run build

# Create deployment directory
echo "📁 Creating deployment directory..."
rm -rf deploy
mkdir -p deploy

# Copy built files
echo "📋 Copying built files..."
cp -r dist/* deploy/

# Copy vercel.json
echo "📄 Copying vercel configuration..."
cp vercel.json deploy/

# Navigate to deployment directory
cd deploy

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!" 
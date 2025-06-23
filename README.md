# Immortal Ragdoll Games - Official Website

> "We make games that hit like a bat full of nails."

## 🎮 Project Overview

Professional website for Immortal Ragdoll Games - a Texas-based indie studio crafting stylized, emotional, character-driven survival horror experiences using Unreal Engine and AI-powered workflows.

**Live Site**: https://d2jntjhquosg39.cloudfront.net

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/immortal-ragdoll-games/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to AWS
npm run deploy
```

## 📁 Project Structure

```
immortal-ragdoll-website/
├── src/                    # Source code
│   ├── app/               # Next.js app directory
│   └── components/        # React components
├── tools/                 # Development tools
│   ├── scripts/          # Deployment scripts
│   └── monitoring/       # UI feedback system
├── docs/                  # Documentation
├── config/               # Configuration files
└── public/               # Static assets (SVGs only in git)
```

**Note**: Images and videos are hosted on AWS S3/CloudFront and excluded from git to keep repository lightweight.

## 🎯 Key Features

- **Hollywood VFX Expertise**: Founded by award-winning VFX artist Robert Alomar
- **AI-Powered Workflows**: Cutting-edge development processes
- **Visual Monitoring**: Automated UI feedback with CloudWatch Synthetics
- **Mobile Optimized**: Touch-friendly with 44px minimum targets
- **Performance**: Optimized images, lazy loading, hardware acceleration

## 📋 Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run deploy` - Deploy to AWS S3 + CloudFront
- `npm run monitor` - Run UI feedback analysis
- `npm run fix` - Apply automated UI fixes
- `npm run version:patch` - Bump patch version and deploy

## 🛠️ Tech Stack

- **Framework**: Next.js 15 + TypeScript
- **Styling**: Tailwind CSS + Custom animations
- **Deployment**: AWS S3 + CloudFront
- **Monitoring**: CloudWatch Synthetics
- **CI/CD**: Automated deployment scripts

## 🎨 Design System

- **Colors**: Black base with neon green/red/blue accents
- **Typography**: Inter + JetBrains Mono
- **Effects**: VHS/CRT glitch aesthetic
- **Animations**: Framer Motion with hardware acceleration

## 🚀 Deployment

The website automatically deploys to AWS CloudFront when changes are pushed to main branch.

**Infrastructure**:
- S3 Bucket: `immortal-ragdoll-games-website`
- CloudFront ID: `ETMGPIO632BKT`
- Region: `us-east-1`

## 📊 Monitoring

Automated visual testing runs every 30 minutes:
- Screenshots across mobile/tablet/desktop
- Performance metrics tracking
- Broken image detection
- Accessibility validation

## 🔄 Development Workflow

1. Create feature branch: `git checkout -b feature/improvement`
2. Make changes and test locally: `npm run dev`
3. Run monitoring: `npm run monitor`
4. Apply fixes if needed: `npm run fix`
5. Commit with conventional format: `git commit -m "feat: description"`
6. Push and create PR to main
7. Automatic deployment on merge

## 📝 Version History

- **v2.0.0** - Strategic rebrand with AI workflows and monitoring system
- **v1.0.0** - Initial release with Hollywood VFX credentials

## 🏷️ Current Project Focus

**Deadlight Manor** - Flagship survival horror experience combining Hollywood VFX expertise with cutting-edge AI-powered development workflows.

---

**© 2024 Immortal Ragdoll Games. All rights reserved.**
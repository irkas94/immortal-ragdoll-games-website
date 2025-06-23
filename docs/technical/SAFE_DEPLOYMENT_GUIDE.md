# Safe Deployment Guide - Immortal Ragdoll Games Website
**How to Safely Deploy Your Enhanced Website**  
**Date:** June 22, 2025  

## 🎯 DEPLOYMENT STRATEGY

### Current Situation:
- **Main repo:** `/home/irina/immortal-ragdoll-website` (clean, connected to GitHub)
- **Enhanced version:** `/home/irina/immortal-ragdoll-website-robert-version` (ready to deploy)
- **Deployment method:** Static export to GitHub Pages
- **Safety tools:** Comprehensive backup and rollback system

## 🔒 STEP-BY-STEP SAFE DEPLOYMENT

### Step 1: Create Backup and Development Branch
```bash
# Create backup before any changes
./safe-deployment-workflow.sh backup pre-robert-integration

# Create development branch for safe testing
cd /home/irina/immortal-ragdoll-website
./safe-deployment-workflow.sh dev-branch robert-integration
```

### Step 2: Copy Enhanced Files to Main Repository
```bash
# Copy the enhanced Games component and assets
cp -r /home/irina/immortal-ragdoll-website-robert-version/public/images/* /home/irina/immortal-ragdoll-website/public/images/
cp -r /home/irina/immortal-ragdoll-website-robert-version/public/videos/* /home/irina/immortal-ragdoll-website/public/videos/
cp /home/irina/immortal-ragdoll-website-robert-version/src/components/sections/Games.tsx /home/irina/immortal-ragdoll-website/src/components/sections/Games.tsx

# Copy project documentation (optional)
cp -r /home/irina/immortal-ragdoll-website-robert-version/project-docs /home/irina/immortal-ragdoll-website/
```

### Step 3: Test Locally
```bash
cd /home/irina/immortal-ragdoll-website
npm install  # Ensure dependencies are installed
npm run build  # Test build process
npm run dev    # Test locally at http://localhost:3000
```

### Step 4: Commit and Push Development Branch
```bash
cd /home/irina/immortal-ragdoll-website
git add .
git commit -m "Add enhanced Games section with professional assets

- Integrated Deadlight Manor character art and screenshots
- Added Dream game with Miyazaki-style artwork  
- Enhanced Games component with asset galleries
- Added project documentation and planning materials
- Optimized asset organization for web delivery"

git push origin robert-integration
```

### Step 5: Deploy to GitHub Pages
```bash
# Build and deploy
npm run build
git add out/
git commit -m "Build for deployment"
git push origin robert-integration

# If using GitHub Pages from gh-pages branch:
# npm run build && npx gh-pages -d out
```

### Step 6: Merge to Main (After Testing)
```bash
# Only after you've tested and approved the changes
./safe-deployment-workflow.sh merge robert-integration
```

## 🚨 EMERGENCY ROLLBACK

If anything goes wrong:
```bash
# Check available versions
./safe-deployment-workflow.sh status

# Rollback to previous version
./safe-deployment-workflow.sh rollback [tag-name]
```

## 📋 PRE-DEPLOYMENT CHECKLIST

### ✅ Before You Start:
- [ ] Main repository is clean (`git status`)
- [ ] You have backup and rollback scripts ready
- [ ] Enhanced version is complete and tested
- [ ] You understand the rollback process

### ✅ During Deployment:
- [ ] Create backup before changes
- [ ] Work in development branch
- [ ] Test locally before pushing
- [ ] Commit with descriptive messages
- [ ] Test deployed version before merging to main

### ✅ After Deployment:
- [ ] Verify website loads correctly
- [ ] Check all images and assets load
- [ ] Test on mobile and desktop
- [ ] Verify navigation works
- [ ] Create version tag for future reference

## 🌐 GITHUB PAGES CONFIGURATION

### If Using GitHub Pages:
1. **Repository Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` or `gh-pages`
4. **Folder:** `/` (root) or `/docs`

### Build Command for GitHub Pages:
```bash
npm run build  # Creates 'out' directory
# GitHub Pages will serve from 'out' directory
```

## 🛡️ DEVELOPMENT WORKFLOW SAFETY

### **Safest Development Practices:**

#### **1. Branch-Based Development**
```bash
# Always create feature branch before changes
git checkout -b feature/new-changes
# Make changes in branch
# Test: npm run dev
# Build test: npm run build  
# Commit: git add . && git commit -m "description"
# Only merge after testing
```

#### **2. Automatic Backup Before Changes**
```bash
# Create timestamped backup before major changes
cp -r current-folder current-folder-backup-$(date +%Y%m%d-%H%M%S)
```

#### **3. Safe Development Pipeline**
```
Local Dev → Test Build → Git Commit → Deploy to AWS → Verify Live
```

#### **4. Pre-Change Checklist**
- ✅ `git status` - Clean working directory
- ✅ Create backup of current state
- ✅ Work in feature branch
- ✅ Test locally with `npm run dev`
- ✅ Test build with `npm run build`
- ✅ Commit changes with descriptive message

#### **5. Never Do During Development**
- ❌ Deploy without testing build locally
- ❌ Make changes directly on live AWS
- ❌ Skip git commits for "small" changes
- ❌ Work without backups
- ❌ Push to main branch without testing
- ❌ Deploy during peak traffic hours

#### **6. Rollback Strategy**
```bash
# Git rollback
git revert HEAD
# or
git reset --hard HEAD~1

# AWS rollback (keep previous S3 version)
aws s3 sync backup-folder/ s3://bucket-name/ --delete

# Local rollback
rm -rf current-folder
mv backup-folder current-folder
```

#### **7. Testing Requirements**
- ✅ Local development server runs: `npm run dev`
- ✅ Production build succeeds: `npm run build`
- ✅ All images/videos load correctly
- ✅ Mobile responsiveness works
- ✅ No console errors
- ✅ Performance acceptable

## 🔧 TROUBLESHOOTING

### Common Issues:
1. **Images not loading:** Check file paths and case sensitivity
2. **Build errors:** Run `npm run lint` to check for issues
3. **Deployment fails:** Verify GitHub Pages settings
4. **Assets too large:** Optimize images before deployment

### Quick Fixes:
```bash
# Fix permissions
chmod +x *.sh

# Clear build cache
rm -rf .next out
npm run build

# Check deployment status
git log --oneline -5
```

## 📊 MONITORING DEPLOYMENT

### Check Website Status:
- **Local:** http://localhost:3000 (during development)
- **GitHub Pages:** https://irkas94.github.io/immortal-ragdoll-games-website/
- **Custom Domain:** (if configured)

### Verify Assets:
- All images load correctly
- Character art displays properly
- Game screenshots are visible
- Navigation works smoothly
- Mobile responsiveness maintained

---

**Remember:** This is a safe, reversible process. You can always rollback if needed. Take your time and test each step!

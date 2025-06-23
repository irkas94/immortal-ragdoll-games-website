# Git Workflow - Immortal Ragdoll Games Website

## 🌿 Branch Strategy

### Main Branches
- **`main`** - Production-ready code (auto-deploys to CloudFront)
- **`develop`** - Integration branch for features
- **`feature/*`** - Individual feature development

### Release Process
```bash
# Create feature branch
git checkout -b feature/ui-improvements

# Work on changes
git add .
git commit -m "feat: improve mobile navigation"

# Push and create PR
git push origin feature/ui-improvements

# Merge to develop, then main
```

## 📋 Commit Convention

### Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Code style changes
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples
```bash
git commit -m "feat(ui): add devlog section with AI workflow content"
git commit -m "fix(mobile): improve touch targets to 44px minimum"
git commit -m "perf(images): add lazy loading and optimization"
git commit -m "docs: update deployment procedures"
```

## 🚀 Deployment Workflow

### Automatic Deployment
```bash
# Push to main triggers deployment
git push origin main

# Manual deployment
npm run deploy
```

### Version Management
```bash
# Patch version (2.0.0 -> 2.0.1)
npm run version:patch

# Minor version (2.0.0 -> 2.1.0)  
npm run version:minor

# Major version (2.0.0 -> 3.0.0)
npm run version:major
```

## 🔄 Development Cycle

### 1. Feature Development
```bash
git checkout develop
git pull origin develop
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### 2. Code Review
- Create Pull Request to `develop`
- Review code changes
- Run automated tests
- Check UI with monitoring tools

### 3. Testing
```bash
# Test locally
npm run dev

# Run UI monitoring
npm run monitor

# Apply auto-fixes if needed
npm run fix
```

### 4. Release
```bash
# Merge to main
git checkout main
git merge develop
git push origin main

# Tag release
git tag -a v2.1.0 -m "Release v2.1.0: UI improvements"
git push origin v2.1.0
```

## 📊 Quality Gates

### Pre-commit Checks
- ESLint validation
- TypeScript compilation
- Build success

### Pre-deployment Checks
- Performance metrics
- Mobile responsiveness
- Accessibility compliance
- Image optimization

## 🔧 Useful Commands

```bash
# Check current status
git status

# View commit history
git log --oneline

# Create and switch branch
git checkout -b feature/branch-name

# Stash changes temporarily
git stash
git stash pop

# Reset to last commit
git reset --hard HEAD

# View differences
git diff

# Interactive staging
git add -p
```

## 🏷️ Tagging Strategy

### Version Tags
- `v2.0.0` - Major releases
- `v2.1.0` - Minor releases  
- `v2.1.1` - Patch releases

### Feature Tags
- `ui-v1` - UI milestone
- `monitoring-v1` - Monitoring system
- `mobile-v1` - Mobile optimization

## 🔒 Security

### Sensitive Files
- Never commit `.env` files
- Keep AWS credentials out of repo
- Use `.gitignore` for secrets

### Access Control
- Protected main branch
- Required reviews for PRs
- Automated security scanning
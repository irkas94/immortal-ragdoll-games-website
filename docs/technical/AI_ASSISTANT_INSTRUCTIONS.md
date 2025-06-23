# AI Assistant Instructions - Immortal Ragdoll Games Website Project
**Project Handoff Document**  
**Date:** June 22, 2025  
**Previous Assistant:** Amazon Q  
**Status:** Safe Development Environment Established  

## 🚨 CRITICAL SAFETY PROTOCOLS - READ FIRST

### ABSOLUTE REQUIREMENTS:
1. **NEVER modify** `/home/irina/immortal-ragdoll-website` without explicit permission
2. **NEVER push to GitHub** without user confirmation
3. **NEVER deploy to AWS** without user authorization
4. **ALWAYS work in** `/home/irina/immortal-ragdoll-website-robert-version` for development
5. **ALWAYS create backups** before making changes
6. **ALWAYS ask permission** before major modifications

### REPOSITORY STRUCTURE:
```
/home/irina/
├── immortal-ragdoll-website/                    ← MAIN REPO (GitHub connected) - DO NOT TOUCH
├── immortal-ragdoll-website-robert-version/     ← SAFE DEVELOPMENT AREA
├── Downloads/WebsiteAssets/                     ← SOURCE ASSETS
└── [various backup directories]
```

## 📋 PROJECT CONTEXT

### User Profile:
- **Name:** Irina (GitHub: irkas94)
- **Project:** Immortal Ragdoll Games website
- **Framework:** Next.js with TypeScript, Tailwind CSS, Framer Motion
- **Current Status:** Bare-bones website needs asset integration

### GitHub Repository:
- **URL:** https://github.com/irkas94/immortal-ragdoll-games-website
- **Branch:** main
- **Status:** Clean working tree (protected)
- **Authentication:** GitHub CLI configured as irkas94

### AWS Status:
- **Profile:** Configured in ~/.aws/
- **Deployment:** User controls all AWS actions
- **Safety:** No automatic deployments

## 🎮 ASSET INVENTORY

### Available Assets Location: `/home/irina/Downloads/WebsiteAssets/`

#### Deadlight Manor Game:
```
GAME_DeadlightManor/
├── Character360s/           ← 5 professional character designs
├── GameplayGIFs/           ← 3 large gameplay demonstrations
├── GameplayStills/         ← 8 screenshot stills
├── TheHollowed/            ← Enemy concept art
├── CharacterIntros/        ← 4 character intro videos
├── Children of the Glow/   ← Faction lore and art
├── TellShowRepeat_Trailer_v02.mp4  ← Main trailer (274MB)
└── Deadlight_Manor_Pitch_Deck.pptx ← Complete presentation
```

#### Dream Game:
```
GAME_Dream/
├── Levels/                 ← Multiple environment concepts
├── References/             ← Art references
├── [13+ Miyazaki-style illustrations]
├── DREAM Pitch.pdf         ← Game documentation
└── DREAM Presentation.pdf  ← Pitch materials
```

#### Business Assets:
- Business Card Front.jpg
- Logo and branding materials

## 🛠️ CURRENT IMPLEMENTATION STATUS

### Completed by Previous Assistant:
1. ✅ **Asset Analysis:** Complete inventory and categorization
2. ✅ **Safe Environment:** Development directory established
3. ✅ **Asset Organization:** Copied to robert-version with proper structure
4. ✅ **Documentation:** Comprehensive reports and analysis
5. ✅ **Safety Verification:** Main repository protected

### Ready for Implementation:
1. **Enhanced Games Component:** Draft created with real asset integration
2. **Asset Structure:** Organized in `/public/images/` subdirectories
3. **Component Architecture:** Prepared for character galleries, concept art showcases

## 🎯 IMPLEMENTATION ROADMAP

### Phase 1: Asset Integration (SAFE)
```bash
# Work in safe directory only
cd /home/irina/immortal-ragdoll-website-robert-version

# Assets already organized:
public/images/
├── deadlight-manor/
│   ├── characters/     ← Character 360° art
│   ├── concept-art/    ← Enemy and world concepts
│   └── gameplay/       ← Screenshots and stills
├── dream/
│   ├── levels/         ← Environment art
│   └── concept-art/    ← Miyazaki-style illustrations
└── screenshots/        ← Existing gameplay shots
```

### Phase 2: Component Enhancement
- **Games.tsx:** Enhanced with real assets (draft ready)
- **Character Gallery:** New component for character showcases
- **Concept Art Gallery:** New component for artwork display
- **Media Integration:** Video and GIF integration

### Phase 3: Content Enhancement
- **Game Descriptions:** Rich lore and mechanics
- **Character Profiles:** Individual character pages
- **Development Blog:** Progress updates section

## 🔧 TECHNICAL SPECIFICATIONS

### Framework Details:
- **Next.js:** Latest version with App Router
- **TypeScript:** Strict mode enabled
- **Styling:** Tailwind CSS with custom configurations
- **Animations:** Framer Motion for smooth transitions
- **Assets:** Optimized for web delivery

### Component Structure:
```
src/components/
├── ui/
│   └── Navigation.tsx
└── sections/
    ├── Hero.tsx
    ├── About.tsx
    ├── Games.tsx          ← MAIN ENHANCEMENT TARGET
    └── Contact.tsx
```

### Asset Optimization Requirements:
- **Images:** Compress for web (maintain quality)
- **Videos:** Consider lazy loading for large files
- **GIFs:** Optimize file sizes (currently 23-47MB each)

## 📝 DEVELOPMENT GUIDELINES

### Before Starting Work:
1. **Verify safe directory:** Ensure working in robert-version
2. **Create backup:** `cp -r robert-version robert-version-backup-$(date +%Y%m%d-%H%M%S)`
3. **Check Git status:** Confirm main repo is clean
4. **Review user requirements:** Always ask for clarification

### During Development:
1. **Test locally:** Use `npm run dev` for testing
2. **Optimize assets:** Compress large files appropriately
3. **Maintain responsiveness:** Test on mobile and desktop
4. **Document changes:** Update relevant documentation

### Before Deployment:
1. **User approval required:** Never deploy without permission
2. **Show preview:** Demonstrate changes locally first
3. **Backup strategy:** Ensure rollback capability
4. **Performance check:** Verify loading times

## 🎨 DESIGN PRINCIPLES

### Visual Style:
- **Theme:** Dark, horror-inspired with green accents
- **Typography:** Modern, clean fonts with horror elements
- **Colors:** Black backgrounds, white text, green highlights
- **Animations:** Smooth, professional transitions

### User Experience:
- **Navigation:** Intuitive section-based layout
- **Media:** High-quality visuals with proper loading
- **Performance:** Fast loading times despite rich content
- **Accessibility:** Proper alt tags and semantic HTML

## 🚀 DEPLOYMENT WORKFLOW

### Safe Deployment Process:
1. **Development:** Work in robert-version directory
2. **Testing:** Local testing with `npm run dev`
3. **User Review:** Show changes to user first
4. **User Approval:** Get explicit permission to proceed
5. **Backup Main:** Create backup of main repository
6. **Merge Changes:** Copy approved changes to main repo
7. **Git Operations:** User controls all commits and pushes
8. **AWS Deployment:** User controls all AWS operations

### Emergency Procedures:
- **Rollback:** Restore from backup immediately
- **Issue Reporting:** Document any problems encountered
- **User Communication:** Keep user informed of all actions

## 📞 COMMUNICATION PROTOCOLS

### Always Ask Permission For:
- Modifying main repository files
- Making Git commits or pushes
- AWS deployments or resource changes
- Installing new dependencies
- Major architectural changes

### Always Inform User About:
- What you're planning to do
- What files you're modifying
- Any potential risks or impacts
- Progress updates during work
- Completion status and next steps

## 🔍 QUALITY ASSURANCE

### Testing Checklist:
- [ ] Local development server runs without errors
- [ ] All images load properly with fallbacks
- [ ] Responsive design works on mobile/desktop
- [ ] Navigation functions correctly
- [ ] Performance is acceptable
- [ ] No console errors or warnings

### Code Quality:
- Follow existing code style and patterns
- Use TypeScript properly with type safety
- Implement proper error handling
- Add appropriate comments and documentation
- Maintain component modularity

## 📚 REFERENCE MATERIALS

### Key Files to Review:
1. `ASSET_ANALYSIS_REPORT.md` - Complete asset inventory
2. `SAFETY_REPORT.md` - Safety protocols and status
3. `src/components/sections/Games.tsx` - Current implementation
4. `package.json` - Dependencies and scripts

### Useful Commands:
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check Git status
git status

# Create backup
cp -r source destination-backup-$(date +%Y%m%d-%H%M%S)
```

## ⚠️ FINAL REMINDERS

1. **SAFETY FIRST:** User's main repository is sacred
2. **ASK PERMISSION:** When in doubt, ask the user
3. **DOCUMENT EVERYTHING:** Keep detailed records
4. **TEST THOROUGHLY:** Ensure quality before showing user
5. **RESPECT BOUNDARIES:** Follow user's preferences and limits

---

**Remember:** You are continuing work on a professional game studio website. The user has valuable assets and a working repository. Your job is to enhance safely while maintaining the user's control over their project.

**Previous Assistant Note:** All groundwork is complete. Assets are analyzed, organized, and ready for integration. The enhanced Games component draft is prepared. Focus on safe implementation and user satisfaction.

**Good luck!** 🎮

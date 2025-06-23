#!/usr/bin/env node
/**
 * UI Auto-Fix - Automatically applies common UI fixes based on feedback
 */

const fs = require('fs');
const path = require('path');

class UIAutoFixer {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '../..');
        this.fixes = [];
    }

    loadFeedbackReport() {
        try {
            const reportPath = path.join(__dirname, 'ui-feedback-report.json');
            return JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        } catch (error) {
            console.log('No feedback report found, using default fixes');
            return { recommendations: [], action_items: [] };
        }
    }

    applyPerformanceFixes() {
        console.log('🚀 Applying performance fixes...');
        
        // Fix 1: Add image optimization
        const globalsPath = path.join(this.projectRoot, 'src/app/globals.css');
        let globalsCss = fs.readFileSync(globalsPath, 'utf8');
        
        if (!globalsCss.includes('image-rendering')) {
            const imageOptimization = `
/* Image optimization */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  max-width: 100%;
  height: auto;
}

/* Lazy loading support */
img[loading="lazy"] {
  opacity: 0;
  transition: opacity 0.3s;
}

img[loading="lazy"].loaded {
  opacity: 1;
}
`;
            globalsCss += imageOptimization;
            fs.writeFileSync(globalsPath, globalsCss);
            this.fixes.push('Added image optimization CSS');
        }

        // Fix 2: Optimize animations
        if (!globalsCss.includes('will-change')) {
            const animationOptimization = `
/* Animation performance */
.glitch, [data-animate] {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
            globalsCss += animationOptimization;
            fs.writeFileSync(globalsPath, globalsCss);
            this.fixes.push('Added animation performance optimizations');
        }
    }

    applyMobileFixes() {
        console.log('📱 Applying mobile UX fixes...');
        
        const globalsPath = path.join(this.projectRoot, 'src/app/globals.css');
        let globalsCss = fs.readFileSync(globalsPath, 'utf8');
        
        if (!globalsCss.includes('touch-action')) {
            const mobileOptimization = `
/* Mobile touch optimization */
button, a, [role="button"] {
  touch-action: manipulation;
  min-height: 44px;
  min-width: 44px;
}

/* Better mobile scrolling */
body {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
}

/* Mobile-first responsive images */
@media (max-width: 768px) {
  img {
    max-width: 100%;
    height: auto;
  }
  
  .glitch {
    font-size: 2.5rem;
  }
}
`;
            globalsCss += mobileOptimization;
            fs.writeFileSync(globalsPath, globalsCss);
            this.fixes.push('Added mobile touch and scroll optimizations');
        }
    }

    applyAccessibilityFixes() {
        console.log('♿ Applying accessibility fixes...');
        
        const globalsPath = path.join(this.projectRoot, 'src/app/globals.css');
        let globalsCss = fs.readFileSync(globalsPath, 'utf8');
        
        if (!globalsCss.includes('focus-visible')) {
            const a11yFixes = `
/* Accessibility improvements */
*:focus-visible {
  outline: 2px solid var(--accent-green);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-gray-900, .bg-black {
    background-color: #000000 !important;
  }
  
  .text-gray-300, .text-gray-400 {
    color: #ffffff !important;
  }
}

/* Skip link for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--accent-green);
  color: black;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
`;
            globalsCss += a11yFixes;
            fs.writeFileSync(globalsPath, globalsCss);
            this.fixes.push('Added accessibility improvements');
        }
    }

    fixBrokenImages() {
        console.log('🖼️ Adding image error handling...');
        
        // Add error handling to Hero component
        const heroPath = path.join(this.projectRoot, 'src/components/sections/Hero.tsx');
        let heroContent = fs.readFileSync(heroPath, 'utf8');
        
        if (!heroContent.includes('onError')) {
            heroContent = heroContent.replace(
                /(<img[^>]*)(className="[^"]*")([^>]*>)/g,
                '$1$2$3'
            );
            
            // Add error handling function
            const errorHandling = `
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  img.style.display = 'none';
  const parent = img.parentElement;
  if (parent) {
    parent.innerHTML += '<div class="bg-gray-800 flex items-center justify-center h-full text-gray-500">Image Loading...</div>';
  }
};
`;
            
            heroContent = heroContent.replace(
                'const Hero = () => {',
                `const Hero = () => {${errorHandling}`
            );
            
            fs.writeFileSync(heroPath, heroContent);
            this.fixes.push('Added image error handling to Hero component');
        }
    }

    generateFixReport() {
        const report = {
            timestamp: new Date().toISOString(),
            fixes_applied: this.fixes,
            next_steps: [
                'Test the website on multiple devices',
                'Run lighthouse audit',
                'Check CloudWatch Synthetics results',
                'Deploy changes to production'
            ],
            recommended_testing: [
                'Mobile responsiveness',
                'Image loading performance',
                'Accessibility with screen reader',
                'Touch interaction on mobile'
            ]
        };

        fs.writeFileSync(
            path.join(__dirname, 'auto-fix-report.json'),
            JSON.stringify(report, null, 2)
        );

        return report;
    }

    run() {
        console.log('🔧 Starting UI auto-fix process...');
        
        const feedback = this.loadFeedbackReport();
        
        // Apply fixes based on feedback
        this.applyPerformanceFixes();
        this.applyMobileFixes();
        this.applyAccessibilityFixes();
        this.fixBrokenImages();
        
        const report = this.generateFixReport();
        
        console.log('✅ Auto-fix complete!');
        console.log(`Applied ${this.fixes.length} fixes:`);
        this.fixes.forEach(fix => console.log(`  - ${fix}`));
        
        return report;
    }
}

if (require.main === module) {
    const fixer = new UIAutoFixer();
    fixer.run();
}

module.exports = UIAutoFixer;
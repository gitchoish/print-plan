# Print & Plan Lab - Quick Start Guide

## 🚀 Project Overview

**Print & Plan Lab** is a modern web application offering free printable templates, guides, and tools for organization and productivity. Built with React 18, Vite, and deployed on Cloudflare Pages.

- **Live URL**: https://print-plan.pages.dev
- **Repository**: https://github.com/gitchoish/print-plan
- **Framework**: React 18 + Vite 6
- **Routing**: React Router DOM 6
- **Deployment**: Cloudflare Pages (auto-deploy from GitHub)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm 9+
- Git for version control
- GitHub account (for deployment)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/gitchoish/print-plan.git
cd print-plan

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:5173
```

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build locally
npm run preview

# Preview will be at http://localhost:4173
```

---

## 📂 Project Structure

```
print-plan/
├── src/
│   ├── components/
│   │   ├── ads/           # AdSense ad slot component
│   │   ├── layout/        # Header, Footer, Layout
│   │   ├── seo/           # Meta tags, structured data
│   │   └── ui/            # Reusable UI components
│   ├── pages/             # Main page components
│   ├── data/              # JSON data files
│   ├── styles/            # Global styles
│   ├── App.jsx            # Main routing component
│   └── main.jsx           # React entry point
├── public/
│   ├── sitemap.xml        # SEO sitemap (auto-generated)
│   ├── robots.txt         # Search engine instructions
│   ├── _redirects         # Cloudflare SPA routing
│   ├── images/            # Static images
│   ├── downloads/         # Downloadable files
│   └── printables/        # Template files
├── scripts/
│   ├── generate-sitemap.js        # Auto-generate sitemap
│   ├── generate-printables.js     # Template generator
│   ├── generate-descriptions.js   # Description generator
│   └── templates/                 # Template HTML files
├── dist/                  # Production build output
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
├── ADSENSE_SETUP_GUIDE.md # AdSense integration guide
└── README.md              # This file
```

---

## 🎯 Key Features

### Pages
1. **Home** (`/`) - Landing page with featured templates
2. **Templates** (`/templates`) - Browse all printable templates
3. **Guides** (`/guides`) - How-to guides and tutorials
4. **Blog** (`/blog`) - Articles and tips
5. **Tools** (`/tools`) - Useful utilities
6. **About** (`/about`) - About the site
7. **Contact** (`/contact`) - Contact form
8. **Privacy** (`/privacy-policy`) - Privacy policy
9. **Terms** (`/terms`) - Terms of service

### Templates (Featured)
- 30-Day Habit Tracker
- Weekly Cleaning Checklist
- Meal Planner & Grocery List
- Monthly Home Reset Plan
- Project To-Do Board
- And 11 more templates...

---

## 🛠️ Development Workflow

### Adding New Pages

1. Create component in `src/pages/`:
```jsx
// src/pages/NewPage.jsx
import React from 'react';
import SEO from '../components/seo/SEO';

const NewPage = () => (
    <>
        <SEO title="Page Title" description="Page description" />
        <div className="container">
            {/* Your content */}
        </div>
    </>
);

export default NewPage;
```

2. Add route in `src/App.jsx`:
```jsx
import NewPage from './pages/NewPage';

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

3. Add to navigation in `src/components/layout/Header.jsx`

### Modifying Templates

1. Edit template files in `scripts/templates/`
2. Regenerate descriptions:
```bash
node scripts/generate-descriptions.js
```
3. Update templates data:
```bash
node scripts/update-templates-json.js
```
4. Regenerate sitemap:
```bash
node scripts/generate-sitemap.js
```

### Styling

- Global styles: `src/styles/index.css`
- Component styles: Co-located CSS files (e.g., `src/pages/Home.css`)
- CSS Grid system with responsive classes
- Mobile-first approach

---

## 🔄 Deployment

### Automatic Deployment
- Push to `main` branch on GitHub
- Cloudflare Pages automatically deploys
- Site live at https://print-plan.pages.dev within seconds

### Manual Deployment
```bash
# Build
npm run build

# Verify dist/ folder contents
ls dist/

# Push to GitHub
git add .
git commit -m "Your message"
git push origin main

# Cloudflare deploys automatically
```

---

## 📱 SEO & Performance

### SEO Configuration
- Dynamic meta tags via React Helmet Async
- Sitemap auto-generation
- Robots.txt for crawler control
- Canonical URLs for duplicate prevention
- Structured data (JSON-LD) for rich snippets

### Performance Optimization
- Vite for optimal bundling
- Code splitting for lazy loading
- CSS minification (3.84 KB gzipped)
- JavaScript optimization (86 KB gzipped)
- Cloudflare CDN for global distribution
- Gzip compression enabled

### Monitoring
- See `MOBILE_PERFORMANCE_CHECKLIST.md` for detailed checklist

---

## 💰 Google AdSense

### Setup Instructions
See `ADSENSE_SETUP_GUIDE.md` for complete setup guide.

### Quick Start
1. AdSense component ready in `src/components/ads/AdSlot.jsx`
2. Ad positions defined: header, sidebar, footer, inline
3. Currently in placeholder mode for safety
4. Waiting for AdSense approval

### Enabling Ads
After approval:
1. Update Publisher ID in `AdSlot.jsx`
2. Add ad slot IDs
3. Set `isEnabled = true`
4. Add AdSense script to `index.html`
5. Deploy

---

## 📊 Analytics & Tools

### Recommended Tools
- **Google Analytics**: Track visitor behavior
- **Google Search Console**: Monitor search performance
- **Cloudflare Analytics**: Server-side metrics
- **AdSense Console**: Ad performance (after approval)

### Setup
1. Google Analytics: Add tracking ID to head
2. Search Console: Verify domain and submit sitemap
3. Cloudflare: Enabled by default

---

## 🐛 Troubleshooting

### Build Issues
```bash
# Clean node modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Cloudflare Deploy Not Working
- Check `_redirects` file exists in `public/`
- Verify `vite.config.js` has correct configuration
- Check GitHub branch is up to date

### SEO Not Showing
- Wait 24-48 hours for crawling
- Submit sitemap to Google Search Console
- Check robots.txt allows crawling

---

## 📚 Learning Resources

### React & Vite
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)

### Deployment
- [Cloudflare Pages](https://pages.cloudflare.com)
- [Cloudflare Docs](https://developers.cloudflare.com/pages)

### SEO & AdSense
- See `ADSENSE_SETUP_GUIDE.md`
- [Google AdSense Help](https://support.google.com/adsense)
- [Search Console Help](https://support.google.com/webmasters)

---

## 📞 Support

### Issues & Questions
1. Check GitHub issues: https://github.com/gitchoish/print-plan/issues
2. Review documentation files
3. Check error messages in browser console
4. Contact via Contact page

---

## 📋 Checklist for First-Time Setup

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Verify localhost loads correctly
- [ ] Check mobile responsiveness
- [ ] Build for production: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Review ADSENSE_SETUP_GUIDE.md
- [ ] Apply for Google AdSense
- [ ] Monitor GitHub for updates

---

## 🎉 Next Steps

1. **Development**: Customize templates, add content
2. **SEO**: Optimize meta descriptions, add backlinks
3. **AdSense**: Apply and get approved
4. **Growth**: Promote on social media, build audience
5. **Monetization**: Enable ads and earn revenue

---

**Last Updated**: January 11, 2026
**Status**: Production Ready

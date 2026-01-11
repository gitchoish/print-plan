import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://printplanlab.com'; // Change this to your actual domain
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Load data
const templates = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/templates.json'), 'utf8'));
const guides = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/guides.json'), 'utf8'));
const blogPosts = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/blog.json'), 'utf8'));

const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/templates', priority: 0.9, changefreq: 'daily' },
    { url: '/guides', priority: 0.9, changefreq: 'weekly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
    { url: '/tools', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.5, changefreq: 'yearly' },
    { url: '/contact', priority: 0.5, changefreq: 'yearly' },
    { url: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
    { url: '/terms', priority: 0.5, changefreq: 'yearly' },
];

const generateUrlEntry = (path, priority, lastmod) => {
    return `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${new Date(lastmod || Date.now()).toISOString()}</lastmod>
    <priority>${priority}</priority>
  </url>`;
};

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// Add Static Pages
staticPages.forEach(page => {
    sitemapContent += generateUrlEntry(page.url, page.priority);
});

// Add Templates
templates.forEach(template => {
    sitemapContent += generateUrlEntry(`/templates/${template.slug}`, 0.8, template.updatedAt);
});

// Add Guides
guides.forEach(guide => {
    sitemapContent += generateUrlEntry(`/guides/${guide.slug}`, 0.7, guide.updatedAt);
});

// Add Blog Posts
blogPosts.forEach(post => {
    sitemapContent += generateUrlEntry(`/blog/${post.slug}`, 0.7, post.updatedAt);
});

sitemapContent += `
</urlset>`;

fs.writeFileSync(SITEMAP_PATH, sitemapContent.trim());

console.log(`Sitemap generated with:
- ${staticPages.length} static pages
- ${templates.length} templates
- ${guides.length} guides
- ${blogPosts.length} blog posts
Saved to ${SITEMAP_PATH}`);

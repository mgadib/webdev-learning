const fs = require('fs');

// Read chapters data
const chaptersContent = fs.readFileSync('src/data/chapters.ts', 'utf8');

// Extract all chapter IDs with module IDs using regex
const chapterPattern = /id:\s*"([0-9]+\.[0-9]+)".*?moduleId:\s*([0-9]+)/gs;
const matches = [...chaptersContent.matchAll(chapterPattern)];

const chapters = [];
const seen = new Set();
for (const match of matches) {
  const chapterNum = match[1];
  const moduleId = match[2];
  const key = moduleId + '-' + chapterNum;
  if (!seen.has(key)) {
    seen.add(key);
    chapters.push({ moduleId, chapterNum });
  }
}

console.log('Found chapters:', chapters.length);

// Generate sitemap
const SITE_URL = 'https://webdev-learning.id';
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static pages
const staticPages = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/modul', priority: '0.9', freq: 'weekly' },
  { path: '/glosarium', priority: '0.8', freq: 'weekly' },
  { path: '/tentang', priority: '0.6', freq: 'monthly' },
];

for (const page of staticPages) {
  sitemap += '  <url>\n';
  sitemap += '    <loc>' + SITE_URL + page.path + '</loc>\n';
  sitemap += '    <changefreq>' + page.freq + '</changefreq>\n';
  sitemap += '    <priority>' + page.priority + '</priority>\n';
  sitemap += '  </url>\n';
}

// Module pages
for (let i = 1; i <= 27; i++) {
  const priority = i <= 4 ? '0.8' : i <= 8 ? '0.7' : '0.6';
  sitemap += '  <url>\n';
  sitemap += '    <loc>' + SITE_URL + '/modul/' + i + '</loc>\n';
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>' + priority + '</priority>\n';
  sitemap += '  </url>\n';
}

// Chapter pages
for (const chapter of chapters) {
  sitemap += '  <url>\n';
  sitemap += '    <loc>' + SITE_URL + '/modul/' + chapter.moduleId + '/chapter/' + chapter.chapterNum + '</loc>\n';
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>0.5</priority>\n';
  sitemap += '  </url>\n';
}

sitemap += '</urlset>';

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated with ' + (staticPages.length + 27 + chapters.length) + ' URLs');

const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const pd = require('pretty-data').pd;

const viewsDir = path.resolve(__dirname, '../src/views');
const configPath = path.resolve(__dirname, 'sitemap-routes.json');

const viewFolders = fs.readdirSync(viewsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
  .map(dirent => `/${dirent.name.toLowerCase()}`);

const featuresJsonPath = path.join(viewsDir, 'Features', 'Features.json');
let featureRoutes = [];
if (fs.existsSync(featuresJsonPath)) {
  const featuresData = JSON.parse(fs.readFileSync(featuresJsonPath, 'utf-8'));
  featureRoutes = featuresData.map(f => `/features/${f.slug}`);
}

let routes = [...viewFolders, ...featureRoutes];

let routeConfig = {};
if (fs.existsSync(configPath)) {
  routeConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

const sitemap = new SitemapStream({ hostname: 'https://www.silvernote.fr' });

routes.forEach(url => {
  const config = routeConfig[url] || {};
  sitemap.write({
    url: config.url || url,
    changefreq: config.changefreq || 'weekly',
    priority: config.priority !== undefined ? config.priority : 0.5,
    lastmod: config.lastmod || new Date().toISOString()
  });
});

sitemap.end();

streamToPromise(sitemap)
  .then(data => {
    const formatted = pd.xml(data.toString());
    fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), formatted);
    console.log('Sitemap généré avec succès !');
  })
  .catch(err => console.error(err));

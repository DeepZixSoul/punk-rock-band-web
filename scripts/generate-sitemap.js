import fs from 'fs'

const baseUrl = 'https://gayola.netlify.app'

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/biografia', priority: '0.8' },
  { path: '/conciertos', priority: '0.8' },
  { path: '/discografia', priority: '0.8' },
  { path: '/galeria', priority: '0.6' },
  { path: '/tienda', priority: '0.8' },
  { path: '/videos', priority: '0.6' },
  { path: '/contacto', priority: '0.5' },
]

const urls = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${baseUrl}${r.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.mkdirSync('dist', { recursive: true })
fs.writeFileSync('dist/sitemap.xml', xml)
console.log('✓ sitemap.xml generated')

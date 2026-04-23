import fs from "fs"
import path from "path"
import keywords from "./keywords.js"

const domain = "https://corn-project.vercel.app" // ⚠️ 改成你的域名

const urls = keywords.map(item => {
  return `
  <url>
    <loc>${domain}/${item.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
})

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`

const outputPath = path.resolve("public/sitemap.xml")

fs.writeFileSync(outputPath, xml)

console.log("✅ sitemap.xml generated!")
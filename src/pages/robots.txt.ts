import type { APIRoute } from 'astro'
import { SITE_URL } from '@/config/site'

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml

# Plain-language brief for AI agents: ${SITE_URL}/llms.txt
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  )

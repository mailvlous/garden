const ALLOWED_ORIGINS = new Set([
  "https://mailvelous-garden.pages.dev",
  "https://garden.mailvlous.github.io",
])

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    Vary: "Origin",
  }
}

function response(origin, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin),
  })
}

async function visitorHash(visitorId) {
  const bytes = new TextEncoder().encode(visitorId)
  const digest = await crypto.subtle.digest("SHA-256", bytes)
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("")
}

async function currentCount(database) {
  const result = await database.prepare("SELECT COUNT(*) AS count FROM visitors").first()
  return Number(result?.count ?? 0)
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || ""
    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response("Forbidden", { status: 403 })
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) })
    }

    const url = new URL(request.url)
    if (url.pathname !== "/count") return response(origin, { error: "Not found" }, 404)

    if (request.method === "GET") {
      return response(origin, { count: await currentCount(env.ANALYTICS) })
    }

    if (request.method !== "POST") {
      return response(origin, { error: "Method not allowed" }, 405)
    }

    let payload
    try {
      payload = await request.json()
    } catch {
      return response(origin, { error: "Invalid JSON" }, 400)
    }

    const visitorId = typeof payload?.visitorId === "string" ? payload.visitorId.trim() : ""
    if (!/^[A-Za-z0-9-]{16,80}$/.test(visitorId)) {
      return response(origin, { error: "Invalid visitor identifier" }, 400)
    }

    await env.ANALYTICS.prepare("INSERT OR IGNORE INTO visitors (visitor_hash) VALUES (?)")
      .bind(await visitorHash(visitorId))
      .run()

    return response(origin, { count: await currentCount(env.ANALYTICS) })
  },
}

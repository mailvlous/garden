const storageKey = "garden-visitor-id"

function getVisitorId(): string {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored) return stored
    const visitorId = crypto.randomUUID()
    localStorage.setItem(storageKey, visitorId)
    return visitorId
  } catch {
    return crypto.randomUUID()
  }
}

document.addEventListener("nav", () => {
  const counter = document.querySelector<HTMLElement>(".visitor-counter")
  const value = counter?.querySelector<HTMLElement>("[data-visitor-count]")
  const endpoint = counter?.dataset.endpoint
  if (!counter || !value || !endpoint) return

  fetch(`${endpoint}/count`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorId: getVisitorId() }),
  })
    .then(async (response) => {
      if (!response.ok) throw new Error("Visitor counter unavailable")
      return (await response.json()) as { count?: number }
    })
    .then(({ count }) => {
      value.textContent = typeof count === "number" ? count.toLocaleString() : "—"
    })
    .catch(() => {
      value.textContent = "—"
      counter.title = "Visitor count is temporarily unavailable"
    })
})

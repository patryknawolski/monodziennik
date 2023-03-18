import { loadPages } from '$lib/content'

export async function load({ url }) {
  const all = loadPages()

  const posts = all.sort((a, b) => new Date(b.date) - new Date(a.date))
  const pages = all.filter((x) => x.page).sort((a, b) => a.id.localeCompare(b.id))

  return {
    host: url.host,
    pathname: url.pathname,
    posts,
    pages,
  }
}

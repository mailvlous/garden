import { QuartzComponent, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/gardenStats.scss"

const excludedSlugs = new Set(["index", "graph", "404"])

function isArticle({ slug, filePath }: QuartzComponentProps["allFiles"][number]) {
  return Boolean(slug && filePath && !excludedSlugs.has(slug) && !slug.startsWith("tags/"))
}

const GardenStats: QuartzComponent = ({ allFiles, displayClass }) => {
  const articles = allFiles.filter(isArticle)
  const folders = new Set(
    articles.map((article) => article.slug!.split("/").slice(0, -1).join("/")).filter(Boolean),
  )
  const tags = new Set(articles.flatMap((article) => article.frontmatter?.tags ?? []))
  const words = articles.reduce(
    (total, article) => total + (article.text?.trim().match(/\S+/g)?.length ?? 0),
    0,
  )

  const stats = [
    [articles.length, "articles"],
    [folders.size, "folders"],
    [tags.size, "tags"],
    [words.toLocaleString("en-US"), "words written"],
  ]

  return (
    <section class={classNames(displayClass, "garden-stats")} aria-labelledby="garden-stats-title">
      <h2 id="garden-stats-title">Garden Statistics</h2>
      <p class="garden-stats-description">A snapshot of everything growing here.</p>
      <dl class="garden-stats-grid">
        {stats.map(([value, label]) => (
          <div class="garden-stat">
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

GardenStats.css = style

export default (() => GardenStats) satisfies () => QuartzComponent

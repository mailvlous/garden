// @ts-ignore
import script from "./scripts/visitorCounter.inline"
import style from "./styles/visitorCounter.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

interface Options {
  endpoint: string
}

export default ((opts: Options) => {
  const VisitorCounter: QuartzComponent = () => (
    <section class="visitor-counter" data-endpoint={opts.endpoint} aria-live="polite">
      <span class="visitor-count" data-visitor-count>
        —
      </span>
      <span class="visitor-label">unique visitors</span>
    </section>
  )

  VisitorCounter.css = style
  VisitorCounter.afterDOMLoaded = script
  return VisitorCounter
}) satisfies QuartzComponentConstructor<Options>

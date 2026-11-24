import { classNames } from "../util/lang"
import { concatenateResources } from "../util/resources"
import GardenStats from "./GardenStats"
import VisitorCounter from "./VisitorCounter"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/gardenSummary.scss"

interface Options {
  endpoint: string
}

export default ((opts: Options) => {
  const VisitorCount = VisitorCounter({ endpoint: opts.endpoint })
  const Stats = GardenStats()

  const GardenSummary: QuartzComponent = (props: QuartzComponentProps) => (
    <section
      class={classNames(props.displayClass, "garden-summary")}
      aria-label="Garden statistics"
    >
      <VisitorCount {...props} />
      <Stats {...props} />
    </section>
  )

  GardenSummary.css = concatenateResources(VisitorCount.css, Stats.css, style)
  GardenSummary.afterDOMLoaded = VisitorCount.afterDOMLoaded
  return GardenSummary
}) satisfies QuartzComponentConstructor<Options>

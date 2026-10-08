import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import style from "./styles/graphLink.scss"

const GraphLink: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
  return (
    <a
      class={classNames(displayClass, "graph-link")}
      href={resolveRelative(fileData.slug!, "graph" as SimpleSlug)}
      aria-label="Graph View"
      title="Graph View"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="5" cy="12" r="2.25" />
        <circle cx="12" cy="5" r="2.25" />
        <circle cx="19" cy="10" r="2.25" />
        <circle cx="14" cy="19" r="2.25" />
        <path d="M6.7 10.4 10.4 6.7M14.1 6.6l3 2.1m.5 3.3-2.5 5M7 13.2l5.1 4.4m-.3-10.4 1.7 9.6" />
      </svg>
    </a>
  )
}

GraphLink.css = style

export default (() => GraphLink) satisfies QuartzComponentConstructor

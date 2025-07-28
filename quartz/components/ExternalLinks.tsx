// quartz/components/ExternalLinks.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// import { i18n } from "../i18n" // <--- REMOVE OR COMMENT OUT THIS LINE, WE DON'T NEED IT HERE NOW

interface Options {
  links: {
    text: string
    link: string
    icon?: string
  }[]
  title?: string
}

export default ((opts?: Options) => {
  function ExternalLinks({ displayClass }: QuartzComponentProps) {
    // SIMPLIFIED: Directly use the provided title or a default string
    const title = opts?.title || "Links" // Changed default to "Links" if no title is provided

    const links = opts?.links || []

    if (links.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "external-links")}>
        {title && <h3>{title}</h3>}
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return ExternalLinks
}) satisfies QuartzComponentConstructor<Options>
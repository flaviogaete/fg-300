import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// You need to import each standard component you use from ./quartz/components individually
// AND import your custom ExternalLinks component.
import { PageTitle, Spacer, Darkmode, Search, Explorer, ReaderMode } from "./quartz/components"
import ExternalLinks from "./quartz/components/ExternalLinks"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    PageTitle(), // Use directly as imported
    Component.MobileOnly(Spacer()), // Use directly as imported
    Component.Flex({
      components: [
        {
          Component: Search(), // Use directly as imported
          grow: true,
        },
        { Component: Darkmode() }, // Use directly as imported
        { Component: ReaderMode() }, // Use directly as imported
      ],
    }),
    Explorer(), // Use directly as imported
    // <--- THIS IS THE KEY CHANGE HERE: Use your custom ExternalLinks component
    ExternalLinks({
      title: "My Links", // Optional title for the section
      links: [
        {
          text: "My Personal Website",
          link: "https://your-personal-website.com/", // Make sure to update this URL
          // icon: "link", // Removed for simplicity, as it requires an Icon component
        },
        {
          text: "My GitHub Profile",
          link: "https://github.com/flaviogaete",
          // icon: "github", // Removed for simplicity
        },
        // Add more links here as needed
      ],
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    PageTitle(), // Use directly as imported
    Component.MobileOnly(Spacer()), // Use directly as imported
    Component.Flex({
      components: [
        {
          Component: Search(), // Use directly as imported
          grow: true,
        },
        { Component: Darkmode() }, // Use directly as imported
      ],
    }),
    Explorer(), // Use directly as imported
    // <--- ADDING ExternalLinks HERE FOR LIST PAGES TOO
    ExternalLinks({
      title: "My Links", // Optional title for the section
      links: [
        {
          text: "My Personal Website",
          link: "https://your-personal-website.com/", // Make sure to update this URL
        },
        {
          text: "My GitHub Profile",
          link: "https://github.com/flaviogaete",
        },
      ],
    }),
  ],
  right: [],
}
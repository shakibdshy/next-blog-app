import { routes } from "./routes"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/",
    },
    {
      title: "Resources",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/",
    },
  ],
  dashboardMenu: [
    {
      title: "Dashboard",
      href: routes.DASHBOARD,
    },
    {
      title: "Profile",
      href: routes.PROFILE,
    },
    {
      title: "Post",
      href: routes.POST,
    },
    {
      title: "Billing",
      href: routes.BILLING,
    },
    {
      title: "Settings",
      href: routes.SETTINGS,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

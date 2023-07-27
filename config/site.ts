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
      icon: "homeIcon",
    },
    {
      title: "Profile",
      href: routes.PROFILE,
      icon: "profileIcon",
    },
    {
      title: "Post",
      href: routes.POST,
      icon: "postIcon",
    },
    {
      title: "Billing",
      href: routes.BILLING,
      icon: "billingIcon",
    },
    {
      title: "Settings",
      href: routes.SETTINGS,
      icon: "settingsIcon",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

import PrimarySidebar from "@/components/dashboard/primary-sidebar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="container mx-auto px-0">
        <div className="flex gap-6">
          <PrimarySidebar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  )
}
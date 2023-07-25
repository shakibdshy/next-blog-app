'use client'

import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Menu } from "lucide-react"
import { useBreakpoint } from "@/hooks/usebreakpoints"
import MobileMenuDropdown from "./dropdown/mobile-dropdown"
import OffCanvasMenu from "./dialog/offcanves-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const breakpoint = useBreakpoint();
  const isMobile = ['lg', 'xl', '2xl', '3xl', '4xl'].includes(breakpoint);
  return (
    <div className="flex w-full justify-between gap-6 md:gap-10 lg:w-auto lg:justify-start">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {
        isMobile && items?.length ? (
          <div className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-muted-foreground hover:text-foreground flex items-center text-sm font-medium",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        )
          :
          <OffCanvasMenu
            className="flex min-h-screen flex-col justify-between"
            icon={<Menu />}
            render={<MobileMenuDropdown />}
          />
      }
    </div>
  )
}

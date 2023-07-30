'use client'

import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex w-full justify-between gap-6 md:gap-10 lg:w-auto lg:justify-start">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <div className="hidden gap-6 lg:flex">
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
    </div>
  )
}

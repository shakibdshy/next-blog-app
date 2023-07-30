'use client'

import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../icons'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function PrimarySidebar() {
  const path = usePathname()

  return (
    <aside className='border-border sticky left-0 top-0 w-56 border-r border-solid px-3'>
      <nav className='flex flex-col gap-4'>
        {
          siteConfig.dashboardMenu.map((item) => {
            // @ts-ignore
            const Icon = Icons[item.icon || "arrowRight"]
            return (
              <Link key={item.href} href={item.href} className={cn("hover:bg-primary hover:text-primary-foreground flex h-10 items-center rounded-md px-4 py-2 text-sm font-semibold tracking-wider transition-all", path === item.href ? "bg-primary text-primary-foreground" : "")}>
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            )
          })
        }
      </nav>
    </aside>
  )
}

export default PrimarySidebar
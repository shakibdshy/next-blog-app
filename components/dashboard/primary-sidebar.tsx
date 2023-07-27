import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { Icons } from '../icons'
import { cn } from '@/lib/utils'

function PrimarySidebar() {
  return (
    <aside className='border-border sticky left-0 top-0 w-56 border-r border-solid px-3 py-6'>
      <nav className='flex flex-col gap-4'>
        {
          siteConfig.dashboardMenu.map((item) => {
            // @ts-ignore
            const Icon = Icons[item.icon || "arrowRight"]
            return (
              <Link href={item.href} className="hover:bg-primary hover:text-muted flex h-10 items-center rounded-md px-4 py-2 transition-all">
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
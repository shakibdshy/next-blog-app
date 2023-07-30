'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/layout/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Modal } from "@/components/ui/modal"
import { CustomTabs } from "@/components/ui/tab"
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import { useUser } from "@clerk/nextjs"
import { tabsContent, tabsList } from "@/config/tab-content"
import { Dropdown } from "@/components/dropdown/dropdown"
import { ProfileDropdown } from "@/components/dropdown/profile-dropdown"
import { Menu } from "lucide-react"
import MobileMenuDropdown from "@/components/dialog/mobile-offcanves"
import OffCanvasMenu from "@/components/dialog/offcanves-menu"

export function SiteHeader() {
  const { user } = useUser();

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="hidden flex-1 items-center justify-end space-x-4 lg:flex">
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-4">
            <SignedIn>
              {/* <UserButton afterSignOutUrl="/" /> */}
              <Dropdown
                variant="image"
                title="Profile"
                image={user?.imageUrl}
                render={
                  <ProfileDropdown />
                }
              />
            </SignedIn>
            <SignedOut>
              {/* <SignInButton mode='modal'>
                <Button>
                  Sign in
                </Button>
              </SignInButton> */}
              <Modal
                title="Sign in"
                titleClassName={buttonVariants({ variant: "default", className: 'hover:text-primary-foreground' })}
                render={
                  <CustomTabs
                    defaultValue="signIn"
                    tabsList={tabsList}
                    tabsContent={tabsContent}
                  />
                }
              />
            </SignedOut>
          </div>
        </div>

        <div className="block lg:hidden">
          <OffCanvasMenu
            className="flex min-h-screen flex-col justify-between"
            icon={<Menu />}
            render={<MobileMenuDropdown />}
          />
        </div>
      </div>
    </header>
  )
}

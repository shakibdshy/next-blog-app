'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Modal } from "@/components/ui/modal"
import { CustomTabs } from "@/components/ui/tab"
import SignIn from "@/components/user-auth/signin"
import SignUp from "@/components/user-auth/signup"
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import { useUser } from "@clerk/nextjs"
import { Dropdown } from "./ui/dropdown"
import { ProfileDropdown } from "./profile-dropdown"
import { useBreakpoint } from "@/hooks/usebreakpoints"

const tabsList = [
  { name: "Sign in", value: "signIn" },
  { name: "Sign up", value: "signUp" },
]

const tabsContent = [
  { value: "signIn", render: <SignIn /> },
  { value: "signUp", render: <SignUp /> },
]

export function SiteHeader() {
  const { user } = useUser();
  const breakpoint = useBreakpoint();
  const isMobile = ['sm'].includes(breakpoint);

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        {
          !isMobile && (
            <div className="flex flex-1 items-center justify-end space-x-4">
              <div className="flex items-center space-x-1">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.gitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </div>
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
          )
        }
        
      </div>
    </header>
  )
}

'use client'

import { useClerk, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import { Github, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SheetHeader, SheetTitle, SheetClose } from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { Icons } from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/modal"
import { CustomTabs } from "@/components/ui/tab"
import { tabsContent, tabsList } from "@/config/tab-content";

export default function MobileMenuDropdown() {
  const { signOut } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();

  function handleSignOut() {
    signOut()
    redirect('/')
  }

  return (
    <>
      <div>
        <SheetHeader className="border-border border-b border-solid pb-4">
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div>
          <ul>
            {
              siteConfig?.mainNav.map((menu) => (
                <li key={menu?.href} className="flex flex-col">
                  <Link href={menu?.href} className="hover:text-primary py-2.5">
                    {menu?.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="border-border mt-2.5 flex items-center gap-3 border-t border-solid py-2.5">
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </div>
      </div>
      {
        isLoaded || isSignedIn ? (
          <>
            <SignedIn>
              <div className="border-border flex items-center justify-between gap-3 border-t border-solid pt-5">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className={cn("h-8 w-8")}>
                      <AvatarImage
                        src={user?.imageUrl}
                        alt="Image"
                      />
                      <AvatarFallback>Image</AvatarFallback>
                    </Avatar>
                  </Button>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                    <p className="text-muted-foreground text-xs leading-none">{user?.emailAddresses[0]?.emailAddress}</p>
                  </div>
                </div>
                <div className="cursor-pointer" onClick={handleSignOut}>
                  <LogOut />
                </div>
              </div>
            </SignedIn>
            <SignedOut>
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
          </>
        ) : null
      }
    </>
  )
}
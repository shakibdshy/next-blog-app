'use client'

import { useClerk, useUser } from "@clerk/nextjs";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from "@/components/ui/dropdown-menu";
import { Github } from "lucide-react";
import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function ProfileDropdown() {
  const { signOut } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded ||!isSignedIn) {
    return null;
  }

  function handleSignOut() {
    signOut()
    redirect('/')
  }

  return (
    <>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{user.fullName}</p>
          <p className="text-muted-foreground text-xs leading-none">{user.emailAddresses[0].emailAddress}</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        {
          siteConfig.dashboardMenu.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="cursor-pointer">
        <span onClick={handleSignOut}>
          Log out
        </span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </>
  )
}

'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownProps } from "@/types"

export function Dropdown({ variant = "image", title, image, icon, imageClassName, titleClassName, className, render }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {variant === "image"
          ?
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className={cn("h-8 w-8", imageClassName)}>
              <AvatarImage
                src={image || ''}
                alt={title || ''}
              />
              <AvatarFallback>Image</AvatarFallback>
            </Avatar>
          </Button>
          :
          variant === "icon"
            ?
            <Button variant="ghost">
              {icon}
            </Button>
            :
            <Button className={cn(titleClassName)}>{title}</Button>
        }

      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-56", className)}>
        {render}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

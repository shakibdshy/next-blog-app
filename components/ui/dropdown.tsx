'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

interface DropdownProps {
  title?: string,
  image?: string,
  titleClassName?: string,
  imageClassName?: string,
  variant: "text" | "image",
  className?: string,
  render?: React.ReactNode
}

export function Dropdown({ variant = "image", title, image, imageClassName, titleClassName, className, render }: DropdownProps) {
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
          <Button className={cn(titleClassName)}>{title}</Button>
        }
        
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-56", className)}>
        {render}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

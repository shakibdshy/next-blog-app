'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface AuthModalProps { 
  title?: string,
  titleClassName?: string,
  className?: string,
  render?: React.ReactNode
}

export function Modal({ title, titleClassName, className, render }: AuthModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={cn(titleClassName)}>{title}</Button>
      </DialogTrigger>
      <DialogContent className={cn("p-8 sm:max-w-[466px]", className)}>
        {render}
      </DialogContent>
    </Dialog>
  )
}

'use client'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { OffcanvasProps } from "@/types"

export default function OffCanvasMenu({position= "left", icon, render, className}: OffcanvasProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          {icon}
        </Button>
      </SheetTrigger>
      <SheetContent side={position} className={cn("p-4", className)}>
        {render}
      </SheetContent>
    </Sheet>
  )
}
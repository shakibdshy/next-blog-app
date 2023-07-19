'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface TabsProps {
  defaultValue: string,
  tabsClassName?: string,
  tabsListClassName?: string,
  tabsList: ListProps[],
  tabsContent: ContentProps[],
}

interface ListProps {
  name: string,
  value: string
}

interface ContentProps {
  value: string,
  render: React.ReactNode,
}

export function CustomTabs({ defaultValue, tabsClassName, tabsListClassName, tabsList, tabsContent }: TabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={cn("w-[400px]", tabsClassName)}>
      <TabsList className={cn("grid w-full grid-cols-2", tabsListClassName)}>
        {tabsList.map((tab) =>
          <TabsTrigger value={tab.value}>{tab.name}</TabsTrigger>)
        }
      </TabsList>
      {
        tabsContent.map((tab) =>
          <TabsContent value={tab.value}>{tab.render}</TabsContent>)
      }
    </Tabs>
  )
}

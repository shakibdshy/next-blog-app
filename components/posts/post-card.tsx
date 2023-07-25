"use client"

import { placeholder } from "@/lib/placeholder"
import Image from "../ui/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface PostCardProps {
  variant?: "default" | "grid",
  title?: string,
  slug?: string,
  date?: string,
  content?: string,
  image?: string,
  categories?: string[],
  className?: string,
}

function PostCard({ variant = "default", className }: PostCardProps) {
  return (
    <>
      {
        variant === "grid" ? (
          <div className={cn("grid grid-flow-col grid-rows-2 gap-8", className)}>
            <div className="row-span-3">
              <div className="relative mb-6 h-[244px] w-full">
                <Image
                  src={placeholder}
                  alt="Post"
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div>
                <div className="text-primary-700 flex items-center gap-1 pb-2 text-sm font-semibold">
                  <span>Olivia Rhye</span>
                  <span className="before:bg-primary-700 relative pl-2 before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-1 before:w-1 before:rounded-full">20 Jan 2022</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="hover:text-primary-700 text-xl font-semibold leading-snug md:text-2xl"><Link href='/'>UX review presentations</Link></h3>
                    <p className="text-muted-foreground pt-1.5">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <ul className="flex items-center gap-2 pt-6 text-sm font-medium">
                      <li><Link className="bg-primary-50 text-primary-700 border-primary-200 rounded-2xl border border-solid px-2.5 py-0.5 leading-tight" href='/'>Design</Link></li>
                      <li><Link className="rounded-2xl border border-solid border-indigo-200 bg-indigo-50 px-2.5 py-0.5 leading-tight text-indigo-700" href='/'>Research</Link></li>
                      <li><Link className="rounded-2xl border border-solid border-pink-200 bg-pink-50 px-2.5 py-0.5 leading-tight text-pink-700" href='/'>Presentation</Link></li>
                    </ul>
                  </div>
                  <Link className="hover:text-primary-700" href='/'><ArrowUpRight /></Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative h-[200px] w-full">
                <Image
                  src={placeholder}
                  alt="Post"
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div>
                <div className="text-primary-700 flex items-center gap-1 pb-1.5 text-sm font-semibold">
                  <span>Olivia Rhye</span>
                  <span className="before:bg-primary-700 relative pl-2 before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-1 before:w-1 before:rounded-full">20 Jan 2022</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="hover:text-primary-700 text-xl font-semibold leading-snug md:text-2xl"><Link href='/'>UX review presentations</Link></h3>
                    <p className="text-muted-foreground pt-1">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <ul className="flex items-center gap-2 pt-6 text-sm font-medium">
                      <li><Link className="bg-primary-50 text-primary-700 border-primary-200 rounded-2xl border border-solid px-2.5 py-0.5 leading-tight" href='/'>Design</Link></li>
                      <li><Link className="rounded-2xl border border-solid border-indigo-200 bg-indigo-50 px-2.5 py-0.5 leading-tight text-indigo-700" href='/'>Research</Link></li>
                      <li><Link className="rounded-2xl border border-solid border-pink-200 bg-pink-50 px-2.5 py-0.5 leading-tight text-pink-700" href='/'>Presentation</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative h-[200px] w-full">
                <Image
                  src={placeholder}
                  alt="Post"
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div>
                <div className="text-primary-700 flex items-center gap-1 pb-1.5 text-sm font-semibold">
                  <span>Olivia Rhye</span>
                  <span className="before:bg-primary-700 relative pl-2 before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-1 before:w-1 before:rounded-full">20 Jan 2022</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="hover:text-primary-700 text-xl font-semibold leading-snug md:text-2xl"><Link href='/'>UX review presentations</Link></h3>
                    <p className="text-muted-foreground pt-1">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <ul className="flex items-center gap-2 pt-6 text-sm font-medium">
                      <li><Link className="bg-primary-50 text-primary-700 border-primary-200 rounded-2xl border border-solid px-2.5 py-0.5 leading-tight" href='/'>Design</Link></li>
                      <li><Link className="rounded-2xl border border-solid border-indigo-200 bg-indigo-50 px-2.5 py-0.5 leading-tight text-indigo-700" href='/'>Research</Link></li>
                      <li><Link className="rounded-2xl border border-solid border-pink-200 bg-pink-50 px-2.5 py-0.5 leading-tight text-pink-700" href='/'>Presentation</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3", className)}>
            <div>
              <div className="relative mb-6 h-[418px] w-full">
                <Image
                  src={placeholder}
                  alt="Post"
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="text-primary-700 flex items-center gap-1 pb-1.5 text-sm font-semibold">
                <span>Olivia Rhye</span>
                <span className="before:bg-primary-700 relative pl-2 before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-1 before:w-1 before:rounded-full">20 Jan 2022</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="hover:text-primary-700 text-xl font-semibold leading-snug md:text-2xl"><Link href='/'>UX review presentations</Link></h3>
                  <p className="text-muted-foreground pt-1">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                  <ul className="flex items-center gap-2 pt-6 text-sm font-medium">
                    <li><Link className="bg-primary-50 text-primary-700 border-primary-200 rounded-2xl border border-solid px-2.5 py-0.5 leading-tight" href='/'>Design</Link></li>
                    <li><Link className="rounded-2xl border border-solid border-indigo-200 bg-indigo-50 px-2.5 py-0.5 leading-tight text-indigo-700" href='/'>Research</Link></li>
                    <li><Link className="rounded-2xl border border-solid border-pink-200 bg-pink-50 px-2.5 py-0.5 leading-tight text-pink-700" href='/'>Presentation</Link></li>
                  </ul>
                </div>
                <Link className="hover:text-primary-700" href='/'><ArrowUpRight /></Link>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

export default PostCard
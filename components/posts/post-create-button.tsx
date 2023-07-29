"use client"

import { createPostAction } from '@/app/action/post-action'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Disc3, Plus } from 'lucide-react'

function PostCreateButton() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleClicked() {
    setIsLoading(true)

    const { post } = await createPostAction()

    setIsLoading(false)

    router.refresh()    
    router.push(`/dashboard/post/${post?.id}`)
  }

  return (
    <Button
      onClick={handleClicked}
      className={cn(isLoading && 'cursor-not-allowed opacity-60')}
      disabled={isLoading}
    >
      {isLoading ? (
        <Disc3 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Plus className="mr-2 h-4 w-4" />
      )}
      New Post
    </Button>
  )
}

export default PostCreateButton
import { GanttChartSquare, Plus } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function NoPostFound() {
  return (
    <div className='animate-in fade-in-50 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center'>
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        <div className='bg-muted flex h-20 w-20 items-center justify-center rounded-full'>
          <GanttChartSquare className='h-10 w-10' />
        </div>
        <h2 className="mt-6 text-xl font-semibold">No posts created</h2>
        <p className="text-muted-foreground mb-8 mt-2 text-center text-sm font-normal leading-6">You do not have any posts yet. Start creating content.</p>
        <Button variant="outline"><Plus className="mr-2 h-4 w-4" />New Post</Button>
      </div>
    </div>
  )
}

export default NoPostFound
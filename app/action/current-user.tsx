'use server'

import { currentUser } from '@clerk/nextjs'

export async function getUser() {
  const user = await currentUser()

  if (!user) return null
}

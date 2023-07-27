'use client'

import { useUser } from '@clerk/nextjs'
import React from 'react'

function Profile() {
  const { user } = useUser()

  console.log('user', user)

  return (
    <div>page</div>
  )
}

export default Profile
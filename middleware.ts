import { authMiddleware, withClerkMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server'

export default withClerkMiddleware(req => {
  return NextResponse.next()
})

// Stop Middleware running on static files
export const config = {
  matcher: '/((?!_next/image|_next/static|favicon.ico).*)'
}
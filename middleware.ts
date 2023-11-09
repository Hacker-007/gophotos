import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
	beforeAuth: req => {
		if (
			req.nextUrl.pathname === '/' &&
			[...req.nextUrl.searchParams.keys()].length === 0
		) {
			req.nextUrl.search = 'location=Boston%2C+MA&hours=2&price%5Blow%5D=100&price%5Bhigh%5D=500&sort=rating&order=desc&page=1'
			return NextResponse.redirect(req.nextUrl)
		}
	},
	publicRoutes: ['/photographer/(.*)'],
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

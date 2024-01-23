import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
	beforeAuth: async req => {
		req.cookies.set('latitude', req.geo?.latitude || '42.37203')
		req.cookies.set('longitude', req.geo?.longitude || '-71.08841')
		if (req.nextUrl.pathname !== '/waitlist') {
			const email = req.nextUrl.searchParams.get('email')
			const verified = req.cookies.get('verified')
			if (
				email === null ||
				(verified !== undefined && verified.value !== email)
			) {
				return NextResponse.redirect(`${req.nextUrl.origin}/waitlist`)
			} else if (verified === undefined) {
				const {
					data,
				} = await fetch(
					`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/waitlists/${email}`,
					{
						headers: {
							'Authorization': `Bearer ${process.env.SERVER_SECRET}`
						}
					}
				).then(res => res.json())
				if (data === null || !data.isVerified) {
					return NextResponse.redirect(
						`${req.nextUrl.origin}/waitlist`
					)
				}

				req.cookies.set('verified', email)
			}
		}
	},
	publicRoutes: ['/', '/waitlist'],
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

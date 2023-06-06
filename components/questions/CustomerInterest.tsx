'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CustomerInterest() {
	const router = useRouter()
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			router.push('/')
		}, 3000)

		return () => clearTimeout(timeoutId)
	}, [router])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className="flex h-full w-full flex-col items-center justify-center"
		>
			<div className="inline-flex w-full md:w-1/2 flex-col items-center">
				<p className="font-medium">Thank you!</p>
				<p className="mb-7 text-center text-sm text-gray-600">
					Keey an eye out for further information on how to sign up
					and offer your services. We&apos;ll be sending updates your
					way soon, so please stay tuned! If you have any questions or
					concerns, don&apos;t hesitate to reach out. We&apos;re here
					to help!
				</p>
			</div>
		</motion.div>
	)
}
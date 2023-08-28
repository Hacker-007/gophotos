'use client'

import { useState } from 'react'

import LoadingButton from '@/components/LoadingButton'

export default function AcceptQuotePanel() {
	const [isLoading, setIsLoading] = useState(false)
	const acceptQuote = async () => {
		setIsLoading(true)
		await new Promise(resolve => setTimeout(resolve, 2000))
		setIsLoading(false)
	}

	return (
		<div className="rounded-md border border-green-700 bg-gray-50 p-3 max-w-md mt-3">
			<h3 className="text-sm font-medium">Are you sure?</h3>
			<p className="mt-1 text-xs text-gray-600">
				Accepting the quote acknowledges that you are responsible for
				the full payment of $4510 following the completion of the event.
			</p>
			<LoadingButton
				className="mt-3 w-full justify-center border border-green-700 p-2 text-xs text-green-700 hover:bg-gray-100"
				onClick={acceptQuote}
				isLoading={isLoading}
				loader={{
					color: 'green',
				}}
			>
				Confirm
			</LoadingButton>
		</div>
	)
}

'use client'

import { useState } from 'react'

import LoadingButton from '@/components/LoadingButton'

export default function RejectQuotePanel() {
	const [isLoading, setIsLoading] = useState(false)
	const rejectQuote = async () => {
		setIsLoading(true)
		await new Promise(resolve => setTimeout(resolve, 2000))
		setIsLoading(false)
	}

	return (
		<div className="rounded-md border border-red-700 bg-gray-50 p-3 max-w-md mb-3">
			<h3 className="text-sm font-medium">Are you sure?</h3>
			<p className="mt-1 text-xs text-gray-600">
				Rejecting the quote will cancel the contract and prevent any
				further communication with this photographer regarding this
				particular event.
			</p>
			<LoadingButton
				className="mt-3 w-full justify-center border border-red-700 p-2 text-xs text-red-700 hover:bg-gray-100"
				onClick={rejectQuote}
				isLoading={isLoading}
				loader={{
					color: 'red',
				}}
			>
				Confirm
			</LoadingButton>
		</div>
	)
}

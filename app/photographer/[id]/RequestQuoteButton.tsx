'use client'

import { useState } from 'react'

import LoadingButton from '@/components/LoadingButton'

export default function RequestQuoteButton() {
	const [isLoading, setIsLoading] = useState(false)
	const sendQuoteRequest = async () => {
		setIsLoading(true)
		await new Promise(resolve => setTimeout(resolve, 2000))
		setIsLoading(false)
	}

	return (
		<LoadingButton
			className="mt-2 w-full justify-center border border-black p-2 text-sm hover:bg-gray-100"
			onClick={sendQuoteRequest}
			isLoading={isLoading}
			loader={{
				color: 'black',
			}}
		>
			Request quote
		</LoadingButton>
	)
}

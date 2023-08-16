'use client'

import LoadingButton from '@/components/LoadingButton'

export default function RequestQuoteButton() {
	const sendQuoteRequest = async () => {
		await new Promise(resolve => setTimeout(resolve, 2000))
	}

	return (
		<LoadingButton
			handleClick={sendQuoteRequest}
			className="mt-2 w-full justify-center border border-black p-2 text-sm hover:bg-gray-100"
		>
			Request quote
		</LoadingButton>
	)
}

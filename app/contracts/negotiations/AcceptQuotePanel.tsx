'use client'

import LoadingButton from '@/components/LoadingButton'

export default function AcceptQuotePanel() {
	const acceptQuote = async () => {
		await new Promise(res => setTimeout(res, 2000))
	}

	return (
		<div className="rounded-md border border-green-700 bg-gray-50 p-3">
			<h3 className="text-sm font-medium">Are you sure?</h3>
			<p className="mt-1 text-xs text-gray-600">
				Accepting the quote acknowledges that you are responsible for
				the full payment of $4510 following the completion of the event.
			</p>
			<LoadingButton
				handleClick={acceptQuote}
				color="green"
				className="mt-3 w-full justify-center border border-green-700 p-2 text-xs text-green-700 hover:bg-gray-100"
			>
				Confirm
			</LoadingButton>
		</div>
	)
}

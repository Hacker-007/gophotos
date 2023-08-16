'use client'

import LoadingButton from '@/components/LoadingButton'

export default function RejectQuotePanel() {
	const rejectQuote = async () => {
		await new Promise(res => setTimeout(res, 2000))
	}

	return (
		<div className="rounded-md border border-red-700 bg-red-50 p-3">
			<h3 className="text-sm font-medium">Are you sure?</h3>
			<p className="mt-1 text-xs">
				Rejecting the quote will cancel the contract and prevent any
				further communication with this photographer regarding this
				particular event.
			</p>
			<LoadingButton
				handleClick={rejectQuote}
				color="red"
				className="mt-2 w-full justify-center border border-red-700 p-2 text-xs text-red-700 hover:bg-red-100"
			>
				Confirm
			</LoadingButton>
		</div>
	)
}

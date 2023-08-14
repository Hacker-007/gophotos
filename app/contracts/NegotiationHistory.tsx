import AccountCircle from '@/components/AccountCircle'
import Button from '@/components/Button'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function NegotiationHistory() {
	return (
		<div className="rounded-md border border-gray-300 bg-gray-50 p-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-2">
					<AccountCircle />
					<h3 className="text-sm font-medium">Bob Ross</h3>
				</div>
				<p className="text-xs text-gray-500">
					August 14, 2023 <span>&middot;</span> 10:25 AM
				</p>
			</div>
			<p className="mt-2 text-xs text-gray-600">
				You received a quote from Bob Ross for a photography event on
				September 30, 2023. You can either accept the quote, provide a
				counter quote, or reject the photographer.
			</p>
			<div className="rounded-md p-2">
				<Button
					className="border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-normal"
					leftIcon={<CurrencyDollarIcon className='w-4 h-4 text-gray' />}
				>
					Received quote
				</Button>
			</div>
		</div>
	)
}

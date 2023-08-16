import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

import AccountCircle from '@/components/AccountCircle'
import Pill from '@/components/Pill'
import Button from '@/components/Button'

export default function NegotiationHistory() {
	return (
		<div className="space-y-3 rounded-md border border-gray-300 bg-gray-50 p-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-2">
					<AccountCircle />
					<h3 className="text-sm font-medium">Bob Ross</h3>
				</div>
				<p className="text-xs text-gray-500">
					August 14, 2023 <span>&middot;</span> 10:25 AM
				</p>
			</div>
			<p className="text-xs text-gray-600">
				You received a quote from Bob Ross for a photography event on
				September 30, 2023. You can either accept the quote, provide a
				counter quote, or cancel the negotiation.
			</p>
			<div className="space-y-3 rounded-md border border-gray-300 bg-white p-2">
				<Pill
					className="w-min whitespace-nowrap border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
					color="gray"
					leftIcon={
						<CurrencyDollarIcon className="text-gray h-4 w-4" />
					}
				>
					Proposed quote
				</Pill>
				<div className="grid items-center">
					<div className="col-start-1">
						<h3 className="text-xs font-medium text-gray-500">
							Proposed
						</h3>
						<p className="text-sm font-medium">$4100</p>
					</div>
					<p className="col-start-2 font-medium text-gray-500"> + </p>
					<div className="col-start-3">
						<h3 className="text-xs font-medium text-gray-500">
							Service fee
						</h3>
						<p className="text-sm font-medium">$410</p>
					</div>
					<p className="col-start-4 font-medium text-gray-500"> = </p>
					<div className="col-start-5">
						<h3 className="text-xs font-medium text-gray-500">
							Total price
						</h3>
						<p className="text-sm font-medium">$4510</p>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-between space-x-2">
				<Button className="w-full justify-center border border-green-700 px-3 py-2 text-xs text-green-700">
					Accept
				</Button>
				<Button className="w-full justify-center border border-yellow-700 px-3 py-2 text-xs text-yellow-700">
					Counter
				</Button>
				<Button className="w-full justify-center border border-red-700 px-3 py-2 text-xs text-red-700">
					Reject
				</Button>
			</div>
		</div>
	)
}

import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs'

import Pill from '@/components/Pill'
import AccountCircle from '@/components/AccountCircle'
import RejectQuotePanel from './RejectQuotePanel'
import AcceptQuotePanel from './AcceptQuotePanel'
import CounterQuotePanel from './CounterQuotePanel'

export default function ProposalCard() {
	return (
		<Tabs defaultValue="counter-proposal">
			<div className="relative">
				<div className="absolute left-0 top-5 -z-10 -ml-0.5 h-[calc(100%+1.5rem)] w-5 rounded-xl border-2 border-gray-300">
					<div className="absolute left-1/2 top-0 h-[calc(100%+1.5rem)] w-2.5 -translate-y-2 rounded-xl border-2 border-transparent bg-white" />
				</div>
				<div className="ml-3">
					<TabsContent value="accept-proposal">
						<AcceptQuotePanel />
					</TabsContent>
					<TabsContent value="counter-proposal">
						<CounterQuotePanel />
					</TabsContent>
					<TabsContent value="reject-proposal">
						<RejectQuotePanel />
					</TabsContent>
				</div>
			</div>
			<div className="ml-3 mt-3 space-y-3 rounded-md border border-gray-300 bg-gray-50 p-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-x-2">
						<AccountCircle />
						<div className="flex flex-col">
							<h3 className="text-sm font-medium">Bob Ross</h3>
							<p className="text-xs text-gray-500">
								Aug 14, 2023 <span>&middot;</span> 10:25 AM
							</p>
						</div>
					</div>
				</div>
				<p className="text-xs text-gray-600">
					You received a quote from Bob Ross for a photography event
					on September 30, 2023. You can either accept the quote,
					provide a counter quote, or cancel the negotiation.
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
						<p className="col-start-2 font-medium text-gray-500">
							{' '}
							+{' '}
						</p>
						<div className="col-start-3">
							<h3 className="text-xs font-medium text-gray-500">
								Service fee
							</h3>
							<p className="text-sm font-medium">$410</p>
						</div>
						<p className="col-start-4 font-medium text-gray-500">
							{' '}
							={' '}
						</p>
						<div className="col-start-5">
							<h3 className="text-xs font-medium text-gray-500">
								Total price
							</h3>
							<p className="text-sm font-medium">$4510</p>
						</div>
					</div>
				</div>
				<TabsList asChild>
					<div className="flex w-full justify-between space-x-2">
						<TabsTrigger
							value="accept-proposal"
							className="w-full justify-center rounded-md border border-green-700 px-3 py-2 text-xs font-medium text-green-700"
						>
							Accept
						</TabsTrigger>
						<TabsTrigger
							value="counter-proposal"
							className="w-full justify-center rounded-md border border-gray-400 px-3 py-2 text-xs font-medium text-black"
						>
							Counter
						</TabsTrigger>
						<TabsTrigger
							value="reject-proposal"
							className="w-full justify-center rounded-md border border-red-700 px-3 py-2 text-xs font-medium text-red-700"
						>
							Reject
						</TabsTrigger>
					</div>
				</TabsList>
			</div>
		</Tabs>
	)
}

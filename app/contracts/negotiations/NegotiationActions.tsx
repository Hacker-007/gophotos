import { ReactNode } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs'

import AcceptQuotePanel from './AcceptQuotePanel'
import CounterQuotePanel from './CounterQuotePanel'
import RejectQuotePanel from './RejectQuotePanel'

type NegotiationActionsProps = {
	children?: ReactNode
}

export default function NegotiationActions({
	children,
}: NegotiationActionsProps) {
	return (
		<Tabs activationMode="manual">
			<TabsContent value="accept-proposal">
				<AcceptQuotePanel />
			</TabsContent>
			<TabsContent value="counter-proposal">
				<CounterQuotePanel />
			</TabsContent>
			<TabsContent value="reject-proposal">
				<RejectQuotePanel />
			</TabsContent>
			{children}
			<TabsList asChild>
				<div className="mt-2 flex max-w-md justify-between space-x-2">
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
		</Tabs>
	)
}

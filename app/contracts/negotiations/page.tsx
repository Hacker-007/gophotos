import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

import Pill from '@/components/Pill'
import NegotiationActions from './NegotiationActions'
import NegotiationProposal from './NegotiationProposal'

export default function NegotiationHistory() {
	return (
		<div className="space-y-3">
			<NegotiationActions>
				<NegotiationProposal
					className="mt-3"
					prelude="You received a quote from Bob Ross for a photography event on
				September 30, 2023. You can either accept the quote, provide a
				counter quote, or cancel the negotiation."
					pill={
						<Pill
							className="w-min whitespace-nowrap border border-gray-300 font-medium"
							color="lightGray"
							leftIcon={
								<CurrencyDollarIcon className="text-gray h-4 w-4" />
							}
						>
							Proposed quote
						</Pill>
					}
				/>
			</NegotiationActions>
		</div>
	)
}

function getAcceptedNotification() {
	return (
		<NegotiationProposal
			pill={
				<Pill
					className="w-min whitespace-nowrap border border-green-700 font-medium"
					color="green"
					leftIcon={<CurrencyDollarIcon className="h-4 w-4" />}
				>
					Accepted quote
				</Pill>
			}
		/>
	)
}

function getRejectedNotification() {
	return (
		<NegotiationProposal
			pill={
				<Pill
					className="w-min whitespace-nowrap border border-red-700 font-medium"
					color="red"
					leftIcon={<CurrencyDollarIcon className="h-4 w-4" />}
				>
					Rejected quote
				</Pill>
			}
		/>
	)
}

import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

import Pill from '@/components/Pill'
import NegotiationActions from './NegotiationActions'
import NegotiationProposal from './NegotiationProposal'

export default function NegotiationHistory() {
	return (
		<div className="grid max-w-6xl space-y-3 lg:max-h-[35rem] lg:overflow-y-auto lg:rounded-md lg:border lg:border-gray-400 lg:px-3 lg:py-3">
			<div className="justify-self-center lg:justify-self-start">
				<NegotiationActions>
					<NegotiationProposal
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
						proposedPrice={3100}
						serviceFee={310}
					/>
				</NegotiationActions>
			</div>
			<div className="justify-self-center lg:justify-self-end">
				{getCounteredNotification()}
			</div>
			<div className="justify-self-center lg:justify-self-start">
				{getCounteredNotification()}
			</div>
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
			prelude="This proposal is now closed. Revanth Pothukuchi has accepted the responsibility for
			the full payment of $4510 following the completion of the event."
			proposedPrice={4100}
			serviceFee={410}
		/>
	)
}

function getCounteredNotification() {
	return (
		<NegotiationProposal
			pill={
				<Pill
					className="w-min whitespace-nowrap border border-purple-300 font-medium"
					color="purple"
					leftIcon={<CurrencyDollarIcon className="h-4 w-4" />}
				>
					Counter proposal
				</Pill>
			}
			prelude="Revanth Pothukuchi has countered your proposal and has provided the following explanation:"
			proposedPrice={2000}
			serviceFee={200}
		>
			<div className="mt-2">
				<label
					htmlFor="explanation"
					className="text-xs font-medium leading-6 text-gray-900"
				>
					Additional explanation
				</label>
				<p className="text-xs">An explanation</p>
			</div>
		</NegotiationProposal>
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
			prelude="This proposal is now closed as Bob Ross rejected the latest proposal."
			proposedPrice={4100}
			serviceFee={410}
		/>
	)
}

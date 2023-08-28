import AccountCircle from '@/components/AccountCircle'
import classNames from '@/utils/classnames'
import { ReactNode } from 'react'
import NegotiationProposal from '../negotiations/NegotiationProposal'
import Pill from '@/components/Pill'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import NegotiationActions from '../negotiations/NegotiationActions'

export default function ContractChat() {
	return (
		<div className=" relative flex h-full w-full flex-col">
			<div className="h-16 flex-shrink-0 bg-white p-4">
				<div className="flex items-center space-x-2">
					<AccountCircle />
					<h3 className="font-medium">Bob Ross</h3>
				</div>
			</div>
			<div className="flex flex-grow flex-col gap-3 bg-gray-100 p-4">
				<p className="text-center text-xs text-gray-500">
					28 August 2023
				</p>
				<ChatMessage align="left">
					<div className="max-w-md rounded-md bg-white p-2 shadow-sm">
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Veniam, veritatis similique? Debitis iusto
							quisquam nulla placeat ad, deserunt vitae maiores
							aliquid autem tenetur, dicta molestias eveniet
							officiis ratione non! Animi?
						</p>
					</div>
				</ChatMessage>
				<ChatMessage align="right">
					<div className="max-w-md rounded-md bg-white p-2 shadow-sm">
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Veniam, veritatis similique? Debitis iusto
							quisquam nulla placeat ad, deserunt vitae maiores
							aliquid autem tenetur, dicta molestias eveniet
							officiis ratione non! Animi?
						</p>
					</div>
				</ChatMessage>
				<ChatMessage align="right">
					<div className="max-w-md rounded-md bg-white p-2 shadow-sm">
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Veniam, veritatis similique? Debitis iusto
							quisquam nulla placeat ad, deserunt vitae maiores
							aliquid autem tenetur, dicta molestias eveniet
							officiis ratione non! Animi?
						</p>
					</div>
				</ChatMessage>
				<ChatMessage align="left">
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
				</ChatMessage>
				<ChatMessage align="right">
					<NegotiationProposal
						pill={
							<Pill
								className="w-min whitespace-nowrap border border-green-700 font-medium"
								color="green"
								leftIcon={
									<CurrencyDollarIcon className="h-4 w-4" />
								}
							>
								Accepted quote
							</Pill>
						}
						prelude="This proposal is now closed. Revanth Pothukuchi has accepted the responsibility for
			the full payment of $4510 following the completion of the event."
						proposedPrice={4100}
						serviceFee={410}
					/>
				</ChatMessage>
			</div>
			<input
				type="text"
				placeholder="Type your message"
				className="sticky bottom-5 m-3 rounded-md border border-gray-300 bg-white p-2"
			/>
		</div>
	)
}

function ChatMessage({
	align,
	children,
}: {
	align?: 'left' | 'right'
	children?: ReactNode
}) {
	const alignedSide = align ?? 'left'
	const accountCircle = <AccountCircle className="flex-shrink-0" />

	return (
		<div
			className={classNames(
				'flex items-start space-x-2',
				alignedSide === 'left' ? 'justify-start' : 'justify-end'
			)}
		>
			{alignedSide === 'left' && accountCircle}
			{children}
			{alignedSide === 'right' && accountCircle}
		</div>
	)
}

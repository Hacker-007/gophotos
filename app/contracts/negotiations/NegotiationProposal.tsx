import { ReactNode } from 'react'

import classNames from '@/utils/classnames'

import AccountCircle from '@/components/AccountCircle'

type NegotiationProposalProps = {
	prelude?: string
	className?: string
	children?: ReactNode
} & NegotiationPricingProps

export default function NegotiationProposal({
	pill,
	proposedPrice,
	serviceFee,
	prelude,
	className,
	children,
}: NegotiationProposalProps) {
	return (
		<div
			className={classNames(
				'rounded-md border border-gray-300 bg-gray-50 p-3 max-w-md',
				className
			)}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-2">
					<AccountCircle />
					<div>
						<h3 className="text-sm font-medium">Bob Ross</h3>
						<p className="text-xs text-gray-500">
							Aug 14, 2023 <span>&middot;</span> 10:25 AM
						</p>
					</div>
				</div>
			</div>
			{prelude && <p className="mt-3 text-xs text-gray-600">{prelude}</p>}
			<NegotiationPricing
				className="mt-3"
				pill={pill}
				proposedPrice={proposedPrice}
				serviceFee={serviceFee}
			/>
			{children}
		</div>
	)
}

type NegotiationPricingProps = {
	pill: ReactNode
	proposedPrice: number
	serviceFee: number
	className?: string
}

export function NegotiationPricing({
	pill,
	proposedPrice,
	serviceFee,
	className,
}: NegotiationPricingProps) {
	return (
		<div
			className={classNames(
				'space-y-3 rounded-md border border-gray-300 bg-white p-2',
				className
			)}
		>
			{pill}
			<div className="grid items-center">
				<div className="col-start-1">
					<h3 className="text-xs font-medium text-gray-500">
						Proposed
					</h3>
					<p className="text-sm font-medium">${proposedPrice}</p>
				</div>
				<p className="col-start-2 font-medium text-gray-500"> + </p>
				<div className="col-start-3">
					<h3 className="text-xs font-medium text-gray-500">
						Service fee
					</h3>
					<p className="text-sm font-medium">${serviceFee}</p>
				</div>
				<p className="col-start-4 font-medium text-gray-500"> = </p>
				<div className="col-start-5">
					<h3 className="text-xs font-medium text-gray-500">Total</h3>
					<p className="text-sm font-medium">
						${proposedPrice + serviceFee}
					</p>
				</div>
			</div>
		</div>
	)
}

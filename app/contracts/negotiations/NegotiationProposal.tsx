import { ReactNode } from 'react'

import classNames from '@/utils/classnames'

import AccountCircle from '@/components/AccountCircle'

type NegotiationProposalProps = {
	prelude?: string
	className?: string
} & NegotiationPricingProps

export default function NegotiationProposal({
	pill,
	prelude,
	className,
}: NegotiationProposalProps) {
	return (
		<div
			className={classNames(
				'space-y-3 rounded-md border border-gray-300 bg-gray-50 p-3',
				className
			)}
		>
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
			{prelude && <p className="text-xs text-gray-600">{prelude}</p>}
			<NegotiationPricing pill={pill} />
		</div>
	)
}

type NegotiationPricingProps = {
	pill: ReactNode
	className?: string
}

export function NegotiationPricing({
	pill,
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
	)
}

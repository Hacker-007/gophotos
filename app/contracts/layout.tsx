import { PencilIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/AccountCircle'
import Pill from '@/components/Pill'
import ContractLinks from './ContractLinks'

export default function ContractsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-full w-full @container/contracts">
			<div>
				<h2 className="font-semibold">Contracts</h2>
				<p className="text-xs text-gray-500">
					6 open contracts{' '}
					<span className="text-xs text-gray-300">•</span> 28 closed
					contracts
				</p>
			</div>
			<div className="mt-3 grid gap-3 @2xl/contracts:grid-cols-[20rem_1fr]">
				<div className="flex gap-4 overflow-x-auto @lg/contracts:col-start-1 @lg/contracts:min-w-max @lg/contracts:flex-col">
					{[...Array(5)].map((_, i) => (
						<div
							key={i}
							className="w-full max-w-xs flex-shrink-0 whitespace-nowrap rounded-md border border-gray-400 px-4 py-2"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<AccountCircle />
									<div className="flex flex-col">
										<h3 className="text-sm font-medium">
											Bob Ross
										</h3>
										<p className="text-xs">Cambridge, MA</p>
									</div>
								</div>
								<div className="flex flex-col items-end justify-between">
									<Pill
										className="font-semibold"
										color="darkGray"
										leftIcon={
											<PencilIcon className="h-3.5 w-3.5" />
										}
									>
										Negotiating
									</Pill>
									<p className="text-xs">1 day ago</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex-grow @lg/contracts:col-start-2 @lg/contracts:-mt-7">
					<div className="relative">
						<ContractLinks />
						<div className="absolute bottom-0 -z-10 w-full border-t border-t-gray-300" />
					</div>
					<div className="mt-3">{children}</div>
				</div>
			</div>
		</div>
	)
}

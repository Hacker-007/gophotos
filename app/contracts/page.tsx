import { PencilIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/AccountCircle'
import Pill from '@/components/Pill'
import ContractTabs from './ContractTabs'

export default function ContractsPage() {
	return (
		<div className="flex h-full w-full flex-col">
			<h2 className="font-semibold">Contracts</h2>
			<p className="text-xs text-gray-500">
				6 open contracts{' '}
				<span className="text-xs text-gray-300">•</span> 28 closed
				contracts
			</p>
			<div className="mt-3 flex space-x-4 overflow-x-auto">
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className="w-full flex-shrink-0 whitespace-nowrap rounded-md border border-gray-400 px-4 py-2"
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
									className='font-semibold'
									color="gray"
									leftIcon={
										<PencilIcon className="h-3.5 w-3.5" />
									}
								>
									Negotiating
								</Pill>
								<p className="text-xs">3 days ago</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-3 flex-grow">
				<ContractTabs />
			</div>
		</div>
	)
}

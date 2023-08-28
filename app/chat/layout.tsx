import { PencilIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/AccountCircle'
import Pill from '@/components/Pill'
import ContractLinks from './ContractLinks'
import Link from 'next/link'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

export default function ChatLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="grid sm:grid-cols-[16rem_1fr] md:grid-cols-[24rem_1fr] h-full w-full sm:divide-x sm:space-x-2 @container/contracts">
			<div className='col-start-1 row-start-1'>
				<div>
					<h2 className="font-semibold">Chat</h2>
					<p className="text-xs text-gray-500">
						6 open contracts{' '}
						<span className="text-xs text-gray-300">•</span> 28
						closed contracts
					</p>
				</div>
				<div className="flex flex-col space-y-1">
					<div className="mt-2 border-t border-gray-300" />
					{[...Array(5)].map((_, i) => (
						<Link key={i} href="/chat/1" passHref={undefined}>
							<div className="w-full flex-shrink-0 whitespace-nowrap rounded-md p-2 hover:bg-gray-100">
								<div className="flex justify-between">
									<div className="flex items-center space-x-2">
										<AccountCircle />
										<div className="flex flex-col">
											<h3 className="text-sm font-medium">
												Bob Ross
											</h3>
											<p className="w-48 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-600">
												Great! I will see you then!
											</p>
										</div>
									</div>
									<p className="flex-shrink-0 text-xs text-gray-600">
										1d
									</p>
								</div>
								<Pill
									className="ml-10 mt-1.5 w-min whitespace-nowrap font-semibold"
									color="darkGray"
								>
									Negotiating
								</Pill>
							</div>
							<div className="mt-1 border-t border-gray-300" />
						</Link>
					))}
				</div>
			</div>
			<div className='col-start-1 row-start-1 sm:col-start-2 sm:w-full overflow-hidden bg-white'>
				<Link href="/chat" className='flex items-center gap-1 sm:hidden' passHref={undefined}>
					<ArrowLongLeftIcon className='h-4 w-4 text-black' />
					<p className='text-xs font-medium'>Back</p>
				</Link>
				{children}
			</div>
		</div>
	)
}

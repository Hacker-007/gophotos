'use client'

import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import NegotiationHistory from './NegotiationHistory'

const tabs = [
	{
		tabName: 'Negotiation History',
		component: <NegotiationHistory />,
	},
	{
		tabName: 'Chat',
		component: <div>Test 2</div>,
	},
	{
		tabName: 'Pictures',
		component: <div>Test 3</div>,
	},
]

export default function ContractTabs() {
	return (
		<Tab.Group>
			<div className="relative">
				<Tab.List className="flex w-full space-x-4">
					{tabs.map(({ tabName }) => (
						<Tab
							key={tabName}
							className="text-xs focus:outline-none"
						>
							{({ selected }) => (
								<div className="w-full">
									<div className="font-medium">{tabName}</div>
									{selected && (
										<motion.div
											layoutId="selectedBar"
											className="w-full border-t border-t-black"
										></motion.div>
									)}
								</div>
							)}
						</Tab>
					))}
				</Tab.List>
				<div className="absolute bottom-0 -z-10 w-full border-t border-t-gray-300"></div>
			</div>
			<Tab.Panels>
				{tabs.map(({ tabName, component }) => (
					<Tab.Panel key={tabName} className="mt-5">
						{component}
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	)
}

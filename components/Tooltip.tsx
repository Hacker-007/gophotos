'use client'

import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import {
	TooltipContent,
	TooltipPortal,
	TooltipProvider,
	Tooltip as TooltipRoot,
	TooltipTrigger,
} from '@radix-ui/react-tooltip'

import { ReactNode, useState } from 'react'

import classNames from '@/utils/classnames'

type TooltipProps = {
	children: ReactNode
	className?: string
}

export default function Tooltip({ children, className }: TooltipProps) {
	const [isPanelOpen, setIsPanelOpen] = useState(false)
	return (
		<TooltipProvider>
			<TooltipRoot
				open={isPanelOpen}
				onOpenChange={open => setIsPanelOpen(open)}
				delayDuration={0}
			>
				<TooltipTrigger asChild className="flex items-center">
					<InformationCircleIcon className="h-5 w-5 outline-none" />
				</TooltipTrigger>
				<TooltipPortal forceMount>
					<AnimatePresence>
						{isPanelOpen && (
							<motion.div
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 0.2,
								}}
							>
								<TooltipContent
									align="center"
									sideOffset={5}
									className={classNames(
										'w-56 select-none rounded-md border-gray-200 bg-white p-2',
										className
									)}
								>
									{children}
								</TooltipContent>
							</motion.div>
						)}
					</AnimatePresence>
				</TooltipPortal>
			</TooltipRoot>
		</TooltipProvider>
	)
}

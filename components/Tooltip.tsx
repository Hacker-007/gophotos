'use client'

import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import {
	TooltipContent,
	TooltipPortal,
	TooltipProvider,
	Tooltip as TooltipRoot,
	TooltipTrigger,
} from '@radix-ui/react-tooltip'

import { ReactNode } from 'react'

import classNames from '@/utils/classnames'

type TooltipProps = {
	children: ReactNode
	className?: string
}

export default function Tooltip({ className, children }: TooltipProps) {
	return (
		<TooltipProvider>
			<TooltipRoot delayDuration={0}>
				<TooltipTrigger asChild className="flex items-center">
					<InformationCircleIcon strokeWidth={2} className="h-4 w-4 outline-none" />
				</TooltipTrigger>
				<TooltipPortal>
					<TooltipContent
						asChild
						align="center"
						sideOffset={5}
						className={classNames(
							'w-56 select-none rounded-md border-gray-200 bg-white p-2',
							className
						)}
					>
						<motion.div
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{
								duration: 0.2,
							}}
						>
							{children}
						</motion.div>
					</TooltipContent>
				</TooltipPortal>
			</TooltipRoot>
		</TooltipProvider>
	)
}

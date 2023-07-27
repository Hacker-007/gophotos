'use client'

import { Popover } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { ReactNode, useEffect, useState } from 'react'
import classNames from '@/utils/classnames'
import { useHover } from '@/utils/hooks'
import { AnimatePresence, motion } from 'framer-motion'

type TooltipProps = {
	children: ReactNode
	className?: string
}

export default function Tooltip({
	children,
	className,
}: TooltipProps) {
	const [isPanelOpen, setIsPanelOpen] = useState(false)
	const { ref: buttonRef, hovered: buttonHovered } =
		useHover<HTMLButtonElement>()
	const { ref: panelRef, hovered: panelHovered } = useHover()

	useEffect(() => {
		if (buttonHovered && !isPanelOpen && buttonRef.current) {
			buttonRef.current.click()
			setIsPanelOpen(true)
		}

		if (
			!buttonHovered &&
			!panelHovered &&
			isPanelOpen &&
			buttonRef.current
		) {
			buttonRef.current.click()
			setIsPanelOpen(false)
		}
	}, [isPanelOpen, buttonHovered, panelHovered, buttonRef])

	return (
		<Popover className="relative">
			<>
				<Popover.Button ref={buttonRef} className="flex items-center">
					<InformationCircleIcon className="h-5 w-5 outline-none" />
				</Popover.Button>
				<AnimatePresence>
					{isPanelOpen && (
						<Popover.Panel
							static
							ref={panelRef}
							as={motion.div}
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
							className={classNames(
								'absolute -left-28 z-10 w-56',
								className
							)}
						>
							{children}
						</Popover.Panel>
					)}
				</AnimatePresence>
			</>
		</Popover>
	)
}

'use client'

import classNames from '@/utils/classnames'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

type BadgeProps = {
	fill?: boolean
	handleClick?: () => void
	className?: string
	children: ReactNode
}

export default function Badge({
	fill,
	handleClick,
	className,
	children,
}: BadgeProps) {
	const [isSelected, setIsSelected] = useState(false)
	return (
		<motion.button
			layout
			onClick={() => {
				setIsSelected(true)
				if (handleClick) {
					handleClick()
				}
			}}
			onLayoutAnimationComplete={() => setIsSelected(false)}
			className={classNames(
				'inline-flex items-center rounded-md px-3 py-2 text-xs font-medium ring-1 ring-inset',
				fill
					? 'bg-cyan-700 text-cyan-50 ring-cyan-700/10'
					: 'bg-white text-gray-500 ring-gray-500/10',
				isSelected ? 'z-10' : '',
				className
			)}
		>
			{children}
		</motion.button>
	)
}

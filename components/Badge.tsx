'use client'

import classNames from '@/utils/classnames'
import { ReactNode } from 'react'

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
	return (
		<button
			onClick={handleClick}
			className={classNames(
				'inline-flex items-center rounded-md px-3 py-2 text-xs font-medium ring-1 ring-inset transition-colors duration-300',
				fill
					? 'bg-cyan-700 text-cyan-50 ring-cyan-700/10'
					: 'bg-white text-gray-500 ring-gray-500/10',
				className
			)}
		>
			{children}
		</button>
	)
}

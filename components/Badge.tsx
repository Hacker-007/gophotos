'use client'

import { ReactNode } from 'react'

import classNames from '@/utils/classnames'

type BadgeProps = {
	fill?: boolean
	onClick?: () => void
	className?: string
	children: ReactNode
}

export default function Badge({
	fill,
	onClick: handleClick,
	className,
	children,
}: BadgeProps) {
	return (
		<button
			onClick={handleClick}
			className={classNames(
				'inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-xs font-medium transition-colors duration-200',
				fill ? 'bg-black text-gray-50' : 'bg-white text-gray-500',
				className
			)}
		>
			{children}
		</button>
	)
}

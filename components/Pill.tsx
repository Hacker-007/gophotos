import classNames from '@/utils/classnames'

import { ReactNode } from 'react'

const colorClasses = {
	gray: {
		className: 'bg-gray-200',
	},
	green: {
		className: 'bg-green-100 text-green-800',
	},
	red: {
		className: 'bg-red-200 text-red-800',
	},
}

type PillProps = {
	color: keyof typeof colorClasses
	className?: string
	leftIcon?: ReactNode
	children?: ReactNode
}

export default function Pill({
	color,
	className,
	leftIcon,
	children,
}: PillProps) {
	const { className: colorClassName } = colorClasses[color]

	return (
		<div
			className={classNames(
				'flex items-center justify-between space-x-1 rounded-md px-2 py-1 text-xs',
				colorClassName,
				className
			)}
		>
			{leftIcon}
			<span>{children}</span>
		</div>
	)
}

import classNames from '@/utils/classnames'

import { ReactNode } from 'react'

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/solid'

const statusClasses = {
	editing: {
		className: 'bg-gray-200',
		icon: <PencilIcon className="h-3.5 w-3.5" />
	},
	completed: {
		className: 'bg-green-100 text-green-800',
		icon: <CheckIcon strokeWidth={3} className='w-3.5 h-3.5' />,
	},
	cancelled: {
		className: 'bg-red-200 text-red-800',
		icon: <XMarkIcon strokeWidth={3} className='w-3.5 h-3.5' />,
	}
}

type PillProps = {
	status: keyof typeof statusClasses
	className?: string
	children: ReactNode
}

export default function Pill({ status, className, children }: PillProps) {
	const { className: statusClassName, icon: statusIcon } = statusClasses[status]
	return (
		<div
			className={classNames(
				'flex items-center justify-between space-x-1 rounded-md px-2 py-1 text-xs font-semibold',
				statusClassName,
				className
			)}
		>
			{statusIcon}
			<span>{children}</span>
		</div>
	)
}

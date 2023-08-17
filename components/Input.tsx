'use client'

import classNames from '@/utils/classnames'
import { ReactNode, useId } from 'react'

type InputProps = {
	label: string
	name: string
	icon: ReactNode
	placeholder?: string
	padding?: string
	className?: string
}

export default function Input({
	label,
	name,
	icon,
	placeholder,
	padding,
	className,
}: InputProps) {
	const id = useId()
	const paddingClassName = padding ?? 'pl-7'
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="block text-xs font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="relative rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-sm text-gray-500">
					{icon}
				</div>
				<input
					type="text"
					name={name}
					id={id}
					className={classNames("block h-8 w-full rounded-md border-0 bg-gray-50 pt-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black", paddingClassName)}
					placeholder={placeholder}
				/>
			</div>
		</div>
	)
}

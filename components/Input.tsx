'use client'

import classNames from '@/utils/classnames'
import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from 'react'

type InputProps = {
	label: string
	name: string
	icon: ReactNode
	className?: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
	label,
	name,
	icon,
	className,
	...props
}, ref) {
	const id = useId()
	return (
		<div>
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
					className={classNames("block h-8 w-full rounded-md border-0 bg-gray-50 pt-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black", className)}
					type="text"
					name={name}
					id={id}
					ref={ref}
					{...props}
				/>
			</div>
		</div>
	)
})

export default Input
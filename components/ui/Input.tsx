import * as React from 'react'

import classNames from '@/utils/classnames'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={classNames(
					'rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-gray-800',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)

Input.displayName = 'Input'

export { Input }

'use client'

import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'

import classNames from '@/utils/classnames'

type ButtonProps = {
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	className?: string
	children: ReactNode
}

const Button = forwardRef<
	HTMLButtonElement,
	ButtonProps & ComponentPropsWithoutRef<'button'>
>(function Button(
	{ leftIcon, rightIcon, className, children, ...props },
	forwardedRef
) {
	return (
		<button
			ref={forwardedRef}
			className={classNames(
				'group flex items-center gap-1 rounded-md text-sm font-medium',
				className
			)}
			{...props}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</button>
	)
})

export default Button

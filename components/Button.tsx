'use client'

import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'

import classNames from '@/utils/classnames'

export type ButtonProps = {
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	className?: string
	children?: ReactNode
} & ComponentPropsWithoutRef<'button'>

const Button = forwardRef<
	HTMLButtonElement,
	ButtonProps
>(function Button(
	{ leftIcon, rightIcon, className, children, ...props },
	forwardedRef
) {
	return (
		<button
			ref={forwardedRef}
			className={classNames(
				'group flex items-center gap-x-1 rounded-md font-medium',
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

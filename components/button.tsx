'use client'

import classNames from '@/utils/classnames'

import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
	className?: string
	children?: ReactNode
} & ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ className, children, ...props },
	forwardedRef
) {
	return (
		<button ref={forwardedRef} className={classNames('', className)} {...props}>
			{children}
		</button>
	)
})

export default Button

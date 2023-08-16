'use client'

import { useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'

import Loader, { LoaderProps } from '@/components/Loader'
import Button, { ButtonProps } from '@/components/Button'

type LoadingButtonProps = {
	handleClick: () => Promise<void>
} & ButtonProps &
	Pick<LoaderProps, 'color'>

export default function LoadingButton({
	handleClick,
	className,
	color,
	children,
	...props
}: LoadingButtonProps) {
	const [isLoading, setIsLoading] = useState(false)
	const clickHandler = async () => {
		setIsLoading(true)
		await handleClick()
		setIsLoading(false)
	}

	return (
		<Button
			className={className}
			onClick={clickHandler}
			disabled={isLoading}
			{...props}
		>
			<LayoutGroup>
				<Loader
					color={color}
					isLoading={isLoading}
				/>
				<motion.div layout>{children}</motion.div>
			</LayoutGroup>
		</Button>
	)
}

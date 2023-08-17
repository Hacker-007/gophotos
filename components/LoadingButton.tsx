import { LayoutGroup, motion } from 'framer-motion'

import Button, { ButtonProps } from './Button'
import Loader, { LoaderProps } from './Loader'
import { ReactNode } from 'react'

type LoadingButtonProps = {
	isLoading: boolean
	className?: string
	loader: Omit<LoaderProps, 'isLoading'>
	children?: ReactNode
} & ButtonProps

export default function LoadingButton({
	isLoading,
	loader,
	className,
	children,
	...props
}: LoadingButtonProps) {
	return (
		<Button className={className} disabled={isLoading} {...props}>
			<LayoutGroup>
				<Loader {...loader} isLoading={isLoading} />
				<motion.div layout>{children}</motion.div>
			</LayoutGroup>
		</Button>
	)
}

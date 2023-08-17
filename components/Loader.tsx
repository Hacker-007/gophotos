import classNames from '@/utils/classnames'
import { AnimatePresence, motion } from 'framer-motion'

const colorClasses = {
	black: 'border-black',
	green: 'border-green-700',
	yellow: 'border-yellow-700',
	red: 'border-red-700',
}

export type LoaderProps = {
	isLoading: boolean
	color?: keyof typeof colorClasses
	className?: string
}

export default function Loader({
	isLoading,
	color,
	className,
}: LoaderProps) {
	const colorClassName = colorClasses[color ?? 'black']

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className={classNames(
						'h-4 w-4 animate-spin rounded-full border-2 border-b-transparent bg-transparent',
						colorClassName,
						className
					)}
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.3,
						ease: 'easeOut',
					}}
				/>
			)}
		</AnimatePresence>
	)
}

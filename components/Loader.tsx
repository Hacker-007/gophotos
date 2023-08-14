import classNames from '@/utils/classnames'
import { AnimatePresence, motion } from 'framer-motion'

type LoaderProps = {
	isLoading: boolean
	className?: string
}

export default function Loader({ isLoading, className }: LoaderProps) {
	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className={classNames('relative h-5 w-5', className)}
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.3,
						ease: 'easeOut',
					}}
				>
					<div className="absolute h-full w-full animate-spin rounded-full border-2 border-black border-b-transparent bg-transparent"></div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

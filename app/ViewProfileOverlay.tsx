'use client'

import { ReactNode, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

type ViewProfileOverlayProps = {
	handleClick?: () => void
	className?: string
	children?: ReactNode
}

const variants = {
	active: {
		opacity: 1,
	},
	inactive: {
		opacity: 0,
	},
}

export default function ViewProfileOverlay({
	handleClick,
	className,
	children,
}: ViewProfileOverlayProps) {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<motion.div
			onHoverStart={() => setIsHovering(true)}
			onHoverEnd={() => setIsHovering(false)}
			className={className}
		>
			<AnimatePresence>
				{isHovering && (
					<>
						<motion.div
							variants={variants}
							initial="inactive"
							animate="active"
							exit="inactive"
							transition={{
								duration: 0.2,
								ease: 'easeInOut',
							}}
							className="absolute inset-0 z-10 bg-black/20"
							aria-hidden="true"
						/>
						<motion.button
							variants={variants}
							initial="inactive"
							animate="active"
							exit="inactive"
							transition={{
								duration: 0.2,
								ease: 'easeInOut',
							}}
							onClick={handleClick}
							className="absolute inset-0 z-20 m-auto h-min w-min whitespace-nowrap rounded-md border border-gray-600 p-2 text-sm font-medium transition-colors duration-200 hover:bg-black/20"
						>
							View Profile
						</motion.button>
					</>
				)}
			</AnimatePresence>
			{children}
		</motion.div>
	)
}

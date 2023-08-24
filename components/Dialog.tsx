'use client'

import { ReactNode, useState } from 'react'

import {
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
	Dialog as RadixDialog,
} from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

type DialogProps = {
	trigger: ReactNode
	children?: ReactNode
}

export { DialogClose } from '@radix-ui/react-dialog'
export default function Dialog({ trigger, children }: DialogProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<RadixDialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogPortal forceMount>
				<div>
					<AnimatePresence>
						{isOpen && (
							<DialogOverlay
								forceMount
								asChild
								className="fixed inset-0 bg-black/20"
							>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.2,
									}}
								/>
							</DialogOverlay>
						)}
					</AnimatePresence>
				</div>
				<div>
					<AnimatePresence>
						{isOpen && (
							<DialogContent
								asChild
								className="fixed bottom-0 left-0 max-h-min w-full overflow-y-auto"
							>
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: 'auto' }}
									exit={{ height: 0 }}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
									}}
								>
									{children}
								</motion.div>
							</DialogContent>
						)}
					</AnimatePresence>
				</div>
			</DialogPortal>
		</RadixDialog>
	)
}

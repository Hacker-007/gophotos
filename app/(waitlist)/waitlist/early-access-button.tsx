'use client'

import classNames from '@/utils/classnames'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

import { useFormStatus } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export default function EarlyAccessButton() {
	const { pending } = useFormStatus()
    
	return (
		<button
			type="submit"
			disabled={pending}
			className="group relative mt-8 flex h-8 w-full items-center justify-center gap-1 rounded-md bg-[#556C62] text-xs font-medium text-[#EAF4F4]"
		>
			<AnimatePresence>
				{pending && (
					<motion.div
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.3,
							ease: 'easeInOut',
						}}
						className={classNames(
							'absolute z-20 h-5 w-5 animate-spin rounded-full border-[3px] border-b-transparent border-l-[#EAF4F4] border-r-[#EAF4F4] border-t-[#EAF4F4]'
						)}
					/>
				)}
			</AnimatePresence>
			<div
				className={classNames(
					'absolute z-10 h-full w-full bg-black/20',
					!pending && 'hidden'
				)}
			/>
			<span>Get early access</span>
			<ArrowLongRightIcon className="h-4 w-4" />
		</button>
	)
}

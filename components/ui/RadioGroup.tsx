'use client'

import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { motion } from 'framer-motion'

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root className={className} {...props} ref={ref} />
	)
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item ref={ref} asChild {...props}>
			<label
				className={`h-16 w-full max-w-sm rounded-md border border-gray-400 transition-colors duration-300 data-[state=checked]:border-gray-800 ${className}`}
			>
				<div className="relative h-full w-full">
					{children}
					<RadioGroupPrimitive.Indicator asChild>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="absolute right-2 top-1 w-6 h-6"
						>
							<motion.circle
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								cx="12"
								cy="12"
								r="9"
							/>
							<motion.path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M 9 12.75 L 11.25 15 15 9.75"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
							/>
						</svg>
					</RadioGroupPrimitive.Indicator>
				</div>
			</label>
		</RadioGroupPrimitive.Item>
	)
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

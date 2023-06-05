'use client'

import {
	ComponentPropsWithoutRef,
	ElementRef,
	forwardRef,
	useState,
} from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import classNames from '@/utils/classnames'
import { AnimatePresence, motion } from 'framer-motion'

type CheckboxProps = {
	handleCheckUpdate?: (checkedState: CheckboxPrimitive.CheckedState) => void
} & Omit<
	ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
	'onCheckedChange'
>

const Checkbox = forwardRef<
	ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, handleCheckUpdate, ...props }, ref) => {
	const [checked, setChecked] = useState(props.checked)
	const handleOnCheck = (checkedState: CheckboxPrimitive.CheckedState) => {
		if (checkedState !== 'indeterminate') {
			setChecked(checkedState)
		}

		if (handleCheckUpdate) {
			handleCheckUpdate(checkedState)
		}
	}

	return (
		<CheckboxPrimitive.Root
			onCheckedChange={handleOnCheck}
			ref={ref}
			className={classNames(
				'h-5 w-5 rounded-md border border-gray-400',
				className
			)}
			{...props}
		>
			<AnimatePresence initial={false}>
				{checked && (
					<CheckboxPrimitive.Indicator
						forceMount
						className="flex items-center justify-center text-current"
					>
						<motion.svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="h-3.5 w-3.5"
						>
							<motion.path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M 4.5 12.75 l 6 6 9-13.5"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								exit={{ pathLength: 0 }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
							/>
						</motion.svg>
					</CheckboxPrimitive.Indicator>
				)}
			</AnimatePresence>
		</CheckboxPrimitive.Root>
	)
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

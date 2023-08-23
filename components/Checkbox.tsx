'use client'

import { ReactNode, useEffect, useId, useState } from 'react'
import classNames from '@/utils/classnames'

import {
	CheckboxIndicator,
	CheckedState,
	Checkbox as RadixCheckbox,
} from '@radix-ui/react-checkbox'
import { AnimatePresence, motion } from 'framer-motion'

type CheckboxProps = {
	checked: boolean
	handleCheck: (checkedState: CheckedState) => void
	label?: ReactNode
	className?: string
}

export default function Checkbox({ checked: isChecked, handleCheck, label, className }: CheckboxProps) {
	const id = useId()

	const handleOnCheck = (checkedState: CheckedState) => {
		if (checkedState !== 'indeterminate') {
			handleCheck(checkedState)
		}
	}

	return (
		<div className={classNames('flex items-center', className)}>
			<RadixCheckbox
				id={id}
				checked={isChecked}
				onCheckedChange={handleOnCheck}
				className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-white shadow-sm transition-colors duration-500 hover:bg-gray-100 data-[state=checked]:border-black"
			>
				<AnimatePresence initial={false}>
					{isChecked && (
						<CheckboxIndicator forceMount className="text-black">
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="h-3 w-3"
							>
								<motion.path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M 4.5 12.75 l 6 6 9-13.5"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									exit={{ pathLength: 0 }}
									transition={{
										duration: 0.5,
										ease: 'easeOut',
									}}
								/>
							</motion.svg>
						</CheckboxIndicator>
					)}
				</AnimatePresence>
			</RadixCheckbox>
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

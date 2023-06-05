'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import classNames from '@/utils/classnames'
import { motion } from 'framer-motion'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={classNames(
			'w-full flex items-center justify-between rounded-md border-2 border-gray-300 px-3 py-2 text-sm font-medium data-[placeholder]:font-normal',
			className
		)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-4 w-4 opacity-50"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 8.25l-7.5 7.5-7.5-7.5"
				/>
			</svg>
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={classNames(
				'bg-zinc-50 z-10 mt-2 w-[var(--radix-select-trigger-width)] rounded-md border border-gray-300',
				className
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.Viewport className={classNames()}>
				{children}
			</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
))

SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={classNames(className)}
		{...props}
	/>
))

SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={classNames(
			'group flex cursor-pointer items-center p-2 text-sm hover:bg-gray-200',
			className
		)}
		{...props}
	>
		<span className="pr-1 group-data-[state=unchecked]:pr-4">
			<SelectPrimitive.ItemIndicator asChild>
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
						transition={{ duration: 0.5, ease: 'easeOut' }}
					/>
				</motion.svg>
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText className="pointer-events-none">
			{children}
		</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))

SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={classNames('divide-y divide-gray-300', className)}
		{...props}
	/>
))

SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
}

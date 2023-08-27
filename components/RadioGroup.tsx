'use client'

import { useId } from 'react'
import classNames from '@/utils/classnames'

import {
	RadioGroupIndicator,
	RadioGroupItem,
	RadioGroup as RadixRadioGroup,
	RadioGroupProps as RadixRadioGroupProps
} from '@radix-ui/react-radio-group'

type RadioGroupProps = {
	items: readonly string[]
	onValue?: (value: string) => void
	form?: string
	className?: string
} & RadixRadioGroupProps

export default function RadioGroup({
	items,
	value,
	onValue,
	className,
	id,
	form,
	...props
}: RadioGroupProps) {
	return (
		<RadixRadioGroup
			className={classNames('flex flex-col', className)}
			value={value}
			onValueChange={onValue}
			id={id}
			{...props}
		>
			{items.map(item => (
				<div className="flex items-center space-x-1" key={item}>
					<RadioGroupItem
						form={form}
						id={`radio-group-${id}-${item}`}
						value={item}
						className="h-4 w-4 rounded-full border border-gray-300 bg-white outline-none transition-colors duration-200 hover:bg-gray-100 data-[state=checked]:border-black"
					>
						<RadioGroupIndicator className="relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-full after:bg-black after:content-['']" />
					</RadioGroupItem>
					<label
						htmlFor={`radio-group-${id}-${item}`}
						className="text-xs"
					>
						{item}
					</label>
				</div>
			))}
		</RadixRadioGroup>
	)
}

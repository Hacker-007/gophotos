'use client'

import classNames from '@/utils/classnames'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
	Select as RadixSelect,
	SelectContent,
	SelectGroup,
	SelectIcon,
	SelectItem,
	SelectItemIndicator,
	SelectItemText,
	SelectLabel,
	SelectPortal,
	SelectTrigger,
	SelectValue,
	SelectViewport,
} from '@radix-ui/react-select'
import { ReactNode, useState } from 'react'

type SelectProps = {
	items: Array<{ value: string; display: ReactNode }>
	id?: string
	name?: string
	placeholder?: string
	defaultValue?: string
	onValueChange?: (value: string) => void
	className?: string
}

export default function Select({
	items,
	id,
	name,
	placeholder,
	defaultValue,
	onValueChange,
	className,
}: SelectProps) {
	const [selectedValue, setSelectedValue] = useState(
		defaultValue
			? items.find(item => item.value === defaultValue)!
			: items[0]
	)

	const handleValueChange = (value: string) => {
		setSelectedValue(items.find(item => item.value === value)!)
		if (onValueChange) {
			onValueChange(value)
		}
	}

	return (
		<RadixSelect
			name={name}
			value={selectedValue.value}
			onValueChange={value => handleValueChange(value)}
			defaultValue={selectedValue.value}
		>
			<SelectTrigger
				className={classNames(
					'flex items-center justify-between rounded-md border border-gray-300 py-2 pl-2 pr-1 text-xs font-medium',
					className
				)}
			>
				<SelectValue placeholder={placeholder} />
				<SelectIcon>
					<ChevronDownIcon className="h-4 w-4 text-gray-600" />
				</SelectIcon>
			</SelectTrigger>
			<SelectPortal>
				<SelectContent
					position="popper"
					className="mt-2 w-[var(--radix-select-trigger-width)] rounded-md border border-gray-300 bg-white shadow-lg"
				>
					<SelectViewport id={id} className="w-full p-1">
						<SelectGroup>
							{items.map(item => (
								<SelectItem
									key={item.value}
									value={item.value}
									className="group relative flex items-center space-x-2 rounded-md p-2 text-xs leading-none outline-none data-[highlighted]:bg-black data-[highlighted]:text-white"
								>
									<SelectItemIndicator>
										<CheckIcon className="h-3 w-3 text-black group-data-[highlighted]:text-white" />
									</SelectItemIndicator>
									<SelectItemText>
										{item.display}
									</SelectItemText>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectViewport>
				</SelectContent>
			</SelectPortal>
		</RadixSelect>
	)
}

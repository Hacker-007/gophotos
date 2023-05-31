'use client'

import { useState } from 'react'

import { CheckedState } from '@radix-ui/react-checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Checkbox } from './Checkbox'

type Item = {
	value: string
	label: string
}

type MultiSelectProps = {
	items: Item[]
	handleSelect?: (items: Item[]) => void
}

const MultiSelect = ({
	items: initialItems,
	handleSelect,
}: MultiSelectProps) => {
	const [open, setOpen] = useState(false)
	const [items, setItems] = useState<Array<Item & { checked: CheckedState }>>(
		initialItems.map(item => ({ ...item, checked: false }))
	)

	const checkedItems = items.filter(item => item.checked)
	const handleChecked = (value: string, checkedState: CheckedState) => {
		setItems(currentItems => {
			const updatedItems = currentItems.map(item =>
				item.value === value ? { ...item, checked: checkedState } : item
			)

			if (handleSelect) {
				handleSelect(
					updatedItems.map(item => ({
						value: item.value,
						label: item.label,
					}))
				)
			}

			return updatedItems
		})
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					aria-expanded={open}
					className="flex w-40 items-center justify-between rounded-md border border-gray-400 p-2"
				>
					<span className="text-sm">
						{checkedItems.length === 0
							? 'Select'
							: `${checkedItems.length} selected`}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="ml-2 h-4 w-4 shrink-0 opacity-50"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
						/>
					</svg>
				</button>
			</PopoverTrigger>
			<PopoverContent className="z-10 w-40 bg-zinc-50">
				<div className="flex flex-col space-y-1">
					{items.map(item => (
						<div
							key={item.value}
							className="flex items-center space-x-2"
						>
							<Checkbox
								value={item.value}
								checked={item.checked}
								handleCheckUpdate={checkedState =>
									handleChecked(item.value, checkedState)
								}
							/>
							<label
								htmlFor="terms"
								className="text-sm font-medium leading-none"
							>
								{item.label}
							</label>
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	)
}

export { MultiSelect }

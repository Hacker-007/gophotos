'use client'

import { useState } from 'react'

import { CheckedState } from '@radix-ui/react-checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from './Command'
import { Checkbox } from './Checkbox'
import { Badge } from './Badge'

type Item = {
	value: string
	label: string
}

type MultiSelectProps = {
	items: Item[]
}

const MultiSelect = ({ items }: MultiSelectProps) => {
	const [open, setOpen] = useState(false)
	const [checkedItems, setCheckedItems] = useState<
		Array<Item & { checked: CheckedState }>
	>(items.map(item => ({ ...item, checked: false })))

	const atLeastOneChecked = checkedItems.some(item => item.checked)
	const handleChecked = (value: string, checked: CheckedState) => {
		setCheckedItems(currentItems => {
			return currentItems.map(item =>
				item.value === value ? { ...item, checked } : item
			)
		})
	}

	return (
		<div className="p-8">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<button
						aria-expanded={open}
						className="w-[200px] justify-between"
					>
						Select items
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
				<PopoverContent className="w-[200px] p-0">
					<Command onClick={e => e.preventDefault()}>
						<CommandInput placeholder="Search framework..." />
						<CommandEmpty>No items found.</CommandEmpty>
						{/* {atLeastOneChecked && (
							<CommandGroup>
								{checkedItems.map(item => {
									if (item.checked) {
										return (
											<Badge
												key={item.value}
												className="mr-2"
											>
												{item.label}
											</Badge>
										)
									}
								})}
							</CommandGroup>
						)} */}

						<CommandGroup heading="framework">
							{checkedItems.map(item => (
								<CommandItem
									key={item.value}
									onSelect={() => {}}
								>
									<div className="flex items-center space-x-2">
										<Checkbox
											value={item.value}
											onCheckedChange={checked =>
												handleChecked(
													item.value,
													checked
												)
											}
										/>
										<label
											htmlFor="terms"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</label>
									</div>
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export { MultiSelect }

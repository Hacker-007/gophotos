'use client'

import { useState } from 'react'
import Badge from './Badge'

type BadgeGroupProps = {
	items: string[]
	className?: string
}

export default function BadgeGroup({
	items: initialItems,
	className,
}: BadgeGroupProps) {
	const [items, setItems] = useState(
		initialItems.map((item, idx) => ({
			selected: false,
			value: item,
		}))
	)

	const toggleItem = (value: string) => {
		setItems(items => {
			const updatedItems = items.map(item =>
				item.value === value
					? {
							selected: !item.selected,
							value,
					  }
					: item
			)

			return updatedItems
		})
	}

	return (
		<div className={className}>
			{items.map(item => (
				<Badge
					fill={item.selected}
					handleClick={() => toggleItem(item.value)}
					className="whitespace-nowrap"
					key={item.value}
				>
					{item.value}
				</Badge>
			))}
		</div>
	)
}

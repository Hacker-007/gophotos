'use client'

import { useState } from 'react'
import Badge from './Badge'
import { LayoutGroup } from 'framer-motion'

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
			stableIdx: idx,
			value: item,
		}))
	)

	const toggleItem = (value: string) => {
		setItems(items => {
			const updatedItems = items.map(item =>
				item.value === value
					? {
							selected: !item.selected,
							stableIdx: item.stableIdx,
							value,
					  }
					: item
			)

			updatedItems.sort((a, b) => {
				if (a.selected === b.selected) {
					return a.stableIdx - b.stableIdx
				}

				return Number(b.selected) - Number(a.selected)
			})

			console.log(updatedItems)
			return updatedItems
		})
	}

	return (
		<div className={className}>
			<LayoutGroup>
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
			</LayoutGroup>
		</div>
	)
}

'use client'

import Badge from './Badge'

import classNames from '@/utils/classnames'
import { useState } from 'react'

type BadgeGroupProps = {
	items: string[]
	static?: boolean
	className?: string
}

export default function BadgeGroup({
	items: initialItems,
	static: isStatic,
	className,
}: BadgeGroupProps) {
	const [items, setItems] = useState(
		initialItems.map((item, idx) => ({
			selected: false,
			value: item,
		}))
	)

	const toggleItem = (value: string) => {
		if (!isStatic) {
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
	}

	return (
		<div className={className}>
			{items.map(item => (
				<Badge
					fill={item.selected}
					handleClick={() => toggleItem(item.value)}
					className={classNames(
						'whitespace-nowrap',
						isStatic && 'cursor-default',
						!isStatic && (item.selected ? 'hover:bg-black/80' : 'hover:bg-black/10' )
					)}
					key={item.value}
				>
					{item.value}
				</Badge>
			))}
		</div>
	)
}

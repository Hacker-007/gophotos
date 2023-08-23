'use client'

import Badge from './Badge'

import classNames from '@/utils/classnames'
import { useState } from 'react'

type BadgeGroupProps = {
	items: string[]
	static?: boolean
	id?: string
	className?: string
	badgeClassName?: string
}

export default function BadgeGroup({
	items: initialItems,
	static: isStatic,
	id,
	className,
	badgeClassName,
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
		<div className={className} id={id}>
			{items.map(item => (
				<Badge
					fill={item.selected}
					handleClick={() => toggleItem(item.value)}
					className={classNames(
						'whitespace-nowrap',
						isStatic && 'cursor-default',
						!isStatic &&
							(item.selected
								? 'hover:bg-black/80'
								: 'hover:bg-black/10'),
						badgeClassName
					)}
					key={item.value}
				>
					{item.value}
				</Badge>
			))}
		</div>
	)
}

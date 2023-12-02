'use client'

import classNames from '@/utils/classnames'
import { useState } from 'react'

type SwitchProps = {
	id: string
	name: string
	className?: string
}

export default function Switch({ id, name, className }: SwitchProps) {
	const [isSelected, setIsSelected] = useState(false)

	return (
		<div
			className={classNames(
				'w-9 h-5 rounded-full relative transition-colors duration-200 focus-within:ring-2 focus-within:ring-[#556C62]',
				!isSelected ? 'bg-gray-200' : 'bg-[#556C62]',
				className
			)}
		>
			<div
				className={classNames(
					'absolute z-10 w-4 h-4 rounded-full bg-white inset-y-1/2 transition-[left] -translate-y-1/2',
					isSelected ? 'left-[calc(100%-1.125rem)]' : 'left-0.5'
				)}
			/>
			<input
				type="checkbox"
				id={id}
				name={name}
				value={isSelected ? 'yes' : 'no'}
				onClick={ev =>
					setIsSelected(isCurrentlySelected => !isCurrentlySelected)
				}
				className="aria-hidden opacity-0 z-20 absolute w-9 h-5"
			/>
		</div>
	)
}

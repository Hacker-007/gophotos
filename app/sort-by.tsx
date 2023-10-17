'use client'

import { useSyncedSearchFilters } from '@/context/synced-search-filter-context'

import { ReactNode, useEffect, useState } from 'react'
import {
	ArrowTrendingDownIcon,
	ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'

import Select from '@/components/select'

const sortByFilters: Array<{
	value: { sort: 'price'; order: 'asc' | 'desc' }
	display: ReactNode
}> = [
	{
		value: {
			sort: 'price',
			order: 'desc',
		},
		display: (
			<div className="flex items-center gap-1 whitespace-nowrap text-sm">
				<ArrowTrendingDownIcon className="h-4 w-4" />
				price
			</div>
		),
	},
	{
		value: {
			sort: 'price',
			order: 'asc',
		},
		display: (
			<div className="flex items-center gap-1 whitespace-nowrap text-sm">
				<ArrowTrendingUpIcon className="h-4 w-4" />
				price
			</div>
		),
	},
]

export default function SortBy() {
	const { getQueryValue, updateQueryParameter, batchUpdateURL } = useSyncedSearchFilters()
	const [item, setItem] = useState(
		sortByFilters.find(
			item =>
				item.value.sort === getQueryValue('sort') &&
				item.value.order === getQueryValue('order')
		) ?? sortByFilters[0]
	)

	useEffect(() => {
		batchUpdateURL()
	}, [item])

	const handleOnChange = (value: {
		sort: 'price'
		order: 'asc' | 'desc'
	}) => {
		updateQueryParameter('sort', _ => value.sort)
		updateQueryParameter('order', _ => value.order)
		setItem(
			sortByFilters.find(
				item =>
					item.value.sort === value.sort &&
					item.value.order === value.order
			)!
		)
	}

	return (
		<div className="flex flex-col items-end">
			<span className="text-xs text-gray-600">Sort by</span>
			<Select
				className="relative mt-1 min-w-[7rem] whitespace-nowrap rounded-md border border-gray-600 px-2 py-1 text-left"
				keyFn={sortFilter =>
					`${sortFilter.value.sort}${sortFilter.value.order}`
				}
				displayFn={sortFilter => sortFilter.display}
				defaultItem={item}
				onChange={({ value }) => handleOnChange(value)}
				items={sortByFilters}
			/>
		</div>
	)
}

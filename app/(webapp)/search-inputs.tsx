'use client'

import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'

import { useEffect, useState } from 'react'
import { useSyncedSearchFilters } from '@/context/synced-search-filter-context'

import Button from '@/components/button'
import Combobox from '@/components/combobox'
import RangeSlider from '@/components/range-slider'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'

export default function SearchInputs() {
	const { getQueryValue, updateQueryParameter, batchUpdateURL } =
		useSyncedSearchFilters()
	const [hours, setHours] = useState(`${getQueryValue('hours')}`)
	const [debouncedHours] = useDebouncedValue(hours, 300)

	useEffect(() => {
		let parsedHours = Number.parseFloat(debouncedHours)
		if (Number.isNaN(parsedHours)) {
			setHours('0')
			return
		}

		parsedHours = Math.max(parsedHours, 0)
		setHours(`${parsedHours}`)
		updateQueryParameter('hours', _ => parsedHours)
	}, [debouncedHours])

	return (
		<div className="grid grid-rows-[auto_auto_auto_1fr] @sm/filters:grid-rows-[auto_auto_auto] @sm/filters:grid-cols-2 @xl/filters:grid-rows-[auto_auto] @xl/filters:grid-cols-2 @3xl/filters:grid-cols-[minmax(auto,15rem)_minmax(auto,15rem)_1fr] @6xl/filters:grid-rows-1 @6xl/filters:grid-cols-[minmax(auto,15rem)_minmax(auto,15rem)_auto_auto] gap-2 h-full">
			<div className="@sm/filters:grid-row-1 @sm/filters:col-start-1">
				<label className="text-xs font-medium">Location</label>
				<Combobox
					className="w-full rounded-md @3xl/filters:h-16 bg-white px-3 py-2.5 h-full text-left text-sm data-[open=true]:ring-2 data-[open=true]:ring-accent focus:ring-2 focus:ring-accent focus:outline-none"
					keyFn={location => location}
					displayFn={location => location}
					defaultItem={getQueryValue('location')}
					onChange={location =>
						updateQueryParameter('location', _ => location)
					}
					items={[
						'Boston, MA',
						'Los Angeles, CA',
						'San Francisco, CA',
					]}
				>
					{location => (
						<div className="gap-2 flex items-center">
							<MapPinIcon className="h-4 w-4" />
							<p>{location}</p>
						</div>
					)}
				</Combobox>
			</div>
			<div className="@sm/filters:grid-row-1 @sm/filters:col-start-2">
				<label className="text-xs font-medium">Hours</label>
				<div className="relative flex w-full @3xl/filters:h-16 items-center overflow-hidden rounded-md bg-white text-left text-sm focus-within:ring-2 focus-within:ring-accent">
					<input
						className="w-full no-arrow-input border-0 px-3 py-2 text-gray-800 placeholder:text-gray-600 focus:ring-0"
						type="number"
						value={hours}
						onChange={e => setHours(e.target.value)}
					/>
					<span className="absolute right-2 text-sm text-gray-500">
						hours
					</span>
				</div>
			</div>
			<div className="@sm/filters:row-start-2 @sm/filters:col-span-2 @xl/filters:row-start-2 @xl/filters:col-start-1 @xl/filters:col-span-1 @3xl/filters:col-start-3 @3xl/filters:row-start-1">
				<label className="text-xs font-medium">Total price</label>
				<RangeSlider
					className="w-full px-3 py-2 focus:ring-2 focus:ring-accent"
					min={0}
					max={2000}
					step={25}
					minStepsBetweenThumbs={4}
					value={[
						getQueryValue('price[low]'),
						getQueryValue('price[high]'),
					]}
					onValueChange={range => {
						updateQueryParameter('price[low]', _ => range[0])
						updateQueryParameter('price[high]', _ => range[1])
					}}
				>
					{([from, to]) => (
						<div className="flex gap-2">
							<div className="flex items-center justify-between gap-3 rounded-md bg-gray-100 p-1">
								<p className="text-xs uppercase text-gray-700">
									from
								</p>
								<p className="text-sm">${from}</p>
							</div>
							<div className="flex items-center justify-between gap-3 rounded-md bg-gray-100 p-1">
								<p className="text-xs uppercase text-gray-700">
									to
								</p>
								<p className="text-sm">${to}</p>
							</div>
						</div>
					)}
				</RangeSlider>
			</div>
			<div className="@3xl/filters:col-span-3 @sm/filters:col-span-2 @xl/filters:col-start-2 @xl/filters:col-span-1 mt-4 self-end @6xl/filters:col-start-4 @6xl/filters:col-span-1 @6xl/filters:row-start-1">
				<Button
					className="flex w-full items-center hover:bg-accent/90 justify-center gap-1 rounded-md bg-accent px-2 py-1 @xl/filters:h-16 font-medium @3xl/filters:h-min @6xl/filters:h-16 text-secondary"
					onClick={batchUpdateURL}
				>
					<MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
					<span>Search</span>
				</Button>
			</div>
		</div>
	)
}

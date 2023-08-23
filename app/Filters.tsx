'use client'

import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

import {
	AdjustmentsVerticalIcon,
	ArrowTrendingDownIcon,
	ArrowTrendingUpIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

import Button from '@/components/Button'
import Select from '@/components/Select'
import classNames from '@/utils/classnames'
import Checkbox from '@/components/Checkbox'
import Rating from '@/components/Rating'
import RadioGroup from '@/components/RadioGroup'

type FiltersProps = {
	className?: string
	children?: ReactNode
}

type SelectedFilter = {
	specialties: string[]
	ratings: Array<1 | 2 | 3 | 4 | 5>
	reviewCount: string
}

export default function Filters({ className, children }: FiltersProps) {
	const [selectedFilters, setSelectedFilters] = useState<SelectedFilter>({
		specialties: [],
		ratings: [],
		reviewCount: 'Any',
	})

	const resetAll = () => {
		setSelectedFilters({
			specialties: [],
			ratings: [],
			reviewCount: 'Any',
		})
	}

	return (
		<div className={classNames('@container/filters', className)}>
			<div className="grid gap-2 @6xl/filters:grid-cols-[20rem_1fr]">
				<div className="col-span-1 col-start-1 grid grid-cols-1 gap-3 @md/filters:grid-cols-3 @3xl/filters:grid-cols-4 @6xl/filters:col-start-2">
					<div className="@md/filters:col-span-1">
						<label
							htmlFor="location-filter"
							className="text-xs font-medium leading-6 text-gray-900"
						>
							Location
						</label>
						<Select
							id="location-filter"
							items={[
								{ value: 'Test', display: 'Test' },
								{ value: 'Test - 2', display: 'Test - 2' },
							]}
							placeholder="Select a city"
							className="w-full"
						/>
					</div>
					<div className="@md/filters:col-span-1">
						<label
							htmlFor="price-filter"
							className="text-xs font-medium leading-6 text-gray-900"
						>
							Price
						</label>
						<Select
							id="price-filter"
							items={[
								{ value: 'Test', display: 'Test' },
								{ value: 'Test - 2', display: 'Test - 2' },
							]}
							placeholder="Select a city"
							className="w-full"
						/>
					</div>
					<div className="@md/filters:col-span-1">
						<label
							htmlFor="time-filter"
							className="text-xs font-medium leading-6 text-gray-900"
						>
							Date and time
						</label>
						<Select
							id="time-filter"
							items={[
								{ value: 'Test', display: 'Test' },
								{ value: 'Test - 2', display: 'Test - 2' },
							]}
							placeholder="Select a city"
							className="w-full"
						/>
					</div>
					<Button
						leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
						className="w-full justify-center bg-black px-3 py-2 text-xs text-white @md/filters:col-span-1 @md/filters:col-start-3 @3xl/filters:col-start-4 @3xl/filters:row-start-1 @3xl:place-self-end"
					>
						Search
					</Button>
					<Button
						leftIcon={
							<AdjustmentsVerticalIcon className="h-4 w-4" />
						}
						className="w-full justify-center border border-gray-300 px-3 py-2 text-xs @md/filters:col-span-1 @md/filters:col-start-1 @md/filters:row-start-2 @xl/filters:w-40 @3xl/filters:place-self-start @6xl/filters:hidden"
					>
						More filters
					</Button>
					<div className="hidden items-center space-x-2 @4xl/filters:col-start-4 @4xl/filters:flex">
						<p className="whitespace-nowrap text-xs text-gray-600">
							Sort by
						</p>
						<Select
							items={[
								{
									value: 'price:descending',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingDownIcon className="h-4 w-4" />
											price, descending
										</p>
									),
								},
								{
									value: 'price:ascending',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingUpIcon className="h-4 w-4" />
											price, ascending
										</p>
									),
								},
								{
									value: 'rating:ascending',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingUpIcon className="h-4 w-4" />
											rating, ascending
										</p>
									),
								},
								{
									value: 'rating:descending',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingDownIcon className="h-4 w-4" />
											rating, descending
										</p>
									),
								},
							]}
							className="w-full"
						/>
					</div>
				</div>
				<AdditionalFilters
					className="hidden h-min w-80 rounded-md border border-gray-300 @6xl/filters:block"
					resetAll={resetAll}
					selectedFilters={selectedFilters}
					setSelectedFilters={setSelectedFilters}
				/>
				{children}
			</div>
		</div>
	)
}

type AdditionalFiltersProps = {
	resetAll: () => void
	selectedFilters: SelectedFilter
	setSelectedFilters: Dispatch<SetStateAction<SelectedFilter>>
	className?: string
}

function AdditionalFilters({
	resetAll,
	selectedFilters,
	setSelectedFilters,
	className,
}: AdditionalFiltersProps) {
	return (
		<div className={className}>
			<div className="flex items-center justify-between px-3 py-2">
				<h3 className="font-medium">Filters</h3>
				<Button
					className="p-2 text-sm text-red-700 hover:bg-red-200"
					onClick={resetAll}
				>
					Reset all
				</Button>
			</div>
			<div className="w-full border-t border-gray-300" />
			<div className="space-y-2 px-3 py-2">
				<div>
					<p className="text-sm font-medium">Specialities</p>
					<div className="mt-1 grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-1">
						{[
							'Indoor',
							'Outdoor',
							'Bright Lights',
							'Dim Lights',
							'Group',
							'Headshot',
						].map(specialty => (
							<Checkbox
								className="space-x-1.5 whitespace-nowrap text-xs"
								key={specialty}
								label={specialty}
								checked={selectedFilters.specialties.includes(
									specialty
								)}
								handleCheck={checkedState => {
									if (checkedState !== 'indeterminate') {
										setSelectedFilters(filters => {
											return {
												...filters,
												specialties: checkedState
													? [
															...filters.specialties,
															specialty,
													  ]
													: filters.specialties.filter(
															item =>
																item !==
																specialty
													  ),
											}
										})
									}
								}}
							/>
						))}
					</div>
				</div>
				<div className="w-full border-t border-gray-300" />
				<div>
					<p className="text-sm font-medium">Rating</p>
					<div className="mt-1 space-y-1">
						{([5, 4, 3, 2, 1] as const).map(starCount => (
							<Checkbox
								className="space-x-1.5 whitespace-nowrap text-xs"
								key={starCount}
								label={
									<Rating
										rating={starCount}
										className="space-x-1"
									/>
								}
								checked={selectedFilters.ratings.includes(
									starCount
								)}
								handleCheck={checkedState => {
									if (checkedState !== 'indeterminate') {
										setSelectedFilters(filters => {
											return {
												...filters,
												ratings: checkedState
													? [
															...filters.ratings,
															starCount,
													  ]
													: filters.ratings.filter(
															item =>
																item !==
																starCount
													  ),
											}
										})
									}
								}}
							/>
						))}
					</div>
				</div>
				<div className="w-full border-t border-gray-300" />
				<div>
					<p className="text-sm font-medium">Reviews</p>
					<RadioGroup
						className="mt-1 gap-1"
						selectedValue={selectedFilters.reviewCount}
						items={[
							'Any',
							'0 - 100',
							'100 - 200',
							'200 - 300',
							'300 - 500',
							'500 - 1000',
							'1000+',
						]}
						handleValue={count =>
							setSelectedFilters(filters => ({
								...filters,
								reviewCount: count,
							}))
						}
					/>
				</div>
			</div>
		</div>
	)
}

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
import Dialog, { DialogClose } from '@/components/Dialog'

type FiltersProps = {
	className?: string
	children?: ReactNode
}

type SelectedFilter = {
	photographerSkills: string[]
	ratings: Array<1 | 2 | 3 | 4 | 5>
	numberOfReviews: string
}

export default function Filters({ className, children }: FiltersProps) {
	const [selectedFilters, setSelectedFilters] = useState<SelectedFilter>({
		photographerSkills: [],
		ratings: [],
		numberOfReviews: 'Any',
	})

	const resetAll = () => {
		setSelectedFilters({
			photographerSkills: [],
			ratings: [],
			numberOfReviews: 'Any',
		})
	}

	return (
		<div className={classNames('@container/filters', className)}>
			<div className="@6xl/filters:grid-cols-[20rem_1fr] grid gap-2">
				<div className="col-span-1 col-start-1 grid grid-cols-1 gap-3 @md/filters:grid-cols-3 @6xl/filters:col-start-2">
					<div className="col-span-2 @md/filters:col-span-1">
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
					<div className="col-span-2 @md/filters:col-span-1">
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
					<Button
						leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
						className="col-span-2 w-full justify-center bg-black px-3 py-2 text-xs text-white @md/filters:col-span-1 @md/filters:place-self-end"
					>
						Search
					</Button>
					<Dialog
						trigger={
							<Button
								leftIcon={
									<AdjustmentsVerticalIcon className="h-4 w-4" />
								}
								className="@6xl/filters: col-span-1 col-start-2 row-start-4 w-full justify-center self-end border border-gray-300 px-3 py-2 text-xs @md/filters:col-start-1 @md/filters:row-start-2 @xl/filters:w-40 @xl/filters:justify-self-start"
							>
								More filters
							</Button>
						}
					>
						<div className="h-full w-full rounded-sm bg-white">
							<AdditionalFilters
								resetAll={resetAll}
								selectedFilters={selectedFilters}
								setSelectedFilters={setSelectedFilters}
							/>
							<DialogClose className="w-full p-2">
								<div className="flex w-full items-center justify-center gap-x-1 rounded-md bg-black px-3 py-2 text-xs font-medium text-white">
									<MagnifyingGlassIcon className="h-4 w-4" />
									<p>Search</p>
								</div>
							</DialogClose>
						</div>
					</Dialog>
					<div className="col-span-1 col-start-1 flex flex-col items-start gap-1 place-self-start @sm/filters:flex-row @sm/filters:items-center @md/filters:col-span-2 @md/filters:justify-self-end @6xl/filters:col-span-1 @6xl/filters:col-start-3">
						<p className="whitespace-nowrap text-xs text-gray-600">
							Sort by
						</p>
						<Select
							className="w-min min-w-[10rem]"
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
						/>
					</div>
				</div>
				<AdditionalFilters
					className="@6xl/filters:block hidden h-min w-80 rounded-md border border-gray-300"
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
					<p className="text-sm font-medium">Skills</p>
					<div className="mt-1 grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-1">
						{[
							'Indoor',
							'Outdoor',
							'Bright Lights',
							'Dim Lights',
							'Group',
							'Headshot',
						].map(photographerSkill => (
							<Checkbox
								className="space-x-1.5 whitespace-nowrap text-xs"
								key={photographerSkill}
								label={photographerSkill}
								checked={selectedFilters.photographerSkills.includes(
									photographerSkill
								)}
								handleCheck={checkedState => {
									if (checkedState !== 'indeterminate') {
										setSelectedFilters(filters => {
											return {
												...filters,
												photographerSkills: checkedState
													? [
															...filters.photographerSkills,
															photographerSkill,
													  ]
													: filters.photographerSkills.filter(
															item =>
																item !==
																photographerSkill
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
					<p className="text-sm font-medium">Number of Reviews</p>
					<RadioGroup
						className="mt-1 gap-1"
						selectedValue={selectedFilters.numberOfReviews}
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
								numberOfReviews: count,
							}))
						}
					/>
				</div>
			</div>
		</div>
	)
}

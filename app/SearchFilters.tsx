'use client'

import { useCallback, useState } from 'react'

import {
	ArrowTrendingDownIcon,
	ArrowTrendingUpIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

import Button from '@/components/Button'
import Select from '@/components/Select'
import classNames from '@/utils/classnames'
import MoreFiltersButton, {
	AdditionalFilterCriteria,
} from './MoreFiltersButton'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type SearchFiltersProps = {
	className?: string
}

export type SearchCriteria = {
	location: string
	date: string
	price: string
	sortBy: string
	filters: AdditionalFilterCriteria
}

export default function SearchFilters({ className }: SearchFiltersProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()!
	const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
		location: 'Test',
		date: 'Test',
		price: 'Test',
		sortBy: 'price:desc',
		filters: {
			photographerSkills: [],
			ratings: [],
			numberOfReviews: 'Any',
		},
	})

	const createQueryString = useCallback(
		(params: Record<string, string | any[]>) => {
			const previousParams = new URLSearchParams(
				Array.from(searchParams.entries())
			)

			for (const key in params) {
				previousParams.delete(key)
				const value = params[key]
				if (Array.isArray(value)) {
					for (const item of value) {
						previousParams.append(key, item)
					}
				} else {
					previousParams.set(key, value)
				}
			}

			return previousParams.toString()
		},
		[searchParams]
	)

	const handleUpdateFilters = (
		filterUpdate: (
			updatedFilters: AdditionalFilterCriteria
		) => AdditionalFilterCriteria
	) => {
		setSearchCriteria(criteria => {
			return {
				...criteria,
				filters: filterUpdate(criteria.filters),
			}
		})
	}

	const handleSearch = () => {
		router.push(
			pathname +
				'?' +
				createQueryString({
					location: searchCriteria.location,
					date: searchCriteria.date,
					price: searchCriteria.price,
					sortBy: searchCriteria.sortBy,
					skills: searchCriteria.filters.photographerSkills,
					ratings: searchCriteria.filters.ratings,
					reviews: searchCriteria.filters.numberOfReviews,
				})
		)
	}

	return (
		<div className={classNames('@container/filters', className)}>
			<div className="grid gap-2">
				<div className="col-span-1 col-start-1 grid grid-cols-1 gap-3 @md/filters:grid-cols-3 @6xl/filters:grid-cols-4">
					<div className="col-span-2 @md/filters:col-span-1">
						<label
							htmlFor="location-filter"
							className="text-xs font-medium leading-6 text-gray-900"
						>
							Location
						</label>
						<Select
							id="location-filter"
							name="locationFilter"
							className="w-full"
							items={[
								{ value: 'Test', display: 'Test' },
								{ value: 'Test - 2', display: 'Test - 2' },
							]}
							defaultValue="Test"
							placeholder="Select a city"
							onValueChange={location =>
								setSearchCriteria(criteria => ({
									...criteria,
									location,
								}))
							}
						/>
					</div>
					<div className="col-span-2 @md/filters:col-span-1">
						<label
							htmlFor="date-filter"
							className="text-xs font-medium leading-6 text-gray-900"
						>
							Date and time
						</label>
						<Select
							id="date-filter"
							name="dateFilter"
							className="w-full"
							items={[
								{ value: 'Test', display: 'Test' },
								{ value: 'Test - 2', display: 'Test - 2' },
							]}
							defaultValue="Test"
							placeholder="Select a city"
							onValueChange={date =>
								setSearchCriteria(criteria => ({
									...criteria,
									date,
								}))
							}
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
							name="priceFilter"
							className="w-full"
							items={[
								{ value: 'Test', display: 'Test' },
								{ value: 'Test - 2', display: 'Test - 2' },
							]}
							defaultValue="Test"
							placeholder="Select a city"
							onValueChange={price =>
								setSearchCriteria(criteria => ({
									...criteria,
									price,
								}))
							}
						/>
					</div>
					<Button
						className="col-span-2 w-full justify-center bg-black px-3 py-2 text-xs text-white @md/filters:col-span-1 @md/filters:col-start-3 @md/filters:place-self-end @6xl/filters:col-start-4"
						leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
						onClick={handleSearch}
						type="submit"
					>
						Search
					</Button>
					<MoreFiltersButton
						additionalFilterCriteria={searchCriteria.filters}
						onUpdate={handleUpdateFilters}
						onSearch={handleSearch}
					/>
					<div className="col-span-1 col-start-1 flex flex-col items-start gap-1 place-self-start @sm/filters:flex-row @sm/filters:items-center @md/filters:col-span-2 @md/filters:col-start-2 @md/filters:justify-self-end @6xl/filters:col-span-1 @6xl/filters:col-start-4">
						<label
							htmlFor="sort-by-filter"
							className="whitespace-nowrap text-xs text-gray-600"
						>
							Sort by
						</label>
						<Select
							id="sort-by-filter"
							name="sortByFilter"
							className="w-min min-w-[10rem]"
							items={[
								{
									value: 'price:desc',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingDownIcon className="h-4 w-4" />
											price, descending
										</p>
									),
								},
								{
									value: 'price:asc',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingUpIcon className="h-4 w-4" />
											price, ascending
										</p>
									),
								},
								{
									value: 'rating:asc',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingUpIcon className="h-4 w-4" />
											rating, ascending
										</p>
									),
								},
								{
									value: 'rating:desc',
									display: (
										<p className="flex items-center gap-1 whitespace-nowrap">
											<ArrowTrendingDownIcon className="h-4 w-4" />
											rating, descending
										</p>
									),
								},
							]}
							onValueChange={sortBy =>
								setSearchCriteria(criteria => ({
									...criteria,
									sortBy,
								}))
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

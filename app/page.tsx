import { Inter } from 'next/font/google'

import classNames from '@/utils/classnames'

import SyncedSearchFilterProvider from '@/context/synced-search-filter-context'

import AdditionalFilters from './additional-filters'
import SortBy from './sort-by'
import PaginationControls from './pagination-controls'
import PortfolioPreview from './portfolio-preview'
import SearchInputs from './search-inputs'
import { PhotographerProfile } from '@/utils/types'
import { updateURLParameter } from '@/utils/url'

const inter = Inter({
	subsets: ['latin'],
	preload: true,
})

type HomeProps = {
	searchParams: { [key: string]: string | string[] | undefined }
}

async function getData(searchParams: {
	[key: string]: string | string[] | undefined
}): Promise<{
	data: PhotographerProfile[]
	pagination: { currentPage: number; pageCount: number }
}> {
	let queryParams = new URLSearchParams()
	for (let key in searchParams) {
		queryParams = updateURLParameter(queryParams, key, searchParams[key])
	}

	const queryString = queryParams.toString()
	return fetch(
		`${process.env.SERVER_HOST}/api/v1/photographers?${queryString}`
	).then(res => res.json())
}

export default async function HomePage({ searchParams }: HomeProps) {
	const { data: portfolios, pagination } = await getData(searchParams)

	return (
		<SyncedSearchFilterProvider
			defaultItems={{
				location: 'Cambridge, MA',
				hours: 2,
				'price[low]': 100,
				'price[high]': 500,
				'schools[]': [],
				'skills[]': [],
				'ratings[]': [],
				sort: 'rating',
				order: 'desc',
				page: 1,
			}}
		>
			<div className="w-full bg-primary grid grid-rows-1 justify-items-center">
				<header className="lg:px-4 w-full max-w-[100rem] space-y-2 px-3 pb-4">
					<div>
						<h2 className="text-lg font-medium">
							Heading about GoPhotos
						</h2>
						<h3 className="text-sm text-gray-600">
							Subheading about GoPhotos that elaborates what the
							main heading says. This can be long as well.
						</h3>
					</div>
					<div className="rounded-md border border-gray-400 p-2">
						<SearchInputs />
					</div>
				</header>
			</div>
			<div className="w-full grid justify-items-center flex-grow">
				<main className="max-w-[100rem] w-full grid px-3 py-2 xl:grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] gap-4 lg:px-4">
					<AdditionalFilters />
					<div className="col-start-2 row-start-1">
						<SortBy />
					</div>
					<div
						className={classNames(
							inter.className,
							'col-span-2 grid w-full gap-4 xl:row-start-2 xl:col-span-1',
							portfolios.length !== 0 && 'grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]'
						)}
					>
						{portfolios.map(portfolio => (
							<PortfolioPreview
								key={portfolio.id}
								photographerId={portfolio.id}
								name={portfolio.name}
								location={portfolio.location}
								estimatedPriceRange={
									portfolio.estimatedPriceRange
								}
								rating={portfolio.rating}
								numberOfReviews={portfolio.numberOfReviews}
								profilePictureUrl={portfolio.profilePictureUrl}
								portfolioUrls={portfolio.portfolioUrls}
							/>
						))}
						{portfolios.length === 0 && (
							<div className='justify-self-center'>
								<p className="text-sm font-medium">
									No results found.
								</p>
								<p className="text-sm">
									Try searching with different filters.
								</p>
							</div>
						)}
					</div>
					{portfolios.length !== 0 && <PaginationControls
						pageCount={pagination.pageCount}
						className="col-span-2 xl:col-start-2 xl:col-span-1"
					/>}
				</main>
			</div>
		</SyncedSearchFilterProvider>
	)
}

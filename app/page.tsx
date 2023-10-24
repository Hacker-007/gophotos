import { Suspense } from 'react'

import SyncedSearchFilterProvider from '@/context/synced-search-filter-context'

import SearchInputs from './search-inputs'
import AdditionalFilters from './additional-filters'
import SortBy from './sort-by'
import PhotographerResults from './photographer-results'
import PhotographerResultsLoader from './photographer-results-loader'
import { updateURLParameter } from '@/utils/url'

type HomeProps = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export default function HomePage({ searchParams }: HomeProps) {
	let queryParams = new URLSearchParams()
	for (let key in searchParams) {
		queryParams = updateURLParameter(queryParams, key, searchParams[key])
	}

	const queryString = queryParams.toString()
	return (
		<SyncedSearchFilterProvider
			defaultItems={{
				location: 'Boston, MA',
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
			<div className="w-full z-10 bg-primary grid grid-rows-1 justify-items-center">
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
					<div className="rounded-md border border-gray-400 p-2 @container/filters">
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
					<Suspense
						key={queryString}
						fallback={<PhotographerResultsLoader />}
					>
						<PhotographerResults searchParams={searchParams} />
					</Suspense>
				</main>
			</div>
		</SyncedSearchFilterProvider>
	)
}

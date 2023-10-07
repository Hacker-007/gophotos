import { Inter } from 'next/font/google'

import { updateURLParameter } from '@/utils/url'
import { PhotographerProfile } from '@/utils/types'
import classNames from '@/utils/classnames'

import PortfolioPreview from './portfolio-preview'
import PaginationControls from './pagination-controls'

const inter = Inter({
	subsets: ['latin'],
	preload: true,
})

type APIResult = {
	data: PhotographerProfile[]
	pagination: { currentPage: number; pageCount: number }
}

async function getData(searchParams: {
	[key: string]: string | string[] | undefined
}): Promise<APIResult> {
	let queryParams = new URLSearchParams()
	for (let key in searchParams) {
		queryParams = updateURLParameter(queryParams, key, searchParams[key])
	}

	const queryString = queryParams.toString()
	return Promise.all([
		fetch(
			`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/photographers?${queryString}`
		).then(res => res.json()),
		new Promise(res => setTimeout(res, 1000)),
	]).then(data => data[0])
}

type PaginationControlsProps = {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

export default async function PhotographerResults({
	searchParams,
}: PaginationControlsProps) {
	const { data: portfolios, pagination } = await getData(searchParams)

	return (
		<>
			<div
				className={classNames(
					inter.className,
					'col-span-2 grid w-full gap-4 xl:row-start-2 xl:col-span-1',
					portfolios.length !== 0 &&
						'grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]'
				)}
			>
				{portfolios.map(portfolio => (
					<PortfolioPreview
						key={portfolio.id}
						photographerId={portfolio.id}
						hours={+(searchParams['hours'] || 1)}
						name={portfolio.name}
						location={portfolio.location}
						estimatedPriceRange={portfolio.estimatedPriceRange}
						rating={portfolio.rating}
						numberOfReviews={portfolio.numberOfReviews}
						profilePictureUrl={portfolio.profilePictureUrl}
						portfolioUrls={portfolio.portfolioUrls}
					/>
				))}
				{portfolios.length === 0 && (
					<div className="justify-self-center">
						<p className="text-sm font-medium">No results found.</p>
						<p className="text-sm">
							Try searching with different filters.
						</p>
					</div>
				)}
			</div>
			{portfolios.length !== 0 && (
				<PaginationControls
					className="col-span-2 xl:col-start-2 xl:col-span-1"
					currentPage={pagination.currentPage}
					maxPageCount={pagination.pageCount}
				/>
			)}
		</>
	)
}

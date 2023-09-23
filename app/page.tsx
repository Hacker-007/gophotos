import { Inter } from 'next/font/google'

import classNames from '@/utils/classnames'

import AdditionalFilters from './additional-filters'
import SortBy from './sort-by'
import PaginationControls from './pagination-controls'
import PortfolioPreview from './portfolio-preview'

const inter = Inter({
	subsets: ['latin'],
	preload: true,
})

type HomeProps = {
	searchParams: { [key: string]: string | string | undefined }
}

export default async function Home({}: HomeProps) {
	const result = await fetch(
		'http://localhost:8080/api/v1/photographer'
	).then(res => res.json())

	const portfolios = result.data
	return (
		<main className="max-w-[100rem] w-full grid px-3 py-2 xl:grid-cols-[auto_1fr] gap-4 lg:px-4">
			<AdditionalFilters />
			<div className="col-start-2 row-start-1">
				<SortBy />
			</div>
			<div
				className={classNames(
					inter.className,
					'col-span-2 grid w-full grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 xl:row-start-2 xl:col-span-1'
				)}
			>
				{portfolios.map((portfolio: any) => (
					<PortfolioPreview
						key={portfolio.publicId}
						photographerId={portfolio.publicId}
						name={portfolio.name}
						location={portfolio.location}
						estimatedPriceRange={[
							portfolio.hourlyPriceLow,
							portfolio.hourlyPriceHigh,
						]}
						rating={portfolio.rating}
						numberOfReviews={1027}
						profilePictureUrl={portfolio.profilePictureUrl}
						portfolioUrls={portfolio.portfolioUrls}
					/>
				))}
			</div>
			<PaginationControls className="col-span-2 xl:col-start-2 xl:col-span-1" />
		</main>
	)
}

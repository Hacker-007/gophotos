import PortfolioPreview from './PortfolioPreview'
import SearchFilters from './SearchFilters'

type HomeProps = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home({ searchParams }: HomeProps) {
	return (
		<main className='mb-2'>
			<SearchFilters className="w-full overflow-hidden" />
			<div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] justify-items-center gap-3">
				{[...new Array(10)].map((_, idx) => (
					<PortfolioPreview
						key={idx}
						photographerId={`${idx}`}
						name="Bob Ross"
						location="Cambridge, MA"
						estimatedPriceRange={[150, 200]}
						rating={4.7}
						numberOfReviews={1027}
					/>
				))}
			</div>
		</main>
	)
}

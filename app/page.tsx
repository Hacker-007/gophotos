import PortfolioPreview from './PortfolioPreview'
import Filters from './Filters'

export default function Home() {
	return (
		<main>
			<Filters className="w-full overflow-hidden">
				<div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] justify-items-center gap-3">
					{[...new Array(25)].map((_, idx) => (
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
			</Filters>
		</main>
	)
}

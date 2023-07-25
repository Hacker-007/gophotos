type PhotographerPortfolioProps = {
	params: {
		id: string
	}
}

export default function PhotographerPortfolio({
	params: { id },
}: PhotographerPortfolioProps) {
	return <div>Hello Photographer {id}!</div>
}

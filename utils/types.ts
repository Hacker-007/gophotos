export type PhotographerProfile = {
	id: string
	accountId: string
	fullName: string
	email: string
	// profilePictureUrl: string
	// location: string
	estimatedHourlyPriceRange: [number, number]
	school: string,
	skills: string[],
	about: string
	hires: number,
	// rating: number
	// numberOfReviews: number
	// portfolioUrls: string[]
}

export type PhotographerAbout = {
	hireCount: number
	about: string
	skills: string[]
}

export type PhotographerReviews = {
	overallRating: number
	numberOfReviews: number
	categoryRatings: Array<{
		label: string
		rating: number
	}>
	reviews: Array<{
		name: string
		profilePictureUrl: string
		date: string
		rating: number
		review: string
	}>
}

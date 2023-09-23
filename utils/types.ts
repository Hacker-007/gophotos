export type PhotographerProfile = {
    id: string
    name: string
    email: string
    profilePictureUrl: string
    location: string
    estimatedPriceRange: [number, number]
    rating: number
    numberOfReviews: number
    portfolioUrls: string[]
}

export type PhotographerAbout = {
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
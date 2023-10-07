import { StarIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/account-circle'
import Carousel from '@/components/carousel'
import Link from 'next/link'

type PortfolioPreviewProps = {
	photographerId: string
	hours: number
	name: string
	location: string
	estimatedPriceRange: [number, number]
	rating: number
	numberOfReviews: number
	profilePictureUrl: string
	portfolioUrls: string[]
}

function formatRating(rating: number) {
	if (Number.isInteger(rating) && rating != 0) {
		return `${rating}.0`
	} else {
		return `${rating}`
	}
}

export default function PortfolioPreview({
	photographerId,
	hours,
	name,
	location,
	estimatedPriceRange,
	rating,
	numberOfReviews,
	profilePictureUrl,
	portfolioUrls,
}: PortfolioPreviewProps) {
	return (
		<div className="w-full rounded-md">
			<Carousel className="aspect-square" imageUrls={portfolioUrls}>
				<div className="absolute bottom-2 hidden w-full justify-center px-2 group-hover:flex">
					<Link
						className="rounded-md border border-white/30 bg-white px-3 py-2 text-sm font-medium text-black shadow-lg hover:bg-gray-100"
						href={`/photographer/${photographerId}?hours=${hours}`}
					>
						View profile
					</Link>
				</div>
			</Carousel>
			<div className="mt-2 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<AccountCircle src={profilePictureUrl} />
					<div>
						<p className="text-sm font-medium">{name}</p>
						<p className="text-xs">{location}</p>
					</div>
				</div>
				<div>
					<p className="text-right text-sm font-semibold">
						<span>${estimatedPriceRange[0]}</span> -{' '}
						<span>${estimatedPriceRange[1]}</span>
					</p>
					<p className="flex items-center justify-end text-xs">
						<StarIcon className="h-4 w-4 text-yellow-400" />
						{formatRating(rating)} &middot; {numberOfReviews}{' '}
						reviews
					</p>
				</div>
			</div>
		</div>
	)
}

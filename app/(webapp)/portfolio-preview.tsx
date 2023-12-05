import { StarIcon, UserIcon } from '@heroicons/react/24/outline'

import AccountCircle from '@/components/account-circle'
import Carousel from '@/components/carousel'
import Link from 'next/link'

type PortfolioPreviewProps = {
	photographerId: string
	email: string
	hours: number
	name: string
	location: string
	estimatedPriceRange: [number, number]
	rating: number
	numberOfReviews: number
	profilePictureUrl?: string
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
	email,
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
			<Carousel
				className="aspect-[3/2] z-0"
				imageUrls={portfolioUrls}
				sizes="700w"
			>
				<div className="absolute bottom-2 hidden w-full justify-center px-2 group-hover:flex z-10">
					<Link
						className="rounded-md border border-white/30 bg-white px-3 py-2 text-sm font-medium text-black shadow-lg hover:bg-gray-100"
						href={`/photographer/${photographerId}?email=${email}&hours=${hours}`}
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
				<div className="w-24">
					<p className="text-right text-sm font-semibold">
						<span>${estimatedPriceRange[0]}</span> -{' '}
						<span>${estimatedPriceRange[1]}</span>
					</p>
					{numberOfReviews < 10 ? (
						<div className="flex items-center justify-end">
							<p className="text-xs uppercase px-2 bg-accent text-secondary w-min rounded-sm">
								new
							</p>
						</div>
					) : (
						<p className="flex items-center justify-end text-xs">
							<StarIcon className="h-4 w-4 text-yellow-400" />
							{formatRating(rating)} &middot; {numberOfReviews}{' '}
							reviews
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

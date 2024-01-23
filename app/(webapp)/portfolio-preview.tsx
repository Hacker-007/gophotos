import { StarIcon, UserIcon } from '@heroicons/react/24/outline'

import AccountCircle from '@/components/account-circle'
import Carousel from '@/components/carousel'
import Link from 'next/link'
import callApi from '@/utils/callApi'

type PortfolioPreviewProps = {
	photographerId: string
	accountId: string
	hours: number
	// location: string
	estimatedPriceRange: [number, number]
	rating: number
	numberOfReviews: number
	// profilePictureUrl?: string
}

function formatRating(rating: number) {
	if (Number.isInteger(rating) && rating != 0) {
		return `${rating}.0`
	} else {
		return `${rating}`
	}
}

export default async function PortfolioPreview({
	photographerId,
	accountId,
	hours,
	// location,
	estimatedPriceRange,
	rating,
	// profilePictureUrl,
	numberOfReviews,
}: PortfolioPreviewProps) {
	const {
		data: { email, fullName },
	} = (await callApi(`accounts/${accountId}`)) as any
	const { data: assets } = (await callApi(
		`assets?accountId=${accountId}`
	)) as any

	return (
		<div className="w-full rounded-md">
			<Carousel
				className="z-0 aspect-[3/2]"
				imageUrls={assets}
				sizes="700w"
			>
				<div className="absolute bottom-2 z-10 hidden w-full justify-center px-2 group-hover:flex">
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
					<AccountCircle />
					<div>
						{/* <p className="text-sm font-medium">{name}</p>
						<p className="text-xs">{location}</p> */}
						<p className="text-sm font-medium">{fullName}</p>
						<p className="text-xs">Cambridge, MA</p>
					</div>
				</div>
				<div className="w-24">
					<p className="text-right text-sm font-semibold">
						<span>${estimatedPriceRange[0]}</span> -{' '}
						<span>${estimatedPriceRange[1]}</span>
					</p>
					{numberOfReviews < 10 ? (
						<div className="flex items-center justify-end">
							<p className="w-min rounded-sm bg-accent px-2 text-xs uppercase text-secondary">
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

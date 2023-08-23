import classNames from '@/utils/classnames'

import { StarIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/AccountCircle'
import ViewProfileOverlay from './ViewProfileOverlay'

type PortfolioPreviewProps = {
	photographerId: string
	name: string
	location: string
	estimatedPriceRange: [number, number]
	rating: number
	numberOfReviews: number
	className?: string
}

function formatRating(rating: number) {
	if (Number.isInteger(rating)) {
		return `${rating}.0`
	} else {
		return `${rating}`
	}
}

export default async function PortfolioPreview({
	photographerId,
	name,
	location,
	estimatedPriceRange: estimatedPrice,
	rating,
	numberOfReviews,
	className,
}: PortfolioPreviewProps) {
	return (
		<div className={classNames('w-full', className)}>
			<ViewProfileOverlay
				photographerId={photographerId}
				className="relative h-48 w-full overflow-auto rounded-md @container/overlay"
			>
				<div className="grid h-full w-full grid-cols-3 gap-1 @md/overlay:grid-cols-4 @2xl/overlay:grid-cols-5">
					<div className="relative col-span-2 h-full w-full bg-red-200"></div>
					<div className="relative col-span-1 h-full w-full bg-green-200"></div>
					<div className="relative col-span-1 hidden h-full w-full bg-blue-200 @md/overlay:block"></div>
					<div className="relative col-span-1 hidden h-full w-full bg-purple-200 @2xl/overlay:block"></div>
				</div>
			</ViewProfileOverlay>
			<div className="mt-2 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<AccountCircle />
					<div>
						<p className="text-sm font-medium">{name}</p>
						<p className="text-xs">{location}</p>
					</div>
				</div>
				<div>
					<p className="text-right text-xs">
						<span className="font-semibold">
							${estimatedPrice[0]}
						</span>{' '}
						-{' '}
						<span className="font-semibold">
							${estimatedPrice[1]}
						</span>
					</p>
					<p className="flex items-center justify-end text-xs font-medium">
						<StarIcon className='w-4 h-4 text-yellow-400' />
						{formatRating(rating)} ({numberOfReviews})
					</p>
				</div>
			</div>
		</div>
	)
}

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { StarIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/account-circle'
import BadgeGroup from '@/components/badge-group'
import Carousel from '@/components/carousel'
import FillableLine from '@/components/fillable-lines'
import RequestQuote from './request-quote'
import {
	PhotographerAbout,
	PhotographerProfile,
	PhotographerReviews,
} from '@/utils/types'
import classNames from '@/utils/classnames'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

function formatRating(rating: number) {
	if (Number.isInteger(rating) && rating != 0) {
		return `${rating}.0`
	} else {
		return `${rating}`
	}
}

async function getData(
	id: string,
	hours: number
): Promise<PhotographerProfile & PhotographerAbout & PhotographerReviews> {
	return fetch(
		`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/photographers/${id}?hours=${hours}`,
		{
			cache: 'no-cache',
		}
	)
		.then(res => res.json())
		.then(res => res.data)
}

export default async function PhotographerPortfolioPage({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const hours = +(searchParams.hours ?? '1')
	const photographerProfile = await getData(params.id, hours)

	return (
		<div
			className={classNames(
				'w-full grid justify-items-center px-3 py-4 flex-grow',
				spaceGrotesk.className
			)}
		>
			<div className="max-w-[90rem] w-full justify-self-center">
				<div className="grid gap-4 grid-cols-1 max-w-full sm:grid-rows-[auto_1fr] sm:grid-cols-[minmax(1fr,34rem)_auto] md:grid-cols-[34rem_1fr] lg:grid-cols-[45rem_1fr] xl:grid-cols-[55rem_1fr]">
					<div className="h-min col-start-1 w-full sm:row-start-1 sm:row-span-1">
						<Carousel
							imageUrls={photographerProfile.portfolioUrls}
							sizes="(max-width: 640px) 100vw, (max-width: 768px) 500w, (max-width: 1024px) 560w, (max-width: 1280px) 720w, 880w"
							className="aspect-[3/2] w-full"
						/>
						<div className="mt-2 flex justify-between">
							<div className="flex items-center space-x-2">
								<AccountCircle
									src={photographerProfile.profilePictureUrl}
								/>
								<div>
									<p className="font-medium">
										{photographerProfile.name}
									</p>
									<p className="text-xs">
										{photographerProfile.location}
									</p>
								</div>
							</div>
							<div>
								{photographerProfile.numberOfReviews < 10 ? (
									<div className="flex items-center justify-end">
										<p className="text-sm uppercase px-2 bg-accent text-secondary w-min rounded-sm">
											new
										</p>
									</div>
								) : (
									<p className="flex items-center justify-end gap-1 font-medium">
										<StarIcon className="h-4 w-4 text-yellow-400" />
										{formatRating(
											photographerProfile.rating
										)}{' '}
										&middot;{' '}
										{photographerProfile.numberOfReviews}{' '}
										reviews
									</p>
								)}
								<p className="flex items-center justify-end gap-1 text-sm">
									hired{' '}
									<span className="font-medium">
										{photographerProfile.hireCount}
									</span>{' '}
									times
								</p>
							</div>
						</div>
					</div>
					<div className="sm:col-start-2 sm:w-56 md:w-full h-min sm:row-start-1 sm:flex-col flex sm:items-start items-center justify-between rounded-md border border-gray-200 p-2 sm:row-span-2">
						<div>
							<p className="md:text-base text-sm font-medium">
								Estimated price
							</p>
							<p className="text-xs text-gray-600">
								This estimate is based on {hours} hours of{' '}
								{photographerProfile.name}&apos;s average hourly price
								range.
							</p>
							<p className="mt-1 text-lg md:text-xl xl:text-2xl font-semibold">
								${photographerProfile.estimatedPriceRange[0]} -
								${photographerProfile.estimatedPriceRange[1]}
							</p>
						</div>
						<RequestQuote
							id={photographerProfile.id}
							hours={hours}
						/>
					</div>
					<div className="lg:col-start-1 flex flex-col gap-2 sm:row-start-2 sm:row-span-1">
						<div>
							<h3 className="text-sm font-medium">About</h3>
							<p className="mt-1 text-gray-800">
								{photographerProfile.about}
							</p>
						</div>
						<div>
							<h3 className="text-sm font-medium">Skills</h3>
							<BadgeGroup
								className="mt-1 flex-wrap"
								items={photographerProfile.skills}
								static
							/>
						</div>
					</div>
				</div>
				{photographerProfile.numberOfReviews >= 10 ? (
					<div className="mt-4">
						<h3 className="text-sm font-medium">
							Reviews and ratings
						</h3>
						<div>
							<div className="flex items-center">
								<StarIcon className="h-4 w-4 text-yellow-400" />
								<h4 className="text-2xl font-medium">
									{formatRating(photographerProfile.rating)}
									<span className="text-sm text-gray-600">
										{' '}
										/ 5.0
									</span>
								</h4>
							</div>
							<p className="mb-2 text-xs text-gray-500">
								{photographerProfile.numberOfReviews} reviews
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-[20rem_1fr] lg:grid-cols-[30rem_1fr] gap-4 md:gap-10 w-full">
							<div className="grid grid-cols-2 gap-2 lg:gap-4">
								{photographerProfile.categoryRatings.map(
									({ label, rating }) => (
										<div key={label}>
											<h4 className="text-sm font-medium">
												{label}
											</h4>
											<FillableLine
												className="mt-1"
												value={rating}
												maxValue={5}
											/>
										</div>
									)
								)}
							</div>
							<div className="grid md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] md:mt-[1.375rem] gap-4">
								{photographerProfile.reviews.map(
									(review, idx) => (
										<Rating
											profilePictureUrl={
												review.profilePictureUrl
											}
											name={review.name}
											date={review.date}
											rating={review.rating}
											review={review.review}
											key={idx}
										/>
									)
								)}
							</div>
						</div>
					</div>
				) : (
					<div className="mt-4">
						<h3 className="text-sm font-medium">
							Reviews and ratings
						</h3>
						<div>
							<p className='text-sm text-gray-600'>
								{photographerProfile.name} does not have enough reviews or ratings to show.
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

function Rating({
	profilePictureUrl,
	name,
	date,
	rating,
	review,
}: {
	profilePictureUrl: string
	name: string
	date: string
	rating: number
	review: string
}) {
	return (
		<div className="rounded-md border border-gray-200 p-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<AccountCircle src={profilePictureUrl} />
					<div>
						<p className="font-medium">{name}</p>
						<p className="text-xs text-gray-600">{date}</p>
					</div>
				</div>
				<div className="flex items-center">
					<StarIcon className="h-4 w-4 text-yellow-400" />
					<h4 className="font-medium">
						{formatRating(rating)}
						<span className="text-gray-600"> / 5.0</span>
					</h4>
				</div>
			</div>
			<p className="mt-2 text-xs text-gray-600">{review}</p>
		</div>
	)
}

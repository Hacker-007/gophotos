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

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

async function getData(
	id: string,
	hours: number
): Promise<PhotographerProfile & PhotographerAbout & PhotographerReviews> {
	return fetch(`${process.env.SERVER_HOST}/api/v1/photographers/${id}`).then(
		res => res.json()
	)
}

export default async function PhotographerPortfolioPage({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	// const {
	// 	id: photographerId,
	// 	name,
	// 	location,
	// 	hourlyPriceLow,
	// 	hourlyPriceHigh,
	// 	rating,
	// 	numberOfReviews,
	// 	profilePictureUrl,
	// 	portfolioUrls,
	// } = {
	// 	id: 20,
	// 	name: 'User 19',
	// 	profilePictureUrl:
	// 		'https://photographer-profile-pictures.s3.us-east-2.amazonaws.com/wK7udZxBnDjyD0J-KOmp2o5avBJ0MxK.png',
	// 	location: 'Cambridge, MA',
	// 	hourlyPriceLow: 19,
	// 	hourlyPriceHigh: 29,
	// 	rating: 19,
	// 	numberOfReviews: 2172,
	// 	portfolioUrls: [
	// 		'https://photographer-portfolios.s3.us-east-1.amazonaws.com/wK7udZxBnDjyD0J-KOmp2o5avBJ0MxK.png',
	// 	],
	// }

	// const estimatedPriceRange = [hourlyPriceLow, hourlyPriceHigh]
	const photographerProfile = await getData(
		params.id,
		+(searchParams.hours ?? '1')
	)

	return (
		<div className="w-full grid justify-items-center px-3 py-4">
			<div className="max-w-[100rem] w-full justify-self-center">
				<div className="grid gap-4 sm:grid-cols-[1fr_auto] md:grid-cols-[30rem_1fr] lg:grid-cols-[30rem_12rem_1fr] xl:grid-cols-[35rem_20rem_1fr]">
					<div className="sm:col-start-1 sm:row-start-1 max-w-3xl">
						<Carousel
							imageUrls={photographerProfile.portfolioUrls}
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
								<p className="flex items-center justify-end gap-1 font-medium">
									<StarIcon className="h-4 w-4 text-yellow-400" />
									{photographerProfile.rating}
								</p>
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
					<div className="sm:col-start-2 sm:w-56 lg:col-start-3 md:w-full h-min sm:row-start-1 sm:flex-col flex sm:items-start items-center justify-between rounded-md border border-gray-200 p-2">
						<div>
							<p className="md:text-base text-sm font-medium">
								Estimated price
							</p>
							<p className="text-lg md:text-xl xl:text-2xl font-semibold">
								${photographerProfile.estimatedPriceRange[0]} -
								${photographerProfile.estimatedPriceRange[1]}
							</p>
						</div>
						<RequestQuote id={photographerProfile.id} />
					</div>
					<div className="lg:col-start-2 flex flex-col gap-2">
						<div>
							<h3 className="text-sm font-medium">About</h3>
							<p className="mt-1 text-sm text-gray-600">
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
				<div className="rounded-md mt-4">
					<h3 className="text-sm font-medium">Reviews and ratings</h3>
					<div>
						<div className="flex items-center">
							<StarIcon className="h-4 w-4 text-yellow-400" />
							<h4 className="text-2xl font-medium">
								{photographerProfile.rating}
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
					<div className="grid grid-cols-2 gap-2 max-w-lg lg:gap-4">
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
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 mt-4">
					{photographerProfile.reviews.map((review, idx) => (
						<Rating
							profilePictureUrl={review.profilePictureUrl}
							name={review.name}
							date={review.date}
							rating={review.rating}
							review={review.review}
							key={idx}
						/>
					))}
				</div>
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
						{rating}
						<span className="text-gray-600"> / 5.0</span>
					</h4>
				</div>
			</div>
			<p className="mt-2 text-xs text-gray-600">{review}</p>
		</div>
	)
}

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { StarIcon } from '@heroicons/react/24/solid'

import AccountCircle from '@/components/account-circle'
import BadgeGroup from '@/components/badge-group'
import Carousel from '@/components/carousel'
import FillableLine from '@/components/fillable-lines'
import RequestQuote from './request-quote'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

export default function PhotographerPortfolioPage() {
	const {
		id: photographerId,
		name,
		location,
		hourlyPriceLow,
		hourlyPriceHigh,
		rating,
		numberOfReviews,
		profilePictureUrl,
		portfolioUrls,
	} = {
		id: 20,
		name: 'User 19',
		profilePictureUrl: 'https://photographer-profile-pictures.s3.us-east-2.amazonaws.com/wK7udZxBnDjyD0J-KOmp2o5avBJ0MxK.png',
		location: 'Cambridge, MA',
		hourlyPriceLow: 19,
		hourlyPriceHigh: 29,
		rating: 19,
		numberOfReviews: 2172,
		portfolioUrls: [
		  'https://photographer-portfolios.s3.us-east-1.amazonaws.com/wK7udZxBnDjyD0J-KOmp2o5avBJ0MxK.png'
		]
	  }

	const estimatedPriceRange = [hourlyPriceLow, hourlyPriceHigh]

	return (
		<div className="w-full grid justify-items-center px-3 py-4">
			<div className="max-w-[100rem] w-full justify-self-center">
				<div className="grid gap-4 sm:grid-cols-[1fr_auto] md:grid-cols-[30rem_1fr] lg:grid-cols-[30rem_12rem_1fr] xl:grid-cols-[35rem_20rem_1fr]">
					<div className="sm:col-start-1 sm:row-start-1 max-w-3xl">
						<Carousel imageUrls={portfolioUrls} />
						<div className="mt-2 flex justify-between">
							<div className="flex items-center space-x-2">
								<AccountCircle src={profilePictureUrl} />
								<div>
									<p className="font-medium">{name}</p>
									<p className="text-xs">{location}</p>
								</div>
							</div>
							<div>
								<p className="flex items-center justify-end gap-1 font-medium">
									<StarIcon className="h-4 w-4 text-yellow-400" />
									{rating}
								</p>
								<p className="flex items-center justify-end gap-1 text-sm">
									hired{' '}
									<span className="font-medium">2,763</span>{' '}
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
								${estimatedPriceRange[0]} - $
								{estimatedPriceRange[1]}
							</p>
						</div>
						<RequestQuote />
					</div>
					<div className="lg:col-start-2 flex flex-col gap-2">
						<div>
							<h3 className="text-sm font-medium">About</h3>
							<p className="mt-1 text-sm text-gray-600">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Voluptatem, quae. Asperiores
								ratione facilis praesentium animi recusandae,
								nihil incidunt sed aperiam. Facere inventore,
								ratione harum quibusdam labore impedit nisi
								exercitationem non.
							</p>
						</div>
						<div>
							<h3 className="text-sm font-medium">Skills</h3>
							<BadgeGroup
								className="mt-1 flex-wrap"
								items={[
									'Test 1',
									'Test 2',
									'Test 3',
									'Test 4',
									'Test 5',
								]}
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
								{rating}
								<span className="text-sm text-gray-600">
									{' '}
									/ 5.0
								</span>
							</h4>
						</div>
						<p className="mb-2 text-xs text-gray-500">
							{numberOfReviews} reviews
						</p>
					</div>
					<div className="grid grid-cols-2 gap-2 max-w-lg lg:gap-4">
						<div>
							<h4 className="text-sm font-medium">Category</h4>
							<FillableLine
								className="mt-1"
								value={4}
								maxValue={5}
							/>
						</div>
						<div>
							<h4 className="text-sm font-medium">Category</h4>
							<FillableLine
								className="mt-1"
								value={4}
								maxValue={5}
							/>
						</div>
						<div>
							<h4 className="text-sm font-medium">Category</h4>
							<FillableLine
								className="mt-1"
								value={4}
								maxValue={5}
							/>
						</div>
						<div>
							<h4 className="text-sm font-medium">Category</h4>
							<FillableLine
								className="mt-1"
								value={4}
								maxValue={5}
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 mt-4">
					{[...Array(5)].map((_, idx) => (
						<Rating
							profilePictureUrl={profilePictureUrl}
							name={name}
							date="September 16, 2023"
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
}: {
	profilePictureUrl: string
	name: string
	date: string
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
						4.6
						<span className="text-gray-600"> / 5.0</span>
					</h4>
				</div>
			</div>
			<p className="mt-2 text-xs text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
				deleniti recusandae labore sequi nemo nihil enim qui doloribus
				cumque animi laborum maxime, corporis atque explicabo expedita,
				numquam aspernatur debitis praesentium.
			</p>
		</div>
	)
}

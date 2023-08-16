import { StarIcon } from '@heroicons/react/24/solid'

import BadgeGroup from '@/components/BadgeGroup'
import RatingGraph from '@/components/RatingGraph'
import Rating from '@/components/Rating'
import Tooltip from '@/components/Tooltip'
import Carousel from './Carousel'
import RequestQuoteButton from './RequestQuoteButton'
import AccountCircle from '@/components/AccountCircle'

type PhotographerPortfolioProps = {
	params: {
		id: string
	}
}

export default function PhotographerPortfolio({}: PhotographerPortfolioProps) {
	return (
		<div className="mt-5 grid h-full w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr]">
			<div className="w-full max-w-xl lg:min-w-[30rem] space-y-4 md:col-span-1 md:col-start-1 md:row-start-1">
				<div className="mb-2 h-80 w-full max-w-xl @container/carousel">
					<Carousel />
				</div>
				<div>
					<div className="mt-2 flex w-full justify-between">
						<div className="flex items-center gap-x-2">
							<AccountCircle />
							<div className="flex flex-col">
								<h3 className="text-sm font-medium">
									Bob Ross
								</h3>
								<p className="text-xs">
									Cambridge, MA
								</p>
							</div>
						</div>
						<div className="flex flex-col text-right text-gray-500">
							<div className="flex items-center text-sm justify-end">
								<StarIcon className="h-4 w-4 text-yellow-400" />
								<p>4.6 (2.3k)</p>
							</div>
							<p className='text-xs'>hired 2.7k times</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full max-w-xl min-w-[15rem] md:max-w-md md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 lg:col-start-3 lg:row-span-1 lg:max-w-sm lg:justify-self-start">
				<div className="w-full md:sticky md:top-0 md:rounded-md md:border md:border-gray-300 md:p-3 @container/booking">
					<div className='flex flex-col gap-2 @xs/booking:flex-row @xs/booking:justify-between'>
						<div>
							<h3 className="text-sm font-medium">Booking date</h3>
							<div>
								<h4 className="text-sm">
									September 14, 2023
								</h4>
								<h4 className="text-sm">
									4:30 PM - 6:30 PM
								</h4>
							</div>
						</div>
						<div>
							<div className='flex items-center space-x-1 @xs/booking:justify-end'>
							<h3 className="text-sm font-medium">Estimated price</h3>
							<Tooltip className="rounded-md border border-gray-500 bg-white p-1 shadow-md">
									<p className="text-sm text-gray-600">
										The estimate is calculated based on
										previous events and rates.
									</p>
								</Tooltip>
							</div>
							<h4 className='font-semibold'>$200.00 - $500.00</h4>
						</div>
					</div>
					<RequestQuoteButton />
				</div>
			</div>
			<section className="flex w-full max-w-xl flex-col space-y-4 md:col-span-1 md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-1">
				<div className="prose prose-sm w-full prose-headings:text-sm">
					<h3 className="font-medium">About Photographer</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Harum, eligendi veritatis ad iusto quis temporibus
						excepturi deleniti officiis quo nulla aut, nostrum
						ratione praesentium eaque laudantium ducimus illum
						repellendus adipisci. Necessitatibus officiis,
						consectetur nostrum incidunt ipsa mollitia velit dolor
						cum cumque ab debitis quia suscipit at culpa neque harum
						iure nisi quibusdam voluptate praesentium. Ratione minus
						repudiandae nesciunt harum! Voluptatibus.
					</p>
				</div>
				<div className="prose prose-sm w-full prose-headings:text-sm">
					<h3 className="font-medium">Skills</h3>
					<BadgeGroup
						static
						className="mt-1 flex gap-3 overflow-x-auto md:flex-wrap"
						items={[
							'Indoor',
							'Outdoor',
							'Bright Lights',
							'Dim Lights',
							'Group',
							'Headshots',
						]}
					/>
				</div>
				<div className="prose prose-sm w-full prose-headings:text-sm prose-ul:list-disc">
					<h3 className="font-medium">Job Expectations</h3>
					<ul>
						<li>Equipment will be brought by photographer</li>
						<li>General location must be chosen by individual</li>
						<li>
							In the case of outdoor shots, proper attire must be
							worn by individual
						</li>
						<li>
							Copyrights of images after the fact can be
							negotiated and discussed depending on the potential
							uses of the shots
						</li>
						<li>
							Images will be distributed within 7 days of photo
							shoot completion
						</li>
					</ul>
				</div>
			</section>
			<div className="grid w-full max-w-xl grid-cols-1 md:col-span-2 md:col-start-1 md:row-start-3 md:max-w-none md:justify-self-start lg:row-start-2 lg:col-span-3 lg:grid-cols-[auto_1fr]">
				<div className="max-w-xl md:col-span-1 md:col-start-1">
					<div className="prose w-full prose-headings:text-sm">
						<h3 className="font-medium">Reviews</h3>
					</div>
					<div>
						<div className="flex items-center">
							<StarIcon className="h-4 w-4 text-yellow-400" />
							<h4 className="text-2xl font-medium">
								4.6
								<span className="text-sm text-gray-600">
									{' '}
									/ 5.0
								</span>
							</h4>
						</div>
						<p className="mb-2 text-xs text-gray-500">
							2370 reviews
						</p>
					</div>
				</div>
				<div className="lg:col-start-1 max-w-sm lg:w-96">
					<RatingGraph
						className="w-full"
						ratings={[4, 2, 4, 12, 78]}
					/>
				</div>
				<ul className="mt-5 lg:mt-0 lg:ml-5 space-y-4">
					<li>
						<div className="flex items-center gap-x-2">
							<div className="h-8 w-8 rounded-full bg-gray-300"></div>
							<div className="flex flex-col">
								<h3 className="text-sm font-medium">
									Revanth Pothukuchi
								</h3>
								<p className="text-xs text-gray-600">
									July 17, 2023
								</p>
							</div>
						</div>
						<Rating rating={5} />
						<p className="mt-1 text-xs">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus dolore vel impedit, harum dolorem
							error sunt!
						</p>
					</li>
					<li>
						<div className="flex items-center gap-x-2">
							<div className="h-8 w-8 rounded-full bg-gray-300"></div>
							<div className="flex flex-col">
								<h3 className="text-sm font-medium">
									Revanth Pothukuchi
								</h3>
								<p className="text-xs text-gray-600">
									July 17, 2023
								</p>
							</div>
						</div>
						<Rating rating={4} />
						<p className="mt-1 text-xs">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus dolore vel impedit, harum dolorem
							error sunt!
						</p>
					</li>
					<li>
						<div className="flex items-center gap-x-2">
							<div className="h-8 w-8 rounded-full bg-gray-300"></div>
							<div className="flex flex-col">
								<h3 className="text-sm font-medium">
									Revanth Pothukuchi
								</h3>
								<p className="text-xs text-gray-600">
									July 17, 2023
								</p>
							</div>
						</div>
						<Rating rating={3} />
						<p className="mt-1 text-xs">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus dolore vel impedit, harum dolorem
							error sunt!
						</p>
					</li>
					<li>
						<div className="flex items-center gap-x-2">
							<div className="h-8 w-8 rounded-full bg-gray-300"></div>
							<div className="flex flex-col">
								<h3 className="text-sm font-medium">
									Revanth Pothukuchi
								</h3>
								<p className="text-xs text-gray-600">
									July 17, 2023
								</p>
							</div>
						</div>
						<Rating rating={3} />
						<p className="mt-1 text-xs">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus dolore vel impedit, harum dolorem
							error sunt!
						</p>
					</li>
					<li>
						<div className="flex items-center gap-x-2">
							<div className="h-8 w-8 rounded-full bg-gray-300"></div>
							<div className="flex flex-col">
								<h3 className="text-sm font-medium">
									Revanth Pothukuchi
								</h3>
								<p className="text-xs text-gray-600">
									July 17, 2023
								</p>
							</div>
						</div>
						<Rating rating={3} />
						<p className="mt-1 text-xs">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus dolore vel impedit, harum dolorem
							error sunt!
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

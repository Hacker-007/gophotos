import { StarIcon } from '@heroicons/react/24/solid'

import BadgeGroup from '@/components/BadgeGroup'
import RatingGraph from '@/components/RatingGraph'
import Rating from '@/components/Rating'
import Tooltip from '@/components/Tooltip'
import Input from '@/components/Input'
import Button from '@/components/Button'

type PhotographerPortfolioProps = {
	params: {
		id: string
	}
}

export default function PhotographerPortfolio({}: PhotographerPortfolioProps) {
	return (
		<div className="flex h-full w-full flex-col space-y-4">
			<div>
				<div className="h-80 w-full bg-red-200">Carousel</div>
				<div className="mt-2 flex w-full justify-between">
					<div className="flex items-center gap-x-2">
						<div className="h-8 w-8 rounded-full bg-gray-300"></div>
						<div className="flex flex-col">
							<h3 className="text-sm font-medium">Bob Ross</h3>
							<p className="text-xs">Cambridge, MA</p>
						</div>
					</div>
					<div className="flex flex-col text-right text-sm text-gray-500">
						<div className="flex items-center justify-end">
							<StarIcon className="h-4 w-4 text-yellow-400" />
							<p>4.6 (2.3k)</p>
						</div>
						<p>hired 2.7k times</p>
					</div>
				</div>
			</div>
			<div className="prose prose-sm w-full prose-headings:text-sm">
				<h3 className="font-medium">About Photographer</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Harum, eligendi veritatis ad iusto quis temporibus excepturi
					deleniti officiis quo nulla aut, nostrum ratione praesentium
					eaque laudantium ducimus illum repellendus adipisci.
					Necessitatibus officiis, consectetur nostrum incidunt ipsa
					mollitia velit dolor cum cumque ab debitis quia suscipit at
					culpa neque harum iure nisi quibusdam voluptate praesentium.
					Ratione minus repudiandae nesciunt harum! Voluptatibus.
				</p>
			</div>
			<div className="prose prose-sm w-full prose-headings:text-sm">
				<h3 className="font-medium">Skills</h3>
				<BadgeGroup
					static
					className="mt-1 flex space-x-3 overflow-x-auto"
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
						In the case of outdoor shots, proper attire must be worn
						by individual
					</li>
					<li>
						Copyrights of images after the fact can be negotiated
						and discussed depending on the potential uses of the
						shots
					</li>
					<li>
						Images will be distributed within 7 days of photo shoot
						completion
					</li>
				</ul>
			</div>
			<div className="grid grid-cols-1 gap-5">
				<div>
					<div className="prose w-full prose-headings:text-sm">
						<h3 className="font-medium">Reviews</h3>
					</div>
					<div>
						<div className="flex items-center">
							<StarIcon className="h-4 w-4 text-yellow-400" />
							<h4 className="text-xl font-medium">
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
					<RatingGraph
						className="w-full"
						ratings={[4, 2, 4, 12, 78]}
					/>
				</div>
				<ul className="grid grid-cols-1 gap-4">
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
						<p className="mt-1 text-sm">
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
						<p className="mt-1 text-sm">
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
						<p className="mt-1 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus dolore vel impedit, harum dolorem
							error sunt!
						</p>
					</li>
				</ul>
			</div>
			<div className="sticky bottom-5 w-full rounded-md border border-gray-400 bg-white p-3">
				<Input label="Event date" name="event-date" />
				<div className="mt-2 flex items-center gap-x-1">
					<h3 className="font-medium">Price estimate</h3>
					<Tooltip className="rounded-md border border-gray-500 bg-white p-1 shadow-md">
						<p className="text-sm text-gray-600">
							The estimate is calculated based on previous events
							and rates.
						</p>
					</Tooltip>
				</div>
				<h4 className="text-lg font-semibold">$200.00 - $500.00</h4>
				<Button className="mt-2 border border-black p-2 w-full justify-center hover:bg-gray-100">Request Quote</Button>
			</div>
		</div>
	)
}

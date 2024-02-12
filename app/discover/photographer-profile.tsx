import { Account, Asset, Photographer } from '@/utils/types'

import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/20/solid'

import Tag from '@/components/tag'
import { ScrollArea, ScrollBar } from '@/components/scroll-area'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogTrigger,
} from '@/components/dialog'
import RequestQuotePanel from './request-quote-panel'

type PhotographerProfileProps = {
	photographer: Photographer
	account: Account
	assets: Asset[]
}

export default async function PhotographerProfile({
	photographer,
	account,
	assets,
}: PhotographerProfileProps) {
	return (
		<div className="grid gap-1 rounded-md py-1">
			<ScrollArea className="w-full">
				<div className="flex w-max gap-1">
					{assets.map((asset, idx) => (
						<div
							key={idx}
							className="relative aspect-[3/2] w-48 flex-shrink-0 overflow-hidden rounded-md sm:w-60 md:w-80 lg:w-96"
						>
							<Image
								alt=""
								src={asset.cdnPath}
								placeholder="blur"
								blurDataURL={asset.placeholderBase64}
								fill
							/>
						</div>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			
			{/* overlay section */}
			<div className="mt-2">
				<div>
					<div className="flex items-end justify-between">
						<div className="flex w-full items-center gap-2">
							{/* <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-300" /> */}
							<div>
								<p className="text-sm font-medium">
									{account.fullName}
								</p>
								<p className="text-xs text-gray-600">
									Cambridge, MA
								</p>
							</div>
						</div>
					</div>
					<div className="mt-3 rounded-md border border-gray-300 p-2">
						<p className="text-sm font-medium">Estimated price</p>
						<p className="text-xs text-gray-700">
							This estimate is based on 1 hour of{' '}
							{account.fullName}&apos;s average hourly price
							range.
						</p>
						<p className="text-lg font-semibold">
							${photographer.estimatedHourlyPriceRange[0]} - $
							{photographer.estimatedHourlyPriceRange[1]}
						</p>
						<Dialog>
							<DialogTrigger className="mt-2 w-full rounded-md bg-black px-2 py-1 text-sm font-medium text-white">
								Request quote
							</DialogTrigger>
							<DialogOverlay>
								<DialogContent className="fixed left-0 top-0 z-10 h-full w-full overflow-y-auto bg-white p-4">
									<div className="mt-7">
										<RequestQuotePanel photographer={account} />
									</div>
									<DialogClose
										autoFocus={false}
										className="absolute right-4 top-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
									>
										<XMarkIcon className="h-5 w-5" />
										<span className="sr-only">Close</span>
									</DialogClose>
								</DialogContent>
							</DialogOverlay>
						</Dialog>
					</div>
					<div className="mt-3">
						<div className="">
							<p className="text-sm font-medium">About</p>
							<p className="text-sm">{photographer.about}</p>
						</div>
						<div className="mt-3">
							<p className="text-sm font-medium">Skills</p>
							<div className="mt-0.5 flex flex-wrap gap-1">
								{photographer.skills.map(skill => (
									<Tag key={skill}>{skill}</Tag>
								))}
							</div>
						</div>
					</div>
					<div className="mt-3">
						<p className="text-sm font-medium">
							Reviews and ratings
						</p>
						<p className="text-sm">
							{account.fullName} is new to GoPhotos and does not yet have reviews or ratings.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

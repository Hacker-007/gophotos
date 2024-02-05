import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'

import Tag from '@/components/tag'
import { ScrollArea, ScrollBar } from '@/components/scroll-area'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogTrigger,
} from '@/components/dialog'

import PhotographerProfile from './photographer-profile'
import Image from 'next/image'

export default async function PhotographerPreviewCard() {
	const skills = [
		'Skill 1',
		'Skill 2',
		'Skill 3',
		'Skill 4',
		'Skill 5',
		'Skill 6',
	]

	const {
		data: { cdnPath, placeholderBase64 },
	} = await fetch('http://localhost:3000/v1/assets/UkLWZg9', {
		headers: {
			Authorization: `Bearer ${process.env.SERVER_SECRET}`,
		},
	}).then(res => res.json())

	return (
		<div className="m-2 grid gap-1 rounded-md py-1 md:grid-cols-[16rem_1fr] md:gap-3">
			<ScrollArea className="w-full md:col-start-2">
				<div className="flex w-max gap-1">
					{[...Array(4)].map((_, idx) => (
						<div
							key={idx}
							className="relative aspect-[3/2] w-48 flex-shrink-0 overflow-hidden rounded-md sm:w-60 md:w-80 lg:w-96"
						>
							<Image
								alt=""
								src={cdnPath}
								placeholder="blur"
								blurDataURL={placeholderBase64}
								fill
							/>
						</div>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<div className="flex flex-col justify-between gap-2 rounded-md md:row-start-1">
				<div>
					<div className="flex items-center justify-between">
						<div className="flex w-full items-center gap-2">
							<div className="h-8 w-8 rounded-full bg-gray-300" />
							<div>
								<p className="font-medium">Bob Ross</p>
								<p className="text-xs text-gray-600">
									Cambridge, MA
								</p>
							</div>
						</div>
						<div className="whitespace-nowrap text-right">
							<p className="text-xs text-gray-600">Est. Price</p>
							<p className="text-lg font-semibold">$200 - $400</p>
						</div>
					</div>
					<div className="mt-1 grid gap-1 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-1 md:grid-rows-[auto_auto]">
						<div className="sm:col-start-1 sm:row-start-1">
							<p className="text-xs uppercase text-gray-600">
								About
							</p>
							<p className="line-clamp-2 text-sm md:line-clamp-3">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ab, ut impedit alias
								laboriosam quis sit. Ea saepe voluptas earum
								quae. Nam esse maiores, inventore unde quam
								corrupti atque vero perspiciatis!
							</p>
						</div>
						<div className="sm:col-start-2 sm:row-start-1 md:col-start-1 md:row-start-2">
							<p className="text-xs uppercase text-gray-600">
								Skills
							</p>
							<div className="mt-0.5 flex flex-wrap gap-1">
								{skills.splice(0, 3).map(skill => (
									<Tag key={skill}>{skill}</Tag>
								))}
								{skills.length > 0 && (
									<Tag key={skills[0]}>
										<span className="flex items-center font-medium">
											<PlusIcon className="h-3 w-3" />
											{skills.length}
										</span>
									</Tag>
								)}
							</div>
						</div>
					</div>
				</div>
				<div>
					<Dialog>
						<DialogTrigger className="w-full rounded-md border border-gray-600 px-2 py-1 text-sm font-medium text-gray-600">
							See more
						</DialogTrigger>
						<DialogOverlay>
							<div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-20" />
							<DialogContent className="fixed left-0 top-0 z-20 h-full w-full overflow-y-auto bg-white p-4 sm:left-1/2 sm:top-1/2 sm:h-[90%] sm:w-[90%] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-md lg:w-2/3">
								<div className="mt-7">
									<PhotographerProfile />
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
			</div>
		</div>
	)
}

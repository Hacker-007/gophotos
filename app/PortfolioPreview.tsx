'use client'

import ViewProfileOverlay from './ViewProfileOverlay'
import { useState } from 'react'
import Portfolio from './Portfolio'
import classNames from '@/utils/classnames'

type PortfolioPreviewProps = {
	name: string
	location: string
	hourlyRate: string
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

export default function PortfolioPreview({
	name,
	location,
	hourlyRate,
	rating,
	numberOfReviews: numberReviews,
	className,
}: PortfolioPreviewProps) {
	const [isFullPortfolioOpen, setIsFullPortfolioOpen] = useState(false)

	return (
		<div className={classNames('group w-full', className)}>
			<ViewProfileOverlay
				handleClick={() => setIsFullPortfolioOpen(true)}
				className="relative h-48 w-full overflow-auto rounded-md @container"
			>
				<div className="grid h-full w-full grid-cols-3 gap-1 @md:grid-cols-4 @2xl:grid-cols-5">
					<div className="relative col-span-2 h-full w-full bg-red-200"></div>
					<div className="relative col-span-1 h-full w-full bg-green-200"></div>
					<div className="relative col-span-1 hidden h-full w-full bg-blue-200 @md:block"></div>
					<div className="relative col-span-1 hidden h-full w-full bg-purple-200 @2xl:block"></div>
				</div>
			</ViewProfileOverlay>
			<div className="mt-2 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-300"></div>
					<div>
						<p className="text-sm font-medium">{name}</p>
						<p className="text-xs">{location}</p>
					</div>
				</div>
				<div>
					<p className="text-right text-xs">
						<span className="font-semibold">{hourlyRate}</span>
						/hr
					</p>
					<p className="flex items-center justify-end text-xs font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-3 w-3"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
								clipRule="evenodd"
							/>
						</svg>
						{formatRating(rating)} ({numberReviews})
					</p>
				</div>
			</div>
			<Portfolio
				isOpen={isFullPortfolioOpen}
				handleClose={() => setIsFullPortfolioOpen(false)}
			/>
		</div>
	)
}

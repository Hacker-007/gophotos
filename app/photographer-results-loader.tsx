'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function PhotographerResultsLoader() {
	const minPortfolioPreviewWidth = 256
	const gapWidth = 16
	const width = useWindowDimensions().width || 5
	const columnCount = Math.floor(
		(width + gapWidth) / (minPortfolioPreviewWidth + gapWidth)
	)

	return (
		<div className="col-span-2 grid w-full gap-4 xl:row-start-2 xl:col-span-1 grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
			{[...Array(5 * columnCount)].map((_, idx) => (
				<div
					key={idx}
					className="w-full animate-pulse"
					style={{
						animationDelay: `${300 * (idx % columnCount)}ms`,
					}}
				>
					<div className="w-full aspect-square bg-gray-200 rounded-md" />
					<div className="mt-2 flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="h-8 w-8 rounded-full border border-gray-300 bg-gray-300" />
							<div className="space-y-1">
								<div className="w-20 h-3 rounded-md bg-gray-200" />
								<div className="w-16 h-3 rounded-md bg-gray-200" />
							</div>
						</div>
						<div>
							<div className="text-gray-300 flex space-x-1 items-center justify-end">
								<div className="w-12 h-3 bg-gray-200 rounded-md" />
								<span>-</span>
								<div className="w-12 h-3 bg-gray-200 rounded-md" />
							</div>
							<div className="flex items-center justify-end space-x-1 text-gray-300 text-xs">
								<StarIcon className="h-4 w-4" />
								<div className="w-12 h-3 bg-gray-200 rounded-md" />
								<span>&middot;</span>
								<div className="w-12 h-3 bg-gray-200 rounded-md" />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

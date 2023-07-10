'use client'

import Image from 'next/image'

import ViewProfileOverlay from './ViewProfileOverlay'
import { useState } from 'react'
import Portfolio from './Portfolio'

type PortfolioPreviewProps = {}

export default function PortfolioPreview({}: PortfolioPreviewProps) {
	const [isFullPortfolioOpen, setIsFullPortfolioOpen] = useState(false)

	return (
		<div className="group w-full">
			<ViewProfileOverlay
				handleClick={() => setIsFullPortfolioOpen(true)}
				className="relative h-48 w-full overflow-auto rounded-md @container"
			>
				<div className="grid h-full w-full grid-cols-3 gap-1 @md:grid-cols-4 @md:grid-rows-2">
					<div className="relative col-span-2 h-full w-full bg-red-200 @md:row-span-2"></div>
					<div className="relative col-span-1 h-full w-full bg-green-200 @md:row-span-2"></div>
					<div className="relative col-span-1 hidden h-full w-full bg-blue-200 @md:row-span-2 @md:block"></div>
				</div>
			</ViewProfileOverlay>
			<div className="mt-2 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="relative h-8 w-8 overflow-hidden rounded-full">
						<Image
							fill
							className="object-cover"
							src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
							alt="Bob Ross Profile Picture"
						/>
					</div>
					<div>
						<p className="text-sm font-medium">Bob Ross</p>
						<p className="text-xs font-light">Cambridge, MA</p>
					</div>
				</div>
				<div>
					<p className="text-right text-xs">
						<span className="font-semibold">$150</span>
						/hr
					</p>
					<p className="flex items-center justify-end text-xs font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-4 w-4"
						>
							<path
								fillRule="evenodd"
								d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
								clipRule="evenodd"
							/>
						</svg>
						4.7 (1027)
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

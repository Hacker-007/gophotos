'use client'

import { useIsVisible } from '@/utils/hooks'
import { useRef } from 'react'

export default function Carousel() {
	const ref = useRef<HTMLDivElement>(null)
	const isVisible = useIsVisible(ref)

	return (
		<div className="grid h-full w-full grid-cols-1 grid-rows-[1fr_auto] gap-2 @md/carousel:grid-cols-[1fr_auto] @md/carousel:grid-rows-1">
			<div className="w-full rounded-md bg-gray-200"></div>
			<div className="flex h-[4rem] w-full justify-between @md:h-full @md:w-[4rem] @md/carousel:flex-col">
				<div className="h-[4rem] w-[4rem] rounded-md bg-gray-200"></div>
				<div className="h-[4rem] w-[4rem] rounded-md bg-gray-200"></div>
				<div className="h-[4rem] w-[4rem] rounded-md bg-gray-200"></div>
				<div className="h-[4rem] w-[4rem] rounded-md bg-gray-200"></div>
				<div
					ref={ref}
					className="hidden h-[4rem] w-[4rem] rounded-md bg-gray-200 @sm/carousel:block @md/carousel:hidden"
				></div>
			</div>
		</div>
	)
}

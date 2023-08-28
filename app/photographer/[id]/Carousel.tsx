'use client'

import Image from "next/image"

export default function Carousel() {
	return (
		<div className="relative h-full w-full overflow-hidden rounded-md bg-gray-200">
			<Image
				className="object-cover"
				alt="bob-ross-1"
				src="/images/Graduation Celebration.jpg"
				fill
			/>
		</div>
	)
}

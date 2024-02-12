import { Photographer } from '@/utils/types'
import { cn } from '@/utils/cn'

import PhotographerPreviewCard from './photographer-preview-card'
import { Fragment } from 'react'
import { getPhotographers } from '@/utils/api'

type PhotographerResultsProps = {
	className?: string
}

export default async function PhotographerResults({
	className,
}: PhotographerResultsProps) {
	const photographers = await getPhotographers()
	shuffleArray(photographers)

	return (
		<div className={cn('space-y-3', className)}>
			{photographers.map((photographer, idx) => (
				<Fragment key={photographer.id}>
					<PhotographerPreviewCard photographer={photographer} />
					{idx !== photographers.length - 1 && (
						<div className="m-2 hidden md:block md:h-[1px] md:w-auto md:bg-gray-300" />
					)}
				</Fragment>
			))}
		</div>
	)
}

function shuffleArray(array: any[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
}

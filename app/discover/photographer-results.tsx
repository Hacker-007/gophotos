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

	return (
		<div className={cn('space-y-2', className)}>
			{photographers.map((photographer, idx) => (
				<Fragment key={photographer.id}>
					<PhotographerPreviewCard photographer={photographer} />
					{idx !== photographers.length - 1 && (
						<div className="m-2 hidden md:block md:h-[2px] md:w-64 md:bg-gray-200" />
					)}
				</Fragment>
			))}
		</div>
	)
}

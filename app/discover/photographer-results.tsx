import { cn } from '@/utils/cn'

import PhotographerPreviewCard from './photographer-preview-card'

type PhotographerResultsProps = {
	className?: string
}

export default function PhotographerResults({
	className,
}: PhotographerResultsProps) {
	return (
		<div className={cn('space-y-2', className)}>
			<PhotographerPreviewCard />
			<div className='hidden md:block md:w-64 md:h-[2px] md:bg-gray-200 m-2' />
			<PhotographerPreviewCard />
			<div className='hidden md:block md:w-64 md:h-[2px] md:bg-gray-200 m-2' />
			<PhotographerPreviewCard />
			<div className='hidden md:block md:w-64 md:h-[2px] md:bg-gray-200 m-2' />
			<PhotographerPreviewCard />
		</div>
	)
}
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
			<PhotographerPreviewCard />
			<PhotographerPreviewCard />
			<PhotographerPreviewCard />
		</div>
	)
}
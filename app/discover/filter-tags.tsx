import { ScrollArea, ScrollBar } from '@/components/scroll-area'
import Tag from '@/components/tag'

type FilterTagProps = {
	className?: string
}

export default function FilterTags({ className }: FilterTagProps) {
	return (
		<div className={className}>
			<ScrollArea className="w-full">
				<div className="flex w-max space-x-1">
					{[...Array(20)].map((_, idx) => (
						<Tag key={idx} />
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	)
}

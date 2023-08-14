import classNames from '@/utils/classnames'
import { StarIcon } from '@heroicons/react/24/solid'

type RatingGraphProps = {
	ratings: [number, number, number, number, number]
	className?: string
}

export default function RatingGraph({ ratings, className }: RatingGraphProps) {
	return (
		<div className={classNames('space-y-1', className)}>
			{ratings.reverse().map((ratingPercentage, idx) => (
				<RatingGraphComponent
					key={idx}
					label={5 - idx}
					percentage={ratingPercentage}
				/>
			))}
		</div>
	)
}

function RatingGraphComponent({
	label,
	percentage,
}: {
	label: number
	percentage: number
}) {
	return (
		<div className="flex w-full text-sm">
			<div className="flex w-2.5 items-center justify-center">
				<p className="font-medium text-gray-900">{label}</p>
			</div>
			<div className="flex flex-1 items-center gap-x-1">
				<StarIcon className="h-4 w-4 text-yellow-400" />
				<div className="relative h-5 w-full place-self-center overflow-hidden rounded-full bg-gray-100">
					<div
						className="absolute h-5 inset-y-0 my-auto w-full rounded-full bg-yellow-400"
						style={{
							width: `calc(${percentage}%)`,
						}}
					/>
				</div>
			</div>
			<p className="w-7 text-right text-xs text-gray-700">
				{Math.round(percentage)}%
			</p>
		</div>
	)
}

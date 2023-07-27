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
		<div className="w-full flex text-sm">
			<div className="w-2.5 flex justify-center items-center">
				<p className='text-gray-900 font-medium'>{label}</p>
			</div>
			<div className='flex-1 flex items-center gap-x-1'>
				<StarIcon className="h-4 w-4 text-yellow-400" />
				<div className="relative h-5 w-full place-self-center">
					<div className="h-full rounded-sm border border-gray-200 bg-gray-100"></div>
					<div
						className="absolute inset-y-0 rounded-sm border border-yellow-400 bg-yellow-400"
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

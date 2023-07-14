type RatingGraphProps = {
	ratings: [number, number, number, number, number]
	className?: string
}

export default function RatingGraph({ ratings, className }: RatingGraphProps) {
	return (
		<div className={className}>
			{ratings.reverse().map((ratingPercentage, idx) => (
				<RatingGraphComponent
					key={ratingPercentage}
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
    console.log(percentage)
	return (
		<div className="flex flex-1 items-center text-sm">
			<p className="text-gray-900">{label} stars</p>
			<div className="relative ml-2 flex-1">
				<div className="h-3 rounded-sm border border-gray-200 bg-gray-100"></div>
				<div
					className="absolute inset-y-0 rounded-sm border border-yellow-400 bg-yellow-400"
					style={{
						width: `calc(${percentage}%)`,
					}}
				></div>
			</div>
			<p className="w-7 text-right text-xs text-gray-900">
				{Math.round(percentage)}%
			</p>
		</div>
	)
}

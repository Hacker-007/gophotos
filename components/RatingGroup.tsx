import { StarIcon } from '@heroicons/react/24/solid'

type RatingGroupProps = {
	rating: number
    className?: string
}

export default function RatingGroup({ rating, className }: RatingGroupProps) {
	return (
		<div className={className}>
			<Star fill={100} />
			<Star fill={100} />
			<Star fill={100} />
			<Star fill={100} />
			<Star fill={60} />
		</div>
	)
}

function Star({ fill }: { fill: number }) {
	return (
		<div className="relative overflow-hidden whitespace-nowrap">
			<StarIcon className="h-5 w-5 flex-shrink-0 text-gray-300" />
			<div
				className={'absolute top-0 overflow-hidden whitespace-nowrap'}
                style={{
                    width: `${fill}%`
                }}
			>
				<StarIcon className="h-5 w-5 text-yellow-400" />
			</div>
		</div>
	)
}

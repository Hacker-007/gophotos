import classNames from "@/utils/classnames"
import { StarIcon } from "@heroicons/react/24/solid"

type RatingProps = {
    rating: 1 | 2 | 3 | 4 | 5
    className?: string
}

export default function Rating({ rating, className }: RatingProps) {
    return (
        <div className={classNames('flex', className)}>
            {[...Array(rating)].map(starNum => (
                <StarIcon key={starNum} className="w-5 h-5 text-yellow-400" />
            ))}
            {[...Array(5 - rating)].map(starNum => (
                <StarIcon key={starNum} className="w-5 h-5 text-gray-300" />
            ))}
        </div>
    )
}
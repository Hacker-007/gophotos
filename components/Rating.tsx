import classNames from "@/utils/classnames"
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid"
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline"

type RatingProps = {
    rating: 1 | 2 | 3 | 4 | 5
    className?: string
}

export default function Rating({ rating, className }: RatingProps) {
    return (
        <div className={classNames('flex', className)}>
            {[...Array(rating)].map((_, starNum) => (
                <SolidStarIcon key={starNum} className="w-5 h-5 text-yellow-400" />
            ))}
            {[...Array(5 - rating)].map((_, starNum) => (
                <OutlineStarIcon key={starNum} className="w-5 h-5 text-gray-300" />
            ))}
        </div>
    )
}
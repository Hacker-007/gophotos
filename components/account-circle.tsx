import classNames from '@/utils/classnames'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type AccountCircleProps = {
	src?: string
	className?: string
}

export default function AccountCircle({ src, className }: AccountCircleProps) {
	return (
		<div
			className={classNames(
				'h-8 w-8 rounded-full overflow-hidden border border-gray-200 relative',
				src ? 'bg-gray-300' : 'flex items-center justify-center',
				className
			)}
		>
			{src ? (
				<Image src={src} alt="Profile picture" fill sizes="2rem" />
			) : (
				<UserIcon className="h-5 w-5 text-black" />
			)}
		</div>
	)
}

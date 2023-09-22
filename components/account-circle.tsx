import classNames from '@/utils/classnames'
import Image from 'next/image'

type AccountCircleProps = {
	src: string
	className?: string
}

export default function AccountCircle({
	src,
	className,
}: AccountCircleProps) {
	return (
		<div
			className={classNames(
				'h-8 w-8 rounded-full overflow-hidden border border-gray-200 relative bg-gray-300',
				className
			)}
		>
      <Image
        src={src}
        alt='Profile picture'
        fill
        sizes='2rem'
      />
      </div>
	)
}

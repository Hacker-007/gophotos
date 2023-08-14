import classNames from '@/utils/classnames'

type AccountCircleProps = {
	className?: string
}

export default function AccountCircle({ className }: AccountCircleProps) {
	return (
		<div
			className={classNames(
				'h-8 w-8 rounded-full bg-gray-300',
				className
			)}
		></div>
	)
}

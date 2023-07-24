import { ReactNode } from 'react'

import classNames from '@/utils/classnames'

type ViewProfileOverlayProps = {
	handleClick?: () => void
	className?: string
	children?: ReactNode
}

export default function ViewProfileOverlay({
	handleClick,
	className,
	children,
}: ViewProfileOverlayProps) {
	return (
		<div className={classNames("group", className)}>
			<button
				onClick={handleClick}
				className="absolute inset-0 z-10 m-auto opacity-0 group-hover:opacity-100 bg-black/10 text-sm font-medium transition-opacity duration-200"
			>
				View Profile
			</button>
			{children}
		</div>
	)
}

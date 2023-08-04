import { ReactNode } from 'react'

import classNames from '@/utils/classnames'
import Link from 'next/link'

type ViewProfileOverlayProps = {
	photographerId: string
	className?: string
	children?: ReactNode
}

export default function ViewProfileOverlay({
	photographerId,
	className,
	children,
}: ViewProfileOverlayProps) {
	return (
		<div className={classNames('group', className)}>
			<Link
				href={`/photographer/${photographerId}`}
				target='_blank'
				rel='noopener noreferrer'
				className="absolute inset-0 z-10 m-auto flex items-center justify-center bg-black/10 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
			>
				View Profile
			</Link>
			{children}
		</div>
	)
}

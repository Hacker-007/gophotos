'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

export default function NavigationBar() {
	return (
		<nav className="flex w-full items-center justify-between py-3 px-3 sm:px-5 md:px-7 space-y-4">
			<div className="flex items-center gap-2">
				<Link className="font-medium" href="/landing">
					GoPhotos
				</Link>
				<NavigationLink href="/discover" linkPath="/discover">
					Discover
				</NavigationLink>
			</div>
			<div className="h-8 w-8 rounded-full bg-gray-300" />
		</nav>
	)
}

function NavigationLink({
	children,
	href,
	linkPath,
	className,
}: {
	children: ReactNode
	href: string
	linkPath: string
	className?: string
}) {
	const currentPath = usePathname()
	const isActive = currentPath.startsWith(linkPath)

	return (
		<Link href={href}>
			<div className={cn('relative font-medium', className)}>
				{children}
				<div
					className={cn(
						'absolute w-full border-b-2',
						isActive ? 'border-black' : 'border-transparent'
					)}
				/>
			</div>
		</Link>
	)
}

'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

export default function NavigationBar() {
	return (
		<nav className="flex w-full items-center justify-between space-y-4 px-3 py-3 sm:px-5 md:px-14">
			<div className="flex items-center gap-2">
				<Link className="font-medium" href="/">
					GoPhotos
				</Link>
				<NavigationLink href="/discover" linkPath="/discover">
					Discover
				</NavigationLink>
			</div>
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

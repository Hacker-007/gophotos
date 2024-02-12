'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react"
import gpLogo from "../public/GoPhotos_logo.png"
import Image from 'next/image';

import { cn } from '@/utils/cn'

export default function NavigationBar() {
	return (
		// <nav className="flex w-full items-center justify-between space-y-4 px-3 py-3 sm:px-5 md:px-14">
		// 	<div className="flex items-center gap-2">
		// 		<NavigationLink href="/discover" linkPath="/discover">
		// 			Discover
		// 		</NavigationLink>
		// 	</div>
		// </nav>
		<Navbar isBlurred className='px-20 py-7 sticky bg-white z-10'>

	  		<Link href="/" className="cursor-pointer">
				<Image src={gpLogo} alt="" width={200} height={800} />
			</Link>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
				<NavigationLink href="/discover" linkPath="/discover">
		 			Discover
		 		</NavigationLink>
				</NavbarItem>
			</NavbarContent>
			
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="primary" target="_blank" href="http://tinyurl.com/GP-Photographer" variant="flat" className='font-medium'>
						Become a Photographer
					</Button>
				</NavbarItem>
			</NavbarContent>
    	</Navbar>
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

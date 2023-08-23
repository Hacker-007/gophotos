'use client'

import classNames from '@/utils/classnames'

import Link from 'next/link'
import { Fragment, useState } from 'react'

import {
	ArrowLongRightIcon,
	Bars3BottomRightIcon,
	BellIcon,
	DocumentTextIcon,
	EnvelopeIcon,
	HomeIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/DropdownMenu'

import Button from './Button'
import NavigationLink from './NavigationLink'

type NavigationBarProps = {
	className?: string
}

const links = [
	{
		displayName: 'Photographers',
		href: '/',
		routeSegment: [null, 'photographer'],
		icon: <HomeIcon strokeWidth={1.5} className="mr-1 h-4 w-4" />,
	},
	{
		displayName: 'Contracts',
		href: '/contracts/negotiations',
		routeSegment: 'contracts',
		icon: <DocumentTextIcon strokeWidth={1.5} className="mr-1 h-4 w-4" />,
	},
	{
		displayName: 'Contact Us',
		href: '/',
		routeSegment: 'contact',
		icon: <EnvelopeIcon strokeWidth={1.5} className="mr-1 h-4 w-4" />,
	},
]

export default function NavigationBar({ className }: NavigationBarProps) {
	const [selectedMenuItem, setSelectedMenuItem] = useState<
		string | undefined
	>(undefined)
	return (
		<nav
			className={classNames(
				'sticky top-0 z-10 flex h-14 w-full items-center justify-center border-b border-gray-300 bg-white shadow-sm',
				className
			)}
		>
			<div className="flex h-full w-full max-w-screen-xl items-center justify-between">
				<Link
					href="/"
					passHref={undefined}
					className="text-sm font-semibold"
				>
					GoPhotos<span className="text-xl">.</span>
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger className="flex sm:hidden" asChild>
						<Bars3BottomRightIcon className="h-5 w-5" />
					</DropdownMenuTrigger>
					<DropdownMenuPortal>
						<DropdownMenuContent
							side="bottom"
							align="end"
							className="z-10 mt-3 w-56 origin-top-right rounded-md border border-gray-300 bg-white p-1 shadow-lg focus:outline-none"
						>
							<DropdownMenuRadioGroup
								value={selectedMenuItem}
								onValueChange={setSelectedMenuItem}
							>
								{links.map(({ displayName, href, icon }) => (
									<DropdownMenuRadioItem
										key={`${displayName}-${href}`}
										value={`${displayName}-${href}`}
										asChild
										className="group focus:outline-none"
									>
										<Link passHref={undefined} href={href}>
											<Button
												className="w-full p-2 text-sm font-medium text-gray-900 transition-colors duration-100 group-data-[highlighted]:bg-black group-data-[state=checked]:bg-black group-data-[highlighted]:text-white group-data-[state=checked]:text-white"
												leftIcon={icon}
											>
												{displayName}
											</Button>
										</Link>
									</DropdownMenuRadioItem>
								))}
							</DropdownMenuRadioGroup>
							<DropdownMenuSeparator className="my-3 w-full border-t border-t-gray-200" />
							<DropdownMenuItem
								asChild
								className="group focus:outline-none"
							>
								<Link passHref={undefined} href="/">
									<Button
										leftIcon={
											<BellIcon className="mr-1 h-4 w-4" />
										}
										className="w-full p-2 text-sm font-medium text-gray-900 transition-colors duration-100 group-data-[highlighted]:bg-black group-data-[state=checked]:bg-black group-data-[highlighted]:text-white group-data-[state=checked]:text-white"
									>
										Notifications
									</Button>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem
								asChild
								className="group focus:outline-none"
							>
								<Link passHref={undefined} href="/">
									<Button
										className="w-full p-2 text-sm font-medium text-gray-900 transition-colors duration-100 group-data-[highlighted]:bg-black group-data-[state=checked]:bg-black group-data-[highlighted]:text-white group-data-[state=checked]:text-white"
										rightIcon={
											<ArrowLongRightIcon
												strokeWidth={2}
												className="h-5 w-5 transition-transform group-hover:translate-x-1 group-data-[highlighted]:translate-x-1"
											/>
										}
									>
										Log in
									</Button>
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenuPortal>
				</DropdownMenu>
				<div className="hidden h-full items-center gap-x-3 sm:flex">
					{links.map(({ displayName, href, routeSegment }) => (
						<NavigationLink
							key={`${displayName}-${href}`}
							href={href}
							routeSegment={routeSegment}
							layoutId="navigation-selected-link"
							className="text-sm font-medium"
							selectedBarClassName='-bottom-4'
						>
							{displayName}
						</NavigationLink>
					))}
				</div>
				<div className="hidden h-full items-center sm:flex">
					<MagnifyingGlassIcon className="h-4 w-4" strokeWidth={2} />
					<div className="mx-3 h-[20px] border-l border-gray-300" />
					<Link
						passHref={undefined}
						href="/"
						className="text-sm font-medium"
					>
						<Button
							rightIcon={
								<ArrowLongRightIcon className="ml-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
							}
						>
							Log in
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

'use client'

import { HorizontalDivider } from './Divider'
import Button from './Button'

import {
	ArrowLongRightIcon,
	Bars3BottomRightIcon,
	BellIcon,
	DocumentTextIcon,
	EnvelopeIcon,
	GiftIcon,
	HomeIcon,
} from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'

import Link from 'next/link'
import { Fragment } from 'react'

import classNames from '@/utils/classnames'

type NavigationBarProps = {
	className?: string
}

const links = [
	{
		displayName: 'Home',
		href: '/',
		icon: <HomeIcon className="mr-1 h-4 w-4" />,
	},
	{
		displayName: 'Contracts',
		href: '/contracts',
		icon: <DocumentTextIcon className="mr-1 h-4 w-4" />,
	},
	{
		displayName: 'Promo',
		href: '/',
		icon: <GiftIcon className="mr-1 h-4 w-4" />,
	},
	{
		displayName: 'Contact Us',
		href: '/',
		icon: <EnvelopeIcon className="mr-1 h-4 w-4" />,
	},
]

export default function NavigationBar({ className }: NavigationBarProps) {
	return (
		<nav
			className={classNames(
				'flex h-16 w-full items-center justify-between border-b border-b-gray-300',
				className
			)}
		>
			<Link
				href="/"
				passHref={undefined}
				className="text-sm font-semibold"
			>
				GoPhotos<span className="text-xl">.</span>
			</Link>
			<Menu as="div" className="relative flex sm:hidden">
				<Menu.Button>
					<Bars3BottomRightIcon className="h-5 w-5" />
				</Menu.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-[.98]"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-[.98]"
				>
					<Menu.Items className="absolute right-0 z-10 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="p-1">
							{links.map(({ displayName, href, icon }) => (
								<Menu.Item key={`${displayName}-${href}`}>
									{({ active }) => (
										<Link passHref={undefined} href={href}>
											<Button
												className={classNames(
													active
														? 'bg-black text-white'
														: 'text-gray-900',
													'w-full p-2 text-sm'
												)}
												leftIcon={icon}
											>
												{displayName}
											</Button>
										</Link>
									)}
								</Menu.Item>
							))}
						</div>
						<div className="p-1">
							<Menu.Item>
								{({ active }) => (
									<Link passHref={undefined} href="/">
										<Button
											className={classNames(
												active
													? 'bg-black text-white'
													: 'text-gray-900',
												'w-full p-2 text-sm'
											)}
											leftIcon={
												<BellIcon className="mr-1 h-4 w-4" />
											}
										>
											Notifications
										</Button>
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								<Link passHref={undefined} href="/">
									<Button
										className="w-full p-2 text-sm"
										rightIcon={
											<ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
										}
									>
										Log in
									</Button>
								</Link>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
			<div className="hidden h-full items-center sm:flex">
				<Link passHref={undefined} href={links[0].href}>
					<Button className="text-sm">{links[0].displayName}</Button>
				</Link>
				{links.slice(1).map(({ displayName, href }) => (
					<Fragment key={`${displayName}-${href}`}>
						<HorizontalDivider />
						<Link passHref={undefined} href={href}>
							<Button className="text-sm">{displayName}</Button>
						</Link>
					</Fragment>
				))}
			</div>
			<div className="hidden h-full items-center sm:flex">
				<BellIcon className="h-5 w-5" />
				<HorizontalDivider />
				<Link passHref={undefined} href="/">
					<Button
						className="text-sm"
						rightIcon={
							<ArrowLongRightIcon className="ml-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
						}
					>
						Log in
					</Button>
				</Link>
			</div>
		</nav>
	)
}
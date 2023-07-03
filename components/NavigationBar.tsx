'use client'

import { Fragment } from 'react'
import Link from 'next/link'

import {
	ArrowLongRightIcon,
	Bars3BottomRightIcon,
	BellIcon,
	CameraIcon,
	EnvelopeIcon,
	GiftIcon,
	HomeIcon,
} from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'

import { HorizontalDivider } from './Divider'
import Button from './Button'

import classNames from '@/utils/classnames'

export default function NavigationBar() {
	return (
		<nav className="flex h-16 w-full items-center justify-between border-b border-b-gray-300 px-4 py-2">
			<Link href="/" className="text-sm font-semibold">
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
					<Menu.Items className="absolute z-10 right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="p-1">
							<Menu.Item>
								{({ active }) => (
									<Button
										className={classNames(
											active
												? 'bg-cyan-700 text-white'
												: 'text-gray-900',
											'p-2 w-full'
										)}
										leftIcon={
											<HomeIcon className="mr-1 h-4 w-4" />
										}
									>
										Home
									</Button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Button
										className={classNames(
											active
												? 'bg-cyan-700 text-white'
												: 'text-gray-900',
											'p-2 w-full'
										)}
										leftIcon={
											<CameraIcon className="mr-1 h-4 w-4" />
										}
									>
										Product
									</Button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Button
										className={classNames(
											active
												? 'bg-cyan-700 text-white'
												: 'text-gray-900',
											'p-2 w-full'
										)}
										leftIcon={
											<GiftIcon className="mr-1 h-4 w-4" />
										}
									>
										Promo
									</Button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Button
										className={classNames(
											active
												? 'bg-cyan-700 text-white'
												: 'text-gray-900',
											'p-2 w-full'
										)}
										leftIcon={
											<EnvelopeIcon className="mr-1 h-4 w-4" />
										}
									>
										Contact us
									</Button>
								)}
							</Menu.Item>
						</div>
						<div className="p-1">
							<Menu.Item>
								{({ active }) => (
									<Button
										className={classNames(
											active
												? 'bg-cyan-700 text-white'
												: 'text-gray-900',
											'p-2 w-full'
										)}
										leftIcon={
											<BellIcon className="mr-1 h-4 w-4" />
										}
									>
										Notifications
									</Button>
								)}
							</Menu.Item>
							<Menu.Item>
								<Button
									className="p-2 w-full"
									rightIcon={
										<ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
									}
								>
									Log in
								</Button>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
			<div className="hidden h-full items-center sm:flex">
				<Button>Home</Button>
				<HorizontalDivider />
				<Button>Product</Button>
				<HorizontalDivider />
				<Button>Promo</Button>
				<HorizontalDivider />
				<Button>Contact us</Button>
			</div>
			<div className="hidden h-full items-center sm:flex">
				<BellIcon className="h-5 w-5" />
				<HorizontalDivider />
				<Button
					rightIcon={
						<ArrowLongRightIcon className="ml-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
					}
				>
					Log in
				</Button>
			</div>
		</nav>
	)
}

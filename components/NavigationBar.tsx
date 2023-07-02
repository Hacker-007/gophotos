import Link from 'next/link'

import { HorizontalDivider } from './Divider'
import Button from './Button'

import {
	ArrowLongRightIcon,
	Bars3BottomRightIcon,
	BellIcon,
} from '@heroicons/react/24/outline'
import { Menu } from '@headlessui/react'

export default function NavigationBar() {
	return (
		<nav className="flex h-16 w-full items-center justify-between border-b border-b-gray-300 px-4 py-2">
			<Link href="/" className="text-sm font-semibold">
				GoPhotos<span className="text-xl">.</span>
			</Link>
			<Menu as="div" className="flex h-full flex-col justify-center">
				<Menu.Button>
					<Bars3BottomRightIcon className="h-5 w-5" />
				</Menu.Button>
				<Menu.Items>
					<Menu.Item>
						
					</Menu.Item>
				</Menu.Items>
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

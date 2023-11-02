'use client'

import { ReactNode } from 'react'

import classNames from '@/utils/classnames'
import { usePathname } from 'next/navigation'

import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function NavigationBar() {
	return (
		<div className="h-16 bg-primary grid grid-rows-1">
			<nav className="max-w-[100rem] w-full lg:p-4 py-4 justify-self-center flex items-center justify-between px-3">
				<div className="flex items-center gap-3">
					<Link className="font-medium" href="/">
						GoPhotos
					</Link>
					{/* <NavigationLink href="/">Home</NavigationLink> */}
				</div>
				<div className="flex items-center gap-3">
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLSem09PScOnSgmt87OxZjPLUabUl-zZ-v-FetmAVi8B5Wi5jsg/viewform?usp=sf_link"
						target='_blank'
						className="text-secondary bg-accent rounded-md px-3 py-2 text-sm"
					>
						Photographer?
					</Link>
					<SignedIn>
						<UserButton
							afterSignOutUrl="/"
							afterSwitchSessionUrl="/"
							afterMultiSessionSingleSignOutUrl="/"
						/>
					</SignedIn>
					<SignedOut>
						<SignInButton>
							<div className="flex cursor-pointer items-center gap-x-1 rounded-md border border-transparent hover:border-accent hover:text-accent px-3 py-2 text-sm font-medium">
								<p>Login</p>
								<ArrowLongRightIcon className="h-5 w-5" />
							</div>
						</SignInButton>
					</SignedOut>
				</div>
			</nav>
		</div>
	)
}

type NavigationLink = {
	href: string
	children: ReactNode
}

function NavigationLink({ href, children }: NavigationLink) {
	const pathname = usePathname()
	const isSelected = pathname === href

	return (
		<Link
			href={href}
			className={classNames(
				'relative text-sm font-medium',
				isSelected ? 'text-black' : 'text-gray-500'
			)}
		>
			{children}
			{isSelected && (
				<div className="absolute bottom-0 w-full border-t border-black" />
			)}
		</Link>
	)
}

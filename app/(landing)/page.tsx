import { Playfair_Display as PlayfairDisplay } from 'next/font/google'

import Link from 'next/link'

import Marquee from '@/components/Marquee'
import classNames from '@/utils/classnames'

const playfairDisplay = PlayfairDisplay({
	subsets: ['latin'],
})

export default function LandingPage() {
	return (
		<main className="grid h-full w-full grid-cols-12 gap-5">
			<div className="col-span-4 flex flex-col justify-center">
				<h1
					className={classNames(
						playfairDisplay.className,
						'col-span-2 text-6xl font-medium'
					)}
				>
					Revolutionizing The Photography Experience
				</h1>
				<h2 className="col-start-1 mt-3 max-w-sm text-sm text-zinc-400">
					Connecting photographers and customer like never before.
					<br />
					Join our waitlist now to stay up to date and be the first to
					access our groundbreaking photography services.
				</h2>
				<Link
					href="/waitlist"
					className="group mt-10 flex w-fit items-center justify-center rounded-md border border-gray-400 px-3 py-2 font-medium hover:bg-gray-200"
				>
					<span className="flex-shrink-0 text-sm">Join Waitlist</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="ml-2 h-6 w-6 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</Link>
			</div>
			<div className="col-span-3 col-start-5 mt-3">
				<Marquee
					images={[...Array(3)].map(
						_ =>
							'https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
					)}
				/>
			</div>
			<div className="col-span-3 col-start-9 mt-3">
				<Marquee
					images={[...Array(3)].map(
						_ =>
							'https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
					)}
					reversed
				/>
			</div>
		</main>
	)
}

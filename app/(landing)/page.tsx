import { Playfair_Display as PlayfairDisplay } from 'next/font/google'

import Link from 'next/link'

import { VerticalMarquee, HorizontalMarquee } from '@/components/Marquee'
import classNames from '@/utils/classnames'

const playfairDisplay = PlayfairDisplay({
	subsets: ['latin'],
})

export default function LandingPage() {
	return (
		<main className="flex h-full w-full flex-col md:grid md:grid-cols-12 md:gap-5">
			<div className="mt-5 md:col-span-4 md:mt-0 md:flex md:flex-col md:justify-center">
				<h1
					className={classNames(
						playfairDisplay.className,
						'text-2xl font-medium md:col-span-2 md:text-justify md:text-3xl lg:text-4xl'
					)}
				>
					Revolutionizing Photography
				</h1>
				<h2 className="mt-3 max-w-sm text-sm text-zinc-400 md:col-start-1 lg:text-sm">
					Connecting photographers and clients like never before. Join
					our waitlist now to stay up to date and be the first to
					access our groundbreaking photography services.
				</h2>
				<Link
					href="/waitlist"
					className="group mt-5 flex w-fit items-center justify-center rounded-md border border-gray-400 px-3 py-2 font-medium hover:bg-gray-200 md:mt-5 lg:mt-10"
				>
					<span className="flex-shrink-0 text-xs lg:text-sm">
						Join Waitlist
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="ml-2 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 lg:h-6 lg:w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</Link>
			</div>
			<div className="mt-3 hidden md:col-span-3 md:col-start-6 md:block lg:col-start-5">
				<VerticalMarquee
					images={[
						'/images/Birthday.jpg',
						'/images/Night Streaks.jpg',
						'/images/Group Picture.jpg',
					]}
				/>
			</div>
			<div className="mt-3 hidden md:col-span-3 md:col-start-10 md:block lg:col-start-9">
				<VerticalMarquee
					images={[
						'/images/Graduation.jpg',
						'/images/Headshot.jpg',
						'/images/Old Landscape.jpg',
					]}
					reversed
				/>
			</div>
			<div className="mt-3 block md:col-span-3 md:col-start-6 md:hidden lg:col-start-5">
				<HorizontalMarquee
					images={[
						'/images/Birthday.jpg',
						'/images/Night Streaks.jpg',
						'/images/Group Picture.jpg',
					]}
				/>
			</div>
			<div className="mt-3 block md:col-span-3 md:col-start-10 md:hidden lg:col-start-9">
				<HorizontalMarquee
					images={[
						'/images/Graduation.jpg',
						'/images/Headshot.jpg',
						'/images/Old Landscape.jpg',
					]}
					reversed
				/>
			</div>
		</main>
	)
}

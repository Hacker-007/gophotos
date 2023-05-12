import { Inter } from 'next/font/google'

import { PropsWithChildren } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function FullscreenBackLayout({ children }: PropsWithChildren) {
	return (
		<div
			className={`${inter.className} flex h-screen w-screen flex-col bg-zinc-100 px-16 pt-7`}
		>
			<nav className="grid h-10 w-full grid-cols-3 grid-rows-1 items-center justify-center">
				<Link href="/" className="flex items-center font-semibold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-5 w-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
						/>
					</svg>
					<span className="pl-1">Back</span>
				</Link>
				<p className="text-center font-semibold">
					Artisan<span className="text-xl">.</span>
				</p>
			</nav>
			{children}
		</div>
	)
}

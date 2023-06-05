import '../../globals.css'

import classNames from '@/utils/classnames'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function FullscreenBackLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div
					className={classNames(
						inter.className,
						'flex h-screen w-screen flex-col bg-zinc-100 px-16 pt-7'
					)}
				>
					<nav className="flex h-10 w-full items-center justify-center">
						<Link href="/" className="text-center font-semibold">
							GoPhotos<span className="text-xl">.</span>
						</Link>
					</nav>
					{children}
				</div>
			</body>
		</html>
	)
}

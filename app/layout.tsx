import './globals.css'
import { Inter } from 'next/font/google'

import NavigationBar from '@/components/NavigationBar'

import classNames from '@/utils/classnames'

const inter = Inter({
	subsets: ['latin'],
	preload: true,
})

export const metadata = {
	title: 'GoPhotos',
	description: 'description',
}

export default function RootLayout({
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
						'flex h-screen w-screen flex-col items-center overflow-x-hidden'
					)}
				>
					<NavigationBar className="w-full flex-shrink-0 px-4 py-2" />
					<div className="mt-2 w-full max-w-screen-2xl flex-grow px-4">
						{children}
					</div>
					<footer className="py-2 border-t border-gray-200 h-10 w-full max-w-screen-2xl flex-shrink-0 px-4 text-xs text-gray-400">
						©️GoPhotos 2023
					</footer>
				</div>
			</body>
		</html>
	)
}

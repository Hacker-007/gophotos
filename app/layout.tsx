import './globals.css'
import { Inter } from 'next/font/google'

import NavigationBar from '@/components/NavigationBar'

import classNames from '@/utils/classnames'

const inter = Inter({
	subsets: ['latin'],
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
						'flex h-screen w-screen overflow-x-hidden flex-col'
					)}
				>
					<NavigationBar className="px-4 py-2 flex-shrink-0" />
					<div className="mt-2 mb-4 flex-grow px-4">{children}</div>
					<footer className="h-10 flex-shrink-0 px-4 text-xs text-gray-400">
						©️GoPhotos 2023
					</footer>
				</div>
			</body>
		</html>
	)
}

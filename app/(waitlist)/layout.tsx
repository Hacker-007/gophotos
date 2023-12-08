import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import classNames from '@/utils/classnames'

const inter = Inter({
	subsets: ['latin'],
	preload: true,
})

export const metadata: Metadata = {
	title: 'GoPhotos',
	description:
		'Finding a photographer has never been this easy. Start searching for a photographer near you now!',
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
						' h-screen max-h-screen overflow-x-hidden'
					)}
				>
					{children}
				</div>
			</body>
		</html>
	)
}

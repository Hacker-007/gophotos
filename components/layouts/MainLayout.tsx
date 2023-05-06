import { PropsWithChildren } from 'react'

import { Inter } from 'next/font/google'

import NavigationBar from '../NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<div
			className={`${inter.className} flex h-screen w-screen flex-col bg-zinc-100 px-16 pt-7`}
		>
			<NavigationBar />
			{children}
		</div>
	)
}

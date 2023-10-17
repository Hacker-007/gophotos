'use client'

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import classNames from '@/utils/classnames'
import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

type CarouselProps = {
	imageUrls: any
	sizes?: string
	className?: string
	children?: ReactNode
}

export default function Carousel({
	imageUrls,
	sizes,
	className,
	children,
}: CarouselProps) {
	const [imageIndex, setImageIndex] = useState(0)
	useEffect(() => {
		console.log(imageUrls[imageIndex])
	}, [imageIndex])

	return (
		<div
			className={classNames(
				'group relative border border-gray-200 w-full overflow-hidden rounded-md',
				spaceGrotesk.className,
				className
			)}
		>
			<div
				className={classNames(
					'flex h-full w-full justify-center relative overflow-hidden'
				)}
			>
				{imageIndex < imageUrls.length && (
					<Image
						alt="Portfolio Image"
						src={imageUrls[imageIndex].url}
						placeholder="blur"
						blurDataURL={imageUrls[imageIndex].placeholder}
						fill
						sizes={sizes ?? '100vw'}
						className='object-contain'
					/>
				)}
			</div>
			<button
				onClick={() => setImageIndex(index => index - 1)}
				disabled={imageIndex === 0}
				className="absolute left-1 z-20 shadow-lg top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100 disabled:hidden group-hover:[&:not(:disabled)]:flex"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 12"
					fill="currentColor"
					className="h-4 w-4 text-gray-600"
				>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						d="M0 6h16"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						d="M0 6C4.7 6 6 2.1 6.1.3"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						d="M0 6c4.7 0 6 3.9 6.1 5.7"
					/>
				</svg>
			</button>
			<button
				onClick={() => setImageIndex(index => index + 1)}
				disabled={imageIndex === imageUrls.length - 1}
				className="absolute right-1 shadow-lg z-20 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100 disabled:hidden group-hover:[&:not(:disabled)]:flex"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 12"
					fill="currentColor"
					className="h-4 w-4 text-gray-600"
				>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						d="M0 6h16"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						d="M9.9.3C10 2.1 11.3 6 16 6"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						d="M9.9 11.7C10 9.9 11.3 6 16 6"
					/>
				</svg>
			</button>
			{children}
		</div>
	)
}

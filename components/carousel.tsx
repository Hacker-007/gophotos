'use client'

import 'swiper/css'

import { ReactNode } from 'react'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import classNames from '@/utils/classnames'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

type CarouselProps = {
	imageUrls: any[]
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
	return (
		<Swiper
			modules={[Navigation]}
			loop={true}
			navigation={{
				prevEl: '#carousel-prev',
				nextEl: '#carousel-next',
			}}
			className={classNames(
				'group border border-gray-200 w-full relative overflow-hidden rounded-md',
				spaceGrotesk.className,
				className
			)}
		>
			{imageUrls.map(imageUrl => (
				<SwiperSlide
					key={imageUrl.url}
					className="flex h-full w-full justify-center relative overflow-hidden"
				>
					<Image
						alt="Portfolio Image"
						src={imageUrl.url}
						placeholder="blur"
						blurDataURL={imageUrl.placeholder}
						fill
						sizes={sizes ?? '100vw'}
						className="object-contain"
					/>
				</SwiperSlide>
			))}
			<button
				id="carousel-prev"
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
				id="carousel-next"
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
		</Swiper>
	)
}

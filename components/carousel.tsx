'use client'

// import 'swiper/css'
// import 'swiper/css/pagination'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import Image from 'next/image'

// import { Swiper as SwiperType } from 'swiper/types'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper/modules'

import classNames from '@/utils/classnames'
import { getAroundCenter } from '@/utils/array'

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
	// const swiperRef = useRef<SwiperType>()
	const [imageIndex, setImageIndex] = useState(0)
	// useEffect(() => {
	// 	swiperRef.current?.on('realIndexChange', swiper => {
	// 		setImageIndex(swiper.realIndex)
	// 	})

	// 	swiperRef.current?.slides
	// 		.slice(-2, 2)
	// 		.map(slide => slide.querySelector('img'))
	// 		.forEach(img => img?.setAttribute('loading', 'eager'))
	// }, [])

	// useEffect(() => {
	// 	swiperRef.current?.slides
	// 		.slice(imageIndex - 2, imageIndex + 2)
	// 		.map(slide => slide.querySelector('img'))
	// 		.forEach(img => img?.setAttribute('loading', 'eager'))
	// }, [imageIndex])
	const preloadableImageUrls = getAroundCenter(imageUrls, imageIndex, 2)

	return (
		<div
			className={classNames(
				'overflow-hidden rounded-md border border-gray-200 group relative',
				className,
				spaceGrotesk.className
			)}
		>
			<div className="z-20 shadow-lg hidden px-2 py-1 text-sm group-hover:flex items-center justify-center top-1 right-1 absolute rounded-full bg-white/70">
				<p>
					{imageIndex + 1} of {imageUrls.length}
				</p>
			</div>
			{/* <Swiper
				className="w-full h-full"
				modules={[Navigation, Pagination]}
				loop={true}
				onBeforeInit={swiper => {
					swiperRef.current = swiper
				}}
			>
				{imageUrls.map(imageUrl => (
					<SwiperSlide
						key={imageUrl.url}
						className="flex !h-full justify-center relative overflow-hidden"
					>
						<Image
							alt="Portfolio Image"
							src={imageUrl.url}
							// placeholder="blur"
							// blurDataURL={imageUrl.placeholder}
							fill
							sizes={sizes ?? '100vw'}
							className="object-contain"
							unoptimized
						/>
					</SwiperSlide>
				))}
			</Swiper> */}
			<div className="h-full w-full flex overflow-x-hidden">
				{imageUrls.map(imageUrl => (
					<div
						key={imageUrl.url}
						className="flex !h-full !w-full flex-shrink-0 flex-grow-0 justify-center relative overflow-hidden"
						style={{
							left: `-${100 * imageIndex}%`,
						}}
					>
						<Image
							alt="Portfolio Image"
							src={imageUrl.url}
							// placeholder="blur"
							// blurDataURL={imageUrl.placeholder}
							fill
							sizes={sizes ?? '100vw'}
							unoptimized
							priority={preloadableImageUrls.includes(imageUrl)}
							className="object-contain"
						/>
					</div>
				))}
			</div>
			<button
				className="absolute left-1 shadow-lg z-20 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100 disabled:hidden group-hover:[&:not(:disabled)]:flex"
				// onClick={() => swiperRef.current?.slidePrev()}
				onClick={() =>
					setImageIndex(imageIndex =>
						imageIndex === 0 ? imageUrls.length - 1 : imageIndex - 1
					)
				}
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
				className="absolute right-1 shadow-lg z-20 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100 disabled:hidden group-hover:[&:not(:disabled)]:flex"
				// onClick={() => swiperRef.current?.slideNext()}
				onClick={() =>
					setImageIndex(
						imageIndex => (imageIndex + 1) % imageUrls.length
					)
				}
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

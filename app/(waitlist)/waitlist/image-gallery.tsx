import classNames from '@/utils/classnames'

import Image from 'next/image'
import { getCldImageUrl } from 'next-cloudinary'

type ImageGalleryProps = {
	className?: string
}

export default function ImageGallery({ className }: ImageGalleryProps) {
	return (
		<>
			<DefaultImageGrid className={classNames('sm:hidden', className)} />
			<SmallImageGrid
				className={classNames('hidden sm:flex md:hidden', className)}
			/>
			<MediumImageGrid
				className={classNames('hidden md:flex xl:hidden', className)}
			/>
			<LargeImageCover
				className={classNames('hidden xl:flex', className)}
			/>
		</>
	)
}

function DefaultImageGrid({ className }: ImageGalleryProps) {
	return (
		<div className={classNames('flex gap-2 justify-center', className)}>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-24 bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
				<div className="w-36 h-24 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-[13.5rem] bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-24 bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
			</div>
		</div>
	)
}

function SmallImageGrid({ className }: ImageGalleryProps) {
	return (
		<div className={classNames('flex gap-2 justify-center', className)}>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-24 bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
				<div className="w-36 h-24 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-[13.5rem] bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-[13.5rem] bg-gray-200" />
				<div className="w-36 h-24 bg-gray-200" />
				<div className="w-36 h-24 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-36 h-24 bg-gray-200" />
				<div className="w-36 h-24 bg-gray-200" />
				<div className="w-36 h-[13.5rem] bg-gray-200" />
			</div>
		</div>
	)
}

function MediumImageGrid({ className }: ImageGalleryProps) {
	return (
		<div className={classNames('flex gap-2 justify-center', className)}>
			<div className="flex flex-col gap-2">
				<div className="w-48 h-32 bg-gray-200" />
				<div className="w-48 h-72 bg-gray-200" />
				<div className="w-48 h-32 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-48 h-72 bg-gray-200" />
				<div className="w-48 h-72 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-48 h-72 bg-gray-200" />
				<div className="w-48 h-32 bg-gray-200" />
				<div className="w-48 h-32 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-48 h-32 bg-gray-200" />
				<div className="w-48 h-32 bg-gray-200" />
				<div className="w-48 h-72 bg-gray-200" />
			</div>
		</div>
	)
}

async function LargeImageCover({ className }: ImageGalleryProps) {
	// const { publicId, placeholderBase64 } = await fetch(
	// 	'http://localhost:3000/v1/assets/123'
	// ).then(res => res.json())

	const url = getCldImageUrl({
		// src: publicId,
		src: 'Vx01iY9eCN9MO7b',
	})

	return (
		<div
			className={classNames(
				'h-full w-[48rem] relative overflow-hidden',
				className
			)}
		>
			<Image
				alt="test"
				src={url}
				fill
				className="z-0 object-cover blur-sm"
				unoptimized
				// placeholder="blur"
				// blurDataURL={placeholderBase64}
			/>
			<Image
				alt="test"
				src={url}
				fill
				className="z-10 object-contain"
				unoptimized
				// placeholder="blur"
				// blurDataURL={placeholderBase64}
			/>
			<div className="absolute h-full w-full z-20 bg-black/10" />
			<p className="z-30 absolute bottom-2 left-3 text-gray-100">
				Photo by{' '}
				<span className="text-white underline">Revanth Pothukuchi</span>
			</p>
		</div>
	)
}

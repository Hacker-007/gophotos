import classNames from '@/utils/classnames'

import Image from 'next/image'
import { getCldImageUrl } from 'next-cloudinary'

type ImageGalleryProps = {
	className?: string
}

async function GalleryImage({
	className,
	publicId,
	authorName,
}: {
	className?: string
	publicId: string
	authorName: string
}) {
	const {
		data: { placeholderBase64 },
	} = await fetch(`http://localhost:8080/v1/assets/${publicId}`).then(res =>
		res.json()
	)

	const url = getCldImageUrl({
		src: publicId,
	})

	return (
		<div className={classNames('relative overflow-hidden', className)}>
			<Image
				alt="image in gallery"
				src={url}
				fill
				className="z-10 object-contain"
				unoptimized
				placeholder="blur"
				blurDataURL={placeholderBase64}
			/>
			<div className="absolute z-20 h-full w-full bg-black/10" />
			<p className="absolute bottom-2 left-3 z-30 text-xs text-gray-100">
				By <span className="text-white underline">{authorName}</span>
			</p>
		</div>
	)
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
		<div className={classNames('flex justify-center gap-2', className)}>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Maxwell Yun"
					publicId="dmLGBRyDMctGpDm"
					className="h-24 w-36"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					publicId="Kh8gJ6VoGn98M4g"
					className="h-[13.5rem] w-36"
				/>
				<GalleryImage
					authorName="Andrew Okyere"
					publicId="a5kGTyGVX8OATzi"
					className="h-24 w-36"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Andrew Mendez"
					publicId="eufuuWjaSYYBwoc"
					className="h-[13.5rem] w-36"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					publicId="gF36LEkWVPYQsA3"
					className="h-[13.5rem] w-36"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Jacob Slabosz"
					publicId="rJQn6GiRtO5G2BX"
					className="h-[13.5rem] w-36"
				/>
				<GalleryImage
					authorName="Emma Tysinger"
					publicId="XD3XGn13s5d7Dqd"
					className="h-[13.5rem] w-36"
				/>
			</div>
		</div>
	)
}

function SmallImageGrid({ className }: ImageGalleryProps) {
	return (
		<div className={classNames('flex justify-center gap-2', className)}>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Frankie Schulte"
					publicId="tyf9griu2VOr5Xk"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Andrew Mendez"
					publicId="eufuuWjaSYYBwoc"
					className="h-72 w-48"
				/>
				<GalleryImage
					authorName="Maxwell Yun"
					publicId="dmLGBRyDMctGpDm"
					className="h-32 w-48"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Emma Tysinger"
					publicId="XD3XGn13s5d7Dqd"
					className="h-72 w-48"
				/>
				<GalleryImage
					authorName="Jacob Slabosz"
					publicId="rJQn6GiRtO5G2BX"
					className="h-72 w-48"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Arnav Plande"
					publicId="Kh8gJ6VoGn98M4g"
					className="h-72 w-48"
				/>
				<GalleryImage
					authorName="Jinger Chong"
					publicId="62lrHKa6yzOzCrk"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Andrew Okyere"
					publicId="a5kGTyGVX8OATzi"
					className="h-32 w-48"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Andrew Burke-Stevenson"
					publicId="M5xdpxGSJGcIxcB"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Qudus Shittu"
					publicId="Z6H0HrKVlz4qPfI"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					publicId="gF36LEkWVPYQsA3"
					className="h-72 w-48"
				/>
			</div>
		</div>
	)
}

function MediumImageGrid({ className }: ImageGalleryProps) {
	return (
		<div className={classNames('flex justify-center gap-2', className)}>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Qudus Shittu"
					publicId="Z6H0HrKVlz4qPfI"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Emma Tysinger"
					publicId="XD3XGn13s5d7Dqd"
					className="h-[22.5rem] w-60"
				/>
				<GalleryImage
					authorName="Andrew Okyere"
					publicId="a5kGTyGVX8OATzi"
					className="h-40 w-60"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Arnav Plande"
					publicId="gF36LEkWVPYQsA3"
					className="h-[22.5rem] w-60"
				/>
				<GalleryImage
					authorName="Jacob Slabosz"
					publicId="rJQn6GiRtO5G2BX"
					className="h-[22.5rem] w-60"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Andrew Mendez"
					publicId="eufuuWjaSYYBwoc"
					className="h-[22.5rem] w-60"
				/>
				<GalleryImage
					authorName="Maxwell Yun"
					publicId="dmLGBRyDMctGpDm"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Andrew Burke-Stevenson"
					publicId="M5xdpxGSJGcIxcB"
					className="h-40 w-60"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Jinger Chong"
					publicId="62lrHKa6yzOzCrk"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Frankie Schulte"
					publicId="tyf9griu2VOr5Xk"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					publicId="Kh8gJ6VoGn98M4g"
					className="h-[22.5rem] w-60"
				/>
			</div>
		</div>
	)
}

async function LargeImageCover({ className }: ImageGalleryProps) {
	const {
		data: { publicId, placeholderBase64 },
	} = await fetch('http://localhost:8080/v1/assets/eufuuWjaSYYBwoc').then(
		res => res.json()
	)

	const url = getCldImageUrl({
		src: publicId,
	})

	return (
		<div
			className={classNames(
				'relative h-full w-[48rem] overflow-hidden',
				className
			)}
		>
			<Image
				alt="large image"
				src={url}
				fill
				className="z-0 object-cover blur-sm"
				unoptimized
				placeholder="blur"
				blurDataURL={placeholderBase64}
			/>
			<Image
				alt="large image"
				src={url}
				fill
				className="z-10 object-contain"
				unoptimized
				placeholder="blur"
				blurDataURL={placeholderBase64}
			/>
			<div className="absolute z-20 h-full w-full bg-black/10" />
			<p className="absolute bottom-2 left-3 z-30 text-gray-100">
				By <span className="text-white underline">Andrew Mendez</span>
			</p>
		</div>
	)
}

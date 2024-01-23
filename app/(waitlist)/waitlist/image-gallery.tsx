import classNames from '@/utils/classnames'

import Image from 'next/image'
import { getCldImageUrl } from 'next-cloudinary'

type ImageGalleryProps = {
	className?: string
}

async function GalleryImage({
	className,
	id,
	authorName,
}: {
	className?: string
	id: string
	authorName: string
}) {
	const {
		data: { cdnPath, placeholderBase64 },
	} = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/assets/${id}`, {
		headers: {
			'Authorization': `Bearer ${process.env.SERVER_SECRET}`
		}
	}).then(res =>
		res.json()
	)

	return (
		<div className={classNames('relative overflow-hidden', className)}>
			<Image
				alt="image in gallery"
				src={cdnPath}
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
					id="UkLWZg9"
					className="h-24 w-36"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					id="AXs1igz"
					className="h-[13.5rem] w-36"
				/>
				<GalleryImage
					authorName="Andrew Okyere"
					id="EfhxLZ9"
					className="h-24 w-36"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Andrew Mendez"
					id="98FqgRu"
					className="h-[13.5rem] w-36"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					id="p6klVeM"
					className="h-[13.5rem] w-36"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Jacob Slabosz"
					id="nJqfPa3"
					className="h-[13.5rem] w-36"
				/>
				<GalleryImage
					authorName="Emma Tysinger"
					id="xhoCpeN"
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
					id="VqXmZF3"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Andrew Mendez"
					id="98FqgRu"
					className="h-72 w-48"
				/>
				<GalleryImage
					authorName="Maxwell Yun"
					id="UkLWZg9"
					className="h-32 w-48"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Emma Tysinger"
					id="xhoCpeN"
					className="h-72 w-48"
				/>
				<GalleryImage
					authorName="Jacob Slabosz"
					id="nJqfPa3"
					className="h-72 w-48"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Arnav Plande"
					id="AXs1igz"
					className="h-72 w-48"
				/>
				<GalleryImage
					authorName="Jinger Chong"
					id="uw2YK1r"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Andrew Okyere"
					id="EfhxLZ9"
					className="h-32 w-48"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Andrew Burke-Stevenson"
					id="gbHJdmf"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Qudus Shittu"
					id="OIJLhNc"
					className="h-32 w-48"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					id="p6klVeM"
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
					id="OIJLhNc"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Emma Tysinger"
					id="xhoCpeN"
					className="h-[22.5rem] w-60"
				/>
				<GalleryImage
					authorName="Andrew Okyere"
					id="EfhxLZ9"
					className="h-40 w-60"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Arnav Plande"
					id="p6klVeM"
					className="h-[22.5rem] w-60"
				/>
				<GalleryImage
					authorName="Jacob Slabosz"
					id="nJqfPa3"
					className="h-[22.5rem] w-60"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Andrew Mendez"
					id="98FqgRu"
					className="h-[22.5rem] w-60"
				/>
				<GalleryImage
					authorName="Maxwell Yun"
					id="UkLWZg9"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Andrew Burke-Stevenson"
					id="gbHJdmf"
					className="h-40 w-60"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<GalleryImage
					authorName="Jinger Chong"
					id="uw2YK1r"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Frankie Schulte"
					id="VqXmZF3"
					className="h-40 w-60"
				/>
				<GalleryImage
					authorName="Arnav Plande"
					id="AXs1igz"
					className="h-[22.5rem] w-60"
				/>
			</div>
		</div>
	)
}

async function LargeImageCover({ className }: ImageGalleryProps) {
	const {
		data: { cdnPath, placeholderBase64 },
	} = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/assets/98FqgRu`, {
		headers: {
			'Authorization': `Bearer ${process.env.SERVER_SECRET}`
		}
	}).then(
		res => res.json()
	)

	return (
		<div
			className={classNames(
				'relative h-full w-[48rem] overflow-hidden',
				className
			)}
		>
			<Image
				alt="large image"
				src={cdnPath}
				fill
				className="z-0 object-cover blur-sm"
				unoptimized
				placeholder="blur"
				blurDataURL={placeholderBase64}
			/>
			<Image
				alt="large image"
				src={cdnPath}
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

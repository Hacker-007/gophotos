import Image from 'next/image'

type MarqueeProps = {
	images: string[]
	reversed?: boolean
}

export default function Marquee({ images, reversed }: MarqueeProps) {
	return (
		<div className="flex h-full select-none flex-col gap-4 overflow-hidden">
			<ul
				className={`flex min-h-full flex-shrink-0 animate-scroll flex-col justify-around gap-4 ${
					reversed ? '[animation-direction:reverse]' : ''
				}`}
			>
				{images.map((imageUrl, idx) => (
					<li
						key={`${imageUrl}/${idx}`}
						className="relative h-full w-full overflow-hidden rounded-md bg-white"
					>
						<Image
							fill={true}
							alt=""
							src={imageUrl}
							className="object-cover"
						/>
					</li>
				))}
			</ul>
			<ul
				className={`flex min-h-full flex-shrink-0 animate-scroll flex-col justify-around gap-4 ${
					reversed ? '[animation-direction:reverse]' : ''
				}`}
			>
				{images.map((imageUrl, idx) => (
					<li
						key={`${imageUrl}/${idx}`}
						className="relative h-full w-full overflow-hidden rounded-md bg-white"
					>
						<Image
							fill={true}
							alt=""
							src={imageUrl}
							className="object-cover"
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

import classNames from '@/utils/classnames'
import Image from 'next/image'

type HorizontalMarqueeProps = {
	images: string[]
	reversed?: boolean
}

export function HorizontalMarquee({
	images,
	reversed,
}: HorizontalMarqueeProps) {
	return (
		<div className="flex w-full select-none gap-4 overflow-hidden">
			<ul
				className={classNames(
					'flex min-w-full flex-shrink-0 animate-horizontal-scroll justify-around gap-4',
					reversed ? '[animation-direction:reverse]' : ''
				)}
			>
				{images.map((imageUrl, idx) => (
					<li
						key={`${imageUrl}/${idx}`}
						className="relative h-48 w-36 overflow-hidden rounded-md bg-white"
					>
						<Image
							fill
							sizes="33vw"
							alt=""
							src={imageUrl}
							className="object-cover"
						/>
					</li>
				))}
			</ul>
			<ul
				className={classNames(
					'flex min-w-full flex-shrink-0 animate-horizontal-scroll justify-around gap-4',
					reversed ? '[animation-direction:reverse]' : ''
				)}
			>
				{images.map((imageUrl, idx) => (
					<li
						key={`${imageUrl}/${idx}`}
						className="relative h-48 w-36 overflow-hidden rounded-md bg-white"
					>
						<Image
							fill
							sizes="33vw"
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

type VerticalMarqueeProps = {
	images: string[]
	reversed?: boolean
}

export function VerticalMarquee({ images, reversed }: VerticalMarqueeProps) {
	return (
		<div className="relative flex h-full flex-col overflow-y-hidden">
			<div
				className={classNames(
					'flex animate-vertical-scroll flex-col',
					reversed ? '[animation-direction:reverse]' : ''
				)}
			>
				{images.map((imageUrl, idx) => (
					<span
						key={`${imageUrl}/${idx}`}
						className="relative mt-4 h-48 w-36 overflow-hidden rounded-md bg-white first:mt-0 lg:w-52 xl:h-64 xl:w-80"
					>
						<Image
							fill={true}
							sizes="25vw"
							alt=""
							src={imageUrl}
							className="object-cover"
						/>
					</span>
				))}
			</div>
			<div
				className={classNames(
					'absolute flex animate-vertical-scroll2 flex-col',
					reversed ? '[animation-direction:reverse]' : ''
				)}
			>
				{images.map((imageUrl, idx) => (
					<span
						key={`${imageUrl}/${idx}`}
						className="relative mt-4 h-48 w-36 overflow-hidden rounded-md bg-white lg:w-52 xl:h-64 xl:w-80"
					>
						<Image
							fill={true}
							sizes="25vw"
							alt=""
							src={imageUrl}
							className="object-cover"
						/>
					</span>
				))}
			</div>
		</div>
	)
}

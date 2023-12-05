import classNames from '@/utils/classnames'

import { Playfair_Display as PlayfairDisplay } from 'next/font/google'

import WaitlistForm from './waitlist-form'
import ImageGallery from './image-gallery'

const playfairDisplay = PlayfairDisplay({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	preload: true,
})

export default function WaitlistPage() {
	return (
		<div className="h-full w-full xl:flex xl:items-center xl:justify-center">
			<div className="xl:flex-grow">
				<div className="mt-16 px-8">
					<p
						className={classNames(
							playfairDisplay.className,
							'text-center text-4xl font-medium'
						)}
					>
						Creative hiring{' '}
						<span className="inline-block bg-gradient-to-r from-[#A4C3B2] via-[#6B9080] to-[#556C62] bg-clip-text italic text-transparent">
							simplified.
						</span>
					</p>
				</div>
				<p className="mt-1 text-center text-xs font-light text-gray-500">
					Hiring local photography talent done right.
					<br />
					Join now to make capturing life&apos;s biggest moments
					easier.
				</p>
				<WaitlistForm />
			</div>
			<ImageGallery className="mt-16 xl:mt-0" />
		</div>
	)
}

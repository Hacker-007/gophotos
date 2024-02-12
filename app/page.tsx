import React from 'react'
import { cn } from '@/utils/cn'

import { Switch } from '@/components/switch'
import { Playfair_Display as PlayfairDisplay } from 'next/font/google'
import Image from 'next/image'
import SearchArea from '@/app/discover/search-area'
import { redirect } from 'next/navigation'

const playfairDisplay = PlayfairDisplay({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	preload: true,
})

export default function LandingPage() {
	const redirectOnSwitch = async () => {
		'use server'

		redirect('/photographer')
	}

	return (
		<div className="relative h-auto bg-white pt-3 ">
			{/* <div className="mb-7 mt-10 flex items-center justify-center space-x-2">
				<label htmlFor="hiring" className="text-lg text-black">
					For Hiring
				</label>
				<Switch
					onCheckedChange={redirectOnSwitch}
					id="landing-page"
					className="bg-black"
				/>
				<label htmlFor="photographers" className="text-lg text-black">
					For Photographers
				</label>
			</div> */}
			<div className="flex items-center justify-center">
				<div className="w-1/2 pl-10">
					<div className="ml-9 text-black">
						<p
							className={cn(
								playfairDisplay.className,
								'text-6xl font-medium'
							)}
						>
							Hiring Photographers <br />
							<span className="inline-block bg-gradient-to-r from-[#FF9993] via-[#FC7674] to-[#FC4D74] bg-clip-text italic leading-snug text-transparent pl-0.5">
								simplified.
							</span>
						</p>
						<p className="mb-10 mt-6 font-serif text-2xl italic text-black">
							The All-In-One Photographer Booking Platform
						</p>
					</div>
					<div className='pl-9'>
						<SearchArea />
						<p className='text-sm text-gray-600 pt-5 italic'> Currently available in Boston, MA & Cambridge, MA areas</p>
					</div>
				</div>
				<div className="flex w-1/2 items-center justify-center">
					<Image
						src="/images/photographer.JPG"
						alt="Photographer taking a picture"
						width={650}
						height={100}
						className="rounded-2xl"
					/>
				</div>
			</div>
		</div>
	)
}

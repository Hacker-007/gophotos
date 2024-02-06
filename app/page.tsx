import React from 'react'
import { cn } from '@/utils/cn'

import { Switch } from '@/components/switch'
import { Playfair_Display as PlayfairDisplay } from 'next/font/google'
import Image from 'next/image'
import SearchArea from '@/app/discover/search-area'
import Footer from '@/app/footer'
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
		<div className="relative h-screen bg-white">
			<div className="mb-7 mt-10 flex items-center justify-center space-x-2">
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
			</div>
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
							<span className="inline-block bg-gradient-to-r from-[#A4C3B2] via-[#6B9080] to-[#556C62] bg-clip-text pt-3 italic text-transparent">
								simplified.
							</span>
						</p>
						<p className="mb-10 mt-6 font-serif text-2xl italic text-black">
							The All-In-One Photographer Booking Platform
						</p>
					</div>
					<div>
						<SearchArea withFilters={false} />
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
			<Footer />
		</div>
	)
}

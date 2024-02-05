'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cn } from '@/utils/cn'

import { Switch } from '../components/switch'
import Card from '../components/cards'
import { Gradient } from "whatamesh";
import { Playfair_Display as PlayfairDisplay } from 'next/font/google'
import Image from 'next/image'
import SearchArea from '@/app/discover/search-area'
import Footer from '@/app/footer'

const playfairDisplay = PlayfairDisplay({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	preload: true,
})

export default function LandingPage() {
	useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []); // Empty dependency array means this runs once after the initial render

	// const [isChecked, setIsChecked] = useState(false);
    // const router = useRouter();
	// const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const checked = event.target.checked;
    //     setIsChecked(checked);

    //     // Navigate to the photographer landing page if the switch is checked
    //     if (checked) {
    //         router.push('/landing-photographer/page');
    //     }
    // };

	
	return (
		<div className="relative h-screen bg-white">
			{/* <canvas id="gradient-canvas" className="absolute top-0 left-0 w-full h-full" style={{ '--gradient-color-1': '#043D5D', '--gradient-color-2': '#032E46', '--gradient-color-3': '#23B684', '--gradient-color-4': '#0F595E', opacity: 1 } as React.CSSProperties} /> */}
			
			<span className='z-10'>
			<hr className="border-gray-300" />

			{/* switch */}
			<div className="mb-7 mt-10 flex items-center justify-center space-x-2">
				<label htmlFor="hiring" className="text-lg text-black">
					For Hiring
				</label>
				{/* <Switch id="landing-page" className="bg-black" checked={isChecked} onChange={handleSwitchChange}/> */}
				<Switch id="landing-page" className="bg-black"/>
				<label htmlFor="photographers" className="text-lg text-black">
					For Photographers
				</label>
			</div>

			{/* main page */}
            <div className='flex items-center justify-center'>

				<div className='w-1/2 pl-10'>
					{/* main page text */}
					<div className="text-black ml-9">
						<p
							className={cn(
								playfairDisplay.className,
								'text-6xl font-medium'
							)}
						>
							Hiring Photographers{' '} 
							<br />
							<span className="inline-block bg-gradient-to-r from-[#A4C3B2] via-[#6B9080] to-[#556C62] bg-clip-text italic text-transparent pt-3">
								simplified.
							</span>
						</p>
						<p className="mb-10 mt-6 font-serif text-2xl italic text-black">
							The All-In-One Photographer Booking Platform
						</p>
					</div>

					{/* search section */}
					<div>
						<SearchArea/>
					</div>
				</div>
				
				{/* image */}
				<div className='flex items-center justify-center w-1/2'>
					<Image src='/images/photographer.JPG' alt='Photographer taking a picture' width={650} height={100} className='rounded-2xl'/>
				</div>
            
			</div>

			{/* <p className="pl-20 text-black text-4xl mt-10">
				How GoPhotos Works
			</p> */}

            {/* card section */}
			{/* <div className="flex justify-center mt-10 h-2/5 bg-blue-200 px-20 space-x-4">

					<Card 
					headerText='Discover Talented Photographers Instantly' > 
					<ul>
						<li>Search and browse profiles of top-rated local photographers</li>
						<li className='mt-3'>View past work and reviews to find the perfect fit</li>
						<li className='mt-3'>Get custom quotes for your photoshoot needs</li>
					</ul>
					</Card>
				
					<Card 
					headerText='Seamlessly Book, Communicate and Manage Logistics'>
						<ul>
							<li>Request availability and book photographers for any date/time</li>
							<li className='mt-3'>All messaging and details in one place, eliminating cross-platform communication</li>
						</ul>
					</Card> 

					<Card 
					headerText='Receive Completed Photos in One Place' >
						<ul>
							<li>Photographers deliver final, edited photos directly into your gallery</li>
							<li className='mt-3'>Store all photos online or download with one click</li>
						</ul>
					</Card> 

					<Card 
					headerText='Secure and Guaranteed Payments' >
						<ul>
							<li>Securely pay photographers in just a few clicks</li>
							<li className='mt-3'>No hidden fees or charges</li>
						</ul>
					</Card> 

			</div> */}
			</span>
			
			<Footer />
			
		</div>
	)
}

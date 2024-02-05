'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cn } from '@/utils/cn'


import { Switch } from '@/app/(landing)/components/switch'
import Card from '@/app/(landing)/components/cards'
import { Gradient } from "whatamesh";
import { Playfair_Display as PlayfairDisplay } from 'next/font/google'
import Image from 'next/image'
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
    }, []);

	
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
				<Switch id="landing-page" className="bg-black" />
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
							More Bookings, {' '} 
							<br />
							<span className="inline-block pt-3">
                            Less Hassle.
							</span>
						</p>
						<p className="mb-10 mt-6 font-serif text-2xl italic text-black">
                            The All-In-One Booking Platform for Photographers
						</p>
					</div>
                            
                    {/* search section */}
                    <div className='flex justify-center'>
                    <button className="w-1/2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white">
						Join Now
					</button>
                    </div>

				</div>

				{/* image */}
				<div className='flex items-center justify-center w-1/2'>
					<Image src='/images/photographer.JPG' alt='Photographer taking a picture' width={650} height={100} className='rounded-2xl'/>
				</div>
            
			</div>

            {/* card section */}
			{/* <div className="flex justify-center mt-10 h-2/5 bg-blue-200 px-20 space-x-4">

					<Card 
					headerText='Get Discovered by Clients Instantly' > 
					<ul>
						<li>Create a professional profile showcasing your work and expertise</li>
						<li className='mt-3'>Get matched with clients looking for photographers like you</li>
						<li className='mt-3'>Receive booking inquiries tailored to your availability</li>
					</ul>
					</Card>
				
					<Card 
					headerText='Streamline Your Booking Workflow'>
						<ul>
							<li>Manage your calendar and availability in one place</li>
							<li className='mt-3'>Communicate with clients on the GoPhotos platform</li>
						</ul>
					</Card> 

					<Card 
					headerText='Deliver Completed Photos with Ease' >
						<ul>
							<li>Upload final, edited photos into client galleries</li>
							<li className='mt-3'>Clients can download photos anytime, anywhere</li>
						</ul>
					</Card> 

					<Card 
					headerText='Get Paid Quickly and Securely' >
						<ul>
							<li>Receive prompt payment after each completed shoot</li>
							<li className='mt-3'>Secure platform with fraud protection guarantees</li>
						</ul>
					</Card> 

			</div> */}
			</span>
			
			<Footer />
			
		</div>
	)
}

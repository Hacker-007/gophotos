import Switch from '@/components/switch'
import classNames from '@/utils/classnames'

import { Playfair_Display as PlayfairDisplay } from 'next/font/google'
import { cookies } from 'next/headers'

import EarlyAccessButton from './early-access-button'
import ImageGallery from './image-gallery'

const playfairDisplay = PlayfairDisplay({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	preload: true,
})

export default function WaitlistPage() {
	async function handleSubmission(formData: FormData) {
		'use server'
		const email = formData.get('email')!.toString()
		const fullName = formData.get('fullName')!.toString()
		const isPhotographer = formData.get('isPhotographer') !== null
		const latitude = Number.parseFloat(cookies().get('latitude')?.value!)
		const longitude = Number.parseFloat(cookies().get('longitude')?.value!)

		try {
			const response = await fetch('http://localhost:3000/v1/waitlists', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					fullName,
					isPhotographer,
					location: {
						longitude,
						latitude,
					},
				}),
			}).then(res => res.json())

			console.log(response)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className="xl:flex xl:justify-center xl:items-center h-full w-full">
			<div className="xl:flex-grow">
				<div className="mt-16 px-8">
					<p
						className={classNames(
							playfairDisplay.className,
							'text-4xl text-center font-medium'
						)}
					>
						Creative hiring{' '}
						<span className="italic inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A4C3B2] via-[#6B9080] to-[#556C62]">
							simplified.
						</span>
					</p>
				</div>
				<p className="font-light text-center text-xs mt-1 text-gray-500">
					Hiring local photography talent done right.
					<br />
					Join now to make capturing life&apos;s biggest moments
					easier.
				</p>
				<form
					action={handleSubmission}
					className="mt-5 px-5 flex justify-center items-center"
				>
					<div>
						<div>
							<label
								htmlFor="fullName"
								className="text-sm font-medium"
							>
								Full name
							</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								className="w-full rounded-md border text-sm border-gray-300 focus:outline-none focus:ring-[#6B9080] focus:border-[#6B9080]"
							/>
						</div>
						<div className="mt-3">
							<label
								htmlFor="email"
								className="text-sm font-medium"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full rounded-md border text-sm border-gray-300 focus:outline-none focus:ring-[#6B9080] focus:border-[#6B9080]"
							/>
						</div>
						<div className="flex justify-between items-center mt-3 gap-4">
							<div className="flex flex-col justify-between">
								<label
									htmlFor="isPhotographer"
									className="font-medium text-sm"
								>
									Become a photographer?
								</label>
								<p className="text-xs text-gray-600">
									Create a photographer profile and find paid
									jobs
								</p>
							</div>
							<Switch
								id="isPhotographer"
								name="isPhotographer"
								className="flex-shrink-0 cursor-pointer"
							/>
						</div>
						<EarlyAccessButton />
					</div>
				</form>
			</div>
			<ImageGallery className="mt-16 xl:mt-0" />
		</div>
	)
}

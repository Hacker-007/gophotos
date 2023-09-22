'use client'

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { useState } from 'react'

import { ChevronLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

import { Dialog } from '@/components/headless-ui'
import Button from '@/components/button'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

export default function RequestQuote() {
	const [isRequestQuoteFormOpen, setIsRequestQuoteFormOpen] = useState(false)

	return (
		<>
			<Button
				className="rounded-md bg-accent px-3 sm:hidden py-2 text-sm font-medium text-secondary"
				onClick={() => setIsRequestQuoteFormOpen(true)}
			>
				Request quote
			</Button>
			<Dialog
				open={isRequestQuoteFormOpen}
				onClose={() => setIsRequestQuoteFormOpen(false)}
			>
				<Dialog.Panel className="fixed bottom-0 z-20 h-full w-full space-y-4 overflow-y-auto bg-white p-4">
					<div className="text-left">
						<Button
							onClick={() => setIsRequestQuoteFormOpen(false)}
							className="flex items-center gap-1 rounded-full border border-gray-300 px-2 py-1 text-xs font-medium"
						>
							<ChevronLeftIcon className="h-3 w-3" />
							Back
						</Button>
					</div>
					<div className={spaceGrotesk.className}>
						<div>
							<h3 className="font-medium capitalize text-2xl">
								Request a quote
							</h3>
							<p className="mt-3 text-sm">
								Great! There is some information that we need to
								send an initial quote request.
							</p>
						</div>
						<RequestQuoteContent />
					</div>
				</Dialog.Panel>
			</Dialog>
			<div className="hidden sm:block w-full">
				<RequestQuoteContent />
			</div>
		</>
	)
}

function RequestQuoteContent() {
	return (
		<form className="grid gap-2 mt-2">
				<div className='xl:col-start-1 xl:col-span-1 xl:row-start-1'>
					<label className="text-sm font-medium" htmlFor="name">
						Name
					</label>
					<input
						className="w-full rounded-md px-2 py-1"
						id="name"
						type="text"
					/>
				</div>
				<div className='xl:col-start-2 xl:col-span-1 xl:row-start-1'>
					<label className="text-sm font-medium" htmlFor="email">
						Email
					</label>
					<input
						className="w-full rounded-md px-2 py-1"
						id="email"
						type="email"
					/>
				</div>
				<div className='xl:col-start-1 xl:col-span-1 xl:row-start-2'>
					<label className="text-sm font-medium" htmlFor="eventDate">
						Date of Event
					</label>
					<input
						className="w-full rounded-md px-2 py-1"
						id="eventDate"
						type="date"
					/>
				</div>
				<div className='xl:col-start-2 xl:col-span-1 xl:row-start-2'>
					<label
						className="text-sm font-medium"
						htmlFor="phoneNumber"
					>
						Phone number
					</label>
					<input
						className="w-full rounded-md px-2 py-1"
						id="phoneNumber"
						type="tel"
					/>
				</div>
			<div className='xl:col-span-2 xl:row-start-3'>
				<label className="text-sm font-medium" htmlFor="organization">
					Organization / University
				</label>
				<input
					className="w-full rounded-md px-2 py-1"
					id="organization"
					type="text"
				/>
			</div>
			<div className='xl:col-span-2 xl:row-start-4'>
				<label
					className="text-sm font-medium"
					htmlFor="eventDescription"
				>
					Description of event
				</label>
				<textarea
					className="w-full text-sm rounded-md px-2 py-1"
					id="eventDescription"
				/>
			</div>
			<Button
				className="xl:col-span-2 xl:row-start-5 mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-3 py-2 font-medium text-secondary"
				type="submit"
			>
				<span>Send request</span>
				<PaperAirplaneIcon className="h-4 w-4" />
			</Button>
		</form>
	)
}

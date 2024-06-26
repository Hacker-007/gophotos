'use client'

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { ChangeEvent, FormEvent, useState } from 'react'

import { ChevronLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

import { Dialog } from '@/components/headless-ui'
import Button from '@/components/button'
import { useUser } from '@clerk/nextjs'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

export default function RequestQuote({
	id,
	hours,
}: {
	id: string
	hours: number
}) {
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
						<RequestQuoteContent id={id} hours={hours} />
					</div>
				</Dialog.Panel>
			</Dialog>
			<div className="hidden sm:block w-full">
				<RequestQuoteContent id={id} hours={hours} />
			</div>
		</>
	)
}

function RequestQuoteContent({ id, hours }: { id: string; hours: number }) {
	const { user } = useUser()
	const [isLoading, setIsLoading] = useState(false)
	const [formValues, setFormValues] = useState({
		name: user?.fullName ?? '',
		email: user?.emailAddresses.at(0)?.emailAddress ?? '',
		eventDate: '',
		eventTime: '',
		phoneNumber: user?.phoneNumbers.at(0)?.phoneNumber ?? '',
		organization: '',
		eventDescription: '',
	})

	const updateValue = <K extends keyof typeof formValues>(
		key: K,
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormValues(currentValues => ({
			...currentValues,
			[key]: e.target.value,
		}))
	}

	const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/quote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				photographerId: id,
				hours,
				name: formValues.name,
				email: formValues.email,
				eventDate: formValues.eventDate,
				eventTime: formValues.eventTime,
				phoneNumber: formValues.phoneNumber,
				organization: formValues.organization,
				eventDescription: formValues.eventDescription,
			}),
		})

		setIsLoading(false)
	}

	return (
		<form
			className="grid gap-2 mt-2 @container/quote"
			onSubmit={handleSubmission}
		>
			<div className="@md/quote:col-start-1 @md/quote:col-span-1 @md/quote:row-start-1">
				<label className="text-sm font-medium" htmlFor="name">
					Name
				</label>
				<input
					className="w-full rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="name"
					name="name"
					type="text"
					value={formValues.name}
					onChange={e => updateValue('name', e)}
				/>
			</div>
			<div className="@md/quote:col-start-2 @md/quote:col-span-1 @md/quote:row-start-1">
				<label className="text-sm font-medium" htmlFor="email">
					Email
				</label>
				<input
					className="w-full rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="email"
					name="email"
					type="email"
					value={formValues.email}
					onChange={e => updateValue('email', e)}
				/>
			</div>
			<div className="@md/quote:col-start-1 @md/quote:col-span-2 @md/quote:row-start-2">
				<label className="text-sm font-medium" htmlFor="eventDate">
					Date of Event
				</label>
				<input
					className="w-full rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="eventDate"
					name="eventDate"
					type="date"
					value={formValues.eventDate}
					onChange={e => updateValue('eventDate', e)}
				/>
			</div>
			<div className="@md/quote:col-start-1 @md/quote:col-span-1 @md/quote:row-start-3">
				<label className="text-sm font-medium" htmlFor="eventDate">
					Start time of Event
				</label>
				<input
					className="w-full rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="eventTime"
					name="eventTime"
					type="time"
					value={formValues.eventTime}
					onChange={e => updateValue('eventTime', e)}
				/>
			</div>
			<div className="@md/quote:col-start-2 @md/quote:col-span-1 @md/quote:row-start-3">
				<label className="text-sm font-medium" htmlFor="hours">
					Hours
				</label>
				<input
					className="w-full border border-gray-500 bg-gray-100 rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="hours"
					name="hours"
					type="int"
					value={hours}
					disabled
				/>
			</div>
			<div className="@md/quote:col-span-1 @md/quote:row-start-4">
				<label className="text-sm font-medium" htmlFor="phoneNumber">
					Phone number
				</label>
				<input
					className="w-full rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="phoneNumber"
					name="phoneNumber"
					type="tel"
					value={formValues.phoneNumber}
					onChange={e => updateValue('phoneNumber', e)}
				/>
			</div>
			<div className="@md/quote:col-span-1 @md/quote:row-start-4">
				<label className="text-sm font-medium" htmlFor="organization">
					Organization / University
				</label>
				<input
					className="w-full rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="organization"
					name="organization"
					type="text"
					value={formValues.organization}
					onChange={e => updateValue('organization', e)}
				/>
			</div>
			<div className="@md/quote:col-span-2 @md/quote:row-start-5">
				<label
					className="text-sm font-medium"
					htmlFor="eventDescription"
				>
					Description of event
				</label>
				<textarea
					className="w-full text-sm rounded-md px-2 py-1 focus:ring-accent focus:border-accent"
					id="eventDescription"
					name="eventDescription"
					value={formValues.eventDescription}
					onChange={e => updateValue('eventDescription', e)}
					placeholder="Please be as specific as possible regarding the details of the event to receive the most accurate quote."
				/>
			</div>
			<div className="@md/quote:col-span-2 @md/quote:row-start-6 relative">
				<Button
					className="flex w-full items-center justify-center gap-2 rounded-md hover:bg-accent/90 bg-accent px-3 py-2 font-medium text-secondary"
					type="submit"
				>
					<span>Send request</span>
					<PaperAirplaneIcon className="h-4 w-4" />
				</Button>
				{isLoading && (
					<>
						<div className="absolute z-10 top-0 h-full w-full rounded-md bg-gray-800/60" />
						<div className="absolute top-1/2 left-1/2 -m-2.5 z-20 animate-spin border-2 border-l-secondary border-t-secondary border-r-secondary border-b-transparent rounded-full w-5 h-5" />
					</>
				)}
			</div>
		</form>
	)
}

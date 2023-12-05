'use client'

import { Fragment, useEffect, useState } from 'react'
// @ts-expect-error
import { useFormState } from 'react-dom'

import { CheckCircleIcon } from '@heroicons/react/24/solid'

import { Dialog, Transition } from '@/components/headless-ui'

import Switch from '@/components/switch'
import handleSubmission from './handle-waitlist-submission'
import EarlyAccessButton from './early-access-button'

export default function WaitlistForm() {
	const [state, action] = useFormState(handleSubmission, null)
	const [isMessageOpen, setIsMessageOpen] = useState(false)

	useEffect(() => {
		if (state?.ok) {
			setIsMessageOpen(true)
		}
	}, [state])

	return (
		<form
			action={action}
			className="mt-5 flex items-center justify-center px-5"
		>
			<div>
				<div>
					<label htmlFor="fullName" className="text-sm font-medium">
						Full name
					</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						required
						className="w-full rounded-md border border-gray-300 text-sm focus:border-[#6B9080] focus:outline-none focus:ring-[#6B9080]"
					/>
				</div>
				<div className="mt-3">
					<label htmlFor="email" className="text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full rounded-md border border-gray-300 text-sm focus:border-[#6B9080] focus:outline-none focus:ring-[#6B9080]"
					/>
				</div>
				<div className="mt-3 flex items-center justify-between gap-4">
					<div className="flex flex-col justify-between">
						<label
							htmlFor="isPhotographer"
							className="text-sm font-medium"
						>
							Become a photographer?
						</label>
						<p className="text-xs text-gray-600">
							Create a photographer profile and find paid jobs
						</p>
					</div>
					<Switch
						id="isPhotographer"
						name="isPhotographer"
						className="flex-shrink-0 cursor-pointer"
					/>
				</div>
				<EarlyAccessButton />
				<Transition appear show={isMessageOpen} as={Fragment}>
					<Dialog
						as="div"
						onClose={() => setIsMessageOpen(false)}
						className="relative z-10 h-20 w-full max-w-md"
					>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black/25" />
						</Transition.Child>
						<div className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 overflow-y-auto p-1">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="h-min w-full transform overflow-hidden rounded-md border border-gray-300 bg-white p-2 shadow-sm transition-all">
									<div className="flex h-full w-full gap-2">
										<CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-[#556C62]" />
										<p className="text-sm text-gray-600">
											We&apos;ve added{' '}
											<span className="font-medium text-[#556C62]">
												{state?.email}
											</span>{' '}
											to our waitlist and we&apos;ll let
											you know when GoPhotos is ready.
										</p>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition>
			</div>
		</form>
	)
}

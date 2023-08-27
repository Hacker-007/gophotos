'use client'

import { useState } from 'react'

import {
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
} from '@radix-ui/react-popover'

import LoadingButton from '@/components/LoadingButton'
import Button from '@/components/Button'

export default function RequestQuoteButton() {
	const [isOpen, setIsOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const sendQuoteRequest = async () => {
		setIsLoading(true)
		await new Promise(resolve => setTimeout(resolve, 2000))
		setIsLoading(false)
	}

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button className="mt-2 w-full justify-center border border-black p-2 text-sm hover:bg-gray-100">
					Request quote
				</Button>
			</PopoverTrigger>
			<PopoverPortal>
				<PopoverContent
					side="bottom"
					align="end"
					className="mt-2 w-[var(--radix-popover-trigger-width)] rounded-md border border-gray-300 bg-white p-2 focus:outline-none"
				>
					<div>
						<p className="text-xs text-gray-600">
							Great! Consider adding some details about the job to
							get a more accurate quote from Bob Ross.
						</p>
						<div className="mt-2 flex flex-col justify-start">
							<label
								htmlFor="job-description"
								className="text-xs font-medium"
							>
								Job description
							</label>
							<textarea
								id="job-description"
								name="jobDescription"
								className="mt-1 rounded-md border border-gray-400 focus:border-black focus:outline-none focus:ring-0"
							/>
						</div>
						<Button className="mt-2 w-full justify-center bg-black p-2 text-sm text-white hover:bg-gray-900">
							Send request
						</Button>
					</div>
				</PopoverContent>
			</PopoverPortal>
		</Popover>
	)
}

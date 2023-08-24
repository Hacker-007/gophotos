'use client'

import { useState } from 'react'

import {
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
} from '@radix-ui/react-dialog'

import Button from '@/components/Button'

type SearchCriteria = {

}

export default function MoreFiltersButton() {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<DialogTrigger asChild>
				<Button
					leftIcon={<AdjustmentsVerticalIcon className="h-4 w-4" />}
					className="col-span-1 col-start-2 row-start-4 w-full justify-center self-end border border-gray-300 px-3 py-2 text-xs @md/filters:col-start-1 @md/filters:row-start-2 @xl/filters:w-40 @xl/filters:justify-self-start"
				>
					More filters
				</Button>
			</DialogTrigger>
			<DialogPortal>
				<DialogOverlay
					forceMount
					asChild
					className="fixed inset-0 bg-black/20"
				/>
				<DialogContent className="fixed bottom-0 left-0 max-h-min w-full overflow-y-auto">
					<div className="h-full w-full rounded-sm bg-white">
						
						<DialogClose className="w-full p-2">
							<div className="flex w-full items-center justify-center gap-x-1 rounded-md bg-black px-3 py-2 text-xs font-medium text-white">
								<MagnifyingGlassIcon className="h-4 w-4" />
								<p>Search</p>
							</div>
						</DialogClose>
					</div>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}

'use client'

import { useState } from 'react'

import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronUpIcon,
} from '@heroicons/react/24/outline'

import { Dialog, Disclosure } from '@/components/headless-ui'

import Button from '@/components/button'
import BadgeGroup from '@/components/badge-group'
import { useSyncedSearchFilters } from '@/context/synced-search-filter-context'

export default function AdditionalFilters() {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	return (
		<>
			<Button
				className="xl:hidden h-min row-start-1 self-end w-24 rounded-md border border-gray-600 px-2 py-1 text-sm"
				onClick={() => setIsDialogOpen(true)}
			>
				Filters
			</Button>
			<Dialog
				className="relative z-10"
				open={isDialogOpen}
				onClose={isOpen => setIsDialogOpen(isOpen)}
			>
				<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
				<Dialog.Panel className="fixed bottom-0 md:bottom-1/2 md:translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl w-screen rounded-t-md bg-white p-4">
					<div className="grid grid-cols-3 grid-rows-1">
						<Button
							onClick={() => setIsDialogOpen(false)}
							className="col-span-1 flex items-center gap-1 w-min rounded-full border border-gray-300 px-2 py-1 text-xs font-medium"
						>
							<ChevronLeftIcon className="h-3 w-3" />
							Back
						</Button>
						<Dialog.Title className="col-span-1 text-center text-lg font-medium">
							Filters
						</Dialog.Title>
					</div>
					<FilterContent className="mt-5 flex flex-col gap-2" />
				</Dialog.Panel>
			</Dialog>
			<div className="hidden xl:block row-start-2 h-full col-start-1 w-[19rem]">
				<div className="sticky top-10 h-min w-full">
					<h3 className="text-lg font-medium">Filters</h3>
					<FilterContent className="mt-5 flex flex-col gap-2" />
				</div>
			</div>
		</>
	)
}

type FilterContentProps = {
	className?: string
}

function FilterContent({ className }: FilterContentProps) {
	const { getQueryValue, updateURL } = useSyncedSearchFilters()

	return (
		<div className={className}>
			<Disclosure defaultOpen>
				<Disclosure.Button className="flex w-full items-center justify-between">
					{({ open }) => (
						<>
							<span className="text-sm font-medium">Schools</span>
							{open ? (
								<ChevronUpIcon className="h-4 w-4 text-gray-600" />
							) : (
								<ChevronDownIcon className="h-4 w-4 text-gray-600" />
							)}
						</>
					)}
				</Disclosure.Button>
				<Disclosure.Panel className="w-full">
					<BadgeGroup
						items={[
							'Massachusetts Institute of Technology',
							'Boston University',
							'University of San Franscisco',
							'University of Southern California'
						]}
						defaultItems={getQueryValue('schools[]')}
						onChange={items => {
							updateURL('schools[]', () => items)
						}}
					/>
				</Disclosure.Panel>
			</Disclosure>
			<div className="h-[1px] w-full space-y-1 bg-gray-200" />
			<Disclosure defaultOpen>
				<Disclosure.Button className="mt-2 flex w-full items-center justify-between">
					{({ open }) => (
						<>
							<span className="text-sm font-medium">Skills</span>
							{open ? (
								<ChevronUpIcon className="h-4 w-4 text-gray-600" />
							) : (
								<ChevronDownIcon className="h-4 w-4 text-gray-600" />
							)}
						</>
					)}
				</Disclosure.Button>
				<Disclosure.Panel className="w-full">
					<BadgeGroup
						items={[
							'Portrait',
							'Candid',
							'Corporate / University',
							'Sports',
							'Journalism',
							'Graduation',
							'Headshots',
							'Concert',
							'Fasion',
							'Outdoor',
							'Videography',
						]}
						defaultItems={getQueryValue('skills[]')}
						onChange={items => {
							updateURL('skills[]', () => items)
						}}
					/>
				</Disclosure.Panel>
			</Disclosure>
			{/* <div className="h-[1px] w-full space-y-1 bg-gray-200" />
			<Disclosure defaultOpen>
				<Disclosure.Button className="flex w-full items-center justify-between">
					{({ open }) => (
						<>
							<span className="text-sm font-medium">Ratings</span>
							{open ? (
								<ChevronUpIcon className="h-4 w-4 text-gray-600" />
							) : (
								<ChevronDownIcon className="h-4 w-4 text-gray-600" />
							)}
						</>
					)}
				</Disclosure.Button>
				<Disclosure.Panel className="w-full">
					<BadgeGroup
						items={['NEW', '1', '2', '3', '4', '5']}
						defaultItems={getQueryValue('ratings[]')}
						onChange={items => {
							updateURL('ratings[]', () => items)
						}}
					/>
				</Disclosure.Panel>
			</Disclosure> */}
		</div>
	)
}

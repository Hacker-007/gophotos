'use client'

import classNames from '@/utils/classnames'
import { useSyncedSearchFilters } from '@/context/synced-search-filter-context'

import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from '@heroicons/react/24/outline'

import Button from '@/components/button'

type PaginationControlsProps = {
	currentPage: number
	maxPageCount: number
	className?: string
}

export default function PaginationControls({
	currentPage,
	maxPageCount,
	className,
}: PaginationControlsProps) {
	const { updateURL } = useSyncedSearchFilters()

	return (
		<div className={classNames('grid grid-cols-3 grid-rows-1', className)}>
			<Button
				onClick={() => updateURL('page', _ => currentPage - 1)}
				className={classNames(
					'justify-self-start self-center col-start-1 flex items-center gap-1 rounded-md px-2 py-1 text-sm text-black hover:bg-accent hover:text-secondary',
					currentPage <= 1 && 'hidden'
				)}
			>
				<ArrowLongLeftIcon className="h-4 w-4" />
				<span>Previous</span>
			</Button>
			<p className="text-sm place-self-center col-start-2">
				<span className="font-medium">{currentPage}</span> of{' '}
				<span className="font-medium">{maxPageCount}</span>
			</p>
			<Button
				onClick={() => updateURL('page', _ => currentPage + 1)}
				className={classNames(
					'col-start-3 justify-self-end self-center flex items-center gap-1 rounded-md px-2 py-1 text-sm text-black hover:bg-accent hover:text-secondary',
					currentPage >= maxPageCount && 'hidden'
				)}
			>
				<span>Next</span>
				<ArrowLongRightIcon className="h-4 w-4" />
			</Button>
		</div>
	)
}

import { cn } from '@/utils/cn'
import { PlusIcon } from '@heroicons/react/20/solid'

type SearchProps = {
	className?: string
}

export default function SearchArea({ className }: SearchProps) {
	return (
		<div className={cn('@container', 'px-9', className)}>
			<div className="grid @md:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5 @3xl:grid-cols-6">
				<div className="mt-2 @md:col-span-2 @md:mt-0 @md:pr-2 @xl:col-span-2">
					<label
						htmlFor="location"
						className="sm text-sm font-medium"
					>
						Location
					</label>
					<input
						id="location"
						name="location"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="@xl:col-span-2">
					<label htmlFor="dateRange" className="text-sm font-medium">
						Date
					</label>
					<input
						id="dateRange"
						name="dateRange"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="mt-3 @md:col-span-full @md:row-start-2 @lg:col-span-1 @lg:col-start-4 @lg:row-start-1 @lg:mt-6 @lg:pl-2 @xl:col-start-5 @3xl:col-start-5 @3xl:col-span-2">
					<button className="w-full rounded-md bg-black px-3 py-2 text-sm font-medium text-white">
						Search
					</button>
				</div>
			</div>
			{/* <div className="flex justify-end">
				<FilterDropdown />
			</div> */}
		</div>
	)
}

function FilterDropdown() {
	return (
		<button className="flex items-center justify-center gap-1 py-1 text-sm font-medium text-gray-800 hover:cursor-pointer md:text-base">
			<span>
				<PlusIcon className="h-4 w-4" />
			</span>
			Filter
		</button>
	)
}

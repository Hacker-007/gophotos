import { cn } from '@/utils/cn'
import {Button} from '@nextui-org/react'
import Link from 'next/link'

type SearchProps = {
	className?: string
}

export default function SearchArea({
	className,
}: SearchProps) {
	return (
		<div className={cn('@container', className)}>
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
						defaultValue="Boston, MA + Cambridge, MA"
						readOnly
					/>
				</div>
				<div className="mt-3 @md:col-span-full @md:row-start-2 @lg:col-span-1 @lg:col-start-3 @lg:row-start-1 @lg:mt-6 @lg:pl-2 @xl:col-start-3 @3xl:col-span-2 @3xl:col-start-4">
					<Button as={Link} href="/discover" className="w-full rounded-md bg-black px-3 py-2 text-sm font-medium text-white">
						Search
					</Button>
				</div>
			</div>
		</div>
	)
}


{/* <div className="@xl:col-span-2">
	<label htmlFor="dateRange" className="text-sm font-medium">
		Date
	</label>
	<input
		id="dateRange"
		name="dateRange"
		className="w-full rounded-md border border-gray-200 text-sm outline-none"
	/>
</div> */}
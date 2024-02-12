import SearchArea from './search-area'
import FilterDropdown from './filter-dialog'
import PhotographerResults from './photographer-results'

export default function DiscoverPage() {
	return (
		<div >
			<div className="border-b border-gray-200 shadow-sm w-full mb-10">
				<SearchArea className='pb-3 px-20'/>
			</div>
			{/* <div className="mt-2 flex justify-end">
				<FilterDropdown />
			</div> */}
			<PhotographerResults className="mt-4 px-20" />
		</div>
	)
}

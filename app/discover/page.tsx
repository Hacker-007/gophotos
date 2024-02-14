import SearchArea from './search-area'
import FilterDropdown from './filter-dialog'
import PhotographerResults from './photographer-results'

export default function DiscoverPage() {
	return (
		<div className='bg-[#f4f4f4]'>
			<div className="border-b border-gray-200 shadow-sm w-full pb-3 px-20 bg-white">
				<SearchArea />
				<p className='text-sm text-gray-600 pt-3 italic'> Currently available in Boston, MA & Cambridge, MA areas</p>
			</div>
			{/* <div className="mt-2 flex justify-end">
				<FilterDropdown />
			</div> */}
			<PhotographerResults className="mt-6 px-20 pb-5" />
		</div>
	)
}

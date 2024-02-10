// import SearchArea from './search-area'
// import FilterDropdown from './filter-dialog'
import PhotographerResults from './photographer-results'

export default function DiscoverPage() {
	return (
		<div className="px-3 sm:px-5 md:px-14">
			{/* <SearchArea />
			<div className="mt-2 flex justify-end">
				<FilterDropdown />
			</div> */}
			<PhotographerResults className="mt-4" />
		</div>
	)
}

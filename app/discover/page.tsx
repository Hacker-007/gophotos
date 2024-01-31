import SearchArea from './search-area'
import FilterTags from './filter-tags'
import PhotographerResults from './photographer-results'

export default function DiscoverPage() {
	return (
		<div className='px-3 sm:px-5 md:px-7 space-y-4'>
			<SearchArea />
			<FilterTags />
			<PhotographerResults />
		</div>
	)
}

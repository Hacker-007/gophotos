import NavigationLink from '@/components/NavigationLink'

export default function ContractLinks() {
	return (
		<div className="flex w-full space-x-4">
			<div>
				<NavigationLink
					href="/contracts/negotiations"
					routeSegment="negotiations"
					layoutId="contracts-selected-link"
					className='text-xs font-medium'
					selectedBarClassName='-bottom-0'
				>
					Negotiation History
				</NavigationLink>
			</div>
			<div>
				<NavigationLink
					href="/contracts/chat"
					routeSegment="chat"
					layoutId="contracts-selected-link"
					className='text-xs font-medium'
					selectedBarClassName='-bottom-0'
				>
					Chat
				</NavigationLink>
			</div>
			<div>
				<NavigationLink
					href="/contracts/pictures"
					routeSegment="pictures"
					layoutId="contracts-selected-link"
					className='text-xs font-medium'
					selectedBarClassName='-bottom-0'
				>
					Pictures
				</NavigationLink>
			</div>
		</div>
	)
}
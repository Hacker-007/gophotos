import BadgeGroup from '@/components/BadgeGroup'
import Input from '@/components/Input'

import PortfolioPreview from './PortfolioPreview'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Home() {
	return (
		<main>
			<div className="w-full overflow-hidden">
				<div className="grid w-full grid-cols-[repeat(auto-fit,minmax(224px,1fr))] gap-3">
					<Input
						className="pl-7"
						icon={
							<MagnifyingGlassIcon
								strokeWidth={2}
								className="h-4 w-4"
							/>
						}
						label="Location"
						name="location"
					/>
					<Input
						className="pl-7"
						icon={
							<MagnifyingGlassIcon
								strokeWidth={2}
								className="h-4 w-4"
							/>
						}
						label="Price"
						name="price"
					/>
					<Input
						className="pl-7"
						icon={
							<MagnifyingGlassIcon
								strokeWidth={2}
								className="h-4 w-4"
							/>
						}
						label="Date and time"
						name="time"
					/>
				</div>
				<BadgeGroup
					className="mt-4 flex space-x-3 overflow-x-auto"
					items={[
						'Indoor',
						'Outdoor',
						'Bright Lights',
						'Dim Lights',
						'Group',
						'Headshots',
					]}
				/>
				<p className="mt-2 text-xs font-medium">showing 91 results</p>
				<div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] justify-items-center gap-3">
					<PortfolioPreview
						photographerId="1"
						name="Bob Ross"
						location="Cambridge, MA"
						estimatedPriceRange={[150, 200]}
						rating={4.7}
						numberOfReviews={1027}
					/>
					<PortfolioPreview
						photographerId="2"
						name="Revanth Pothukuchi"
						location="Bothell, WA"
						estimatedPriceRange={[150, 200]}
						rating={5.0}
						numberOfReviews={4129}
					/>
					<PortfolioPreview
						photographerId="3"
						name="Qudus Shittu"
						location="Cambridge, MA"
						estimatedPriceRange={[150, 200]}
						rating={4.7}
						numberOfReviews={1027}
					/>
					<PortfolioPreview
						photographerId="4"
						name="Bob Ross"
						location="Cambridge, MA"
						estimatedPriceRange={[150, 200]}
						rating={4.7}
						numberOfReviews={1027}
					/>
				</div>
			</div>
		</main>
	)
}

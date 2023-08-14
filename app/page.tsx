import BadgeGroup from '@/components/BadgeGroup'
import Input from '@/components/Input'

import PortfolioPreview from './PortfolioPreview'

export default function Home() {
	return (
		<main>
			<div className="w-full overflow-hidden">
				<div className="grid w-full grid-cols-[repeat(auto-fit,minmax(224px,1fr))] gap-3">
					<Input label="Location" name="location" />
					<Input label="Price" name="price" />
					<Input label="Date and time" name="time" />
				</div>
				<BadgeGroup
					className="mt-4 flex space-x-3 overflow-x-auto px-3 py-2"
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
						hourlyRate="$150"
						rating={4.7}
						numberOfReviews={1027}
					/>
					<PortfolioPreview
						photographerId="2"
						name="Revanth Pothukuchi"
						location="Bothell, WA"
						hourlyRate="$1500"
						rating={5.0}
						numberOfReviews={4129}
					/>
					<PortfolioPreview
						photographerId="3"
						name="Qudus Shittu"
						location="Cambridge, MA"
						hourlyRate="$150"
						rating={4.7}
						numberOfReviews={1027}
					/>
					<PortfolioPreview
						photographerId="4"
						name="Bob Ross"
						location="Cambridge, MA"
						hourlyRate="$150"
						rating={4.7}
						numberOfReviews={1027}
					/>
				</div>
			</div>
		</main>
	)
}

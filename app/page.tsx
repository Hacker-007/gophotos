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
					<Input label="Date and Time" name="time" />
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
				<div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] justify-items-center gap-3">
					<PortfolioPreview />
					<PortfolioPreview />
					<PortfolioPreview />
					<PortfolioPreview />
				</div>
			</div>
		</main>
	)
}

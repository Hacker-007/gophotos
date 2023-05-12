import { PageWithLayout } from '@/components/layouts/pageTypes'
import { RadioGroupItem } from '@/components/RadioGroupItem'

import { RadioGroup } from '@radix-ui/react-radio-group'

const WaitlistPage: PageWithLayout = () => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<p className="text-lg text-gray-600">
				Are you a photographer or looking for one?
			</p>
			<RadioGroup className="mt-7 flex w-1/2 flex-col items-center">
				<RadioGroupItem
					className="h-16 w-full max-w-sm"
					value="photographer"
				>
					<div className="h-full p-2">
						<div className="flex flex-col items-start">
							<p className="font-medium">Photographer</p>
							<p className="text-xs">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</div>
				</RadioGroupItem>
				<RadioGroupItem
					className="mt-5 h-16 w-full max-w-sm"
					value="customer"
				>
					<div className="h-full p-2">
						<div className="flex flex-col items-start">
							<p className="font-medium">
								Looking for a photographer
							</p>
							<p className="text-xs">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</div>
				</RadioGroupItem>
			</RadioGroup>
			<div className="w-1/2">
				<p className="float-right text-sm">Question 1 of 3</p>
			</div>
		</div>
	)
}

WaitlistPage.layoutKey = 'fullscreenBack'
export default WaitlistPage

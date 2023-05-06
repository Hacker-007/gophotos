import { PageWithLayout } from '@/components/layouts/pageTypes'
import { useState } from 'react'

const WaitlistPage: PageWithLayout = () => {
	const [currentStep, setCurrentStep] = useState(0)

	return (
		<div className="grid h-full w-full content-center justify-center">
			<div className="flex space-x-2">
				<div
					className={`h-1.5 w-20 rounded-full ${
						currentStep >= 0 ? 'bg-black/80' : 'bg-black/30'
					}`}
				/>
				<div
					className={`h-1.5 w-20 rounded-full ${
						currentStep >= 1 ? 'bg-black/80' : 'bg-black/30'
					}`}
				/>
				<div
					className={`h-1.5 w-20 rounded-full ${
						currentStep >= 2 ? 'bg-black/80' : 'bg-black/30'
					}`}
				/>
				<div
					className={`h-1.5 w-20 rounded-full ${
						currentStep >= 3 ? 'bg-black/80' : 'bg-black/30'
					}`}
				/>
			</div>
		</div>
	)
}

WaitlistPage.layoutKey = 'fullscreenBack'
export default WaitlistPage

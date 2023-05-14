import { PageWithLayout } from '@/components/layouts/pageTypes'
import CategoryQuestion from '@/components/questions/categoryQuestion'

import { useState } from 'react'

const WaitlistPage: PageWithLayout = () => {
	const [step, setStep] = useState(1)

	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			{step === 1 && <CategoryQuestion questionNumber={step} />}
			{step === 2 && <DummyQuestion questionNumber={step} />}
			{step === 3 && <DummyQuestion questionNumber={step} />}
		</div>
	)
}

type DummyQuestionProps = {
	questionNumber: number
}

function DummyQuestion({ questionNumber }: DummyQuestionProps) {
	return (
		<>
			<p className="text-lg text-gray-600">This is a dummy question.</p>
			<form className="w-1/2">
				<div className="mt-1 w-full max-w-sm text-sm">
					<p className="float-left mt-2 font-light">
						Question{' '}
						<span className="font-semibold">{questionNumber}</span>{' '}
						of <span className="font-semibold">3</span>
					</p>
					<button className="float-right flex items-center rounded-md p-2 font-semibold hover:bg-gray-200">
						<span className="pr-1">Next</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-5 w-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</form>
		</>
	)
}

WaitlistPage.layoutKey = 'fullscreenBack'
export default WaitlistPage

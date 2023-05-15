import { PageWithLayout } from '@/components/layouts/pageTypes'
import CategoryQuestion from '@/components/questions/CategoryQuestion'
import PhotographerQuestion from '@/components/questions/PhotographerQuestion'

import { useState } from 'react'
import { z } from 'zod'

const WaitlistResponse = z.discriminatedUnion('category', [
	z.object({
		category: z.literal('photographer'),
		name: z.string(),
	}),
	z.object({
		category: z.literal('customer'),
	}),
])

type WaitlistResponseSchema = z.infer<typeof WaitlistResponse>

const WaitlistPage: PageWithLayout = () => {
	const [step, setStep] = useState(1)
	const [value, setValue] = useState<WaitlistResponseSchema | undefined>(
		undefined
	)

	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			{step === 1 && (
				<CategoryQuestion
					onNext={({ category }) => {
						if (category === 'photographer') {
							setValue({
								category: 'photographer',
								name: '',
							})
						} else {
							setValue({
								category: 'customer',
							})
						}

						setStep(currentStep => currentStep + 1)
					}}
					questionNumber={step}
				/>
			)}
			{step === 2 && value?.category === 'photographer' && (
				<PhotographerQuestion
					onBack={() => setStep(currentStep => currentStep - 1)}
					onNext={({ name }) => {
						setValue(currentValue => ({
							category: 'photographer',
							name,
							...currentValue,
						}))

						setStep(currentStep => currentStep + 1)
					}}
					questionNumber={step}
				/>
			)}
			{step === 2 && value?.category === 'customer' && (
				<DummyQuestion questionNumber={step} />
			)}
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
			<form className="inline-flex w-1/2 flex-col items-center">
				<div className="mt-5 flex w-full max-w-sm justify-between border-t border-gray-900/10 text-sm">
					<button className="flex items-center rounded-md p-2 font-semibold hover:bg-gray-200">
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
								d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
							/>
						</svg>

						<span className="pr-1">Back</span>
					</button>
					<p className="mt-2 font-light">
						Question{' '}
						<span className="font-semibold">{questionNumber}</span>{' '}
						of <span className="font-semibold">3</span>
					</p>
					<button className="flex items-center rounded-md p-2 font-semibold hover:bg-gray-200">
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

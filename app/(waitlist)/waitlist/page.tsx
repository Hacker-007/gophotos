'use client'

import { useState } from 'react'

import { AnimatePresence } from 'framer-motion'

import CategoryQuestion from '@/components/questions/CategoryQuestion'
import PhotographerQuestion, {
	QuestionSchema as PhotographerQuestionSchema,
} from '@/components/questions/PhotographerQuestion'
import CustomerQuestion, {
	QuestionSchema as CustomerQuestionSchema,
} from '@/components/questions/CustomerQuestion'
import PhotographerInterest from '@/components/questions/PhotographerInterest'
import CustomerInterest from '@/components/questions/CustomerInterest'

type WaitlistResponse =
	| ({
			category: 'photographer'
	  } & PhotographerQuestionSchema)
	| ({
			category: 'customer'
	  } & CustomerQuestionSchema)

export default function WaitlistPage() {
	const [step, setStep] = useState(1)
	const [response, setResponse] = useState<WaitlistResponse | undefined>(
		undefined
	)

	return (
		<div className="h-full w-full">
			<AnimatePresence>
				{step === 1 && (
					<CategoryQuestion
						onNext={({ category }) => {
							if (category === 'photographer') {
								setResponse({
									category: 'photographer',
									name: '',
									email: '',
									experience: '<1',
									cameraUsed: '',
									marketingMethod: 'linkedin',
									isStudent: 'false',
								})
							} else {
								setResponse({
									category: 'customer',
									name: '',
									email: '',
									hiringFrequency: '0',
									importantFactor: 'price',
									potentialCustomer: 'yes',
									marketingMethod: 'linkedin',
								})
							}

							setStep(currentStep => currentStep + 1)
						}}
						questionNumber={step}
					/>
				)}
				{step === 2 && response?.category === 'photographer' && (
					<PhotographerQuestion
						onBack={() => setStep(currentStep => currentStep - 1)}
						onNext={response => {
							setResponse({
								category: 'photographer',
								...response,
							})

							return new Promise(resolve =>
								setTimeout(() => {
									console.log(response)
									setStep(currentStep => currentStep + 1)
									return resolve()
								}, 1000)
							)
						}}
						questionNumber={step}
					/>
				)}
				{step === 2 && response?.category === 'customer' && (
					<CustomerQuestion
						onBack={() => setStep(currentStep => currentStep - 1)}
						onNext={response => {
							setResponse({
								category: 'customer',
								...response,
							})

							return new Promise(resolve =>
								setTimeout(() => {
									console.log(response)
									setStep(currentStep => currentStep + 1)
									return resolve()
								}, 1000)
							)
						}}
						questionNumber={step}
					/>
				)}
				{step === 3 && response?.category === 'photographer' && (
					<PhotographerInterest />
				)}
				{step === 3 && response?.category === 'customer' && (
					<CustomerInterest />
				)}
			</AnimatePresence>
		</div>
	)
}

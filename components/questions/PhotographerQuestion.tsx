import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const questionSchema = z.object({
	name: z.string(),
})

type QuestionSchema = z.infer<typeof questionSchema>

type PhotographerQuestionProps = {
	questionNumber: number
	onBack?: () => void
	onNext: (values: QuestionSchema) => void
}

export default function PhotographerQuestion({
	questionNumber,
	onBack,
	onNext,
}: PhotographerQuestionProps) {
	const { handleSubmit, register } = useForm<QuestionSchema>({
		resolver: zodResolver(questionSchema),
	})

	const onSubmit: SubmitHandler<QuestionSchema> = data => {
		onNext(data)
	}

	return (
		<>
			<p className="text-lg text-gray-600">Intro prompt.</p>
			<form
				action="/"
				className="mt-7 inline-flex w-1/2 flex-col items-center"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="mt-5 w-full max-w-sm border-t border-gray-900/10"></div>
				<div className="mt-1 flex w-full max-w-sm justify-between text-sm">
					{onBack && (
						<button
							onClick={onBack}
							className="flex items-center rounded-md p-2 font-semibold hover:bg-gray-200"
						>
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
					)}
					<p className="mt-2 font-light">
						Question{' '}
						<span className="font-semibold">{questionNumber}</span>{' '}
						of <span className="font-semibold">3</span>
					</p>
					<button
						type="submit"
						className="flex items-center rounded-md p-2 font-semibold hover:bg-gray-200"
					>
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

import {
	type SubmitHandler,
	useForm,
	SubmitErrorHandler,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { RadioGroup, RadioGroupItem } from '../RadioGroup'

type CategoryQuestionProps = {
	questionNumber: number
}

const questionSchema = z.object({
	category: z.enum(['photographer', 'customer']),
})

type QuestionSchema = z.infer<typeof questionSchema>

export default function CategoryQuestion({
	questionNumber,
}: CategoryQuestionProps) {
	const { handleSubmit, register } = useForm<QuestionSchema>({
		resolver: zodResolver(questionSchema),
	})

	const onSubmit: SubmitHandler<QuestionSchema> = data => {
		console.log(data)
	}

	const onError: SubmitErrorHandler<QuestionSchema> = (errors, e) => {
		console.log(errors)
	}

	return (
		<>
			<p className="text-lg text-gray-600">
				Are you a photographer or looking for one?
			</p>
			<form
				action="/"
				className="mt-7 inline-flex w-1/2 flex-col items-center"
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<RadioGroup label="Category selection">
					<RadioGroupItem
						{...register('category')}
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
					<RadioGroupItem {...register('category')} value="customer">
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
				<div className="mt-1 w-full max-w-sm text-sm">
					<p className="float-left mt-2 font-light">
						Question{' '}
						<span className="font-semibold">{questionNumber}</span>{' '}
						of <span className="font-semibold">3</span>
					</p>
					<button
						type="submit"
						className="float-right flex items-center rounded-md p-2 font-semibold hover:bg-gray-200"
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

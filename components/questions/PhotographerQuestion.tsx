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
				<form>
					<div className="space-y-12">
						<div className="pb-12">
							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										First name
									</label>
									<div className="mt-2">
										<input
											// type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Last name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-4">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="country"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Country
									</label>
									<div className="mt-2">
										<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										>
											<option>United States</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
									</div>
								</div>
								<div className="col-span-full">
									<label
										htmlFor="street-address"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Street address
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="street-address"
											id="street-address"
											autoComplete="street-address"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="city"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										City
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="city"
											id="city"
											autoComplete="address-level2"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="region"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										State / Province
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="region"
											id="region"
											autoComplete="address-level1"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="postal-code"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										ZIP / Postal code
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="postal-code"
											id="postal-code"
											autoComplete="postal-code"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div className="border-t border-gray-900/10 mt-5 flex w-full max-w-sm justify-between text-sm">
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

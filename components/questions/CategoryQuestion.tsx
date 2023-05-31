'use client'

import * as z from 'zod'

import { motion } from 'framer-motion'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/Form'

const questionSchema = z.object({
	category: z.enum(['photographer', 'customer'], {
		required_error: 'a category is required',
	}),
})

type QuestionSchema = z.infer<typeof questionSchema>

type CategoryQuestionProps = {
	questionNumber: number
	onBack?: () => void
	onNext: (values: QuestionSchema) => void
}

export default function CategoryQuestion({
	questionNumber,
	onBack,
	onNext,
}: CategoryQuestionProps) {
	const form = useForm<QuestionSchema>({
		resolver: zodResolver(questionSchema),
	})

	const onSubmit: SubmitHandler<QuestionSchema> = data => {
		onNext(data)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="flex h-full w-full flex-col items-center justify-center"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="inline-flex w-1/2 flex-col items-center"
				>
					<p className="mb-7 text-gray-600">
						Are you a photographer or looking for one?
					</p>
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem className="w-full max-w-sm">
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex w-full flex-col items-center space-y-5"
									>
										<FormItem className="w-full">
											<FormControl>
												<RadioGroupItem
													className="hover:cursor-pointer"
													value="photographer"
												>
													<div className="h-full p-2">
														<div className="flex flex-col items-start">
															<p className="font-medium">
																Photographer
															</p>
															<p className="text-xs">
																Lorem ipsum
																dolor sit amet
																consectetur.
															</p>
														</div>
													</div>
												</RadioGroupItem>
											</FormControl>
										</FormItem>
										<FormItem className="w-full">
											<FormControl>
												<RadioGroupItem
													className="hover:cursor-pointer"
													value="customer"
												>
													<div className="h-full p-2">
														<div className="flex flex-col items-start">
															<p className="font-medium">
																Looking for a
																photographer
															</p>
															<p className="text-xs">
																Lorem ipsum
																dolor sit amet
																consectetur.
															</p>
														</div>
													</div>
												</RadioGroupItem>
											</FormControl>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
							<span className="font-semibold">
								{questionNumber}
							</span>{' '}
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
			</Form>
		</motion.div>
	)
}

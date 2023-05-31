'use client'

import * as z from 'zod'

import { motion } from 'framer-motion'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/Form'
import { MultiSelect } from '../ui/MultiSelect'
import { Checkbox } from '../ui/Checkbox'

const questionSchema = z.object({
	name: z.string(),
})

type QuestionSchema = z.infer<typeof questionSchema>

type PhotographerQuestionProps = {
	questionNumber: number
	onBack?: () => void
	onNext: (values: QuestionSchema) => void
}

const items = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
]

export default function PhotographerQuestion({
	questionNumber,
	onBack,
	onNext,
}: PhotographerQuestionProps) {
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




					{/* <MultiSelect items={items} /> */}
					<Checkbox value="test" />
					
					
					
					
					
					
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

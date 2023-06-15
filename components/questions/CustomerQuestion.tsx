'use client'

import * as z from 'zod'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/Form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/Select'
import { Input } from '@/components/ui/Input'

const questionSchema = z.object({
	name: z.string().min(1, 'Required'),
	email: z.string().email(),
	universityAffiliation: z.string().optional(),
	hiringFrequency: z.enum(['0', '1-4', '5-9', '10-19', '20+']),
	importantFactor: z.enum(['price', 'experience', 'style', 'other']),
	otherFactorDescription: z.string().min(1, 'Required').optional(),
	potentialCustomer: z.enum(['yes', 'maybe', 'no']),
	marketingMethod: z.enum([
		'linkedin',
		'instagram',
		'direct',
		'family',
		'university',
		'other',
	]),
	otherMethodDescription: z.string().min(1, 'Required').optional(),
})

export type QuestionSchema = z.infer<typeof questionSchema>

type CustomerQuestionProps = {
	questionNumber: number
	onBack?: () => void
	onNext: (values: QuestionSchema) => Promise<void>
}

export default function CustomerQuestion({
	questionNumber,
	onBack,
	onNext,
}: CustomerQuestionProps) {
	const [loading, setLoading] = useState(false)
	const form = useForm<QuestionSchema>({
		resolver: zodResolver(questionSchema),
	})

	const watchFactor = form.watch('importantFactor')
	const watchMethod = form.watch('marketingMethod')
	useEffect(() => {
		if (watchFactor === 'other') {
			form.register('otherFactorDescription')
		} else {
			form.unregister('otherFactorDescription')
		}

		if (watchMethod === 'other') {
			form.register('otherMethodDescription')
		} else {
			form.unregister('otherMethodDescription')
		}
	}, [form, watchFactor, watchMethod])

	const onSubmit: SubmitHandler<QuestionSchema> = async data => {
		setLoading(true)
		await onNext(data)
		setLoading(false)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className="flex h-full w-full flex-col items-center justify-center"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="relative flex w-full flex-col items-center justify-center md:w-1/2"
				>
					{loading && (
						<div className="absolute z-10 flex h-full w-full max-w-sm items-center justify-center rounded-md bg-gray-400/50">
							<div className="square-loader"></div>
						</div>
					)}
					<p className="mb-7 text-gray-600">?</p>
					<div className="flex h-4/5 w-full flex-col items-center space-y-2 overflow-auto md:h-full">
						<div className="grid w-full max-w-sm grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-2">
							<FormField
								control={undefined}
								name="name"
								render={() => (
									<div className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											Name
										</FormLabel>
										<Input
											className="h-10 w-full"
											placeholder="Name"
											{...form.register('name')}
										/>
										<FormMessage />
									</div>
								)}
							/>
							<FormField
								control={undefined}
								name="email"
								render={() => (
									<div className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											Email
										</FormLabel>
										<Input
											id="email"
											className="h-10 w-full"
											placeholder="Email"
											{...form.register('email')}
										/>
										<FormMessage />
									</div>
								)}
							/>
						</div>
						<FormField
							control={undefined}
							name="universityAffiliation"
							render={() => (
								<div className="w-full max-w-sm">
									<FormLabel className="pl-3 text-sm font-medium">
										University Affiliation{' '}
										<span className="text-xs font-normal">
											(optional)
										</span>
									</FormLabel>
									<Input
										className="h-10 w-full"
										placeholder="University"
										{...form.register(
											'universityAffiliation'
										)}
									/>
									<FormMessage />
								</div>
							)}
						/>
						<FormField
							control={form.control}
							name="hiringFrequency"
							render={({ field }) => (
								<div className="w-full max-w-sm">
									<FormItem className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											Hiring Frequency
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger>
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="0">
													Never hired before
												</SelectItem>
												<SelectItem value="1-4">
													1 to 4 times
												</SelectItem>
												<SelectItem value="5-9">
													5 to 9 times
												</SelectItem>
												<SelectItem value="10-19">
													10 to 19 times
												</SelectItem>
												<SelectItem value="20+">
													20 times or more
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						<FormField
							control={form.control}
							name="importantFactor"
							render={({ field }) => (
								<div className="w-full max-w-sm">
									<FormItem className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											Most important factor when hiring
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger>
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="price">
													Price
												</SelectItem>
												<SelectItem value="experience">
													Experience
												</SelectItem>
												<SelectItem value="style">
													Style
												</SelectItem>
												<SelectItem value="other">
													Other
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						{watchFactor === 'other' && (
							<FormField
								control={undefined}
								name="otherFactorDescription"
								render={() => (
									<div className="w-full max-w-sm">
										<FormLabel className="pl-3 text-sm font-medium">
											Describe factor
										</FormLabel>
										<Input
											className="h-10 w-full"
											placeholder="Factor"
											{...form.register(
												'otherFactorDescription'
											)}
										/>
										<FormMessage />
									</div>
								)}
							/>
						)}
						<FormField
							control={form.control}
							name="potentialCustomer"
							render={({ field }) => (
								<div className="w-full max-w-sm">
									<FormItem className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											Do you plan to use this site to hire
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger ref={field.ref}>
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="yes">
													Yes
												</SelectItem>
												<SelectItem value="maybe">
													Maybe
												</SelectItem>
												<SelectItem value="no">
													No
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						<FormField
							control={form.control}
							name="marketingMethod"
							render={({ field }) => (
								<div className="w-full max-w-sm">
									<FormItem className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											How did you find us?
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger>
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="linkedin">
													LinkedIn
												</SelectItem>
												<SelectItem value="instagram">
													Instagram
												</SelectItem>
												<SelectItem value="direct">
													Contacted directly
												</SelectItem>
												<SelectItem value="family">
													Family/friend
												</SelectItem>
												<SelectItem value="university">
													University posting
												</SelectItem>
												<SelectItem value="other">
													Other
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						{watchMethod === 'other' && (
							<FormField
								control={undefined}
								name="otherMethodDescription"
								render={() => (
									<div className="w-full max-w-sm">
										<FormLabel className="pl-3 text-sm font-medium">
											Please specify
										</FormLabel>
										<Input
											className="h-10 w-full"
											placeholder="Method"
											{...form.register(
												'otherMethodDescription'
											)}
										/>
										<FormMessage />
									</div>
								)}
							/>
						)}
					</div>
					<div className="mt-5 w-full max-w-sm border-t border-gray-900/10"></div>
					<div className="mt-1 grid w-full max-w-sm grid-cols-[75px_auto_90px] text-sm md:grid-cols-3">
						{onBack && (
							<div className="flex justify-start">
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
							</div>
						)}
						<div className="col-start-2  flex flex-col items-center justify-center">
							<p className="font-light">
								Question{' '}
								<span className="font-semibold">
									{questionNumber}
								</span>{' '}
								of <span className="font-semibold">3</span>
							</p>
						</div>
						<div className="flex justify-end">
							<button
								type="submit"
								className="flex items-center rounded-md p-2 font-semibold hover:bg-gray-200"
							>
								<span className="pr-1">Submit</span>
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
					</div>
				</form>
			</Form>
		</motion.div>
	)
}

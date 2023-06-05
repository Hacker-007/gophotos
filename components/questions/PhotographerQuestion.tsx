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
	instagramHandle: z.string().optional(),
	experience: z.enum(['<1', '1-3', '3-5', '>5']),
	isStudent: z.enum(['true', 'false']),
	universityAffiliation: z.string().min(1, 'Required').optional(),
	cameraUsed: z.string().min(1, 'Required'),
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

type PhotographerQuestionProps = {
	questionNumber: number
	onBack?: () => void
	onNext: (values: QuestionSchema) => Promise<void>
}

export default function PhotographerQuestion({
	questionNumber,
	onBack,
	onNext,
}: PhotographerQuestionProps) {
	const [loading, setLoading] = useState(false)
	const form = useForm<QuestionSchema>({
		resolver: zodResolver(questionSchema),
	})

	const watchIsStudent = form.watch('isStudent')
	const watchMethod = form.watch('marketingMethod')
	useEffect(() => {
		if (watchIsStudent === 'true') {
			form.register('universityAffiliation')
		} else {
			form.unregister('universityAffiliation')
		}

		if (watchMethod === 'other') {
			form.register('otherMethodDescription')
		} else {
			form.unregister('otherMethodDescription')
		}
	}, [form, watchIsStudent, watchMethod])

	const onSubmit: SubmitHandler<QuestionSchema> = data => {
		setLoading(true)
		onNext(data).then(() => setLoading(false))
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
					className="relative inline-flex w-1/2 flex-col items-center justify-center"
				>
					{loading && (
						<div className="absolute z-10 flex h-full w-full max-w-sm items-center justify-center rounded-md bg-gray-400/50">
							<div className="square-loader"></div>
						</div>
					)}
					<p className="mb-7 text-gray-600">?</p>
					<div className="flex w-full flex-col items-center space-y-2">
						<div className="grid w-full max-w-sm grid-cols-2 gap-x-2">
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
											placeholder="Jim Smith"
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
											placeholder="jimsmith@gmail.com"
											{...form.register('email')}
										/>
										<FormMessage />
									</div>
								)}
							/>
						</div>
						<div className="grid max-w-sm grid-cols-2 gap-x-2">
							<FormField
								control={undefined}
								name="instagramHandle"
								render={() => (
									<div className="w-full max-w-sm">
										<FormLabel className="flex items-center pl-3 text-sm font-medium">
											Instagram{' '}
											<span className="pl-1 text-xs font-normal">
												(optional)
											</span>
										</FormLabel>
										<Input
											className="h-10 w-full"
											placeholder="@jimsmith"
											{...form.register(
												'instagramHandle'
											)}
										/>
										<FormMessage />
									</div>
								)}
							/>
							<FormField
								control={form.control}
								name="experience"
								render={({ field }) => (
									<div className="w-full max-w-sm">
										<FormItem className="w-full">
											<FormLabel className="pl-3 text-sm font-medium">
												Years of Experience
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<SelectTrigger>
													<SelectValue placeholder="Select" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="<1">
														&lt; 1 year
													</SelectItem>
													<SelectItem value="1-3">
														1 to 3 years
													</SelectItem>
													<SelectItem value="3-5">
														3 to 5 years
													</SelectItem>
													<SelectItem value=">5">
														&gt; 5 years
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									</div>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="isStudent"
							render={({ field }) => (
								<div className="w-full max-w-sm">
									<FormItem className="w-full">
										<FormLabel className="pl-3 text-sm font-medium">
											Student
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger ref={field.ref}>
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="true">
													Yes
												</SelectItem>
												<SelectItem value="false">
													No
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						{watchIsStudent === 'true' && (
							<FormField
								control={undefined}
								name="universityAffiliation"
								render={() => (
									<div className="w-full max-w-sm">
										<FormLabel className="pl-3 text-sm font-medium">
											University
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
						)}
						<FormField
							control={undefined}
							name="cameraUsed"
							render={() => (
								<div className="w-full max-w-sm">
									<FormLabel className="pl-3 text-sm font-medium">
										Camera used
									</FormLabel>
									<Input
										className="h-10 w-full"
										placeholder="Nikon D750"
										{...form.register('cameraUsed')}
									/>
									<FormMessage />
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
											Describe method
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
				</form>
			</Form>
		</motion.div>
	)
}

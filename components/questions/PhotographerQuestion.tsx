'use client'

import * as z from 'zod'

import { useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	Form,
	FormControl,
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
import { Label } from '../ui/Label'

const questionSchema = z.discriminatedUnion('isStudent', [
	z.object({
		name: z.string().min(1, 'Required'),
		email: z.string().email(),
		instagramHandle: z.string().optional(),
		experience: z.enum(['<1', '1-3', '3-5', '>5']),
		isStudent: z.literal('true'),
		universityAffiliation: z.string(),
		cameraUsed: z.string(),
		methodToFindUs: z.string(),
	}),
	z.object({
		name: z.string().min(1, 'Required'),
		email: z.string().email(),
		instagramHandle: z.string().optional(),
		experience: z.enum(['<1', '1-3', '3-5', '>5']),
		isStudent: z.literal('false'),
		cameraUsed: z.string(),
		methodToFindUs: z.string(),
	}),
])

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
	const form = useForm<QuestionSchema>({
		resolver: zodResolver(questionSchema),
	})

	const watchIsStudent = form.watch('isStudent', 'false')
	useEffect(() => {
		if (watchIsStudent === 'true') {
			form.register('universityAffiliation')
		} else {
			form.unregister('universityAffiliation')
		}
	}, [form, watchIsStudent])

	const onSubmit: SubmitHandler<QuestionSchema> = data => {
		// onNext(data)
		console.log(data)
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
					className="inline-flex w-1/2 flex-col items-center"
				>
					<p className="mb-7 text-gray-600">?</p>
					<div className="flex w-full flex-col items-center space-y-2">
						<div className="w-full max-w-sm">
							<Label
								htmlFor="name"
								className="pl-3 text-sm font-medium"
							>
								Name
							</Label>
							<Input
								id="name"
								className="h-10 w-full"
								placeholder="Name"
								{...form.register('name')}
							/>
							{form.formState.errors.name && (
								<p
									className={
										'float-right mt-2 flex items-center gap-1 text-sm font-medium text-red-700'
									}
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
											d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
										/>
									</svg>
									{form.formState.errors.name.message}
								</p>
							)}
						</div>
						<div className="w-full max-w-sm">
							<Label
								htmlFor="email"
								className="pl-3 text-sm font-medium"
							>
								Email
							</Label>
							<Input
								id="email"
								className="h-10 w-full"
								placeholder="Email"
								{...form.register('email')}
							/>
							{form.formState.errors.email && (
								<p
									className={
										'float-right mt-2 flex items-center gap-1 text-sm font-medium text-red-700'
									}
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
											d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
										/>
									</svg>
									{form.formState.errors.email.message}
								</p>
							)}
						</div>
						<div className="grid max-w-sm grid-cols-2 gap-x-2">
							<div className="w-full max-w-sm">
								<Label className="flex items-center pl-3 text-sm font-medium">
									Instagram{' '}
									<span className="pl-1 text-xs font-normal">
										(optional)
									</span>
								</Label>
								<Input
									className="h-10 w-full"
									placeholder="Instagram Handle"
									{...form.register('instagramHandle')}
								/>
								{form.formState.errors.instagramHandle && (
									<p
										className={
											'float-right mt-2 flex items-center gap-1 text-sm font-medium text-red-700'
										}
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
												d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
											/>
										</svg>
										{
											form.formState.errors
												.instagramHandle.message
										}
									</p>
								)}
							</div>
							<FormField
								control={form.control}
								name="experience"
								render={({ field }) => (
									<div className="w-full max-w-sm">
										<FormItem className="w-full">
											<FormLabel className="flex items-center pl-3 text-sm font-medium">
												Experience
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
										<FormLabel className="flex items-center pl-3 text-sm font-medium">
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
							<div className="w-full max-w-sm">
								<Label className="pl-3 text-sm font-medium">
									University
								</Label>
								<Input
									className="h-10 w-full"
									placeholder="University"
									{...form.register('universityAffiliation')}
								/>
								{(form.formState.errors as any)
									.universityAffiliation && (
									<p
										className={
											'float-right mt-2 flex items-center gap-1 text-sm font-medium text-red-700'
										}
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
												d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
											/>
										</svg>
										{
											(form.formState.errors as any)
												.universityAffiliation.message
										}
									</p>
								)}
							</div>
						)}
						<div className="w-full max-w-sm">
							<Label className="flex items-center pl-3 text-sm font-medium">
								Camera used
							</Label>
							<Input
								className="h-10 w-full"
								placeholder="Camera used"
								{...form.register('cameraUsed')}
							/>
							{form.formState.errors.cameraUsed && (
								<p
									className={
										'float-right mt-2 flex items-center gap-1 text-sm font-medium text-red-700'
									}
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
											d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
										/>
									</svg>
									{
										form.formState.errors.cameraUsed
											.message
									}
								</p>
							)}
						</div>
						<FormField
							control={form.control}
							name="methodToFindUs"
							render={({ field }) => (
								<div className="w-full max-w-sm">
									<FormItem className="w-full">
										<FormLabel className="flex items-center pl-3 text-sm font-medium">
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

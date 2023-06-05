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
import { Label } from '../ui/Label'

export const questionSchema = z
	.object({
		name: z.string().min(1, 'Required'),
		email: z.string().email(),
		instagramHandle: z.string().optional(),
		experience: z.enum(['<1', '1-3', '3-5', '>5']),
		cameraUsed: z.string(),
	})
	.and(
		z.discriminatedUnion(
			'isStudent',
			[
				z.object({
					isStudent: z.literal('true'),
					universityAffiliation: z.string().min(1, 'Required'),
				}),
				z.object({
					isStudent: z.literal('false'),
				}),
			],
			{
				errorMap: issue => {
					if (issue.code === 'invalid_union_discriminator') {
						return { message: 'Required' }
					}

					return { message: '' }
				},
			}
		)
	)
	.and(
		z.discriminatedUnion(
			'marketingMethod',
			[
				z.object({
					marketingMethod: z.literal('other'),
					otherMethod: z.string().min(1, 'Required'),
				}),
				z.object({
					marketingMethod: z.enum([
						'linkedin',
						'instagram',
						'direct',
						'family',
						'university',
					]),
				}),
			],
			{
				errorMap: issue => {
					if (issue.code === 'invalid_union_discriminator') {
						return { message: 'Required' }
					}

					return { message: '' }
				},
			}
		)
	)

type QuestionSchema = z.infer<typeof questionSchema>

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

	const watchIsStudent = form.watch('isStudent', 'false')
	const watchMethod = form.watch('marketingMethod')
	useEffect(() => {
		if (watchIsStudent === 'true') {
			form.register('universityAffiliation')
		} else {
			form.unregister('universityAffiliation')
		}

		if (watchMethod === 'other') {
			form.register('otherMethod')
		} else {
			form.unregister('otherMethod')
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
							<div className="w-full">
								<Label
									htmlFor="name"
									className="pl-3 text-sm font-medium"
								>
									Name
								</Label>
								<Input
									id="name"
									className="h-10 w-full"
									placeholder="Qudus Shittu"
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
							<div className="w-full">
								<Label
									htmlFor="email"
									className="pl-3 text-sm font-medium"
								>
									Email
								</Label>
								<Input
									id="email"
									className="h-10 w-full"
									placeholder="info@gophotos.us"
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
									placeholder="@gophotos.official"
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
								placeholder="Nikon d750"
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
									{form.formState.errors.cameraUsed.message}
								</p>
							)}
						</div>
						<FormField
							control={form.control}
							name="marketingMethod"
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
						{watchMethod === 'other' && (
							<div className="w-full max-w-sm">
								<Label className="pl-3 text-sm font-medium">
									Describe method
								</Label>
								<Input
									className="h-10 w-full"
									placeholder="Method"
									{...form.register('otherMethod')}
								/>
								{(form.formState.errors as any).otherMethod && (
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
												.otherMethod.message
										}
									</p>
								)}
							</div>
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

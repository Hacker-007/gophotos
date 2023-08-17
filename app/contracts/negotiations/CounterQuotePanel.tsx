'use client'

import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import Input from '@/components/Input'
import Pill from '@/components/Pill'
import classNames from '@/utils/classnames'
import LoadingButton from '@/components/LoadingButton'

const counterSchema = z.object({
	price: z.coerce.number().nonnegative('price must be non-negative'),
	explanation: z.string().optional(),
})

type CounterSchema = z.infer<typeof counterSchema>

export default function CounterQuotePanel() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<CounterSchema>({
		resolver: zodResolver(counterSchema),
	})

	const counterQuote: SubmitHandler<CounterSchema> = async ({
		price,
		explanation,
	}) => {
		await new Promise(res => setTimeout(res, 3000))
	}

	return (
		<div className="rounded-md border  bg-gray-50 p-3">
			<form onSubmit={handleSubmit(counterQuote)}>
				<div>
					<h3 className="text-sm font-medium">Countering quote</h3>
					<p className="mt-1 text-xs text-gray-600">
						This counter quote proposal will be sent to Bob Ross for
						approval. If accepted, you acknowledge that you are
						responsible for the payment terms agreed to upon the
						completion of the event.
					</p>
				</div>
				<div className="mt-1">
					<Input
						className={classNames(
							'pl-5 transition-colors duration-300 disabled:bg-gray-100',
							errors.price && 'ring-red-400 focus:ring-red-400'
						)}
						type="number"
						placeholder="0"
						label="Proposed price"
						icon={<span>$</span>}
						disabled={isSubmitting}
						{...register('price')}
					/>
					{errors.price && (
						<p className="text-right text-xs text-red-400">
							{errors.price.message}
						</p>
					)}
				</div>
				<div className="mt-2 space-y-3 rounded-md border border-gray-300 bg-white p-2">
					<Pill
						className="w-min whitespace-nowrap border border-purple-300 bg-purple-50 px-2 py-1 text-xs font-medium"
						color="purple"
						leftIcon={<CurrencyDollarIcon className="h-4 w-4" />}
					>
						Counter proposal
					</Pill>
					<div className="grid items-center">
						<div className="col-start-1">
							<h3 className="text-xs font-medium text-gray-500">
								Proposed
							</h3>
							<p className="text-sm font-medium">$0</p>
						</div>
						<p className="col-start-2 font-medium text-gray-500">
							{' '}
							+{' '}
						</p>
						<div className="col-start-3">
							<h3 className="text-xs font-medium text-gray-500">
								Service fee
							</h3>
							<p className="text-sm font-medium">$0</p>
						</div>
						<p className="col-start-4 font-medium text-gray-500">
							{' '}
							={' '}
						</p>
						<div className="col-start-5">
							<h3 className="text-xs font-medium text-gray-500">
								Total price
							</h3>
							<p className="text-sm font-medium">$0</p>
						</div>
					</div>
				</div>
				<div className="mt-2">
					<label
						htmlFor="explanation"
						className="text-xs font-medium leading-6 text-gray-900"
					>
						Additional explanation
					</label>
					<textarea
						id="explanation"
						className="w-full rounded-md border-gray-300 p-1 text-xs transition-colors duration-300 focus:border-purple-200  disabled:bg-gray-100"
						placeholder="Provide a brief explanation for your counter proposal."
						rows={3}
						disabled={isSubmitting}
						{...register('explanation')}
					/>
				</div>
				<LoadingButton
					className="mt-3 w-full justify-center border border-gray-400 p-2 text-xs text-black hover:bg-gray-100"
					type="submit"
					isLoading={isSubmitting}
					loader={{
						color: 'black',
					}}
				>
					Confirm
				</LoadingButton>
			</form>
		</div>
	)
}

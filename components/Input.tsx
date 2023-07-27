'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useId } from 'react'

type InputProps = {
    label: string
    name: string
    className?: string
}

export default function Input({ label, name, className }: InputProps) {
    const id = useId()
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="relative rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-sm text-gray-500">
					<MagnifyingGlassIcon strokeWidth={2} className="h-4 w-4" />
				</div>
				<input
					type="text"
					name={name}
					id={id}
					className="block w-full h-8 rounded-md border-0 bg-gray-50 px-7 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black text-sm font-semibold"
					placeholder=""
				/>
			</div>
		</div>
	)
}

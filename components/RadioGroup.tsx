import { mergeRefs } from '@/utilities/refs'
import React, { PropsWithChildren, useContext, useRef } from 'react'

import { VisuallyHidden, useRadio, useRadioGroup } from 'react-aria'
import { RadioGroupState, useRadioGroupState } from 'react-stately'

type RadioGroupProps = {
	label: string
}

const RadioGroupContext = React.createContext<RadioGroupState | undefined>(
	undefined
)

export function RadioGroup({
	label,
	children,
}: PropsWithChildren<RadioGroupProps>) {
	const state = useRadioGroupState({})
	const { radioGroupProps } = useRadioGroup(
		{
			isRequired: true,
			'aria-label': label,
		},
		state
	)

	return (
		<div
			{...radioGroupProps}
			className="flex w-full flex-col items-center space-y-5"
		>
			<RadioGroupContext.Provider value={state}>
				{children}
			</RadioGroupContext.Provider>
		</div>
	)
}

type RadioItemProps = {
	value: string
	name: string
	onBlur?: (ev: { target: any; type?: any }) => Promise<void | boolean>
	onChange?: (ev: { target: any; type?: any }) => Promise<void | boolean>
}

export const RadioGroupItem = React.forwardRef(function RadioGroupItem(
	{
		value,
		name,
		onBlur,
		onChange,
		children,
	}: PropsWithChildren<RadioItemProps>,
	forwardRef
) {
	const state = useContext(RadioGroupContext)
	const ref = useRef(null)
	const { inputProps, isSelected } = useRadio(
		{ value, children },
		state!,
		ref
	)

	return (
		<label
			className={`h-16 w-full max-w-sm rounded-md border border-gray-400 transition-colors duration-200 ${
				isSelected ? 'border-gray-800' : ''
			}`}
		>
			<VisuallyHidden>
				<input
					{...inputProps}
					name={name}
					onBlur={onBlur}
					onChange={async e => {
						if (inputProps.onChange) {
							inputProps.onChange(e)
						}

						if (onChange) {
							await onChange(e)
						}
					}}
					ref={mergeRefs([ref, forwardRef])}
				/>
			</VisuallyHidden>
			<div className="relative h-full w-full">
				{children}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className={`absolute right-2 top-1 h-6 w-6 transition-opacity duration-300 ${
						isSelected ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<path
						fillRule="evenodd"
						d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</label>
	)
})

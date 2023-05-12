import {
	RadioGroupItemProps as RadixRadioGroupItemProps,
	RadioGroupItem as RadixRadioGroupItem,
	RadioGroupIndicator as RadixRadioGroupIndicator,
} from '@radix-ui/react-radio-group'

type RadioGroupItemProps = RadixRadioGroupItemProps

export function RadioGroupItem({
	value,
	className,
	children,
}: RadioGroupItemProps) {
	return (
		<RadixRadioGroupItem
			className={`rounded-md border-2 border-gray-300 transition-colors duration-300 data-[state=checked]:border-black ${className}`}
			value={value}
		>
			<div className="relative h-full w-full">
				{children}
				<RadixRadioGroupIndicator
					forceMount
					asChild
					className="absolute right-2 top-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 transition-opacity duration-300 data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0"
					>
						<path
							fillRule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
							clipRule="evenodd"
						/>
					</svg>
				</RadixRadioGroupIndicator>
			</div>
		</RadixRadioGroupItem>
	)
}

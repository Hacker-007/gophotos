import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	rightIcon?: ReactNode
}

export default function Button({ rightIcon, children }: ButtonProps) {
	return (
		<div className="group flex items-center rounded-md text-sm font-medium">
			{children}
			{rightIcon}
		</div>
	)
}

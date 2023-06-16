'use client'

import { PopupButton } from '@typeform/embed-react'
import { ReactNode } from 'react'

type TypeformQuestionProps = {
	className?: string
	children?: ReactNode
}

export default function TypeformQuestion({
	className,
	children,
}: TypeformQuestionProps) {
	return (
		<PopupButton as="div" id="KgCvW2uX" className={className}>
			{children}
		</PopupButton>
	)
}

'use client'

import Button from '@/components/Button'
import Loader from '@/components/Loader'
import classNames from '@/utils/classnames'

import { useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'

type RequestQuoteButtonProps = {
	className?: string
}

export default function RequestQuoteButton({
	className,
}: RequestQuoteButtonProps) {
	const [isLoading, setIsLoading] = useState(false)
	const sendQuoteRequest = async () => {
		setIsLoading(true)
		console.log('sending quote request via client')
		await new Promise(resolve => setTimeout(resolve, 3000))
		setIsLoading(false)
	}

	return (
		<Button
			className={classNames(
				'mt-2 w-full justify-center border border-black p-2 text-sm hover:bg-gray-100',
				className
			)}
			onClick={sendQuoteRequest}
		>
			<LayoutGroup>
				<Loader isLoading={isLoading} />
				<motion.span layout>Request quote</motion.span>
			</LayoutGroup>
		</Button>
	)
}

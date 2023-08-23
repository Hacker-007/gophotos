'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import Link from 'next/link'
import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import classNames from '@/utils/classnames'

type NavigationLinkProps = {
	href: string
	routeSegment: string | null | (string | null)[]
	layoutId: string
	className?: string
	selectedBarClassName?: string
	children?: ReactNode
}

export default function NavigationLink({
	href,
	routeSegment,
	layoutId,
	className,
	selectedBarClassName,
	children,
}: NavigationLinkProps) {
	const selectedSegment = useSelectedLayoutSegment()

	const isSelected = () => {
		if (routeSegment instanceof Array) {
			return routeSegment.includes(selectedSegment)
		} else {
			return routeSegment === selectedSegment
		}
	}

	return (
		<div className="relative">
			<Link
				href={href}
				className={classNames(
					className,
					isSelected() ? 'text-black' : 'text-gray-500'
				)}
			>
				{children}
			</Link>
			{isSelected() && (
				<motion.div
					layoutId={layoutId}
					className={classNames(
						'absolute w-full border-t border-t-black',
						selectedBarClassName
					)}
				></motion.div>
			)}
		</div>
	)
}

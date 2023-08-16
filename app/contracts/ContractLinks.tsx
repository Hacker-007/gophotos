'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type ContractLinkProps = {
    href: string
	routeSegment: string
	children?: ReactNode
}

export default function ContractLinks() {
	return (
		<div className="flex w-full space-x-4">
			<ContractLink href="/contracts/negotiations" routeSegment="negotiations">
				Negotiation History
			</ContractLink>
			<ContractLink href="/contracts/chat" routeSegment="chat">Chat</ContractLink>
			<ContractLink href="/contracts/pictures" routeSegment="pictures">Pictures</ContractLink>
		</div>
	)
}

function ContractLink({ href, routeSegment, children }: ContractLinkProps) {
	const selectedSegment = useSelectedLayoutSegment()

	return (
		<div>
			<div className="text-xs">
				<Link
					href={href}
					className="mb-1 font-medium"
				>
					{children}
				</Link>
				{selectedSegment === routeSegment && (
					<motion.div
						layoutId="selectedBar"
						className="w-full border-t border-t-black"
					></motion.div>
				)}
			</div>
		</div>
	)
}

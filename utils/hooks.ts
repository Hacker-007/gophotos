import { useRef, useState, useEffect, RefObject } from 'react'

export function useIsVisible(ref: RefObject<HTMLElement>) {
	const observerRef = useRef<IntersectionObserver | null>(null)
	const [isVisible, setIsVisible] = useState(false)
	useEffect(() => {
		observerRef.current = new IntersectionObserver(([entry]) =>
			setIsVisible(entry.isIntersecting)
		)
	}, [])

	useEffect(() => {
		if (ref.current) {
			observerRef.current?.observe(ref.current)
		}

		return () => {
			observerRef.current?.disconnect()
		}
	}, [ref])

	return isVisible
}

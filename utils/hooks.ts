import { useCallback, useEffect, useRef, useState } from 'react'

export function useHover<T extends HTMLElement = HTMLDivElement>() {
	const [hovered, setHovered] = useState(false)
	const ref = useRef<T>(null)
	const onMouseEnter = useCallback(() => setHovered(true), [])
	const onMouseLeave = useCallback(() => setHovered(false), [])

	useEffect(() => {
		const currentNode = ref.current
		if (currentNode) {
			currentNode.addEventListener('mouseenter', onMouseEnter)
			currentNode.addEventListener('mouseleave', onMouseLeave)

			return () => {
				currentNode?.removeEventListener('mouseenter', onMouseEnter)
				currentNode?.removeEventListener('mouseleave', onMouseLeave)
			}
		}

		return undefined
	}, [onMouseEnter, onMouseLeave])

	return { ref, hovered }
}

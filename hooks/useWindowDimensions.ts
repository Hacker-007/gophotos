import { useEffect, useState } from 'react'

function getDimensions(hasWindow: boolean) {
	return {
		width: hasWindow ? window.innerWidth : null,
		height: hasWindow ? window.innerHeight : null,
	}
}

export default function useWindowDimensions() {
	const [isClient, setIsClient] = useState(false)
	const [dimensions, setDimensions] = useState(
		getDimensions(isClient)
	)

	useEffect(() => {
		setIsClient(true)
		setDimensions(getDimensions(true))
	}, [])
	useEffect(() => {
		function resizeDimensions() {
			setDimensions(getDimensions(isClient))
		}

		if (isClient) {
			window.addEventListener('resize', resizeDimensions)
			return () => window.removeEventListener('resize', resizeDimensions)
		}
	}, [isClient])

	return dimensions
}

export function getAroundCenter<T>(arr: T[], center: number, spread: number): T[] {
	const result = []
	for(let idx = center - spread; idx <= center + spread; idx++) {
		const normalizedIdx = idx < 0 ? arr.length + idx : idx % arr.length
		result.push(arr[normalizedIdx])
	}

	// console.log(result)
	return result
}
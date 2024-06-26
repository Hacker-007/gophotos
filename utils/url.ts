export function updateURLParameter(
	urlSearchParam: URLSearchParams,
	key: string,
	value: any
) {
	if (value === undefined) {
		return urlSearchParam
	}
	
	urlSearchParam.delete(key)
	if (Array.isArray(value)) {
		for (const item of value) {
			urlSearchParam.append(key, item.toString())
		}
	} else {
		urlSearchParam.set(key, value.toString())
	}

	return urlSearchParam
}
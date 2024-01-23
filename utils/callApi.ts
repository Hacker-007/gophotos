export default async function callApi<T>(
	path: string,
	requestInit?: RequestInit
): Promise<T> {
	return await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/${path}`, {
		headers: {
			'Authorization': `Bearer ${process.env.SERVER_SECRET}`,
			...requestInit?.headers
		},
		...requestInit,
	}).then(res => res.json())
}

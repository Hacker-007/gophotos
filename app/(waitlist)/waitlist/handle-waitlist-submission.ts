'use server'

import { cookies } from 'next/headers'

export default async function handleSubmission(
	previousState: unknown,
	formData: FormData
) {
	// console.log('here')
	const email = formData.get('email')!.toString()
	const fullName = formData.get('fullName')!.toString()
	const isPhotographer = formData.get('isPhotographer') !== null
	const latitude = Number.parseFloat(cookies().get('latitude')?.value!)
	const longitude = Number.parseFloat(cookies().get('longitude')?.value!)

	try {
		const response = await fetch('http://localhost:8080/v1/waitlists', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				fullName,
				isPhotographer,
				location: {
					longitude,
					latitude,
				},
			}),
		}).then(res => res.json())

		console.log(response)
		return { ok: true, email }
	} catch (e) {
		return { ok: false }
	}
}

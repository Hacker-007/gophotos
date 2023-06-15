import { QuestionSchema as PhotographerQuestionSchema } from '@/components/questions/PhotographerQuestion'
import { QuestionSchema as CustomerQuestionSchema } from '@/components/questions/CustomerQuestion'

type WaitlistResponse =
	| ({
			category: 'photographer'
	  } & PhotographerQuestionSchema)
	| ({
			category: 'customer'
	  } & CustomerQuestionSchema)

export async function saveResponse(response: WaitlistResponse) {
	let body
	if (response.category === 'photographer') {
		body = JSON.stringify({
			category: response.category,
			name: response.name,
			email: response.email,
			instagramHandle: response.instagramHandle,
			experience: response.experience,
			isStudent: response.isStudent === 'true' ? true : false,
			universityAffiliation: response.universityAffiliation,
			cameraUsed: response.cameraUsed,
			marketingMethod:
				response.marketingMethod === 'other'
					? response.otherMethodDescription!
					: response.marketingMethod,
		})
	} else {
		body = JSON.stringify({
			category: response.category,
			name: response.name,
			email: response.email,
			universityAffiliation: response.universityAffiliation,
			hiringFrequency: response.hiringFrequency,
			importantFactor:
				response.importantFactor === 'other'
					? response.otherFactorDescription!
					: response.importantFactor,
			potentialCustomer: response.potentialCustomer,
			marketingMethod:
				response.marketingMethod === 'other'
					? response.otherMethodDescription!
					: response.marketingMethod,
		})
	}

	return await fetch(
		'https://q5jyird40h.execute-api.us-east-1.amazonaws.com/default/waitlist-response-handler',
		{
			method: 'POST',
			body,
		}
	).then(res => res.json())
}

export default function RequestQuotePanel() {
	const handleOnSubmit = async (formData: FormData) => {
		'use server'
		const { name, email, phoneNumber, eventDate, organization, eventDescription } = Object.fromEntries(formData)

		console.log(name, email, phoneNumber, eventDate, organization, eventDescription)
	}
	return (
		<div>
			<p className="text-xl font-medium">Request a Quote</p>
			<p className="text-sm text-gray-600">
				Great! There is some information that we need before sending a
				quote request.
			</p>
			<form className="mt-3" action={handleOnSubmit}>
				<div className="">
					<label
						htmlFor="name"
						className="sm text-sm font-medium"
					>
						Name
					</label>
					<input
						id="name"
						name="name"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="">
					<label
						htmlFor="email"
						className="sm text-sm font-medium"
					>
						Email
					</label>
					<input
						id="email"
						name="email"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="">
					<label
						htmlFor="phoneNumber"
						className="sm text-sm font-medium"
					>
						Phone Number
					</label>
					<input
						id="phoneNumber"
						name="phoneNumber"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="">
					<label
						htmlFor="eventDate"
						className="sm text-sm font-medium"
					>
						Date
					</label>
					<input
						id="eventDate"
						name="eventDate"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="">
					<label
						htmlFor="organization"
						className="sm text-sm font-medium"
					>
						Organization
					</label>
					<input
						id="organization"
						name="organization"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<div className="">
					<label
						htmlFor="eventDescription"
						className="sm text-sm font-medium"
					>
						Event Description
					</label>
					<textarea
						id="eventDescription"
						name="eventDescription"
						className="w-full rounded-md border border-gray-200 text-sm outline-none"
					/>
				</div>
				<button type="submit" className="w-full bg-black px-3 py-2 rounded-md text-white text-sm mt-2 font-medium">Send request</button>
			</form>
		</div>
	)
}

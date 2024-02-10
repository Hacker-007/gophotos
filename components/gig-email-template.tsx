type GigEmailTemplateProps = {
	client: {
		name: string
		date: string
		phoneNumber: string
		organization?: string
		eventDescription: string
	}
	photographer: {
		email: string
		name: string
	}
}

export default function GigEmailTemplate({
	client,
	photographer,
}: GigEmailTemplateProps) {
	return (
		<div>
			<p>
				Dear <span className="font-medium">{photographer.name}</span>,
			</p>
			<p>
				You have a photographer gig request from {client.name}. Please
				find more details regarding the proposed event below.
			</p>
			<p className="mt-2">
				Client name: <span className="font-medium">{client.name}</span>
			</p>
			<p>Date: {client.date}</p>
			<p>Phone number: {client.phoneNumber}</p>
			{client.organization && <p>Organization: {client.organization}</p>}
			<p className="mt-3">{client.eventDescription}</p>
			<p className="mt-2">Sincerely,</p>
			<p>GoPhotos</p>
		</div>
	)
}

import { Account, Asset, Photographer } from "./types";

export async function getPhotographers(): Promise<Photographer[]> {
    const { data } = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/photographers`,
		{
			headers: {
				Authorization: `Bearer ${process.env.SERVER_SECRET}`,
			},
		}
	).then(res => res.json())

	return data
}

export async function getAccount(accountId: string): Promise<Account> {
    const { data } = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/accounts/${accountId}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.SERVER_SECRET}`,
			},
		}
	).then(res => res.json())

	return data
}

export async function getAssets(accountId: string): Promise<Asset[]> {
	const { data } = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_HOST}/v1/assets?accountId=${accountId}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.SERVER_SECRET}`,
			},
		}
	).then(res => res.json())

	return data
}
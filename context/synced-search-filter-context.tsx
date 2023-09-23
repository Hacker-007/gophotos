'use client'

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { updateURLParameter } from '@/utils/url'

type SyncedSearchFilters = {
	location: string
	hours: number
	'price[low]': number
	'price[high]': number
	'schools[]': string[]
	'skills[]': string[]
	'ratings[]': string[]
	sort: 'rating' | 'price'
	order: 'asc' | 'desc'
	page: number
}

export type SyncedSearchFilterContextValue = {
	getQueryValue: <K extends keyof SyncedSearchFilters>(
		key: K
	) => SyncedSearchFilters[K]
	updateQueryParameter: <K extends keyof SyncedSearchFilters>(
		key: K,
		updateFn: (value: SyncedSearchFilters[K]) => SyncedSearchFilters[K]
	) => void
	updateURL: <K extends keyof SyncedSearchFilters>(
		key: K,
		updateFn: (value: SyncedSearchFilters[K]) => SyncedSearchFilters[K]
	) => void
	batchUpdateURL: () => void
}

export const SyncedSearchFilterContext =
	createContext<SyncedSearchFilterContextValue>(
		{} as SyncedSearchFilterContextValue
	)

type SyncedSearchFilterProviderProps = {
	defaultItems: SyncedSearchFilters
	children?: ReactNode
}

export function useSyncedSearchFilters() {
	return useContext(SyncedSearchFilterContext)
}

export default function SyncedSearchFilterProvider({
	defaultItems,
	children,
}: SyncedSearchFilterProviderProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()!
	const [items, setItems] = useState(defaultItems)

	const getQueryValue = <K extends keyof SyncedSearchFilters>(key: K) => {
		return items[key]
	}

	const updateQueryParameter = <K extends keyof SyncedSearchFilters>(
		key: K,
		updateFn: (value: SyncedSearchFilters[K]) => SyncedSearchFilters[K]
	) => {
		setItems(params => {
			const value = params[key]
			return {
				...params,
				[key]: updateFn(value),
			}
		})
	}

	const updateURL = <K extends keyof SyncedSearchFilters>(
		key: K,
		updateFn: (value: SyncedSearchFilters[K]) => SyncedSearchFilters[K]
	) => {
		setItems(items => ({
			...items,
			[key]: updateFn(items[key])
		}))
		
		const queryParams = updateURLParameter(
			new URLSearchParams(Array.from(searchParams.entries())),
			key,
			updateFn(items[key])
		)

		router.push(pathname + '?' + queryParams.toString())
	}

	const batchUpdateURL = () => {
		let queryParams = new URLSearchParams(
			Array.from(searchParams.entries())
		)

		let key: keyof SyncedSearchFilters
		for (key in items) {
			queryParams = updateURLParameter(queryParams, key, items[key])
		}

		router.push(pathname + '?' + queryParams.toString())
	}

	useEffect(() => {
		batchUpdateURL()
	}, [])

	return (
		<SyncedSearchFilterContext.Provider
			value={{
				getQueryValue,
				updateQueryParameter,
				updateURL,
				batchUpdateURL,
			}}
		>
			{children}
		</SyncedSearchFilterContext.Provider>
	)
}

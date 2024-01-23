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
	// location: string
	hours: number
	'price.low': number
	'price.high': number
	'schools[]': string[]
	'skills[]': string[]
	sortBy: 'price:asc' | 'price:desc'
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

export function useSyncedSearchFilters() {
	return useContext(SyncedSearchFilterContext)
}

function getURLParameter<K extends keyof SyncedSearchFilters>(
	urlSearchParam: URLSearchParams,
	key: K,
	mapper: (value: [string, ...string[]]) => SyncedSearchFilters[K]
) {
	const values = urlSearchParam.getAll(key as string)
	if (values.length === 0) {
		return undefined
	}

	const firstItem = values.pop()!
	return mapper([firstItem, ...values])
}

type SyncedSearchFilterProviderProps = {
	defaultItems: SyncedSearchFilters
	children?: ReactNode
}

export default function SyncedSearchFilterProvider({
	defaultItems,
	children,
}: SyncedSearchFilterProviderProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()!
	const initialValues: SyncedSearchFilters = {
		// location:
		// 	getURLParameter(
		// 		searchParams,
		// 		'location',
		// 		([location]) => location
		// 	) ?? defaultItems.location,
		hours:
			getURLParameter(searchParams, 'hours', ([hours]) => +hours) ??
			defaultItems.hours,
		'price.low':
			getURLParameter(searchParams, 'price.low', ([low]) => +low) ??
			defaultItems['price.low'],
		'price.high':
			getURLParameter(
				searchParams,
				'price.high',
				([high]) => +high
			) ?? defaultItems['price.high'],
		'schools[]':
			getURLParameter(searchParams, 'schools[]', schools => schools) ??
			defaultItems['schools[]'],
		'skills[]':
			getURLParameter(searchParams, 'skills[]', skills => skills) ??
			defaultItems['skills[]'],
		// 'ratings[]':
		// 	getURLParameter(searchParams, 'ratings[]', ratings => ratings) ??
		// 	defaultItems['ratings[]'],
		sortBy:
			getURLParameter(
				searchParams,
				'sortBy',
				([sort]) => sort as 'price:asc' | 'price:desc'
			) ?? defaultItems.sortBy,
		// order:
		// 	getURLParameter(
		// 		searchParams,
		// 		'order',
		// 		([order]) => order as 'asc' | 'desc'
		// 	) ?? defaultItems.order,
		page:
			getURLParameter(searchParams, 'page', ([page]) => +page) ??
			defaultItems.page,
	}

	const [items, setItems] = useState(initialValues)

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
			[key]: updateFn(items[key]),
		}))

		const queryParams = updateURLParameter(
			new URLSearchParams(Array.from(searchParams.entries())),
			key,
			updateFn(items[key])
		)

		router.push(pathname + '?' + queryParams.toString(), { scroll: false })
	}

	const batchUpdateURL = () => {
		let queryParams = new URLSearchParams(
			Array.from(searchParams.entries())
		)

		let key: keyof SyncedSearchFilters
		for (key in items) {
			queryParams = updateURLParameter(queryParams, key, items[key])
		}

		router.push(pathname + '?' + queryParams.toString(), { scroll: false })
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

import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import { PropsWithChildren } from 'react'

import { layouts } from '@/components/layouts'
import type { AppProps } from '@/components/layouts/pageTypes'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	const Layout = Component.layoutKey
		? layouts[Component.layoutKey]
		: (page: PropsWithChildren) => <>page</>

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

import '@/styles/globals.css'

import { PropsWithChildren } from 'react'

import { layouts } from '@/components/layouts'
import type { AppProps } from '@/components/layouts/pageTypes'
import { SSRProvider } from 'react-aria'

export default function App({ Component, pageProps }: AppProps) {
	const Layout = Component.layoutKey
		? layouts[Component.layoutKey]
		: ({ children }: PropsWithChildren<typeof pageProps>) => <>{children}</>

	return (
		<SSRProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SSRProvider>
	)
}

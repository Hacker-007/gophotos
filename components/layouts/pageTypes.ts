import { NextComponentType, NextPage, NextPageContext } from 'next'
import { AppProps as NextAppProps } from 'next/app'

import { LayoutKey } from '.'

export type PageWithLayout<TProps = {}, TInitialProps = TProps> = NextPage<
	TProps,
	TInitialProps
> & {
	layoutKey?: LayoutKey
}

export type AppProps = NextAppProps & {
	Component: NextComponentType<NextPageContext, any, any> & {
		layoutKey?: LayoutKey
	}
}

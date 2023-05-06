import MainLayout from './MainLayout'
import FullscreenBackLayout from './FullscreenBack'

export const layouts = {
	main: MainLayout,
	fullscreenBack: FullscreenBackLayout,
}

export type LayoutKey = keyof typeof layouts

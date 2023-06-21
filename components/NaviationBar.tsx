import Link from 'next/link'

export default function NavigationBar() {
	return (
		<nav className="flex h-10 w-full items-center justify-between">
			<Link href="/" className="font-semibold">
				GoPhotos<span className="text-xl">.</span>
			</Link>
			<div className="space-x-12">
				<Link href="/about" className="text-sm font-medium">
					About Us
				</Link>
			</div>
		</nav>
	)
}

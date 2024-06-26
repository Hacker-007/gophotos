import './globals.css'
import type { Metadata } from 'next'

import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import Link from 'next/link'

import classNames from '@/utils/classnames'

import NavigationBar from './navigation-bar'

const spaceGrotesk = SpaceGrotesk({
	subsets: ['latin'],
	preload: true,
})

export const metadata: Metadata = {
	title: 'GoPhotos',
	description:
		'Finding a photographer has never been this easy. Start searching for a photographer near you now!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					<div
						className={classNames(
							spaceGrotesk.className,
							'flex h-screen w-screen flex-col overflow-y-auto @container/global'
						)}
					>
						<NavigationBar />
						{children}
						<div className="grid w-full justify-items-center bg-primary">
							<footer className="grid w-full max-w-[100rem] grid-cols-[auto_1fr] gap-4 px-3 py-4 @container/footer lg:px-4">
								<div className="col-start-1 row-start-1">
									<h1 className="font-medium">GoPhotos</h1>
									<p className="text-xs text-gray-600">
										Discover. Book. Create.
									</p>
									<div className="mt-1 flex gap-x-4">
										<Link href="https://www.linkedin.com/company/gophotos-info">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												height="80"
												width="80"
												viewBox="0 0 80 80"
												className="h-6 w-6 text-accent"
											>
												<path d="M21.8866 15.2302C21.8866 19.5914 18.1064 23.1269 13.4433 23.1269C8.78019 23.1269 5 19.5914 5 15.2302C5 10.869 8.78019 7.3335 13.4433 7.3335C18.1064 7.3335 21.8866 10.869 21.8866 15.2302Z" />
												<path d="M6.15464 28.9313H20.5876V72.6668H6.15464V28.9313Z" />
												<path d="M43.8247 28.9313H29.3918V72.6668H43.8247C43.8247 72.6668 43.8247 58.8982 43.8247 50.2895C43.8247 45.1224 45.5891 39.9327 52.6289 39.9327C60.5847 39.9327 60.5368 46.6946 60.4997 51.9333C60.4512 58.7809 60.567 65.7688 60.567 72.6668H75V49.5842C74.8778 34.8453 71.0372 28.0539 58.4021 28.0539C50.8985 28.0539 46.2473 31.4604 43.8247 34.5425V28.9313Z" />
											</svg>
										</Link>
										<Link href="https://www.instagram.com/gophotos.official/">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												width="80"
												height="80"
												viewBox="0 0 80 80"
												className="h-6 w-6 text-accent"
											>
												<path d="M40 47.5C44.1421 47.5 47.5 44.1421 47.5 40C47.5 35.8579 44.1421 32.5 40 32.5C35.8579 32.5 32.5 35.8579 32.5 40C32.5 44.1421 35.8579 47.5 40 47.5Z" />
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M41 20H39C34.7171 20 31.8056 20.0039 29.5552 20.1878C27.3631 20.3669 26.2421 20.6915 25.4601 21.0899C23.5785 22.0487 22.0487 23.5785 21.0899 25.4601C20.6915 26.2421 20.3669 27.3631 20.1878 29.5552C20.0039 31.8056 20 34.7171 20 39V41C20 45.2829 20.0039 48.1944 20.1878 50.4448C20.3669 52.6369 20.6915 53.7579 21.0899 54.5399C22.0487 56.4215 23.5785 57.9513 25.4601 58.9101C26.2421 59.3085 27.3631 59.6331 29.5552 59.8122C31.8056 59.9961 34.7171 60 39 60H41C45.2829 60 48.1944 59.9961 50.4448 59.8122C52.6369 59.6331 53.7579 59.3085 54.5399 58.9101C56.4215 57.9513 57.9513 56.4215 58.9101 54.5399C59.3085 53.7579 59.6331 52.6369 59.8122 50.4448C59.9961 48.1944 60 45.2829 60 41V39C60 34.7171 59.9961 31.8056 59.8122 29.5552C59.6331 27.3631 59.3085 26.2421 58.9101 25.4601C57.9513 23.5785 56.4215 22.0487 54.5399 21.0899C53.7579 20.6915 52.6369 20.3669 50.4448 20.1878C48.1944 20.0039 45.2829 20 41 20ZM57.5 26.25C57.5 28.3211 55.8211 30 53.75 30C51.6789 30 50 28.3211 50 26.25C50 24.1789 51.6789 22.5 53.75 22.5C55.8211 22.5 57.5 24.1789 57.5 26.25ZM40 52.5C46.9036 52.5 52.5 46.9036 52.5 40C52.5 33.0964 46.9036 27.5 40 27.5C33.0964 27.5 27.5 33.0964 27.5 40C27.5 46.9036 33.0964 52.5 40 52.5Z"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M6.6349 13.1901C5 16.3988 5 20.5992 5 29V51C5 59.4008 5 63.6012 6.6349 66.8099C8.073 69.6323 10.3677 71.927 13.1901 73.3651C16.3988 75 20.5992 75 29 75H51C59.4008 75 63.6012 75 66.8099 73.3651C69.6323 71.927 71.927 69.6323 73.3651 66.8099C75 63.6012 75 59.4008 75 51V29C75 20.5992 75 16.3988 73.3651 13.1901C71.927 10.3677 69.6323 8.073 66.8099 6.6349C63.6012 5 59.4008 5 51 5H29C20.5992 5 16.3988 5 13.1901 6.6349C10.3677 8.073 8.073 10.3677 6.6349 13.1901ZM16.6349 23.1901C15 26.3988 15 30.5992 15 39V41C15 49.4008 15 53.6012 16.6349 56.8099C18.073 59.6323 20.3677 61.927 23.1901 63.3651C26.3988 65 30.5992 65 39 65H41C49.4008 65 53.6012 65 56.8099 63.3651C59.6323 61.927 61.927 59.6323 63.3651 56.8099C65 53.6012 65 49.4008 65 41V39C65 30.5992 65 26.3988 63.3651 23.1901C61.927 20.3677 59.6323 18.073 56.8099 16.6349C53.6012 15 49.4008 15 41 15H39C30.5992 15 26.3988 15 23.1901 16.6349C20.3677 18.073 18.073 20.3677 16.6349 23.1901Z"
												/>
											</svg>
										</Link>
									</div>
								</div>
								<div className="col-start-1 row-start-2 grid w-96 gap-4 justify-self-end @2xl/footer:col-start-2 @2xl/footer:row-start-1">
									<div className="col-start-1 flex flex-col space-y-1">
										<h3 className="font-medium">Legal</h3>
										<a
											href="/Terms of Service.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm"
										>
											Terms of Service
										</a>
										<a
											href="/Privacy Policy.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm"
										>
											Privacy Policy
										</a>
									</div>
									<div className="col-start-2 flex flex-col space-y-1">
										<h3 className="font-medium">Contact</h3>
										<Link
											href="tel:+4253756070"
											className="text-sm"
										>
											Phone
										</Link>
										<Link
											href="mailto:help@gophotos.us"
											className="text-sm"
										>
											Email
										</Link>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</body>
			</html>
		</ClerkProvider>
	)
}

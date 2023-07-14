import RatingGraph from '@/components/RatingGraph'
import RatingGroup from '@/components/RatingGroup'
import { Dialog, Transition } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'

type PortfolioProps = {
	isOpen: boolean
	handleClose: () => void
}

export default function Portfolio({ isOpen, handleClose }: PortfolioProps) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={handleClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all @container">
								<div className="grid h-48 w-full grid-cols-4 gap-1">
									<div className="relative col-span-2 h-full w-full bg-red-200"></div>
									<div className="relative col-span-1 h-full w-full bg-green-200"></div>
									<div className="relative col-span-1 h-full w-full bg-blue-200"></div>
								</div>
								<div className="grid h-72 w-full grid-cols-3 divide-x-2 divide-gray-900">
									<div className="col-span-2 flex h-full w-full flex-col divide-y-2 divide-gray-200 overflow-y-auto p-2">
										<div className="flex w-full justify-between">
											<div className="flex h-14 flex-shrink-0 items-center space-x-2">
												<div className="relative my-auto h-8 w-8 overflow-hidden rounded-full bg-gray-300" />
												<div>
													<p className="font-medium">
														Bob Ross
													</p>
													<p className="text-xs">
														Cambridge, MA
													</p>
												</div>
											</div>
										</div>
										<div className="flex-grow space-y-2 pt-2">
											<div>
												<h3 className="text-sm font-medium">
													About
												</h3>
												<p className="text-sm">
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Tenetur, eum!
													Consequatur commodi, nostrum
													sunt reiciendis totam
													nesciunt culpa voluptates
													corporis tenetur nihil
													saepe, doloribus, aspernatur
													quia veritatis dolor rerum
													odio.
												</p>
											</div>
											<div>
												<h3 className="text-sm font-medium">
													Reviews
												</h3>
												<div className="flex items-center">
													<RatingGroup
														rating={4.6}
														className="flex"
													/>
													<p className="ml-1 text-sm">
														<span className="font-medium">
															4.6
														</span>{' '}
														out of{' '}
														<span className="font-medium">
															5
														</span>
													</p>
													<p className="ml-2 text-sm text-gray-900">
														(1624 reviews)
													</p>
												</div>
												<div className="mt-2">
													<RatingGraph
														ratings={[
															66.52, 10.37, 3.1, 4.01, 16,
														]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-1 grid h-full w-full grid-rows-6 divide-y-2 divide-gray-900 bg-orange-200">
										<div className="row-span-3">Test</div>
										<div className="row-span-2">Test</div>
										<div>Test</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

import { Dialog, Transition } from '@headlessui/react'
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
								<div className="grid grid-cols-3 w-full h-72">
									<div className="col-span-2 h-full w-full bg-purple-200"></div>
									<div className="col-span-1 h-full w-full bg-orange-200"></div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

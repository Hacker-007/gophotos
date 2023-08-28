import {
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

import { motion } from 'framer-motion'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
} from '@/components/Dialog'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Rating from '@/components/Rating'
import RadioGroup from '@/components/RadioGroup'

export type AdditionalFilterCriteria = {
	photographerSkills: string[]
	ratings: number[]
	numberOfReviews: string
}

type MoreFiltersButtonProps = {
	additionalFilterCriteria: AdditionalFilterCriteria
	onUpdate: (
		updateFilters: (
			currentFilters: AdditionalFilterCriteria
		) => AdditionalFilterCriteria
	) => void
	onSearch?: () => void
}

export default function MoreFiltersButton({
	additionalFilterCriteria,
	onUpdate,
	onSearch,
}: MoreFiltersButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="col-span-1 col-start-2 row-start-5 w-full justify-center self-end border border-gray-300 px-3 py-2 text-xs @md/filters:col-start-1 @md/filters:row-start-2 @xl/filters:w-40 @xl/filters:justify-self-start"
					leftIcon={<AdjustmentsVerticalIcon className="h-4 w-4" />}
				>
					Filters
				</Button>
			</DialogTrigger>
			<DialogPortal>
				<DialogOverlay asChild className="fixed inset-0 bg-black/20">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
					/>
				</DialogOverlay>
				<DialogContent
					asChild
					className="fixed bottom-0 left-0 max-h-min w-full overflow-y-auto sm:left-1/2 sm:top-1/2 sm:w-3/4 sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
					>
						<div className="h-full w-full rounded-md bg-white sm:p-2">
							<div>
								<div className="flex items-center justify-between px-3 py-2">
									<h3 className="font-medium">Filters</h3>
									<Button
										className="p-2 text-sm text-red-700 hover:bg-red-200"
										onClick={() => {
											onUpdate(_ => ({
												photographerSkills: [],
												ratings: [],
												numberOfReviews: 'Any',
											}))
										}}
									>
										Reset all
									</Button>
								</div>
								<div className="w-full border-t border-gray-300" />
								<div className="space-y-2 px-3 py-2">
									<div>
										<p className="text-sm font-medium">
											Skills
										</p>
										<div className="mt-1 grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-1">
											{[
												'Indoor',
												'Outdoor',
												'Bright Lights',
												'Dim Lights',
												'Group',
												'Headshot',
											].map(skill => (
												<Checkbox
													key={skill}
													form="filter-form"
													className="space-x-1.5 whitespace-nowrap text-xs"
													name="skill"
													label={skill}
													defaultChecked={additionalFilterCriteria.photographerSkills.includes(
														skill
													)}
													onCheck={isChecked => {
														if (
															isChecked !==
															'indeterminate'
														) {
															onUpdate(
																filters => ({
																	...filters,
																	photographerSkills:
																		isChecked
																			? [
																					...filters.photographerSkills,
																					skill,
																			  ]
																			: filters.photographerSkills.filter(
																					item =>
																						item !==
																						skill
																			  ),
																})
															)
														}
													}}
												/>
											))}
										</div>
									</div>
									<div className="w-full border-t border-gray-300" />
									<div>
										<p className="text-sm font-medium">
											Rating
										</p>
										<div className="mt-1 space-y-1">
											{([5, 4, 3, 2, 1] as const).map(
												starCount => (
													<Checkbox
														key={starCount}
														className="space-x-1.5 whitespace-nowrap text-xs"
														name="ratings"
														label={
															<Rating
																rating={
																	starCount
																}
																className="space-x-1"
															/>
														}
														defaultChecked={additionalFilterCriteria.ratings.includes(
															starCount
														)}
														onCheck={isChecked => {
															if (
																isChecked !==
																'indeterminate'
															) {
																onUpdate(
																	filters => ({
																		...filters,
																		ratings:
																			isChecked
																				? [
																						...filters.ratings,
																						starCount,
																				  ]
																				: filters.ratings.filter(
																						item =>
																							item !==
																							starCount
																				  ),
																	})
																)
															}
														}}
													/>
												)
											)}
										</div>
									</div>
									<div className="w-full border-t border-gray-300" />
									<div>
										<p className="text-sm font-medium">
											Number of Reviews
										</p>
										<RadioGroup
											className="mt-1 gap-1"
											items={[
												'Any',
												'0 - 100',
												'100 - 200',
												'200 - 300',
												'300 - 500',
												'500 - 1000',
												'1000+',
											]}
											value={
												additionalFilterCriteria.numberOfReviews
											}
											name="numberOfReviews"
											form="filter-form"
											onValue={count => {
												onUpdate(filters => ({
													...filters,
													numberOfReviews: count,
												}))
											}}
										/>
									</div>
								</div>
							</div>
							<DialogClose
								onClick={onSearch}
								type="submit"
								className="w-full p-2"
							>
								<div className="flex w-full items-center justify-center gap-x-1 rounded-md bg-black px-3 py-2 text-xs font-medium text-white">
									<MagnifyingGlassIcon className="h-4 w-4" />
									<p>Search</p>
								</div>
							</DialogClose>
						</div>
					</motion.div>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}

export default function Home() {
	return (
		<main>
			<div className="relative isolate w-full overflow-hidden">
        Search
				<svg
					className="absolute inset-0 -z-10 h-full w-full stroke-gray-200/[40]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
							width="125"
							height="200"
							x="50%"
							y="-1"
							patternUnits="userSpaceOnUse"
						>
							<path d="M.5 200V.5" fill="none"></path>
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						strokeWidth="0"
						fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
					></rect>
				</svg>
			</div>
		</main>
	)
}

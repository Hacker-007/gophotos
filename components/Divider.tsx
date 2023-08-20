import classNames from "@/utils/classnames"

type HorizontalDividerProps ={
	className?: string
}

export function HorizontalDivider({ className }: HorizontalDividerProps) {
	return <div className={classNames("mx-3 w-[1.5px] bg-gray-300", className)} />
}

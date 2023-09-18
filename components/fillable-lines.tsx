import classNames from "@/utils/classnames";

type FillableLineProps = {
  value: number;
  maxValue: number;
  className?: string;
};

export default function FillableLine({
  value,
  maxValue,
  className,
}: FillableLineProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div
      className={classNames(
        "relative h-1 w-full overflow-hidden rounded-full bg-primary",
        className
      )}
    >
      <div
        className="absolute inset-y-0 my-auto h-1 w-full bg-accent "
        style={{ width: `calc(${percentage}%)` }}
      />
    </div>
  );
}

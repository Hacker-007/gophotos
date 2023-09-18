import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

import Button from "@/components/button";
import classNames from "@/utils/classnames";

type PaginationControlsProps = {
  className?: string;
};

export default function PaginationControls({
  className,
}: PaginationControlsProps) {
  return (
    <div className={classNames("grid grid-cols-3 grid-rows-1", className)}>
      <Button className="justify-self-start self-center flex items-center gap-1 rounded-md px-2 py-1 text-sm text-black hover:bg-accent hover:text-secondary">
        <ArrowLongLeftIcon className="h-4 w-4" />
        <span>Previous</span>
      </Button>
      <p className="text-sm place-self-center">
        <span className="font-medium">1</span> of{" "}
        <span className="font-medium">20</span>
      </p>
      <Button className="justify-self-end self-center flex items-center gap-1 rounded-md px-2 py-1 text-sm text-black hover:bg-accent hover:text-secondary">
        <span>Next</span>
        <ArrowLongRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

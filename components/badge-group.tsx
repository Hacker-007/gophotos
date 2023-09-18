import { useState } from "react";

import classNames from "@/utils/classnames";

type BadgeGroupProps = {
  items: string[];
  static?: boolean;
  className?: string;
};

type BadgeProps = {
  value: string;
  isChecked: boolean;
  isStatic?: boolean;
  onClick?: (isChecked: boolean) => void;
};

export default function BadgeGroup({
  items,
  static: isStatic,
  className,
}: BadgeGroupProps) {
  const [selectedItems, setSelectedItems] = useState(
    items.map((item) => ({
      value: item,
      isChecked: false,
    }))
  );

  return (
    <div className={classNames("flex w-full flex-wrap gap-2", className)}>
      {selectedItems.map((item) => (
        <Badge
          key={item.value}
          isStatic={isStatic}
          onClick={(isChecked) => {
            if (!isStatic) {
              setSelectedItems((items) =>
                items.map((currentItem) => {
                  if (item.value === currentItem.value) {
                    return {
                      ...currentItem,
                      isChecked,
                    };
                  } else {
                    return currentItem;
                  }
                })
              );
            }
          }}
          {...item}
        />
      ))}
    </div>
  );
}

function Badge({ value, isChecked, isStatic, onClick }: BadgeProps) {
  return (
    <button
      className={classNames(
        "inline-flex items-center rounded-md border px-3 py-2 text-xs font-medium transition-colors duration-200",
        !isStatic ? "cursor-pointer hover:bg-gray-200" : "cursor-default",
        isChecked
          ? "border-accent bg-primary text-accent"
          : "border-transparent bg-gray-100"
      )}
      onClick={() => onClick && onClick(!isChecked)}
    >
      {value}
    </button>
  );
}

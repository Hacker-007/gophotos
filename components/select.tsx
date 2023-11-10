"use client";

import { ReactNode, useState } from "react";

import classNames from "@/utils/classnames";

import {
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";

import { Listbox } from "@/components/headless-ui";

type SelectProps<T> = {
  items: T[];
  keyFn: (item: T) => string;
  displayFn: (item: T) => ReactNode;
  onChange?: (item: T) => void;
  defaultItem?: T;
  className?: string;
};

export default function Select<T>({
  items,
  keyFn,
  displayFn,
  onChange,
  defaultItem,
  className,
}: SelectProps<T>) {
  const [selectedItem, setSelectedItem] = useState(defaultItem ?? items[0]);

  const handleChange = (item: T) => {
    setSelectedItem(item);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <Listbox
      value={selectedItem}
      onChange={handleChange}
      as="div"
      className="relative float-right h-full"
    >
      <Listbox.Button className={className}>
        {displayFn(selectedItem)}
        <ChevronUpDownIcon className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2" />
      </Listbox.Button>
      <Listbox.Options className="bg-white absolute top-[calc(100%+0.5rem)] z-10 w-full rounded-md border border-t border-gray-400 px-1 py-1">
        {items.map((item) => (
          <Listbox.Option key={keyFn(item)} value={item}>
            {({ active, selected }) => (
              <div
                className={classNames(
                  "relative flex items-center rounded-md py-1 pl-1 pr-2",
                  active && "bg-gray-200"
                )}
              >
                {displayFn(item)}
                {selected && (
                  <CheckIcon
                    className="absolute right-0 h-4 w-4 text-accent"
                    strokeWidth={2}
                  />
                )}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

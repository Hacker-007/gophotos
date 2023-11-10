"use client";

import { ReactNode, useState } from "react";

import classNames from "@/utils/classnames";

import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import {
  Combobox as HeadlessUIComboxbox,
  Popover,
} from "@/components/headless-ui";

import Fuse from "fuse.js";

type ComboboxProps<T> = {
  items: T[];
  keyFn: (item: T) => string;
  displayFn: (item: T) => string;
  onChange?: (item: T) => void;
  defaultItem?: T
  className?: string;
  children: (item: T) => ReactNode;
};

export default function Combobox<T>({
  items,
  keyFn,
  displayFn,
  onChange,
  defaultItem,
  className,
  children,
}: ComboboxProps<T>) {
  const [selectedItem, setSelectedItem] = useState(defaultItem ?? items[0]);
  const [query, setQuery] = useState("");

  const filteredItems =
    query === "" || query === undefined
      ? items
      : new Fuse(items, {
          includeScore: true,
          keys: ["name"],
        })
          .search(query)
          .map((result) => result.item);

  const handleChange = (item: T) => {
    setSelectedItem(item);
    if (onChange) {
      onChange(item)
    }
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={className} data-open={open}>
            {children(selectedItem)}
          </Popover.Button>
          <Popover.Panel className="absolute top-[calc(100%+0.5rem)] z-10 w-full overflow-hidden rounded-md border border-gray-400 bg-white shadow-lg">
            {({ close }) => (
              <HeadlessUIComboxbox
                value={selectedItem}
                onChange={(item) => {
                  handleChange(item);
                  close();
                }}
              >
                <div className="relative flex w-full items-center rounded-md">
                  <MagnifyingGlassIcon className="absolute left-1.5 h-4 w-4 text-gray-600" />
                  <HeadlessUIComboxbox.Input
                    className="w-full border-0 py-1 pl-[1.625rem] pr-2 text-sm text-gray-800 placeholder:text-gray-600 focus:ring-0"
                    autoFocus
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
                <HeadlessUIComboxbox.Options
                  className="border-t border-gray-400"
                  static
                >
                  {filteredItems.map((item) => (
                    <HeadlessUIComboxbox.Option
                      className="px-1 py-1"
                      key={keyFn(item)}
                      value={item}
                    >
                      {({ active, selected }) => (
                        <div
                          className={classNames(
                            "relative flex items-center rounded-md py-1 pl-[1.625rem] pr-2 text-sm",
                            active && "bg-gray-200"
                          )}
                        >
                          {selected && (
                            <CheckIcon
                              className="absolute left-1.5 h-4 w-4 text-accent"
                              strokeWidth={2}
                            />
                          )}
                          {displayFn(item)}
                        </div>
                      )}
                    </HeadlessUIComboxbox.Option>
                  ))}
                  {filteredItems.length === 0 && (
                    <div className="py-1 pl-[1.625rem] pr-2 text-sm text-gray-500">
                      <p>Nothing found.</p>
                    </div>
                  )}
                </HeadlessUIComboxbox.Options>
              </HeadlessUIComboxbox>
            )}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

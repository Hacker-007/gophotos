"use client";

import { useSyncedSearchFilters } from "@/context/synced-search-filter-context";

import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

import Select from "@/components/select";

const sortByFilters = [
  {
    value: "rating,descending",
    display: (
      <div className="flex items-center gap-1 whitespace-nowrap text-sm">
        <ArrowTrendingDownIcon className="h-4 w-4" />
        rating
      </div>
    ),
  },
  {
    value: "rating,ascending",
    display: (
      <div className="flex items-center gap-1 whitespace-nowrap text-sm">
        <ArrowTrendingUpIcon className="h-4 w-4" />
        rating
      </div>
    ),
  },
  {
    value: "price,ascending",
    display: (
      <div className="flex items-center gap-1 whitespace-nowrap text-sm">
        <ArrowTrendingUpIcon className="h-4 w-4" />
        price
      </div>
    ),
  },
  {
    value: "price,descending",
    display: (
      <div className="flex items-center gap-1 whitespace-nowrap text-sm">
        <ArrowTrendingDownIcon className="h-4 w-4" />
        price
      </div>
    ),
  },
];

export default function SortBy() {
  const { getQueryValue, updateURL } = useSyncedSearchFilters();

  const handleOnChange = (value: string) => {
    updateURL("sortBy", (_) => value);
  };

  return (
    <div className="flex flex-col items-end">
      <span className="text-xs text-gray-600">Sort by</span>
      <Select
        className="relative mt-1 min-w-[7rem] whitespace-nowrap rounded-md border border-gray-600 px-2 py-1 text-left"
        keyFn={(sortFilter) => sortFilter.value}
        displayFn={(sortFilter) => sortFilter.display}
        defaultItem={
          sortByFilters.find(
            (item) => item.value === getQueryValue("sortBy")
          ) ?? sortByFilters[0]
        }
        onChange={({ value }) => handleOnChange(value)}
        items={sortByFilters}
      />
    </div>
  );
}

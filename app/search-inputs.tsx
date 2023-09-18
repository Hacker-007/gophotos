"use client";

import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";

import { useSyncedSearchFilters } from "@/context/synced-search-filter-context";

import Button from "@/components/button";
import Combobox from "@/components/combobox";
import RangeSlider from "@/components/range-slider";

export default function SearchInputs() {
  const { getQueryValue, updateQueryParameter, batchUpdateURL } =
    useSyncedSearchFilters();

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div>
          <label className="text-xs font-medium">Location</label>
          <Combobox
            className="relative w-full rounded-md bg-white px-3 py-2 text-left text-sm data-[open=true]:ring-2 data-[open=true]:ring-accent"
            keyFn={(location) => location}
            displayFn={(location) => location}
            defaultItem={getQueryValue("location")}
            onChange={(location) =>
              updateQueryParameter("location", (_) => location)
            }
            items={["Cambridge, MA", "Seattle, WA"]}
          >
            {(location) => (
              <div className="flex items-center">
                <MapPinIcon className="absolute left-2 h-4 w-4" />
                <p className="pl-5">{location}</p>
              </div>
            )}
          </Combobox>
        </div>
        <div>
          <label className="text-xs font-medium">Hours</label>
          <div className="relative flex w-full items-center overflow-hidden rounded-md bg-white text-left text-sm focus-within:ring-2 focus-within:ring-accent">
            <input
              className="w-full border-0 px-3 py-2 text-gray-800 placeholder:text-gray-600 focus:ring-0"
              type="number"
              min={0}
              value={getQueryValue("hours")}
              onChange={(e) =>
                updateQueryParameter("hours", (_) => +e.target.value)
              }
            />
            <span className="absolute right-2 text-sm text-gray-500">
              hours
            </span>
          </div>
        </div>
        <div>
          <label className="text-xs font-medium">Price</label>
          <RangeSlider
            className="w-full px-3 py-2 focus:ring-2 focus:ring-accent"
            min={0}
            max={2000}
            step={25}
            minStepsBetweenThumbs={4}
            value={getQueryValue("price")}
            onValueChange={(range) =>
              updateQueryParameter("price", (_) => range)
            }
          >
            {([from, to]) => (
              <div className="flex gap-2">
                <div className="flex items-center justify-between gap-3 rounded-md bg-gray-100 p-1">
                  <p className="text-xs uppercase text-gray-700">from</p>
                  <p className="text-sm">${from}</p>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-md bg-gray-100 p-1">
                  <p className="text-xs uppercase text-gray-700">to</p>
                  <p className="text-sm">${to}</p>
                </div>
              </div>
            )}
          </RangeSlider>
        </div>
      </div>
      <div className="mt-4">
        <Button
          className="flex w-full items-center justify-center gap-1 rounded-md bg-accent px-2 py-1 font-medium text-secondary"
          onClick={batchUpdateURL}
        >
          <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import { Dialog, Disclosure } from "@/components/headless-ui";

import Button from "@/components/button";
import BadgeGroup from "@/components/badge-group";

export default function AdditionalFilters() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        className="h-min w-24 rounded-md border border-gray-600 px-2 py-1 text-sm"
        onClick={() => setIsDialogOpen(true)}
      >
        Filters
      </Button>
      <Dialog
        className="relative z-10"
        open={isDialogOpen}
        onClose={(isOpen) => setIsDialogOpen(isOpen)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="fixed bottom-0 w-screen rounded-t-md bg-white p-4">
          <div className="grid grid-cols-3 grid-rows-1">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="col-span-1 flex items-center gap-1 w-min rounded-full border border-gray-300 px-2 py-1 text-xs font-medium"
            >
              <ChevronLeftIcon className="h-3 w-3" />
              Back
            </Button>
            <Dialog.Title className="col-span-1 text-center text-lg font-medium">
              Filters
            </Dialog.Title>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <Disclosure defaultOpen>
              <Disclosure.Button className="flex w-full items-center justify-between">
                {({ open }) => (
                  <>
                    <span className="text-sm font-medium">Schools</span>
                    {open ? (
                      <ChevronUpIcon className="h-4 w-4 text-gray-600" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4 text-gray-600" />
                    )}
                  </>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="w-full">
                <BadgeGroup items={["MIT", "Harvard", "Boston University"]} />
              </Disclosure.Panel>
            </Disclosure>
            <div className="h-[1px] w-full space-y-1 bg-gray-200" />
            <Disclosure defaultOpen>
              <Disclosure.Button className="mt-2 flex w-full items-center justify-between">
                {({ open }) => (
                  <>
                    <span className="text-sm font-medium">Skills</span>
                    {open ? (
                      <ChevronUpIcon className="h-4 w-4 text-gray-600" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4 text-gray-600" />
                    )}
                  </>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="w-full">
                <BadgeGroup items={["Test 1", "Test 2", "Test 3"]} />
              </Disclosure.Panel>
            </Disclosure>
            <div className="h-[1px] w-full space-y-1 bg-gray-200" />
            <Disclosure defaultOpen>
              <Disclosure.Button className="flex w-full items-center justify-between">
                {({ open }) => (
                  <>
                    <span className="text-sm font-medium">Ratings</span>
                    {open ? (
                      <ChevronUpIcon className="h-4 w-4 text-gray-600" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4 text-gray-600" />
                    )}
                  </>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="w-full">
                <BadgeGroup items={["Test 1", "Test 2", "Test 3"]} />
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

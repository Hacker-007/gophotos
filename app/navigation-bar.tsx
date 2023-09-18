"use client";

import { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Button from "@/components/button";

import classNames from "@/utils/classnames";

export default function NavigationBar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-primary px-3">
      <div className="flex items-center gap-3">
        <h1 className="font-medium">GoPhotos</h1>
        <NavigationLink href="/">Home</NavigationLink>
      </div>
      <Button className="flex items-center gap-x-1 rounded-md bg-accent px-3 py-2 text-sm font-medium text-secondary">
        <span>Login</span>
        <ArrowLongRightIcon className="h-5 w-5" />
      </Button>
    </nav>
  );
}

type NavigationLink = {
  href: string;
  children: ReactNode;
};

function NavigationLink({ href, children }: NavigationLink) {
  const pathname = usePathname();
  const isSelected = pathname === href;

  return (
    <Link
      href={href}
      className={classNames(
        "relative text-sm font-medium",
        isSelected ? "text-black" : "text-gray-500"
      )}
    >
      {children}
      {isSelected && (
        <div className="absolute bottom-0 w-full border-t border-black" />
      )}
    </Link>
  );
}

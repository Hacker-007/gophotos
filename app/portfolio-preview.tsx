"use client";

import { useState } from "react";

import { StarIcon } from "@heroicons/react/24/solid";

import AccountCircle from "@/components/account-circle";
import Carousel from "@/components/carousel";
import PhotographerProfile from "./photographer-profile";

type PortfolioPreviewProps = {
  photographerId: string;
  name: string;
  location: string;
  estimatedPriceRange: [number, number];
  rating: number;
  numberOfReviews: number;
};

function formatRating(rating: number) {
  if (Number.isInteger(rating)) {
    return `${rating}.0`;
  } else {
    return `${rating}`;
  }
}

export default function PortfolioPreview({
  photographerId,
  name,
  location,
  estimatedPriceRange: estimatedPrice,
  rating,
  numberOfReviews,
}: PortfolioPreviewProps) {
  const [isPhotographerInformationOpen, setIsPhotographerInformationOpen] =
    useState(false);

  return (
    <div className="w-full rounded-md">
      <Carousel
        showViewProfileButton
        onViewProfileClick={() => setIsPhotographerInformationOpen(true)}
      />
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AccountCircle />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs">{location}</p>
          </div>
        </div>
        <div>
          <p className="text-right text-sm font-semibold">
            <span>${estimatedPrice[0]}</span> -{" "}
            <span>${estimatedPrice[1]}</span>
          </p>
          <p className="flex items-center justify-end text-xs">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            {formatRating(rating)} &middot; {numberOfReviews} reviews
          </p>
        </div>
      </div>
      <PhotographerProfile
        isOpen={isPhotographerInformationOpen}
        close={() => setIsPhotographerInformationOpen(false)}
      />
    </div>
  );
}
import { Inter } from "next/font/google";

import classNames from "@/utils/classnames";

import AdditionalFilters from "./additional-filters";
import SortBy from "./sort-by";
import PaginationControls from "./pagination-controls";
import PortfolioPreview from "./portfolio-preview";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
});

type HomeProps = {
  searchParams: { [key: string]: string | string | undefined };
};

export default function Home({}: HomeProps) {
  return (
    <main>
      <div className="flex w-full justify-between px-3 py-2">
        <div className="flex flex-col justify-end">
          <AdditionalFilters />
        </div>
        <SortBy />
      </div>
      <div
        className={classNames(
          inter.className,
          "grid w-full grid-cols-1 gap-4 px-3 py-2"
        )}
      >
        {[...Array(5)].map((_, idx) => (
          <PortfolioPreview
            key={idx}
            photographerId={`${idx}`}
            name="Bob Ross"
            location="Cambridge, MA"
            estimatedPriceRange={[150, 200]}
            rating={4.7}
            numberOfReviews={1027}
          />
        ))}
      </div>
      <PaginationControls className="px-3 py-2" />
    </main>
  );
}

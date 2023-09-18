import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { Dialog } from "@/components/headless-ui";
import AccountCircle from "@/components/account-circle";
import BadgeGroup from "@/components/badge-group";
import Button from "@/components/button";
import Carousel from "@/components/carousel";
import FillableLine from "@/components/fillable-lines";
import PaginationControls from "./pagination-controls";
import RequestQuote from "./request-quote";

type PhotographerProfileProps = {
  isOpen: boolean;
  close: () => void;
};

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  preload: true,
});

export default function PhotographerProfile({
  isOpen,
  close,
}: PhotographerProfileProps) {
  return (
    <Dialog className="relative z-10" open={isOpen} onClose={close}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog.Panel className="fixed bottom-0 h-full w-full space-y-4 overflow-y-auto bg-white p-4">
        <div className="text-left">
          <Button
            onClick={close}
            className="flex items-center gap-1 rounded-full border border-gray-300 px-2 py-1 text-xs font-medium"
          >
            <ChevronLeftIcon className="h-3 w-3" />
            Back
          </Button>
        </div>
        <div>
          <div>
            <Carousel />
            <div className="mt-2 flex justify-between">
              <div className="flex items-center space-x-2">
                <AccountCircle />
                <div>
                  <p className="font-medium">Bob Ross</p>
                  <p className="text-xs">Cambridge, MA</p>
                </div>
              </div>
              <div>
                <p className="flex items-center justify-end gap-1 font-medium">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  4.9
                </p>
                <p className="flex items-center justify-end gap-1 text-sm">
                  hired <span className="font-medium">2,763</span> times
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-md border border-gray-200 p-2">
          <div>
            <p className="text-sm font-medium">Estimated price</p>
            <p className="text-lg font-semibold">$150 - $500</p>
          </div>
          <RequestQuote />
        </div>
        <div>
          <h3 className="text-sm font-medium">About</h3>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, quae. Asperiores ratione facilis praesentium animi
            recusandae, nihil incidunt sed aperiam. Facere inventore, ratione
            harum quibusdam labore impedit nisi exercitationem non.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Skills</h3>
          <BadgeGroup
            className="mt-1"
            items={["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"]}
            static
          />
        </div>
        <div className="rounded-md">
          <h3 className="text-sm font-medium">Reviews and ratings</h3>
          <div>
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <h4 className="text-2xl font-medium">
                4.6
                <span className="text-sm text-gray-600"> / 5.0</span>
              </h4>
            </div>
            <p className="mb-2 text-xs text-gray-500">2376 reviews</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h4 className="text-sm font-medium">Category</h4>
              <FillableLine className="mt-1" value={4} maxValue={5} />
            </div>
            <div>
              <h4 className="text-sm font-medium">Category</h4>
              <FillableLine className="mt-1" value={4} maxValue={5} />
            </div>
            <div>
              <h4 className="text-sm font-medium">Category</h4>
              <FillableLine className="mt-1" value={4} maxValue={5} />
            </div>
            <div>
              <h4 className="text-sm font-medium">Category</h4>
              <FillableLine className="mt-1" value={4} maxValue={5} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[...Array(5)].map((_, idx) => (
            <Rating key={idx} />
          ))}
        </div>
        <PaginationControls className={spaceGrotesk.className} />
      </Dialog.Panel>
    </Dialog>
  );
}

function Rating() {
  return (
    <div className="rounded-md border border-gray-200 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AccountCircle />
          <div>
            <p className="font-medium">Bob Ross</p>
            <p className="text-xs text-gray-600">September 16, 2023</p>
          </div>
        </div>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <h4 className="font-medium">
            4.6
            <span className="text-gray-600"> / 5.0</span>
          </h4>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti
        recusandae labore sequi nemo nihil enim qui doloribus cumque animi
        laborum maxime, corporis atque explicabo expedita, numquam aspernatur
        debitis praesentium.
      </p>
    </div>
  );
}

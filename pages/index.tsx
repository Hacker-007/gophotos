import Marquee from "@/components/Marquee";
import { Playfair_Display as PlayfairDisplay } from "next/font/google";

import Image from "next/image";

const playfairDisplay = PlayfairDisplay({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="grid h-full w-full grid-cols-12 gap-5">
      <div className="col-span-5 flex flex-col justify-center">
        <h1
          className={`${playfairDisplay.className} text-6xl font-medium col-span-2`}
        >
          Beautiful Moments <br /> Are Everything
        </h1>
        <h2 className="col-start-1 mt-3 max-w-sm text-sm text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
          vero rerum exercitationem
        </h2>
        <button className="mt-10 flex w-fit items-center justify-center rounded-md border border-black p-2 font-medium">
          <span className="flex-shrink-0">Join Waitlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-2 h-6 w-6 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-2 col-start-6 mt-3">
        <Marquee
          images={[...Array(3)].map(
            (_) =>
              "https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          )}
        />
      </div>
      <div className="col-span-2 col-start-9 mt-3">
        <Marquee
          images={[...Array(3)].map(
            (_) =>
              "https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          )}
          reversed
        />
      </div>
    </main>
  );
}

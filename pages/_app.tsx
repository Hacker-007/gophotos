import "@/styles/globals.css";

import { Inter } from "next/font/google";

import type { AppProps } from "next/app";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div
      className={`${inter.className} flex h-screen w-screen flex-col bg-zinc-100 px-16 pt-7`}
    >
      <nav className="h-10 w-full flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Artisan<span className="text-xl">.</span>
        </Link>
        <div className="space-x-12">
          <Link href="/" className="font-medium text-sm">
            About Us
          </Link>
        </div>
      </nav>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}

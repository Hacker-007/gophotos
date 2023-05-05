import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.className} flex h-screen w-screen flex-col bg-zinc-100 px-16 pt-7`}
    >
      <nav className="flex h-10 items-center justify-between">
        <Link href="/" className="font-semibold">
          Artisan<span className="text-xl">.</span>
        </Link>
        <div className="space-x-12">
          <Link href="/" className="font-medium text-sm">
            About Us
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

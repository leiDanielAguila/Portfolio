import * as React from "react";
import "../app/globals.css";
import Link from "next/link";
export default function TopNav() {
  return (
    <div className="object-top h-16 p-6 flex flex-row w-full">
      <div className="w-full">
        <h1 className="text-sky-50 text-lg font-bold">Aspiring Developer</h1>
      </div>
      <div className="flex flex-row w-full justify-end">
        <Link href="/" className="text-sky-50 text-m px-4 hover:text-stone-500 cursor-pointer">
          Home
        </Link>

        <Link
          href="/about"
          className="text-sky-50 text-m px-4 hover:text-stone-500 cursor-pointer"
        >
          About
        </Link>
        <h1 className="text-sky-50 text-m px-4 hover:text-stone-500 cursor-pointer">
          Portfolio
        </h1>
      </div>
    </div>
  );
}

import * as React from "react";
import "src/app/globals.css";
export default function Page() {
  return (
    <div className="object-top flex flex-row h-16 p-6">
      <div className="flex flex-row w-full">
        <h1 className="text-sky-50 text-lg font-bold">Aspiring Developer</h1>
      </div>
      <div className="justify-end flex flex-row w-full">
        <h1 className="text-sky-50 text-m px-4">Home</h1>
        <h1 className="text-sky-50 text-m px-4">About</h1>
        <h1 className="text-sky-50 text-m px-4">Portfolio</h1>
      </div>
    </div>
  );
}
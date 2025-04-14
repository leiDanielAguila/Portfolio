import TopNav from "@/components/TopNav";
import * as React from "react";
import "./globals.css";
import { DM_Serif_Display } from "next/font/google";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div>
      <TopNav />
      <div className="h-116 m-4 mt-12 p-4 flex flex-row">
        <div className=" w-1/2">
          <div className="flex flex-col justify-start items-center">
            <h1
              className={`${dm_serif.className} text-white text-6xl tracking-wide`}
            >
              I'm Lei, a Computer Science Student
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <p className="text-zinc-500 tracking-normal text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="w-1/2 ">

        </div>
      </div>
    </div>
  );
}

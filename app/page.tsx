import TopNav from "@/components/TopNav";
import * as React from "react";
import "./globals.css";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { Divider } from "@mui/material";
const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div>
      <TopNav />
      <div className="ml-4 mt-12 pt-4 pl-4 pr-4 flex flex-row">
        <div className=" w-1/2">
          <div className="flex flex-col justify-start items-center">
            <h1
              className={`${dm_serif.className} text-white text-6xl tracking-wide`}
            >
              I'm Lei, a Computer Science Student
            </h1>
          </div>
          {/* my short description */}
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
          <div>
            {/* my social media links */}
          </div>
        </div>
        {/* my picture */}
        <div className="w-1/2 ">
          <Image src="/me.png" alt="my picture" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

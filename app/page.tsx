import TopNav from "@/components/TopNav";
import * as React from "react";
import "./globals.css";
import { DM_Serif_Display } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { Divider } from "@mui/material";
const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const open_sans = Open_Sans({
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
            <p className={`${open_sans.className} text-zinc-500 tracking-normal text-justify`}>
              Motivated Computer Science student skilled in programming and
              graphic design, with expertise in technology. Strong leadership and
              multitasker, adept at managing projects and collaborating under
              pressure. Combines technical skills with creativity to build
              engaging solutions. Eager to contribute in dynamic environments
              and drive impactful results.
            </p>
          </div>
          <div>{/* my social media links */}</div>
        </div>
        {/* my picture */}
        <div className="w-1/2 ">
          <Image src="/me.png" alt="my picture" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

import TopNav from "@/components/TopNav";
import * as React from "react";
import "./globals.css";
import { DM_Serif_Display } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
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
            <p
              className={`${open_sans.className} text-2xl text-zinc-500 tracking-normal text-justify`}
            >
              Motivated Computer Science student skilled in programming and
              graphic design, with expertise in technology. Strong leadership
              and multitasker, adept at managing projects and collaborating
              under pressure. Combines technical skills with creativity to build
              engaging solutions. Eager to contribute in dynamic environments
              and drive impactful results.
            </p>
            <div className="text-white mt-2 pt-12">
              <h1
                className={`${open_sans.className} pb-4 text-white text-xl font-bold`}
              >
                Connect with me:
              </h1>
              <div className="flex flex-row gap-4">
                <a href="https://github.com/leiDanielAguila" target="_blank">
                  <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/christlei-daniel-aguila-bb2215318/"
                  target="_blank"
                >
                  <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                </a>
                <a href="https://www.facebook.com/lei.daniel.2025/" target="_blank">
                  <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* my picture */}
        <div className="w-1/2">
          <Image src="/me.png" alt="my picture" width={400} height={400} className="ml-42"/>
        </div>
      </div>
    </div>
  );
}

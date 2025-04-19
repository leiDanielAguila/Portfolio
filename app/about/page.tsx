import * as React from "react";
import "../globals.css";
import TopNav from "@/components/TopNav";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <div>
      <TopNav />
      <div className="m-4 p-4 flex flex-col">
        <h1 className="text-white text-3xl tracking-wide">
          Hi, my name is Christlei but you can call me Lei! 👋
        </h1>
        <p className="text-zinc-500 tracking-normal text-justify m-2 p-2">
          This page is where you'll get to know me beyond my resume. I'll share
          my journey in tech, my passions like Formula 1 and at the moment
          cybersecurity, and what drives me as a developer. Think of it as a
          quick intro to who I am, what I do, and why I love it. Stick around
          maybe we'll build something great together!
        </p>
      </div>
      <div className="flex flex-col m-2 p-2 justify-center items-center">
        <h6 className="text-white text-xl tracking-wide">
          Why I chose University of the East
        </h6>
        <Tooltip title="Click to scroll down">
          <a href="#why-ue" className="text-white">
            <Image
              src="/arrow_down.png"
              alt="arrow down"
              width={100}
              height={100}
            />
          </a>
        </Tooltip>
      </div>
      <div
        className="bg-[url('/ue_wallpaper.jpg')] bg-fixed bg-cover bg-end h-96 w-full"
        style={{ backgroundImage: "url('/ue_wallpaper.jpg')" }}
      ></div>
      <br />
      <div className="m-4 p-4 flex flex-col" id="why-ue">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          Why I Chose UE for My Computer Science Studies
        </h1>
        <p className="text-zinc-500 text-xl tracking-normal text-justify m-2 p-2">
          I decided to pursue my Computer Science degree at the University of
          the East (UE) because of its strong CHED accreditation, ensuring a
          high-quality education that meets national standards. At the time, it
          was the most cost-effective institution that delivered top-notch
          Computer Science education, making it the perfect choice for me as a
          student seeking both value and quality. Plus, red has always been my
          favorite color, and UE’s vibrant school colors made me feel even more
          connected to its spirited academic community. The combination of
          academic credibility, affordability, and a lively campus environment
          made UE the ideal place for me to grow as a future IT professional.
        </p>
      </div>
      <div className="flex flex-col m-2 p-2 justify-center items-center">
        <h6 className="text-white text-xl tracking-wide">
          My Free time Activities
        </h6>
        <Tooltip title="Click to scroll down">
          <a href="#hobby" className="text-white">
            <Image
              src="/arrow_down.png"
              alt="arrow down"
              width={100}
              height={100}
            />
          </a>
        </Tooltip>
      </div>
      <div
        className="mt-12 bg-[url('/f1_car.jpg')] bg-fixed bg-cover bg-end h-96 w-full"
        style={{ backgroundImage: "url('/f1_car.jpg')" }}
      ></div>
      <div className="m-4 p-4 flex flex-col" id="hobby">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          Formula 1 
        </h1>
        <p className="text-zinc-500 text-xl tracking-normal text-justify m-2 p-2">
          In my free time, one of my favorite hobbies is following Formula 1.
          There’s something incredibly intriguing about the perfect blend of
          speed, strategy, and cutting-edge technology. It’s not just about fast
          cars racing around a track it’s a complex sport where every
          millisecond counts, and tiny decisions can change the outcome of an
          entire race. What fascinates me most is the constant battle between
          teams to innovate and gain even the slightest edge, whether it's
          through aerodynamics, tire strategy, or pit stop timing. The rivalry
          between drivers, the unpredictability of weather and crashes, and the
          global scale of the sport from Monaco to Japan make every race feel
          like an adrenaline-filled chess match. Watching F1 isn't just
          exciting it’s a deep dive into precision, teamwork, and relentless
          competition, and that’s what keeps me hooked.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

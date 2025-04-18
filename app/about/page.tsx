import * as React from "react";
import "../globals.css";
import TopNav from "@/components/TopNav";
import Image from "next/image";

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
        <a href="#why-ue" className="text-white">
          WHY UE?
        </a>
      </div>
      <div
        className="bg-[url('/ue_wallpaper.jpg')] bg-fixed bg-cover bg-end h-96 w-full"
        style={{ backgroundImage: "url('/ue_wallpaper.jpg')" }}
      ></div>
      <div className="m-4 p-4 flex flex-col" id="why-ue">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          Why I Chose UE for My Computer Science Studies
        </h1>
        <p className="text-gray-200 tracking-normal text-justify m-2 p-2">
          I decided to pursue my Computer Science degree at the University of
          the East (UE) because of its strong CHED accreditation, ensuring a
          high-quality education that meets national standards. At the time, it
          was the most cost-effective institution that delivered top-notch
          Computer Science education, making it the perfect choice for me as a
          student seeking both value and quality.Plus, red has always been my
          favorite color, and UE’s vibrant school colors made me feel even more
          connected to its spirited academic community. The combination of
          academic credibility, affordability, and a lively campus environment
          made UE the ideal place for me to grow as a future IT professional.
        </p>
      </div>
    </div>
  );
}

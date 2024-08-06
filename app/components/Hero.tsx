
// components/Hero.tsx

"use client";




import React from "react";
import usersIcon from "@/public/users.svg";
import hero from "@/public/Uploaded video - Transcript 2.png";

import Image from "next/image";



const userImages = [
  "/Hero/Profiles/Profile1.svg",
  "/Hero/Profiles/Profile2.svg",
  "/Hero/Profiles/Profile3.svg",
  "/Hero/Profiles/Profile1.svg",
  "/Hero/Profiles/Profile2.svg",
  "/Hero/Profiles/Profile3.svg",
];



const Hero: React.FC = () => {

  return (
    <section className="w-full h-auto bg-gradient-to-b from-white to-[#FEEEFF] flex flex-col items-center px-4 md:px-8">
      <div className="relative top-[180px] gap-[24px] w-full max-w-[1068px] flex flex-col items-center justify-center">
        <div className="gap-[16px] flex flex-col items-center">
          <h1 className="font-inter text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[58.09px] text-center text-[#101010]">
            Your All-In-One{" "}
            <span className="text-[#F97316]"> Media Conversion Tool</span>
          </h1>
          <p className="font-manrope text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[27.32px] text-center text-[#1F1F1F]">
            From text to video, audio to summaries - we’ve got you covered.
          </p>
          <button className="w-[135px]  px-[16px] py-[8px] rounded-[6px] bg-[#F97316] text-white">
            Get Started
          </button>
        </div>
        <div className="w-full flex items-center mx-auto justify-center gap-2">
          <Image src={usersIcon} alt="people" />

          <p className="font-manrope text-[12px] font-medium leading-[16.2px] text-left text-[#1F1F1F] ">
            Loved by 12,000 users
          </p>
        </div>
      </div>
      <div className="w-full h-auto max-w-[986px] mt-[30px]  border-[#FFF9FF] ">
        <Image src={hero} alt="Hero" className="w-full h-full rounded-[36px]" />
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";

const GetStarted = () => {
  return (
    <section className="flex flex-col md:py-[92px] py-[30px] items-center justify-center bg-[#F97316]">
      <div className="md:max-w-[767px] w-full m-auto text-center">
        <h3 className="text-[#ffffff] text-[24px] md:text-[40px] md:leading-[54.6px] font-bold">
          Unlock Your Content&apos;s Potential Now!
        </h3>
        <p className="text-[18px] leading-[24.3px] font-normal text-[#F4F4F5] px-[12px] py-[16px]">
          Create, transform, and enhance all your content with powerful AI tools
          designed for creators, researchers, professionals, and educators.
        </p>
        <button className="transition h-[56px] px-[56px] py-[16px] rounded-[32px] bg-[#1A1A1A] hover:bg-[#555555] text-white text-[14px] leading-[24px] mt-[24px] text-[#ffffff] duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;

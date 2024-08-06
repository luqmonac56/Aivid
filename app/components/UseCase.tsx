"use client";
import React, { useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";

// Define the structure for the use cases
interface UseCaseTop {
  icon: React.ReactElement;
  text: string;
  bgColor: string;
  textColor: string;
}

interface UseCaseBottom {
  icon: React.ReactElement;
  text: string;
}

// Top use cases data
const useCasesTop: UseCaseTop[] = [
  {
    icon: <HiOutlineVideoCamera size={18} />,
    text: "Content Creators",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
  {
    icon: <PiBookOpenTextLight size={18} />,
    text: "Educators",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    icon: <CiSearch size={18} />,
    text: "Researchers",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    icon: <BsPerson size={18} />,
    text: "Professionals",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
];

// Bottom use cases data based on top selection
const useCasesBottom: { [key: string]: UseCaseBottom[] } = {
  "Content Creators": [
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Convert blog posts into engaging videos to increase audience engagement.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Create visually appealing slideshows for social media posts and stories.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Design attractive thumbnails for YouTube videos to boost click-through rates.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Summarize key points from YouTube videos to create highlight reels and social media snippets.",
    },
  ],
  Educators: [
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Turn lesson plans and educational materials into interactive videos for students.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Design educational slideshows to enhance visual learning in the classroom.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Transcribe educational videos to provide written material for students.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Provide students with concise summaries of educational podcasts for easier learning.",
    },
  ],
  Researchers: [
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Present research findings visually to make data more accessible and engaging.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Convert video interviews and lectures into written transcripts for analysis.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Quickly grasp the essence of academic papers and lengthy research documents.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Document oral interviews and focus groups for qualitative analysis.",
    },
  ],
  Professionals: [
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Create training videos from written manuals or guides for easier consumption.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Design engaging thumbnails for webinars and online courses.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Document webinars and training sessions in text format for easy reference.",
    },
    {
      icon: <GrStatusGood size={24} color="#09090B" />,
      text: "Keep accurate records of meetings and conference calls.",
    },
  ],
};

const UseCase: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string>("Content Creators");

  return (
    <section className="w-full h-auto mt-[60px] mx-auto gap-[10px] flex flex-col items-center">
      <h1 className="font-manrope text-[30px] md:text-[40px] font-bold leading-[54.64px] text-center">
        Use Case
      </h1>
      <div className="w-auto h-auto gap-[20px] mx-6 mt-2 flex flex-col items-center justify-center">
        <div className="w-full h-auto p-[8px] justify-between rounded-[28px] bg-gray-100 border border-gray-300 flex flex-col items-center md:flex-row">
          {useCasesTop.map((caseItem, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-[24px] cursor-pointer ${
                activeCase === caseItem.text
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setActiveCase(caseItem.text)}
            >
              {caseItem.icon}
              <p className="font-manrope text-[16px] font-semibold leading-[20px] ml-2">
                {caseItem.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-auto h-auto p-[24px] gap-[16px] rounded-[16px] bg-gray-100 border border-gray-300 flex flex-col mt-5">
          {useCasesBottom[activeCase]?.map((caseItem, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              {caseItem.icon}
              <p className="font-manrope text-[16px] font-medium leading-[20px] text-[#09090B]">
                {caseItem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;

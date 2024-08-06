"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Switch } from "@/components/ui/switch";
import { useCallback } from "react";
import Image from "next/image";
import Arrowback from "@/public/icons/Arrow-back.png";

const DataPrivacy = () => {
  const privacyData = [
    {
      title: "Profile Visibility",
      body: "Choose whether your profile is visible to everyone or just your contacts. Public profiles are viewable by all, making it easier to connect with new people. Private profiles are only visible to those you approve, giving you control over your information.",
      id: 1,
    },
    {
      title: "Share Data with Partners",
      body: "Allow us to share your data with trusted partners for personalized promotions and offers. This helps us provide you with relevant content, discounts, and services tailored to your interests.",
      id: 2,
    },
    {
      title: "Receive Email Updates",
      body: "Opt in to receive updates on the latest features, exciting promotions, and important news directly to your email. Stay informed and take advantage of exclusive offers and updates designed to enhance your experience with us.",
      id: 3,
    },
    {
      title: "Use Data Encryption",
      body: "Enable data encryption to protect your information from unauthorized access. By turning on this feature, all data transmitted between your device and our servers is encrypted, making it virtually impossible for hackers to intercept and read your data. This ensures that your personal information, including login credentials, messages, and other sensitive data, is kept secure and private.",
      id: 4,
    },
    {
      title: "Allow Analytics",
      body: "Enable third-party analytics services to help us gain insights into user behavior and improve our app's performance. By allowing these services, we can collect and analyze data on how you interact with the app, such as which features you use most, how you navigate through the interface, and where you might encounter issues. This information is crucial for us to identify trends, enhance user experience, and make data-driven decisions to optimize the app’s functionality and usability.",
      id: 5,
    },
  ];

  const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const isChecked = !target.classList.contains("bg-[#F97316]");
    target.className = isChecked ? "bg-[#F97316]" : "bg-[#E2E8F0]";
  }, []);

  return (
    <div className="max-w-[980px] pb-6">
      <div className="flex items-center gap-6 mb-6">
        <button className="md:hidden block">
          <Image src={Arrowback} alt="arrow back" />
        </button>
        <h1 className="md:text-[28px] text-2xl  text-[#0A0A0A] font-semibold ">
          Data & Privacy
        </h1>
      </div>
      <div className="">
        <h2 className="text-[#0A0A0A] font-semibold text-lg md:text-2xl mb-4">
          Choose how we use your data
        </h2>
        <p className="text-sm md:text-base text-[#525252] ">
          Your data is important for helping improve and personalize Convey, and
          you have control over how it is used. You can change these settings
          anytime if you feel like playing a part in our development.
          <Link href="#" className="border-b border-[#525252]  pb- ml-1">
            Learn more.
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-6 py-4 md:py-0 mt-6">
        {privacyData.map((item, index) => (
          <div
            key={index}
            className="border-[#CBD5E1] rounded-[2px] border p-2 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[#0A0A0A] font-semibold text-lg md:text-2xl">
                {item.title}
              </h2>
              <Switch
                defaultChecked={false}
                onClick={handleToggle}
                className="bg-[#E2E8F0]"
                style={{
                  width: "40px",
                  height: "20px",
                  borderRadius: 50,
                  zIndex: 0,
                }}
              />
            </div>
            <p className="text-sm md:text-base text-[#525252]">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-4 justify-center  md:justify-end items-center mt-6">
        <Button className="bg-white w-[45%] md:w-fit px-4 py-2 text-[#0F172A] border-[#E2E8F0] border font-medium rounded-[6px] hover:bg-[#FBA163] transition duration-300 ">
          Cancel
        </Button>
        <Button className="bg-[#F97316] w-[45%] md:w-fit px-4 py-2 text-[#FFFAF6] font-medium rounded-[6px] hover:bg-[#FBA163] transition duration-300 ">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default DataPrivacy;

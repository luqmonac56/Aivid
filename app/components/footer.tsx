import logo from "../../public/Images/logo.png";
import Image from "next/image";
import copy from "../../public/Images/copy.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid mx-auto bg-[#1A1A1A] text-[#E6F4FA] gap-2">
      <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-6 w-full md:px-20 px-10 p-10">
        <div className="flex flex-col gap-6">
          <Image src={logo} alt="logo" width={160} height={40} />
          <p className="w-[197px] md:text-[16px] text-[14px] font-normal">
            Instantly summarize and transcribe any video with ease.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-xl font-semibold text-[#FEF1E8]">Product</h3>
          <ul className="flex flex-col items-start text-base gap-4 cursor-pointer">
            <li>
              <Link href="#">YouTube Summariser</Link>
            </li>
            <li>
              <Link href="#">Text-to-Video Generator</Link>
            </li>
            <li>
              <Link href="#">Audio Transcriber</Link>
            </li>
            <li>
              <Link href="#">Image-to-Video Generator</Link>
            </li>
            <li>
              <Link href="#">Podcast Summariser</Link>
            </li>
            <li>
              <Link href="#">Thumbnail Generator</Link>
            </li>
            <li>
              <Link href="#">PDF Summariser</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-xl font-semibold text-[#FEF1E8]">Support</h3>
          <ul className="flex flex-col items-start text-base gap-4 cursor-pointer">
            <li>
              <Link href="#">Resources</Link>
            </li>
            <li>
              <Link href="#">My Account</Link>
            </li>
            <li>
              <Link href="#">Help & Support</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-xl font-semibold text-[#FEF1E8]">Legal</h3>
          <ul className="flex flex-col items-start text-base gap-4 cursor-pointer">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms and condition</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-[0.5px] w-full bg-[#A9A9A9]" />
      <div className="w-full flex justify-between md:items-center items-start p-5 md:px-20 px-10 md:flex-row flex-col md:gap-0 gap-2">
        <div className="flex ">
          <p className="text-base flex items-center gap-1 ">
            <Image src={copy} alt="copyright" />
            2024 All Rights Reserved
          </p>
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

// components/Products.tsx
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    imageSrc: "/path/to/image1.png",
    h2Text: "Text-to-Video Generator",
    pText:
      "Transform your written content into engaging videos with animations and visuals in minutes.",
  },
  {
    imageSrc: "/path/to/image2.png",
    h2Text: "Audio-to-Text Converter",
    pText:
      "Convert your audio files into accurate text documents quickly and efficiently.",
  },
  {
    imageSrc: "/path/to/image2.png",
    h2Text: "Audio-to-Text Converter",
    pText:
      "Convert your audio files into accurate text documents quickly and efficiently.",
  },
  {
    imageSrc: "/path/to/image2.png",
    h2Text: "Audio-to-Text Converter",
    pText:
      "Convert your audio files into accurate text documents quickly and efficiently.",
  },
  {
    imageSrc: "/path/to/image2.png",
    h2Text: "Audio-to-Text Converter",
    pText:
      "Convert your audio files into accurate text documents quickly and efficiently.",
  },
  {
    imageSrc: "/path/to/image2.png",
    h2Text: "Audio-to-Text Converter",
    pText:
      "Convert your audio files into accurate text documents quickly and efficiently.",
  },
  {
    imageSrc: "/path/to/image2.png",
    h2Text: "Audio-to-Text Converter",
    pText:
      "Convert your audio files into accurate text documents quickly and efficiently.",
  },
  // Add more products as needed
];

const Products: React.FC = () => {
  console.log("Products component rendered");
  return (
    <section className="w-full h-auto mt-[70px] mx-auto gap-[32px] flex flex-col items-center justify-center">
      <div className="w-auto text-center flex flex-col items-center justify-center mx-6">
        <h1 className="font-manrope text-[30px] md:text-[40px] font-bold  text-center text-[#1F1F1F]">
          Explore Our Products
        </h1>
      </div>
      <div className="w-auto mx-6 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  lg:gap-[40px] items-start mt-2 max-w-[1280px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-auto  h-auto p-[24px] gap-[8px] rounded-[16px] bg-[#FAFAFA] flex flex-col"
          >
            <div className="w-full flex flex-col items-start">
              <Image
                src={product.imageSrc}
                alt={`Product ${index + 1}`}
                width={64}
                height={64}
                className="w-[54px] md:w-[64px] md:h-[64px] object-cover "
              />
              <div className="w-full  flex-1 items-start mt-4">
                <h2 className="font-inter text-[21px] md:text-[24px] font-bold leading-[29.05px] text-[#1F1F1F] ">
                  {product.h2Text}
                </h2>
                <p className="font-inter text-[14px] font-medium leading-[16.94px] text-[#4B4B4B] mt-2">
                  {product.pText}
                </p>
                <div className="mt-4 flex items-center">
                  <p className="font-inter text-[16px] font-semibold leading-[19.36px] text-[#B61DC0]">
                    Try it now
                  </p>
                  <FaArrowRight className="ml-2 text-[#B61DC0]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

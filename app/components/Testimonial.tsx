"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import User1 from "../../public/users/user1.svg";
import User2 from "../../public/users/user2.svg";
import User3 from "../../public/users/user3.svg";
import User4 from "../../public/users/user4.svg";
import User5 from "../../public/users/user5.svg";
import User6 from "../../public/users/user6.svg";
import Rating from "../../public/icons/star.png";

const marqueeVariants1 = {
  animate: {
    x: [0, 80],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
        ease: "linear",
        delay: 0.1,
      },
    },
  },
};

const marqueeVariants = {
  animate: {
    x: [0, -160],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
        ease: "linear",
      },
    },
  },
};

const Testimonial = () => {
  return (
    <section className="py-[50px] mt-[70px]">
      <div className="">
        <h4 className="text-[#09090B] text-[24px] px-[34px] md:text-[40px] md:leading-[48px] text-center font-[600] mb-[40px]">
          See what our users say about us
        </h4>
        <div className="relative w-[100vw] max-w-full overflow-x-hidden">
          <div className="absolute left-[-75px] md:left-[-70px] w-[152px] md:w-[236px] h-full bg-white/70 z-10 rounded-[50%]"></div>
          <div className="absolute right-[-75px] md:right-[-70px] w-[152px] md:w-[236px] h-full bg-white/70 z-10 rounded-[50%]"></div>
          <motion.div
            className="flex flex-nowrap gap-[16px] w-full mb-[16px] will-change-transform"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  The <b>integration capabilities</b> with my existing workflows
                  are seamless. Highly recommended!
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User1}
                    alt="sophie more CTO Lambda"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Sophie More
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  CTO of Lambda
                </p>
              </div>
            </div>

            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  The <b>speed</b> at which I get my transcriptions and
                  summaries is incredible. A real time-saver
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User2}
                    alt="Adam more CTO Lambda"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Adam Gwadyr
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Entrepreneur
                </p>
              </div>
            </div>

            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  The tool is very <b>secure and private</b>. I feel confident
                  using it for all my video content.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User1}
                    alt="sophie more CTO Lambda"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Sophie Moore
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Head of marketing
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-[16px] w-full mb-[16px] will-change-transform"
            variants={marqueeVariants1}
            animate="animate"
          >
            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  I love the <b>concise summaries</b>. It saves me so much time
                  when reviewing videos.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User2}
                    alt="sophie more CTO Lambda"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Adam Gwadyr
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Entrepreneur
                </p>
              </div>
            </div>

            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  I&apos;ve tried a lot of video summarizers, but{" "}
                  <b>this one is by far the best!</b> It&apos;s , and it has all
                  the features I need. Game changer!
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User3}
                    alt="user avatar icon"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Annie Deway
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Designer
                </p>
              </div>
            </div>

            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  Having <b>keywords highlighted</b> makes referencing so much
                  easier. A fantastic tool!
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User4}
                    alt="user image icon"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Michel O Neil
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Head of sales
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-[16px] w-full mb-[16px] will-change-transform"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  The <b>accuracy of the transcriptions</b> is unmatched. I
                  don&apos;t need to make any edits!
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User4}
                    alt="user avatar icon"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Ella Moridin
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Product Designer
                </p>
              </div>
            </div>

            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  This app is so <b>simple yet so powerful!</b> I love how I can
                  easily add upload my videos and transcribe immediately!.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User5}
                    alt="USer avatar icon"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Mary Cath
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Solo-Entrepreneur
                </p>
              </div>
            </div>

            <div className="rounded-[16px] p-[16px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] md:flex-[0_0_470px] flex-[0_0_300px]">
              <div className="mb-[12px]">
                <Image
                  src={Rating}
                  alt="User rating"
                  height={20}
                  className="h-[20px]"
                />
              </div>
              <div className="mb-[12px]">
                <p className="leading-[24px] text-[#09090B]">
                  The <b>multilingual support</b> feature is amazing. Now I can
                  work with videos in different languages effortlessly.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                  <Image
                    src={User6}
                    alt="User avatar icon"
                    className="h-[40px] w-[40px] rounded-[999px]"
                  />
                  <span className="text-[#2E2E2E] text-[14px] font-bold leading-[20px]">
                    Johana Smith
                  </span>
                </div>
                <p className="text-[14px] text-[#09090B] leading-[20px]">
                  Founder of something cool
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

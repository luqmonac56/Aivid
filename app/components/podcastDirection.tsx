import React from "react";
import { UploadCloud } from "lucide-react";
import { Link } from "lucide-react";

const PodcastDirection = () => {
  return (
    <div className="container mt-20 py-10">
      <div className="flex flex-col text-center mb-20">
        <h1 className=" text-[28px] md:text-[44px] font-semibold text-[#0E0E10] mb-2">
          How does Podcast Summarizer work?
        </h1>
        <p className=" text-sm md:text-[18px] font-medium text-[#555555]">
          Our Podcast Summarizer simplifies the process in three easy steps.
        </p>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap text-center">
          <div className="w-full md:w-1/3 p-2">
            <div className="">
              <h2 className=" text-xl  md:text-2xl font-semibold text-[#0E0E10] mb-2">
                1. Paste or Upload
              </h2>
              <p className="mb-6 text-sm md:text-base font-medium text-[#555555]">
                Easily upload your audio file or simply paste the audio link
                into our platform.
              </p>
              <div className="border border-[#7E97B4] rounded-[20px] flex flex-col justify-center items-center h-[308px]">
                <div className="bg-[#F97316] w-[288px] flex justify-center py-[8.239px] text-white rounded-[9.087px] mb-4">
                  <div className="mr-2">
                    <UploadCloud />
                  </div>
                  <span className="text-sm font-medium">Upload a file</span>
                </div>
                <div className="flex justify-center items-center mb-4">
                  <span className="bg-[#EBEBEB] h-[1.03px] w-[90.627px] mr-2">
                    <hr />
                  </span>
                  <p className="mr-2 text-sm font-medium text-[#71717A]">OR</p>
                  <span className="bg-[#EBEBEB] h-[1.03px] w-[90.627px]">
                    <hr />
                  </span>
                </div>
                <div className=" bg-[#fff] w-[288px] flex px-0.5 py-1 mb-4 border-2  border-[#FBA163] rounded-[8px]">
                  <div className="border border-[#CBD5E1] px-3 py-2 rounded-[6px] w-full flex justify-left text-left">
                    <div className="mr-2 text-[#71717A]">
                      <Link />
                    </div>
                    <span className="text-sm font-medium text-[#71717A]">
                      Paste a link
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className="">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0E0E10] mb-2">
                2. Automatic Processing
              </h2>
              <p className="mb-10 text-sm md:text-base font-medium text-[#555555]">
                We process your audio files, generating both a detailed
                transcript and a concise summary for easy review.
              </p>
              <div className="border border-[#7E97B4] relative rounded-[20px] h-[238px] px-8 flex flex-col justify-center items-center">
                <div className="bg-[#F97316] w-[295px] text-white rounded-[8px] absolute py-3 flex justify-center items-center text-sm font-medium -top-4">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        d="M15.6207 8.90006C15.5895 8.55353 15.422 8.23357 15.1549 8.01059C14.8878 7.7876 14.5431 7.67985 14.1965 7.71104C13.85 7.74223 13.53 7.9098 13.307 8.17689C13.0841 8.44398 12.9763 8.78872 13.0075 9.13526C13.1107 10.3084 12.8 11.4807 12.1294 12.4488C11.4059 13.4763 10.3439 14.2164 9.12944 14.5394C7.84117 14.8805 6.47347 14.7508 5.2723 14.1736C4.00106 13.5629 2.9866 12.5225 2.40819 11.2363C2.81214 12.6695 3.71005 13.9136 4.94303 14.7485C6.243 15.6088 7.80638 15.9793 9.35418 15.7938C10.9807 15.6212 12.4945 14.881 13.6294 13.7032C14.8083 12.4591 15.5131 10.8406 15.6207 9.13003V9.08822C15.6257 9.0256 15.6257 8.96269 15.6207 8.90006ZM3.71481 8.86348C3.61165 7.69031 3.92228 6.51803 4.59286 5.54989C5.3164 4.52243 6.37843 3.78234 7.59286 3.4593C8.88113 3.11821 10.2488 3.24794 11.45 3.82515C12.7212 4.43582 13.7357 5.4762 14.3141 6.76243C13.9102 5.32923 13.0123 4.08511 11.7793 3.25024C10.4793 2.38989 8.91593 2.01942 7.36812 2.20494C5.74157 2.37751 4.22784 3.11772 3.09286 4.29553C1.91397 5.53966 1.20924 7.15814 1.10157 8.86871V8.91052C1.09635 8.97487 1.09635 9.03954 1.10157 9.1039C1.13276 9.45043 1.30033 9.77039 1.56742 9.99337C1.83451 10.2164 2.17925 10.3241 2.52578 10.2929C2.87232 10.2617 3.19228 10.0942 3.41526 9.82707C3.63825 9.55998 3.746 9.21524 3.71481 8.86871V8.86348Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Transcribing
                </div>
                <div className="flex flex-col justify-center text-left border border-[#7E97B4] rounded-[20px] w-[266px] h-[242.5px] p-4 absolute top-12 bg-white">
                  <div className="border border-[#FBA163] p-[2.5px] rounded-[20px] w-full mb-[10px]">
                    <span className="border border-[#7E97B4] flex justify-center rounded-[20px] w-full">
                      AI Summarizing...{" "}
                    </span>
                  </div>
                  <p className="font-semibold text-[#09090B] text-left text-xs mb-1">
                    Summary
                  </p>
                  <p className="text-xs text-[#09090B] font-medium">
                    In this insightful talk, Susan Cain argues that society
                    undervalues introverts and that we lose out on much
                    creativity and leadership because of this bias. She
                    discusses how introverts think and work in ways that are
                    crucial to innovation and success.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className=" flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0E0E10] mb-2">3. Save & Share</h2>
              <p className="mb-6 text-sm md:text-base font-medium text-[#555555]">
                Receive the transcription and summary in seconds, ready for you
                to save and share.
              </p>
              <div className="flex flex-col justify-center items-center">
                <div className="border border-[#7E97B4] flex py-5 pl-4 rounded-[13px] w-[294px] mr-4">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14.183 2.56445C8.05775 2.56445 3.06641 7.5558 3.06641 13.681C3.06641 19.8063 8.05775 24.7976 14.183 24.7976C20.3082 24.7976 25.2996 19.8063 25.2996 13.681C25.2996 7.5558 20.3082 2.56445 14.183 2.56445ZM19.4967 11.1242L13.1936 17.4273C13.038 17.583 12.8268 17.6719 12.6044 17.6719C12.3821 17.6719 12.1709 17.583 12.0153 17.4273L8.86926 14.2813C8.54688 13.959 8.54688 13.4254 8.86926 13.103C9.19164 12.7806 9.72524 12.7806 10.0476 13.103L12.6044 15.6598L18.3184 9.94587C18.6407 9.62349 19.1743 9.62349 19.4967 9.94587C19.8191 10.2682 19.8191 10.7907 19.4967 11.1242Z"
                        fill="#F97316"
                      />
                    </svg>
                  </span>
                  <span>Summary Ready</span>
                </div>
                <span className="bg-[#B8C6D6] w-[1.112px] h-8 flex justify-center items-center"></span>
                <div className="p-1 border border-[#7E97B4] items-center flex justify-center rounded-full h-10 w-10">
                  <div className="p-1 flex justify-center items-center border border-[#7E97B4] rounded-full h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="28"
                      viewBox="0 0 27 28"
                      fill="none"
                    >
                      <path
                        d="M13.351 2.60352C7.21461 2.60352 2.23438 7.58375 2.23438 13.7201C2.23438 19.8565 7.21461 24.8367 13.351 24.8367C19.4873 24.8367 24.4675 19.8565 24.4675 13.7201C24.4675 7.58375 19.4873 2.60352 13.351 2.60352ZM17.2751 14.8651L13.9401 18.2001C13.7734 18.3668 13.5622 18.4447 13.351 18.4447C13.1397 18.4447 12.9285 18.3668 12.7618 18.2001L9.42681 14.8651C9.10443 14.5427 9.10443 14.0091 9.42681 13.6868C9.74919 13.3644 10.2828 13.3644 10.6052 13.6868L12.5172 15.5988V9.8293C12.5172 9.37352 12.8952 8.99555 13.351 8.99555C13.8067 8.99555 14.1847 9.37352 14.1847 9.8293V15.5988L16.0968 13.6868C16.4191 13.3644 16.9527 13.3644 17.2751 13.6868C17.5975 14.0091 17.5975 14.5427 17.2751 14.8651Z"
                        fill="#F97316"
                      />
                    </svg>
                  </div>
                </div>
                <span className="bg-[#B8C6D6] w-[1.112px] h-8 flex justify-center items-center"></span>
                <div className="border border-[#7E97B4] rounded-[20px] w-[294px] p-[18px] flex flex-col justify-center text-left relative bg-white">
                  <p className="text-[#71717A] text-xs font-medium mb-1 text-left">
                    Nel Kennedy
                  </p>
                  <h1 className="text-[#0E0E10] text-sm font-medium mb-4">
                    How to play a guitar
                  </h1>
                  <div className="flex justify-center items-center bg-[#F97316] py-2 text-white rounded-[6px] text-xs font-medium w-full">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                      >
                        <path
                          d="M12.6671 6.06641H5.53193C3.96365 6.06641 2.67969 7.35037 2.67969 8.91864V19.3371C2.67969 20.6669 3.63349 21.2355 4.79823 20.5844L8.40251 18.5759C8.78769 18.365 9.41134 18.365 9.78735 18.5759L13.3916 20.5844C14.5655 21.2264 15.5193 20.6669 15.5193 19.3371V8.91864C15.5193 7.35037 14.2354 6.06641 12.6671 6.06641Z"
                          fill="white"
                        />
                        <path
                          d="M21.0231 5.36005V15.7785C21.0231 17.1083 20.0693 17.6678 18.9046 17.0258L17.1345 16.0353C16.9878 15.9528 16.8961 15.7969 16.8961 15.6318V8.91847C16.8961 6.58899 14.9977 4.69055 12.6682 4.69055H8.93551C8.59618 4.69055 8.35772 4.33288 8.51363 4.0394C8.99054 3.13145 9.94434 2.50781 11.0357 2.50781H18.1709C19.7392 2.50781 21.0231 3.79178 21.0231 5.36005Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span>Saved</span>
                  </div>
                  <span className="p-4 bg-white w-[265px] h-5 rounded-[12px] border border-[#7E97B4] absolute -bottom-4 -z-10"></span>
                  <span className="p-3 bg-white ml-4 w-[238px] flex  h-6 rounded-[12px] border border-[#7E97B4] absolute -bottom-7 -z-20"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDirection;

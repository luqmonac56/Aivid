import Image from "next/image";
import { toast } from "react-hot-toast";

import icon from "../../assets/icon.svg";



import cancel from "../../assets/cancel.svg";
import warnin from "../../assets/warning.svg";
import err from "../../assets/error.svg";

///SENT Toast
export const sent = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#E7F7E9] border border-[#E7F7E9] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[8px]">
          <Image src={icon} alt="tick" priority />
          {message}
        </div>
        <button onClick={() => toast.dismiss(t.id)}>
          {" "}
          <Image src={cancel} alt="tick" priority />
        </button>
      </div>
    </div>
  ));

export const sentGreenWithoutCancel = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#E7F7E9] text-[#222224] border border-[#E7F7E9] p-[24px]  rounded-[4px] w-full max-w-[480px]">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[8px]">
          <Image src={icon} alt="tick" priority />
          {message}
        </div>
      </div>
    </div>
  ));

export const sentGreenWithCancel = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#E7F7E9] text-[#222224] border border-[#E7F7E9] p-[24px]  rounded-[4px] w-full max-w-[480px]">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[8px]">{message}</div>
        <button onClick={() => toast.dismiss(t.id)}>
          {" "}
          <Image src={cancel} alt="tick" priority />
        </button>
      </div>
    </div>
  ));

export const sentBlack = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#0B0B0B] border border-[#E4E2E2] p-[24px] rounded-[4px] w-full max-w-[480px] text-[#FDFDFD]">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[8px]">{message}</div>
      </div>
    </div>
  ));

export const sentWhite = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#FDFDFD] border text-[#222224] border-[#E4E2E2] p-[24px] rounded-[4px] w-full max-w-[480px]">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[8px]">{message}</div>
      </div>
    </div>
  ));

////////////warnin Toasts

export const warn = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#FFFAF7] border border-[#FBA163] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-start justify-between">
        <div className="flex gap-[8px] items-start ">
          <Image src={warnin} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>

        <button onClick={() => toast.dismiss(t.id)}>
          <Image src={cancel} alt="tick" priority />
        </button>
      </div>
    </div>
  ));

export const warnWithoutCancel = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#FFFAF7] border border-[#FBA163] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-start justify-between">
        <div className="flex gap-[8px] items-start ">
          <Image src={warnin} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  ));

export const warnWithCancel = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#FFFAF7] border border-[#FBA163] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">warning</p>
          <p>{message}</p>
        </div>

        <button onClick={() => toast.dismiss(t.id)}>
          <Image src={cancel} alt="tick" priority />
        </button>
      </div>
    </div>
  ));

export const warnWhite = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#FFFFFF] border border-[#E4E2E2] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">warning</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  ));

export const warnBlack = (message: string) =>
  toast.custom((t) => (
    <div className="bg-[#0B0B0B] border border-[#E4E2E2] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#FDFDFD]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">warning</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  ));

///// WARNING TOAST with TRY AGAIN

export const warning = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FFFAF7] border border-[#FBA163] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <Image src={warnin} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-end ">
          <button onClick={() => toast.dismiss(t.id)}>
            <Image src={cancel} alt="tick" priority />
          </button>
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[#FBA163] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#FBA163] hover:text-[#FDFDFD] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

export const warningWithoutCancel = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FFFAF7] border border-[#FBA163] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <Image src={warnin} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>

        <button
          onClick={tryagain}
          className=" p-[12px] text-center border-[#FBA163] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#FBA163] hover:text-[#FDFDFD] ease-in-out duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  ));

export const warningYellow = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FE9B0E] border border-[#FE9B0E] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">warning</p>
          <p>{message}</p>
        </div>

        <div className="flex flex-col gap-[10px] items-end ">
          <button onClick={() => toast.dismiss(t.id)}>
            <Image src={cancel} alt="tick" priority />
          </button>
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[#6A6B6E] border rounded-[4px] text-[12px] w-[82px] hover:bg-[white] hover:text-[#222224] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

export const warningWhite = (message: string, tryagain?: () => void) =>
  toast.custom(() => (
    <div className="bg-[#FDFDFD] border border-[#E4E2E2] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">warning</p>
          <p>{message}</p>
        </div>

        <div>
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[##E4E2E2] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#0B0B0B] hover:text-[#FDFDFD] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

export const warningBlack = (message: string, tryagain?: () => void) =>
  toast.custom(() => (
    <div className="bg-[#0B0B0B] border border-[#E4E2E2] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#FDFDFD]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <p className="font-medium">warning</p>
          <p>{message}</p>
        </div>

        <div>
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[##E4E2E2] border rounded-[4px] text-[12px] w-[82px] hover:text-[#0B0B0B] hover:bg-[#FDFDFD] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

///// ERROR TOASTS

export const error = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FDE7E7] border border-[#F81404] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <Image src={err} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-end ">
          <button onClick={() => toast.dismiss(t.id)}>
            <Image src={cancel} alt="tick" priority />
          </button>
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[#F81404] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#F81404] hover:text-[#FDFDFD] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

export const errorWithoutCancel = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FDE7E7] border border-[#F81404] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <Image src={err} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-end ">
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[#F81404] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#F81404] hover:text-[#FDFDFD] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

export const errorWithCancel = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FDE7E7] border border-[#F81404] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-end ">
          <button onClick={() => toast.dismiss(t.id)}>
            <Image src={cancel} alt="tick" priority />
          </button>
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[#F81404] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#F81404] hover:text-[#FDFDFD] ease-in-out duration-300 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

export const errorWthoutTryagain = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#FDE7E7] border border-[#F81404] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#222224]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <Image src={err} alt="tick" priority />
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-end ">
          <button onClick={() => toast.dismiss(t.id)}>
            <Image src={cancel} alt="tick" priority />
          </button>
        </div>
      </div>
    </div>
  ));

export const errorRed = (message: string, tryagain?: () => void) =>
  toast.custom((t) => (
    <div className="bg-[#E80D0D] border border-[#E4E2E2] p-[24px]  rounded-[4px] w-full max-w-[480px] text-[#FAFAFA]">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex gap-[8px] items-start ">
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium">warning</p>
            <p>{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-end ">
          <button
            onClick={tryagain}
            className=" p-[12px] text-center border-[#E4E2E2] border rounded-[4px] text-[12px] w-[82px] hover:bg-[#222224] ease-in-out duration-300  hover:border-[#E80D0D] "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ));

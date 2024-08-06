export default function DeleteConfirmation() {
    return (
      <div className="flex justify-center items-center h-screen text-center m-5 md:m-0">
      <div className="m-auto bg-[#FAFAFA] px-10 md:px-16 py-11 shadow-custom rounded-lg">
         <h1 className=" text-base md:text-xl font-semibold text-[#1F1F1F] mb-9">Are you sure you want to delete your account?</h1>
         <p className="text-sm text-[#F64C4C] mb-5">Please be aware, this action can not be be undone.</p>
         <div className="flex justify-center items-center mb-10">
             <p className="mr-4 text-sm text-[#1F1F1F]">Confirm by typing <span className="text-[#F64C4C]">delete</span> below</p>
             <input type="text" className="w-24 bg-white text-[#1F1F1F] text-sm border border-[#CBD5E1] rounded-md py-1 md:py-2 px-1.5 md:px-3 outline-none"/>
         </div>
         <div className="flex justify-center items-center text-xs md:text-sm">
          <button className="mr-8 bg-[#EF4444] text-white py-1 md:py-2 px-4 rounded-md">Yes, delete it</button>
          <button className=" text-[#1F1F1F] py-1 md:py-2 px-4 rounded-md border border-[#E1E1E1]">No, cancel</button>
         </div>
      </div>
    </div>
    );
  }
  
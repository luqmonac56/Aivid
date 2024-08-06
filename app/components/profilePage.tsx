"use client"
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {

  const [fisrtName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex justify-center items-center h-screen m-5 md:m-0">
    <div className="m-auto w-[600px] lg:w-[900px] px-9 lg:px-14 py-11 border border-[#CACACA] shadow-custom rounded-2xl">
        <h1 className="text-xl text-[#1F1F1F] font-semibold mb-6">Profile Details</h1>
        <hr className="mb-10 text-[#CACACA]" />
        <div className='flex justify-between items-center mb-16'>
           <div className='flex justify-between items-center'>
             <div className='mr-3 lg:mr-6'>
              <Image src="/Ellipse 1.png" alt="avatar" width={70} height={40}/>
             </div>
             <div className='text-[#1F1F1F]'>
              <h2 className=' text-sm lg:text-xl font-semibold mb-1'>Profile picture</h2>
              <p className='text-xs lg:text-base'>JPG, PNG under 1MB</p>
             </div>
           </div>
           <div className='flex justify-center items-center'>
            <button className='mr-4 w-[130px] lg:w-[200px] flex justify-center py-2 bg-[#770080] rounded-md text-sm font-bold text-[#F5F5F5]'>Upload new picture</button>
            <button className='flex w-[118px] justify-center py-2 border border-[#CACACA] text-[#1F1F1F] rounded-md text-sm'>Remove</button>
           </div>
        </div>
        <form className='flex flex-col'>
           <div className='flex items-center justify-between mb-7'>
            <div className='flex flex-col'>
            <label className='text-sm text-[#0F172A] mb-1'>First Name</label>
            <input type='text' placeholder='First name' value={fisrtName} onChange={(e) => setFirstName(e.target.value)} required className='py-2 px-3 w-[220px] lg:w-[378px] text-[#0F172A] bg-white rounded-md outline-none border border-[#CBD5E1] focus:border-[#770080] focus:outline-none'/>
            </div>
            <div className='flex flex-col justify-between'>
            <label className='text-sm text-[#0F172A] mb-1'>Last Name</label>
            <input type='text' placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required className='py-2 px-3 w-[220px] lg:w-[378px] text-[#0F172A] bg-white rounded-md outline-none border border-[#CBD5E1] focus:border-[#770080] focus:outline-none'/>
            </div>
           </div>
           <div className='flex items-center justify-between mb-7'>
            <div className='flex flex-col justify-between'>
            <label className='text-sm text-[#0F172A] mb-1'>Email</label>
            <input type='Email' placeholder='alex@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required className='py-2 px-3 w-[220px] lg:w-[378px] text-[#0F172A] bg-white rounded-md outline-none border border-[#CBD5E1] focus:border-[#770080] focus:outline-none'/>
            </div>
            <div className='flex flex-col'>
            <label className='text-sm text-[#0F172A] mb-1'>Password</label>
            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required className='py-2 px-3 w-[220px] lg:w-[378px] text-[#0F172A] bg-white rounded-md outline-none border border-[#CBD5E1] focus:border-[#770080] focus:outline-none'/>
            </div>
           </div>
           <div className='flex justify-end items-end'>
            <button type="submit" className='text-white text-base bg-[#EF4444] rounded-md py-2 px-3 '>Delete profile</button>
           </div>
        </form>
    </div>
  </div>
  );
}

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='bg-navbar h-[80px] p-7 flex items-center justify-between'>
      <div className=' text-white text-xl'>Jobs</div>
      <div className='flex items-center justify-center w-[230px] h-[35px] bg-joblist rounded-[10px]'>
        <input type='text' className='bg-joblist text-white p-1' />
        <IoSearchOutline color='gray' cursor='pointer' />
      </div>
      <div className='flex gap-6 mr-5'>
        <div className='bg-backgroundColor h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'>
          <FaRegUser color='white' fontWeight='bold' />
        </div>
        <div className='bg-backgroundColor h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'>
          <CiBellOn color='white' fontWeight='bold' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

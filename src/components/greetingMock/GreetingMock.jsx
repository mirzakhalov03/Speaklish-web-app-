import { CgArrowTopRight } from "react-icons/cg"; 
import { FaStar } from "react-icons/fa"; 
import React from 'react'
import { Link } from "react-router-dom";

const GreetingMock = () => {
  return (
    <div>
        <div className='mt-[24px] flex items-center justify-between'>
        <span>
            <h1 className='text-[24px] font-[500] leading-relaxed tracking-[0.35px] align-middle'>Hello, user</h1>
            <span className='text-[24px] font-[500] leading-relaxed tracking-[0.35px] align-middle text-[#606E80]'>Bobirjon</span>
        </span>
        <div className='w-[170px] bg-[#F5F6FA] rounded-[18px] py-2 px-4'>
            <p className='font-[500] leading-relaxed tracking-[0.35px]'>Mock score <span className='text-[#07DA83]'>30%</span></p>
            <div className="flex items-center gap-1">
                <FaStar className="text-[#07DA83] text-[24px]"/>
                <h2 className="font-[600] text-[24px]">8.5</h2>
            </div>
        </div>
        </div>
        <div className="w-full  mt-[12px] p-[16px] bg-[#F5F6FA] rounded-[18px] flex items-center justify-between gap-[20px]">
            <div className="min-w-[120px] h-[115px] rounded-[18px] bg-[#E1E5EA]"></div>
            <div className="min-w-[170px] h-[105px] flex flex-col justify-between">
                <h3 className="text-[14px] font-[600] leading-normal tracking-wide">Don't miss it!</h3>
                <p className="text-[14px] text-[#606E80]">Today on Speaklish, there is amazing news—don't miss it!</p>
                <Link to="#" className="text-[14px] text-[#07DA83] flex items-center gap-1 leading-6 tracking-wider">Start<CgArrowTopRight /></Link>
            </div>
        </div>
    </div>
  )
}

export default GreetingMock
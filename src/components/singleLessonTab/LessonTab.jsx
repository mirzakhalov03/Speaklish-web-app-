import { HiOutlineLockOpen } from "react-icons/hi"; 
import { HiOutlineLockClosed } from "react-icons/hi"; 
import React from 'react'
import { Link } from "react-router-dom";

const LessonTab = ({lessonNumber, status}) => {
  return (
    <Link to={`/lessons/${lessonNumber}`} className='w-full h-[50px] bg-[#F5F6FA] p-2 flex justify-between items-center rounded-lg'>
        <p className='text-[#181D25] font-semibold tracking-wider'>{lessonNumber || ''} Lesson</p>
        <span className='flex items-center justify-center gap-2'>
            <small className='text-[#606E80] '>08.03.2025</small>
            {
                status === 'unlocked' ? (<HiOutlineLockOpen className="text-[24px] text-[#07DA83]"/>) : (<HiOutlineLockClosed className="text-[24px] text-[#F93C65]"/>)
            }
        </span>
    </Link>
  )
}

export default LessonTab
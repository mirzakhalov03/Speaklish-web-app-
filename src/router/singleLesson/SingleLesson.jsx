import { BsArrowLeft } from "react-icons/bs"; 
import React, { useState } from 'react';
import googleMeet from '../../images/google-meet.svg'
import calendar from '../../images/calendar.svg'
import folder from '../../images/folder.svg'
import mic from '../../images/mic.svg'
import audioBook from '../../images/audioBook.svg'
import ideaLamp from '../../images/idea.svg'
import { ChevronLeft, Play, ExternalLink, Download, X } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const SingleLesson = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);


  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/quizzes')
  }



  return (
    <div className="max-w-md mx-auto bg-white p-[16px]">
      {/* Header */}
      <div className="flex w-full items-center justify-between ">
        <Link to={'/lessons'} className="">
          <BsArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-medium flex-1 text-center">Lesson 1</h1>
      </div>

      {/* Date Range */}
      <div className="flex justify-between my-6 ">
        <div>
          <p className="text-gray-500 mb-2">From</p>
          <div className="flex border w-[150px] rounded-lg px-2 py-1 items-center">
            <input 
              type="text" 
              className="outline-none flex- w-full" 
              placeholder="08.02.2025"
            />
            <img src={calendar} alt="" />
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-2">To</p>
          <div className="flex border w-[150px] rounded-lg px-2 py-1 items-center">
            <input 
              type="text" 
              className="outline-none flex- w-full" 
              placeholder="09.02.2025" 
            />
            <img src={calendar} alt="" />
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="bg-gray-100 rounded-lg mb-6 aspect-video flex items-center justify-center cursor-pointer" onClick={openVideoModal}>
        <button className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
          <Play size={20} fill="white" color="white" />
        </button>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className=" rounded-lg w-full max-w-3xl relative">
            <div className="p-2 absolute right-2 top-2 z-10">
                <button 
                onClick={closeVideoModal}
                className="bg-gray-800 bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-70 transition-all"
                >
                <X size={24} />
                </button>
            </div>
            <div className="aspect-video w-full bg-black rounded-lg">
                {/* Replace with actual video player component */}
                <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                    <Play size={48} className="mx-auto mb-2" />
                </div>
                </div>
            </div>
            <div className="py-4">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-2/5 h-full bg-gray-600 rounded-full"></div>
                </div>
                <div className="w-full flex items-center justify-between mt-2 text-white">
                <span>0:40</span>
                <span>1:40</span>
                </div>
            </div>
            </div>
        </div>
        )}


      {/* Meeting Section */}
      <a href="#" className="flex items-center justify-between my-6">
        <div className="flex items-center gap-2">
          <img src={googleMeet} alt="" />
          <span className="text-blue-500 font-medium">Meeting with teacher</span>
        </div>
        <ExternalLink size={20} className="text-blue-500" />
      </a>

      {/* Lecture Section */}
      <div className=" my-6">
        <h2 className="text-lg font-medium mb-4">Lecture</h2>
        <p className="text-gray-600">
          Public speaking is more than just delivering words; it's an art form that connects you with your audience, conveys your ideas with clarity, and inspires action. Whether you're addressing a small team or a large conference, effective speaking can boost your confidence.
        </p>
      </div>

      {/* Attached Files Section */}
      <div className=" my-6 text-[#606E80]">
        <h2 className="text-lg font-medium mb-4">Attached files</h2>
        <div className="border rounded-lg p-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={folder} alt="" />
            <span className="">Homework.pdf | 5.2 MB</span>
          </div>
          <Download size={20} className="text-gray-500" />
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="mb-6 text-[#606E80]">
        <h2 className="text-lg font-medium mb-4">Quizzes</h2>
        <button onClick={handleNavigate} className="w-full border rounded-lg p-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={ideaLamp} alt="" />
            <span className="">Check your knowledge</span>
          </div>
          <ChevronLeft size={20} className="text-gray-500 transform rotate-180" />
        </button>
      </div>

      {/* Pronunciation Task Section */}
      <div className=" mb-6 text-[#606E80]">
        <h2 className="text-lg font-medium mb-4">Pronunciation task</h2>
        <button onClick={() => {navigate('/pronunciation')}} className="w-full border rounded-lg p-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
              <img src={mic} alt="" />
            <span className="">Pronunciation</span>
          </div>
          <ChevronLeft size={20} className="text-gray-500 transform rotate-180" />
        </button>
      </div>

      {/* Speak About Topic Section */}
      <div className="mb-10 text-[#606E80]">
        <h2 className="text-lg font-medium mb-4">Speak about topic</h2>
        <button className="w-full border rounded-lg p-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={audioBook} alt="" />
            <span className="">Speak</span>
          </div>
          <ChevronLeft size={20} className="text-gray-500 transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SingleLesson;
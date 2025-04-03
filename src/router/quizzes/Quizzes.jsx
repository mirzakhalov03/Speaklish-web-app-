import { BsArrowLeft } from "react-icons/bs"; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import speaklishLogo from '../../images/speaklish-sad-logo.svg'

const QuizQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const navigate = useNavigate()

  const handleConfirm = () => {
    // In a real application, you would handle the answer submission here
    setCompleted(true);
  };

  const handleExit = () => {
    
    setShowModal(true);
  };

  const handleQuit = () => {
    navigate(-1)
  }

  if (completed) {
    return <QuizSuccess />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      {/* Header */}
      <div className="w-full pb-4 px flex items-center  border-gray-200">
        <button onClick={handleExit} className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 text-center text-gray-500">1/10</div>
      </div>

      {/* Timer */}
      <div className="flex items-center justify-center my-8 text-[#606E80]">
        <button className="rounded-full bg-gray-100 p-2 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-5xl font-semibold">03:16</div>
        <button className="rounded-full bg-gray-100 p-2 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Question */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Why is practicing your speech repeatedly important?</h2>
      </div>

      {/* Options */}
      <div className="w-full  text-[#606E80] space-y-4">
        <button 
          className={`w-full text-left px-3 py-2 rounded-lg ${selectedOption === 'A' ? 'bg-blue-100 border border-blue-300' : 'bg-[#F5F6FA]'}`}
          onClick={() => handleOptionSelect('A')}
        >
          <span className="font-medium">A) It helps to reduce nervousness and improves delivery</span>
        </button>

        <button 
          className={`w-full text-left p-4 rounded-lg ${selectedOption === 'B' ? 'bg-blue-100 border border-blue-300' : 'bg-gray-100'}`}
          onClick={() => handleOptionSelect('B')}
        >
          <span className="font-medium">B) It allows you to memorize the entire speech word-for-word</span>
        </button>

        <button 
          className={`w-full text-left p-4 rounded-lg ${selectedOption === 'C' ? 'bg-blue-100 border border-blue-300' : 'bg-gray-100'}`}
          onClick={() => handleOptionSelect('C')}
        >
          <span className="font-medium">C) It lets you add random information during the speech</span>
        </button>

        <button 
          className={`w-full text-left p-4 rounded-lg ${selectedOption === 'D' ? 'bg-blue-100 border border-blue-300' : 'bg-gray-100'}`}
          onClick={() => handleOptionSelect('D')}
        >
          <span className="font-medium">D) It reduces the need for any preparation</span>
        </button>
      </div>

      {/* Confirm Button */}
      <div className="w-full mt-6">
        <button 
          className="w-full py-4 bg-[#929FB1] text-white rounded-[12px] text-lg font-medium"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>

      {/* Exit Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-5/6 max-w-md overflow-hidden">
            <div className="p-2 flex flex-col items-center">
                <img src={speaklishLogo} alt="" />
              <h3 className="text-xl font-bold mb-1">Are you sure?</h3>
              <p className="text-gray-500 text-center mb-6">
                Your answers will not be saved if you leave now
              </p>
              <div className="flex w-full">
                <button 
                  className="flex-1 py-4 border-t border-r border-gray-200 text-red-500 font-medium"
                  onClick={handleQuit}
                >
                  Exit
                </button>
                <button 
                  className="flex-1 py-4 border-t border-gray-200 text-[#606E80] font-medium"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const QuizSuccess = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#D7FFEF] to-green-50 p-4">
      {/* Header */}
      <div className="w-full py-4 flex items-center">
        <button className="text-gray-500">
          <BsArrowLeft className="text-[24px]"/>
        </button>
      </div>

      {/* User Card */}
      <div className="mt-8 relative">
        <div className="bg-green-200 w-64 h-36 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Bobirjon</h2>
          <p className="text-gray-600">8/10</p>
        </div>
      </div>

      {/* Congratulations Message */}
      <div className="mt-16 relative  text-center">
        <h1 className="text-2xl font-bold mb-4">Congratulations!</h1>
        <p className="text-gray-600 mb-8">
          Let's keep testing your knowledge by playing more quizzes.
        </p>
        <button onClick={() => {navigate('results')}} className="text-green-500 font-medium mb-8">
          View answers
        </button>
        <button className="fixed bottom-5 left-3 w-[93%] py-2 px-3 bg-green-400 text-white rounded-[12px] text-lg font-medium">
          Explore more
        </button>
      </div>
    </div>
  );
};

const Quizzes = () => {
  return (
    <QuizQuestion />
  );
};

export default Quizzes;
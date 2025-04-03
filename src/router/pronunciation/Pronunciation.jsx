// "use client"

import { BsArrowLeft } from "react-icons/bs"
import { useState, useEffect } from "react"
import bigMic from "../../images/big-mic.svg"
import { useNavigate } from "react-router-dom"
import voiceWave from '../../images/voice-wave.svg'
import aiIcon from '../../images/ai-icon.svg'

const Pronunciation = () => {
  const [showModal, setShowModal] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [timer, setTimer] = useState({ minutes: "00", seconds: "00" })
  const [recordingTime, setRecordingTime] = useState(0)
  const [isRecordingFinished, setIsRecordingFinished] = useState(false)

  const navigate = useNavigate()

  const handleLater = () => {
    setShowModal(false)
  }

  const handleRecordingFinish = () => {
    setIsRecordingFinished(true)
    setTimeout(() => {
      setIsRecordingFinished(false)
      navigate('results')
    }, 5000)
  }

  const handleAllow = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setShowModal(false)
      })
      .catch((err) => {
        console.error("Error accessing microphone:", err)
        setShowModal(false)
      })
  }

  const toggleRecording = () => {
    if (isRecording) {
      handleRecordingFinish()
    }
    setIsRecording(!isRecording)
    if (!isRecording) {
      setRecordingTime(0)
    }
  }

  useEffect(() => {
    let interval
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)

        const minutes = Math.floor(recordingTime / 60)
        const seconds = recordingTime % 60

        setTimer({
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRecording, recordingTime])

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center">
        <button
          onClick={() => {
            navigate(-1)
          }}
          className="p-2"
        >
          <BsArrowLeft className="text-[24px]" />
        </button>
        <h1 className="text-lg font-medium mx-auto">Topic</h1>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          </p>
        </div>
      </div>

      {/* Timer/Recording area */}
      <button onClick={toggleRecording} className="flex justify-center items-center p-16">
        <div className={`relative flex justify-center items-center ${isRecording ? "animate-pulse" : ""}`}>
          {/* Outer circle with animation */}
          <div
            className={`absolute rounded-full ${isRecording ? "bg-[#D7FFEF] w-64 h-64" : "bg-blue-50 w-48 h-48"} flex justify-center items-center`}
          >
            {isRecording && (
              <>
                <div className="absolute w-56 h-56 rounded-full border border-[#7cf6c5]"></div>
                <div className="absolute w-60 h-60 rounded-full border border-blue-200"></div>
              </>
            )}
          </div>

          {/* Inner circle with timer */}
          <div className="relative bg-white rounded-full w-40 h-40 flex flex-col justify-center items-center shadow-md">
            <div className="text-3xl font-medium text-gray-600">
              {timer.minutes} <span className="mx-1">:</span> {timer.seconds}
            </div>
          </div>
        </div>
      </button>

      {/* Microphone access modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-[90%] pt-6 px-2">
            <div className="flex flex-col items-center justify-center mb-4">
              <img src={bigMic || "/placeholder.svg"} alt="" />
              <h2 className="text-xl font-bold mb-2">Microphone access</h2>
              <p className="text-center text-gray-600">
                To enhance your experience, we need access to your microphone for recording purposes
              </p>
            </div>
            <div className="flex border-t border-gray-200">
              <button onClick={handleLater} className="flex-1 p-4 text-gray-500 font-medium hover:bg-gray-50">
                Later
              </button>
              <button onClick={handleAllow} className="flex-1 p-4 text-green-500 font-medium hover:bg-gray-50">
                Allow
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Processing audio modal */}
      {isRecordingFinished && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-[90%] px-4 pt-2 pb-1 relative">
            <img src={aiIcon} alt="" className="absolute right-0 -top-6" />
            <div className="flex flex-col items-center justify-center">
              <img src={voiceWave} alt="" />
              <h2 className="text-xl font-bold mb-2">Processing Audio</h2>
              <p className="text-center text-gray-600 mb-3">Your audio is being processed, this may take a few moments.</p>
              <button onClick={() => {setIsRecordingFinished(false)}} className="border-t text-center p-2 w-full  text-gray-500 font-medium hover:bg-gray-50">
                Cancel
            </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Pronunciation


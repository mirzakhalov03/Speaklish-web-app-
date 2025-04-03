import { useState } from "react"
import { ArrowLeft, Download, Play, SkipBack, SkipForward, Pause } from "lucide-react"
import playBtn from '../../images/play-btn.svg'
import forwardBtn from '../../images/forward-btn.svg'
import backwardbtn from '../../images/backward-btn.svg'
import PronunciationScore from "../../components/score/PronunciationScore"
import { useNavigate } from "react-router-dom"

const PronunciationResults = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const totalDuration = 5 // in seconds
  const navigate = useNavigate()

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
        <button onClick={() => {navigate(-1)}} className="p-1">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">Mock AI result</h1>
        <button className="text-green-500 p-1">
          <Download size={24} />
        </button>
      </div>

      {/* Transcript */}
      <div className="p-4">
        <div className="bg-[#F5F6FA] rounded-lg p-4 max-h-[200px] overflow-y-auto">
          <p className="text-gray-700 leading-relaxed">
            <span className="bg-red-200 bg-opacity-50 px-1 rounded">Lorem ipsum</span> dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{" "}
            <span className="bg-yellow-200 bg-opacity-50 px-1 rounded">commodo consequat</span>. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
          </p>
        </div>
      </div>

      {/* Audio Player */}
      <div className="px-4 pb-4">
        <div className="w-full bg-gray-300 h-1 rounded-full mb-2">
          <div
            className="bg-gray-600 h-1 rounded-full"
            style={{ width: `${(currentTime / totalDuration) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>0:02</span>
          <span>0:05</span>
        </div>
        <div className="flex justify-center items-center gap-8 mt-4">
          <button className="p-2">
            <img src={backwardbtn} alt="" />
          </button>
          <button className="bg-white border-gray-300 rounded-full p-3" onClick={togglePlayPause}>
            <img src={playBtn} alt="" />
          </button>
          <button className="p-2">
            <img src={forwardBtn} alt="" />
          </button>
        </div>
      </div>

      {/* Errors Section */}
      <div className="px-4 py-2">
        <h2 className="font-medium mb-2">Errors</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-red-500">Mispronunciations</span>
            <span className="text-red-500">3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-500">Unexpected break</span>
            <span className="text-orange-500">7</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Missing break</span>
            <span className="text-gray-700">8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Monotone</span>
            <span className="text-gray-700">0</span>
          </div>
        </div>
      </div>

      {/* Pronunciation Score */}
      <div className="p-4">
      <PronunciationScore accuracy={95} fluency={89} prosody={74} />
      </div>

      {/* Content Score */}
      <div className="p-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-gray-700 font-medium mb-4">Content score</h2>
          <div className="flex items-center">
            <div className="relative w-32 h-32">
              <CircularProgress color="#3b82f6" percentage={60} strokeWidth={8} />
              <CircularProgress color="#93c5fd" percentage={65} strokeWidth={8} offset={-10} />
              <CircularProgress color="#60a5fa" percentage={80} strokeWidth={8} offset={-20} />
            </div>
            <div className="ml-4 space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <div>
                  <div className="text-gray-600">Vocabulary</div>
                  <div className="font-medium">60/100</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                <div>
                  <div className="text-gray-600">Grammar</div>
                  <div className="font-medium">65/100</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                <div>
                  <div className="text-gray-600">Topic</div>
                  <div className="font-medium">80/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Circular progress component
const CircularProgress = ({ color, percentage, strokeWidth = 8, offset = 0 }) => {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (percentage / 100) * circumference

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      style={{ transform: `rotate(${offset}deg)` }}
      viewBox="0 0 120 120"
    >
      <circle
        className="opacity-20"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="60"
        cy="60"
        style={{
          transition: "stroke-dashoffset 0.5s ease-in-out",
        }}
      />
    </svg>
  )
}

export default PronunciationResults


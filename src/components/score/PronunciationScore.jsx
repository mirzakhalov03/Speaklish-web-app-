"use client"

import { useEffect, useRef } from "react"

export default function PronunciationScore({ accuracy = 95, fluency = 89, prosody = 74 }) {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    canvas.width = 300 * dpr
    canvas.height = 300 * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, 300, 300)

    const centerX = 150
    const centerY = 150

    // Draw the three circular arcs
    drawArc(ctx, centerX, centerY, 120, prosody / 100, "#4a9777", 12)
    drawArc(ctx, centerX, centerY, 95, fluency / 100, "#a3d5b2", 12)
    drawArc(ctx, centerX, centerY, 70, accuracy / 100, "#4a9777", 12)
  }, [accuracy, fluency, prosody])

  const drawArc = (ctx, x, y, radius, percentage, color, lineWidth) => {
    const startAngle = -0.5 * Math.PI // Start at top
    const endAngle = startAngle + percentage * 2 * Math.PI // End based on percentage

    ctx.beginPath()
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = color
    ctx.lineCap = "round"
    ctx.stroke()
  }

  return (
    <div className="bg-gray-50 p-4 rounded-xl w-full mx-auto">
      <h2 className="text font-medium text-gray-600 mb-8">Pronunciation score</h2>

      <div className="flex  items-center justify-between g-2">
        <div className="relative w-[150px] h-[150px]">
          <canvas ref={canvasRef} className="w-[200px] h-[200px]" style={{ width: "150px", height: "150px" }} />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#4a9777]"></div>
            <div>
              <div className="text- text-gray-500 font-light">Accuracy score</div>
              <div className="text- text-gray-600 font-medium">{accuracy}/100</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#a3d5b2]"></div>
            <div>
              <div className="text- text-gray-500 font-light">Fluency score</div>
              <div className="text- text-gray-600 font-medium">{fluency}/100</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#4a9777]"></div>
            <div>
              <div className="text- text-gray-500 font-light">Prosody score</div>
              <div className="text- text-gray-600 font-medium">{prosody}/100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


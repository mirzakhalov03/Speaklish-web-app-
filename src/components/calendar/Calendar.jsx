// "use client"
import { ChevronLeft, ChevronRight } from "lucide-react"

// These imports would be replaced with your actual image paths
const calendarImages = {
  10: "/../images/calendar-img1.png",
  13: "/../images/calendar-img2.png",
  15: "/../images/calendar-img3.png",
  24: "/../images/calendar-img4.png",
}

const Calendar = () => {
  const selectedDates = {
    4: { selected: true, color: "bg-green-400" },
    10: { selected: true, image: true },
    13: { selected: true, image: true },
    15: { selected: true, image: true },
    24: { selected: true, image: true },
  }

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  const calendarDays = [
    { day: 30, currentMonth: false },
    { day: 31, currentMonth: false },
    { day: 1, currentMonth: true },
    { day: 2, currentMonth: true },
    { day: 3, currentMonth: true },
    { day: 4, currentMonth: true },
    { day: 5, currentMonth: true },
    { day: 6, currentMonth: true },
    { day: 7, currentMonth: true },
    { day: 8, currentMonth: true },
    { day: 9, currentMonth: true },
    { day: 10, currentMonth: true },
    { day: 11, currentMonth: true },
    { day: 12, currentMonth: true },
    { day: 13, currentMonth: true },
    { day: 14, currentMonth: true },
    { day: 15, currentMonth: true },
    { day: 16, currentMonth: true },
    { day: 17, currentMonth: true },
    { day: 18, currentMonth: true },
    { day: 19, currentMonth: true },
    { day: 20, currentMonth: true },
    { day: 21, currentMonth: true },
    { day: 22, currentMonth: true },
    { day: 23, currentMonth: true },
    { day: 24, currentMonth: true },
    { day: 25, currentMonth: true },
    { day: 26, currentMonth: true },
    { day: 27, currentMonth: true },
    { day: 28, currentMonth: true },
    { day: 29, currentMonth: true },
    { day: 30, currentMonth: true },
    { day: 1, currentMonth: false },
    { day: 2, currentMonth: false },
    { day: 3, currentMonth: false },
  ]

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-[#F5F6FA] rounded-[24px] mt-[12px]">
      <div className="flex items-center justify-between mb-4">
        <button className="p-2 text-gray-500">
          <ChevronLeft size={20} />
        </button>
        <h2 className="font-medium text-gray-800">February 2024</h2>
        <button className="p-2 text-gray-500">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-[15px] text-center text-gray-500 font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4 text-[14px]">
        {calendarDays.map((day, index) => {
          const isSelected = selectedDates[day.day]?.selected && day.currentMonth
          const hasImage = selectedDates[day.day]?.image && day.currentMonth
          const selectedColor = selectedDates[day.day]?.color

          return (
            <div
              key={index}
              className={`flex items-center justify-center relative ${
                day.currentMonth ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {isSelected ? (
                hasImage ? (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${calendarImages[day.day]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Semi-transparent overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full"></div>
                    <span className="text-[14px] text-white relative z-4">{day.day}</span>
                  </div>
                ) : (
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      selectedColor || "bg-gray-200"
                    }`}
                  >
                    <span className="text-[14px]">{day.day}</span>
                  </div>
                )
              ) : (
                <span className="text-[14px]">{day.day}</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar


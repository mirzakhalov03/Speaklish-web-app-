import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const calendarImages = {
  10: "/../images/calendar-img1.png",
  13: "/../images/calendar-img2.png",
  15: "/../images/calendar-img3.png",
  24: "/../images/calendar-img4.png",
};

const tg = window.Telegram?.WebApp;

const Calendar = () => {
  const [theme, setTheme] = useState(tg?.themeParams || {});
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  useEffect(() => {
    if (!tg) return;
    setTheme(tg.themeParams);
    tg.onEvent("themeChanged", () => {
      setTheme(tg.themeParams);
    });
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);

    const days = [];

    // Add padding days for start of month
    for (let i = 0; i < startOfMonth.getDay(); i++) {
      days.push({ day: null, currentMonth: false });
    }

    // Add all days of the current month
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push({ day: i, currentMonth: true });
    }

    // Fill remaining cells to complete 42 days (6 weeks)
    while (days.length < 42) {
      days.push({ day: null, currentMonth: false });
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);

  const goToPreviousMonth = () => {
    const prev = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prev);
  };

  const goToNextMonth = () => {
    const next = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(next);
  };

  const isDarkMode = theme.bg_color === "#000000" || theme.bg_color?.toLowerCase() === "#1c1c1c";
  const textColor = isDarkMode ? "#FFFFFF" : theme.text_color || "#000000";
  const secondaryColor = theme.secondary_bg_color || "#F5F6FA";
  const buttonColor = "#30d158";

  return (
    <div
      className="w-full max-w-md p-4 mx-auto rounded-[24px] mt-[12px] mb-[100px]"
      style={{ backgroundColor: secondaryColor }}
    >
      <div className="flex items-center justify-between mb-4">
        <button onClick={goToPreviousMonth} className="p-2 text-gray-500">
          <ChevronLeft size={20} />
        </button>
        <h2 className="font-medium" style={{ color: textColor }}>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <button onClick={goToNextMonth} className="p-2 text-gray-500">
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
        {days.map((dayObj, index) => {
          const isCurrentMonth = dayObj.currentMonth;
          const day = dayObj.day;
          const hasImage = calendarImages[day];
          const isSelected = selectedDay === day;

          const baseStyle = isCurrentMonth ? "text-gray-800" : "text-gray-400";

          // Check if it's today's date
          const today = new Date();
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          return (
            <div
              key={index}
              className={`flex items-center justify-center relative cursor-pointer ${baseStyle}`}
              onClick={() => day && isCurrentMonth && setSelectedDay(day)}
            >
              {day ? (
                hasImage ? (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${calendarImages[day]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: isSelected ? `2px solid ${buttonColor}` : "none",
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full"></div>
                    <span className="text-[14px] text-white relative z-4">{day}</span>
                  </div>
                ) : (
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      isSelected ? "border-2" : ""
                    }`}
                    style={{
                      backgroundColor: isSelected ? buttonColor : "",
                      color: isSelected ? "#fff" : textColor,
                      borderColor: isSelected ? buttonColor : "transparent",
                      border: isToday ? `2px solid ${buttonColor}` : "", // Outline today's date
                    }}
                  >
                    <span className="text-[14px]">{day}</span>
                  </div>
                )
              ) : (
                <span className="text-[14px]">&nbsp;</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

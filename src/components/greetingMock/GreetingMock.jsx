import { CgArrowTopRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const tg = window.Telegram?.WebApp;

const GreetingMock = () => {
  const [theme, setTheme] = useState(tg?.themeParams || {});

  useEffect(() => {
    if (!tg) return;

    tg.ready();
    tg.expand();

    // Listen for theme changes
    tg.onEvent("themeChanged", () => {
      setTheme(tg.themeParams);
    });
  }, []);

  // Determine the text color based on theme
  const textColor = theme.text_color || "#000000"; // Black for light mode
  const hintColor = theme.hint_color || "#606E80"; // Lighter text for descriptions
  const buttonColor = theme.button_color || "#07DA83"; // Accent color
  const isDarkMode = theme.bg_color === "#000000" || theme.bg_color?.toLowerCase() === "#1c1c1c";

  return (
    <div>
      <div className="mt-[24px] flex items-center justify-between">
        <span>
          <h1
            className="text-[24px] font-[500] leading-relaxed tracking-[0.35px] align-middle"
            style={{ color: isDarkMode ? "#FFFFFF" : textColor }} // White in dark mode
          >
            Hello, user
          </h1>
          <span
            className="text-[24px] font-[500] leading-relaxed tracking-[0.35px] align-middle"
            style={{ color: isDarkMode ? "#D3D3D3" : hintColor }} // Lighter gray in dark mode
          >
            Bobirjon
          </span>
        </span>
        <div
          className="w-[170px] rounded-[18px] py-2 px-4"
          style={{
            backgroundColor: theme.secondary_bg_color || "#F5F6FA",
            color: isDarkMode ? "#FFFFFF" : textColor,
          }}
        >
          <p className="font-[500] leading-relaxed tracking-[0.35px]">
            Mock score{" "}
            <span style={{ color: buttonColor }}>30%</span>
          </p>
          <div className="flex items-center gap-1">
            <FaStar style={{ color: buttonColor }} className="text-[24px]" />
            <h2 className="font-[600] text-[24px]">8.5</h2>
          </div>
        </div>
      </div>
      <div
        className="w-full mt-[12px] p-[16px] rounded-[18px] flex items-center justify-between gap-[10px]"
        style={{ backgroundColor: theme.secondary_bg_color || "#F5F6FA" }}
      >
        <div
          className="min-w-[120px] h-[115px] rounded-[18px]"
          style={{ backgroundColor: theme.section_bg_color || "#E1E5EA" }}
        ></div>
        <div className="min-w-[170px] h-[105px] flex flex-col justify-between">
          <h3
            className="text-[14px] font-[600] leading-normal tracking-wide"
            style={{ color: isDarkMode ? "#FFFFFF" : textColor }}
          >
            Don't miss it!
          </h3>
          <p
            className="text-[14px]"
            style={{ color: isDarkMode ? "#D3D3D3" : hintColor }}
          >
            Today on Speaklish, there is amazing news don't miss it!
          </p>
          <Link
            to="#"
            className="text-[14px] flex items-center gap-1 leading-6 tracking-wider"
            style={{ color: buttonColor }}
          >
            Start
            <CgArrowTopRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreetingMock;

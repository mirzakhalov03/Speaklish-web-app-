import { CgArrowTopRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WebApp } from "@twa-dev/sdk"; // Import Telegram SDK

const GreetingMock = () => {
  const [theme, setTheme] = useState(WebApp.themeParams);

  useEffect(() => {
    WebApp.ready(); // Ensure WebApp is initialized
    WebApp.expand(); // Expand to full height

    // Listen for theme changes
    WebApp.onEvent("themeChanged", () => {
      setTheme(WebApp.themeParams);
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.bg_color || "#ffffff",
        color: theme.text_color || "#000000",
      }}
    >
      <div className="mt-[24px] flex items-center justify-between">
        <span>
          <h1 className="text-[24px] font-[500] leading-relaxed tracking-[0.35px] align-middle">
            Hello, user
          </h1>
          <span
            className="text-[24px] font-[500] leading-relaxed tracking-[0.35px] align-middle"
            style={{ color: theme.hint_color || "#606E80" }} // Adjust hint color
          >
            Bobirjon
          </span>
        </span>
        <div
          className="w-[170px] rounded-[18px] py-2 px-4"
          style={{ backgroundColor: theme.secondary_bg_color || "#F5F6FA" }} // Card background
        >
          <p className="font-[500] leading-relaxed tracking-[0.35px]">
            Mock score{" "}
            <span style={{ color: theme.button_color || "#07DA83" }}>30%</span>
          </p>
          <div className="flex items-center gap-1">
            <FaStar
              style={{ color: theme.button_color || "#07DA83" }}
              className="text-[24px]"
            />
            <h2 className="font-[600] text-[24px]">8.5</h2>
          </div>
        </div>
      </div>
      <div
        className="w-full mt-[12px] p-[16px] rounded-[18px] flex items-center justify-between gap-[20px]"
        style={{ backgroundColor: theme.secondary_bg_color || "#F5F6FA" }}
      >
        <div
          className="min-w-[120px] h-[115px] rounded-[18px]"
          style={{ backgroundColor: theme.section_bg_color || "#E1E5EA" }}
        ></div>
        <div className="min-w-[170px] h-[105px] flex flex-col justify-between">
          <h3 className="text-[14px] font-[600] leading-normal tracking-wide">
            Don't miss it!
          </h3>
          <p
            className="text-[14px]"
            style={{ color: theme.hint_color || "#606E80" }}
          >
            Today on Speaklish, there is amazing news—don't miss it!
          </p>
          <Link
            to="#"
            className="text-[14px] flex items-center gap-1 leading-6 tracking-wider"
            style={{ color: theme.button_color || "#07DA83" }}
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

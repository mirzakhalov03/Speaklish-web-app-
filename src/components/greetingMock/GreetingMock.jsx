import { CgArrowTopRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GreetingMock = () => {
  const [theme, setTheme] = useState({});
  const [userName, setUserName] = useState("user");

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) return;

    tg.ready();
    tg.expand();

    // Set initial theme
    setTheme(tg.themeParams || {});

    // Get Telegram user
    const user = tg.initDataUnsafe?.user;
    if (user) {
      const fullName = [user.first_name, user.last_name].filter(Boolean).join(" ");
      const firstName = user?.first_name
      setUserName(firstName || user.username || "user");
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      setTheme({ ...tg.themeParams });
    };

    tg.onEvent("themeChanged", handleThemeChange);

    return () => {
      tg.offEvent("themeChanged", handleThemeChange); // ✅ Cleanup
    };
  }, []);

  // Theme-based styling
  const textColor = theme.text_color || "#000000";
  const hintColor = theme.hint_color || "#606E80";
  const buttonColor = theme.button_color || "#07DA83";
  const isDarkMode =
    theme.bg_color === "#000000" || theme.bg_color?.toLowerCase() === "#1c1c1c";

  return (
    <div>
      {/* Greeting Header */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-medium tracking-wide"
            style={{ color: isDarkMode ? "#FFFFFF" : textColor }}
          >
            Hello, {userName}
          </h1>
          <p
            className="text-2xl font-medium tracking-wide"
            style={{ color: isDarkMode ? "#D3D3D3" : hintColor }}
          >
            Welcome!
          </p>
        </div>

        {/* Mock Score Card */}
        <div
          className="w-[170px] rounded-[18px] py-2 px-4"
          style={{
            backgroundColor: theme.secondary_bg_color || "#F5F6FA",
            color: isDarkMode ? "#FFFFFF" : textColor,
          }}
        >
          <p className="font-medium">
            Mock score <span style={{ color: '#07DA83' }}>30%</span>
          </p>
          <div className="flex items-center gap-1">
            <FaStar style={{ color: '#07DA83' }} className="text-2xl" />
            <h2 className="font-semibold text-2xl">8.5</h2>
          </div>
        </div>
      </div>

      {/* Promo Box */}
      <div
        className="max-w-[450px] w-full mx-auto mt-3 p-4 rounded-[18px] flex items-center justify-between gap-3"
        style={{ backgroundColor: theme.secondary_bg_color || "#F5F6FA" }}
      >
        <div
          className="min-w-[120px] h-[115px] rounded-[18px]"
          style={{ backgroundColor: theme.section_bg_color || "#E1E5EA" }}
        ></div>

        <div className="min-w-[170px] h-[105px] flex flex-col justify-between">
          <h3
            className="text-sm font-semibold"
            style={{ color: isDarkMode ? "#FFFFFF" : textColor }}
          >
            Don't miss it!
          </h3>
          <p
            className="text-sm"
            style={{ color: isDarkMode ? "#D3D3D3" : hintColor }}
          >
            Today on Speaklish, there is amazing news, don't miss it!
          </p>
          <Link
            to="#"
            className="text-sm flex items-center gap-1 font-medium"
            style={{ color: '#07DA83' }}
          >
            Start <CgArrowTopRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreetingMock;

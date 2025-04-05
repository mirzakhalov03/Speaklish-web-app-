import { BsArrowLeft } from "react-icons/bs"; 
import { BiUser } from "react-icons/bi"; 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordUpdateModal from '../../components/passwordModal/PasswordUpdateModal'; // Import the modal component
import { toast } from 'react-toastify';
import { BiPhone } from 'react-icons/bi';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [userInitial, setUserInitial] = useState('')
  const [theme, setTheme] = useState({})
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    teacher: 'Diana Roy',
    group: 'Speaklish'
  });


  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    
    if (!tg || !tg.initDataUnsafe) return;

    const user = tg.initDataUnsafe.user;

    if (user) {
      const userDataObject = {
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        // Add other user data here if available from Telegram WebApp API
        phone: user.phone_number || '',  // Assuming the Telegram API provides this (you might need to handle this differently)
        teacher: 'Diana Roy',  // Example static value or dynamic if possible
        group: 'Speaklish',    // Example static value or dynamic if possible
      };

      const userInitialLetter = user?.first_name.slice(0, 1)

      setUserInitial(userInitialLetter)

      setFormData(userDataObject);
    }

    setTheme(tg.themeParams || {})

    const handleThemeChange = () => {
      setTheme({...tg.themeParams});


    }

    tg.onEvent("themeChanged", handleThemeChange)

    return () => {
      tg.offEvent("themeChanged", handleThemeChange)
    }

  }, []);

  const textColor = theme.text_color || "#181D25"
  const hintColor = theme.hint_color || "#606E80"
  const isDarkMode = theme.bg_color === "#181D25" || theme.bg_color?.toLowerCase() === "#1c1c1c"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const success = () => toast.success("Your profile has been successfully updated.") 

  const handleSave = () => {
    console.log('Saving profile data:', formData);
    // Navigate back or show success message
    success()
  };

  const handleUpdatePassword = () => {
    setIsPasswordModalOpen(true);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          onClick={handleGoBack} 
          className="mr-4"
          style={{color: isDarkMode ? "#FFF" : textColor}}
          >
          <BsArrowLeft className="text-[24px]"/>
        </button>
        <h1 
          className="text-2xl text-gray-600 font-medium"
          style={{color: isDarkMode ? "#FFF" : textColor}}
        >
          My profile</h1>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-green-400 flex items-center justify-center bg-[#D7FFEF]">
          <h2 className="text-[40px] text-[#07DA83]">{userInitial || (<BiUser className="text-[40px]"/>)}</h2>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-600 mb-2 text-">First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="e.g Speaklish"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-gray-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-600 mb-2 text-">Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Type here"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-gray-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 mb-2 text-">Phone</label>
          <div className="flex">
            <div className="bg-gray-100 p-1 border border-gray-300 rounded-l-lg text-gray-600 flex items-center">
              <BiPhone className="text-[20px] mr-1"/>
              +998
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="97 941-32-00"
              value={formData.phone}
              onChange={handleChange}
              className="flex-grow py-2 px-0 indent-3 border border-gray-300 rounded-r-lg text-gray-500"
            />
          </div>
        </div>

        {/* Teacher */}
        <div>
          <label className="block text-gray-600 mb-2 text">Teacher</label>
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-gray-500"
          />
        </div>

        {/* Group */}
        <div>
          <label className="block text-gray-600 mb-2 text">Group</label>
          <input
            type="text"
            name="group"
            value={formData.group}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row space-x-4 pt-4">
          <button
            type="button"
            onClick={handleUpdatePassword}
            className="bg-green-400 text-white py-1 px-2 rounded-lg text- font-medium flex-1"
          >
            Update password
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-white text-green-400 border border-green-400 py-1 px-1 rounded-lg te font-medium flex-1"
          >
            Save
          </button>
        </div>
      </form>

      {/* Password Update Modal */}
      <PasswordUpdateModal 
        isOpen={isPasswordModalOpen} 
        onClose={() => setIsPasswordModalOpen(false)} 
      />
    </div>
  );
};

export default ProfilePage;
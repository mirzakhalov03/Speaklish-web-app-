import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordUpdateModal from '../../components/passwordModal/PasswordUpdateModal'; // Import the modal component
import { toast } from 'react-toastify';
import { BiPhone } from 'react-icons/bi';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    teacher: 'Diana Roy',
    group: 'Speaklish'
  });

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
        <button onClick={handleGoBack} className="mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-2xl text-gray-600 font-medium">My profile</h1>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-green-400 flex items-center justify-center bg-gray-100">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 25C29.1421 25 32.5 21.6421 32.5 17.5C32.5 13.3579 29.1421 10 25 10C20.8579 10 17.5 13.3579 17.5 17.5C17.5 21.6421 20.8579 25 25 25Z" fill="#9AA5B1"/>
            <path d="M25 27.5C18.75 27.5 12.5 31.25 12.5 40H37.5C37.5 31.25 31.25 27.5 25 27.5Z" fill="#9AA5B1"/>
          </svg>
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
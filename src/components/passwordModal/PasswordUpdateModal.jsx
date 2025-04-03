import React, { useState } from 'react';
import passwordHero from '../../images/passwordComponentImage.png'
import { toast } from 'react-toastify';

const PasswordUpdateModal = ({ isOpen, onClose }) => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: 'Speaklish123',
    newPassword: '',
    repeatPassword: ''
  });
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const notify = () => toast.success("Your password has been successfully updated.")
  
  const handleSubmit = () => {
    // Implement password update logic here
    console.log('Updating password:', passwordData);
    notify()

    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b">
          <h2 className="text-xl font-semibold">Update password</h2>
          <button 
            onClick={onClose}
            className="text-green-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Illustration */}
        <div className="p-6 flex justify-center">
          <img 
            src={passwordHero} 
            alt="Password update illustration" 
            className="h-40"
          />
        </div>
        
        {/* Form */}
        <div className="px-6 pb-6 space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-gray-600 mb-2 text-lg">Current password</label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg pr-12"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#606E80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#606E80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.9 4.24C10.5883 4.0781 11.2931 3.99737 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6511 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88M1 1L23 23M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68189 3.96914 7.65661 6.06 6.06L17.94 17.94Z" stroke="#606E80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* New Password */}
          <div>
            <label className="block text-gray-600 mb-2 text-lg">Create password</label>
            <p className="text-gray-400 mb-2">At least 6 characters with letter</p>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full p-2 border border-gray-300 rounded-lg pr-12"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 5L8 12L16 19" stroke="#606E80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Repeat Password */}
          <div>
            <label className="block text-gray-600 mb-2 text-lg">Repeat password</label>
            <input
              type="password"
              name="repeatPassword"
              value={passwordData.repeatPassword}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          
          {/* Done Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-green-400 text-white py-2 px-2 rounded-lg text-lg font-medium mt-4"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdateModal;
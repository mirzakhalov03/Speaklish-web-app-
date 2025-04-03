import { SlWallet } from "react-icons/sl"
import { FiLogIn } from "react-icons/fi"
import { MdGroups2 } from "react-icons/md"
import { RiEdit2Fill } from "react-icons/ri"
import { RxCross1 } from "react-icons/rx"
import { BsGridFill } from "react-icons/bs"
import { useState, useRef, useEffect } from "react"
import botImage from "../../images/bot-logo.svg"
import avatarImage from "../../images/avatar-img.svg"
import { Link } from "react-router-dom"
import botSad from '../../images/Speaklish-sad-logo.svg'

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const dropdownRef = useRef(null)
  const modalRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLogoutModal(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogOut = () => {
    setShowLogoutModal(true)
    setIsDropdownOpen(false)
  }

  const confirmLogout = () => {
    // Implement your actual logout logic here
    console.log("User logged out")
    setShowLogoutModal(false)
    // Add your logout implementation here
    // e.g., clear localStorage, redirect to login page, etc.
  }

  return (
    <>
      {/* Dimmed overlay when dropdown is open */}
      {isDropdownOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10 backdrop-blur-sm" />}

      {/* Blurred overlay when logout modal is open */}
      {showLogoutModal && <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30" />}

      <div className="w-full h-[50px] mt-[15px] flex items-center justify-between relative z-4">
        <Link to={"/profile"} className="flex relative">
          <div className="w-[50px] h-[50px] bg-[#D7FFEF] rounded-full flex items-center justify-center">
            <img src={botImage || "/placeholder.svg"} alt="" />
          </div>
          <div className="w-[50px] h-[50px] bg-[#07172a] rounded-full absolute left-8 -z-10">
            <img src={avatarImage || "/placeholder.svg"} alt="" />
          </div>
        </Link>

        <div ref={dropdownRef}>
          <button
            className={`w-[50px] h-[50px] ${isDropdownOpen ? "bg-[#e0e1e5]" : "bg-[#F5F6FA]"} rounded-full flex items-center justify-center transition-colors`}
            onClick={toggleDropdown}
          >
            <BsGridFill className="text-[24px] text-[#606E80]" />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-0 w-[200px] bg-white rounded-lg shadow-lg py-2 z-30">
              <div className="w-full flex items-center justify-end px-4 py-2">
                <button onClick={toggleDropdown}>
                  <RxCross1 className="text-[#07DA83] text-[22px]" />
                </button>
              </div>
              <ul className="font-semibold  text-[#606E80]">
                <Link to={"profile"} className="px-4 py-2 hover:bg-[#F5F6FA] cursor-pointer flex items-center gap-2">
                  <RiEdit2Fill className="text-[20px]" />
                  Edit profile
                </Link>
                <Link to={""} className="px-4 py-2 hover:bg-[#F5F6FA] cursor-pointer flex items-center gap-2">
                  <MdGroups2 className="text-[20px]" />
                  Speaklish
                </Link>
                <Link to={""} className="px-4 py-2 hover:bg-[#F5F6FA] cursor-pointer flex items-center gap-2">
                  <SlWallet className="text-[20px]" />
                  Request balance
                </Link>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2 hover:bg-[#F5F6FA] text-[#F93C65] cursor-pointer flex items-center gap-2"
                >
                  <FiLogIn className="text-[20px]" />
                  Log out
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div ref={modalRef} className="bg-white flex items-center flex-col rounded-lg shadow-lg py-2 px-4  w-[300px] max-w-[90%] animate-fadeIn">
            <img src={botSad} alt="" />
            <h3 className="text-lg font-semibold text-[#07172a] mb-3"> Are you sure?</h3>
            <p className="text-[#606E80] mb-6 text-center">Once you log out, you will need to sign in again to continue</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={confirmLogout}
                className="w-1/2 px-4 py-2 rounded-lg bg-[#F93C65] text-white hover:bg-[#e02e54] transition-colors"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="w-1/2 px-4 py-2 rounded-lg bg-[#F5F6FA] text-[#606E80] hover:bg-[#e0e1e5] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TopBar


//Header1
import { CloseSVG } from "../Input/close.jsx";
import { Img, Heading, Text, Button, Input } from "./..";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Header1({ ...props }) {
  const navigate = useNavigate();
  const [searchBarValue, setSearchBarValue] = useState("");
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility
  const [logoUrl, setLogoUrl] = useState('');
  const [storeId, setAStoreId] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Clear user-related data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('storeID');
    localStorage.removeItem('role');

    // Redirect to login or another page after logout
    navigate('/'); // Or redirect to the desired page, like home
    setShowDropdown(false);  // Close the dropdown after logout
  };

  const handleChangePassword = () => {
    // Navigate to the change password page
    navigate('/change-password');
    setShowDropdown(false); // Close the dropdown after navigating
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/dashboard');
    } else {
      setUsername(savedUsername);
    }

    // Disable scrolling when this component is mounted
    document.body.style.overflow = 'hidden';

    // Cleanup: Enable scrolling again when the component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, [navigate]);

  useEffect(() => {
    const fetchLogoImage = async () => {
      try {
        const response = await fetch(`/api/store/${storeId}/logo`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.logoBase64) {
          setLogoUrl(data.logoBase64); // Set the logoBase64 if valid
        } else {
          throw new Error('Image data is missing or invalid');
        }
      } catch (error) {
        console.error('Error fetching the logo:', error);
      }
    };

    if (storeId) {
      fetchLogoImage();
    }
  }, [storeId]);

  return (
  <header {...props} className={`${props.className} flex justify-end items-center gap-5 bg-gray-100_01`} >
    <div className="relative flex flex-col items-end w-[46%] sm:w-full">
      <div className="flex items-center gap-8 cursor-pointer" onClick={handleProfileClick}>
        <div className="flex flex-col items-end">
          <Text as="p" className="font-barlow text-[18px] font-normal text-gray-500_01 lg:text-[15px]">
            Hello,
          </Text>
          <Heading
            size="text2xl"
            as="p"
            className="font-barlow text-[20px] font-normal text-blue_gray-800 lg:text-[17px]"
          >
            <div className="container">
              <p className="typed">{username}</p>
            </div>
          </Heading>
        </div>
        <div>
          <img
            src="images/Sygnus logo.png"
            className="h-[40px] w-[40px] rounded-full object-contain"
          />
        </div>

      </div>




       {/* Dropdown Menu for Logout and Change Password */}
       {showDropdown && (
         <div className="absolute top-full mt-2 w-[200px] bg-cyan-a700 border border-gray-200 rounded-lg shadow-lg px-2 py-1 z-50">
           <button
             className="flex items-center gap-2 px-4 py-2 w-full text-white hover:bg-blue-500 hover:text-white rounded-lg"
             onClick={handleChangePassword}
           >
             <Img
               src="images/ChangePassword.svg"
               alt="Change Password Icon"
               className="h-5 w-5"
             />
             Change Password
           </button>
           <button
             className="flex items-center gap-2 px-4 py-2 w-full text-white hover:bg-red-500 hover:text-white rounded-lg"
             onClick={handleLogout}
           >
             <Img
               src="images/logout.svg" // Replace with your actual logout icon path
               alt="Logout Icon"
               className="h-5 w-5"
             />
             Logout
           </button>
         </div>
       )}
     </div>
   </header>
  );
}

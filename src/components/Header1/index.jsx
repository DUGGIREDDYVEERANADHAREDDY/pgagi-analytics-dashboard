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

  const Settings = () => {
    // Navigate to the change password page
    navigate('/dark-them');
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
    <header
  {...props}
  className={`${props.className} flex sm:flex-col justify-between items-center bg-gray-100_01`}
  style={{ paddingLeft: '120px', paddingTop: '15px' }}
>
  {/* Search Bar */}
  <Input
    color="gray_50_01"
    size="md"
    variant="fill"
    shape="round"
    name="Search Field"
    placeholder={`Search here`}
    value={searchBarValue}
    onChange={(e) => setSearchBarValue(e.target.value)}
    suffix={
      <div className="flex h-[24px] w-[24px] items-center justify-center">
        {searchBarValue?.length > 0 ? (
          <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} />
        ) : (
          <Img src="images/search.svg" alt="Search" className="h-[24px] w-[24px]" />
        )}
      </div>
    }
    className="w-full rounded-lg border border-gray-200 px-4 font-barlow text-gray-500_02 sm:px-8 md:w-[66%] lg:w-[100%] xl:w-[66%]"
    style={{
      caretColor: '#0bb5c9',
      caretWidth: '20px',
    }}
  />

  {/* Adjusted Flex Container */}
  {!isMobile && (
    <div className="flex w-[28%] items-center justify-between md:w-full sm:flex-col sm:gap-0">
      <div className="flex items-center gap-2 sm:w-full">
        {/* Logo or Divider */}
        <div className="h-[56px] w-px bg-blue_gray-100" />
      </div>
      <div className="relative flex items-center gap-2 sm:w-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleProfileClick}>
          <div className="flex flex-col items-start">
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
          <img
            src="images/profile1.jpeg"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute top-full mt-2 right-0 w-[200px] bg-cyan-a700 border border-gray-200 rounded-lg shadow-lg px-2 py-1 z-50">
            <Button
              className="flex items-center gap-2 px-4 py-2 w-full rounded-lg"
              style={{ color: 'white' }}
              onClick={Settings}
            >
              <Img src="images/gear-solid.svg" alt="Settings Icon" className="h-5 w-5" />
              Settings
            </Button>
            <Button
              className="flex items-center gap-2 px-4 py-2 w-full rounded-lg"
              style={{ color: 'white' }}
              onClick={handleChangePassword}
            >
              <Img src="images/bell-regular.svg" alt="Notifications Icon" className="h-5 w-5" />
              Notifications
            </Button>
            <Button
              className="flex items-center gap-2 px-4 py-2 w-full rounded-lg"
              style={{ color: 'white' }}
              onClick={handleLogout}
            >
              <Img src="images/logout.svg" alt="Logout Icon" className="h-5 w-5" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  )}
</header>
  
  );
}


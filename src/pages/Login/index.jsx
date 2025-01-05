import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, CheckBox, Input } from "../../components";
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import '../../styles/index.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
  
    // Define default username and password
    const defaultUsername = 'PGAGI';
    const defaultPassword = 'Go4Lunch@13_00';
  
    // Validate the entered credentials
    if (username === defaultUsername && password === defaultPassword) {
      // Mock user data
      const data = {
        token: 'mockToken123',
        username: defaultUsername,
        role: 'USER', // Adjust as needed
      };
  
      // Save mock data to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('role', data.role);
  
      // Navigate to the appropriate dashboard
      const destination = data.role === 'ADMIN' ? '/Admindashboard' : '/dashboard';
      navigate(destination);
    } else {
      // Set an error message if credentials are invalid
      setLoginError('Invalid username or password');
    }
  };
  
  

  const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

  return (
    <>
      <Helmet>
        <title>Admin Login - Sygnus Techlabs</title>
        <meta
          name="description"
          content="Sign in to the Admin Dashboard at Sygnus Techlabs. Enter your username and password to access your account. Secure and user-friendly admin login."
        />
        <link rel="icon" href="images/PGAGI.jpeg" />
      </Helmet>
      <div
  className="flex w-full items-center lg:flex-row md:flex-col min-h-screen overflow-hidden bg-white-a700"
 // style={{ backgroundColor: '#00838F' }}

>
  {/* Left Section */}
  <div className="flex flex-1 flex-col items-start lg:w-1/2 md:w-full md:px-5">
    <div className="flex flex-wrap w-[90%] flex-col items-center gap-6 bg-white-a700 px-10 py-20 lg:w-full lg:py-8 md:w-full sm:gap-4 sm:p-4 min-h-screen">
      {/* Logo and Dashboard Heading */}
      <div className="flex w-full flex-col items-center gap-4 lg:w-full md:items-center">
      
      </div>
      {/* Sign-in Section */}
      <div className="flex flex-col gap-6 w-full max-w-lg lg:w-full">
        <Heading
          size="heading2xl"
          as="h2"
          className="text-center text-[42px] font-bold text-blue_gray-800 lg:text-[36px]"
        >
          Sign in
        </Heading>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          {/* Username Section */}
          <div className="flex flex-col gap-2">
            <Heading
              size="texts"
              as="h3"
              className="text-[14px] font-medium text-gray-800_01"
            >
              Username
            </Heading>
            <Input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg px-4 py-2 border"
              required
            />
          </div>
          {/* Password Section */}
          <div className="flex flex-col gap-2">
            <Heading
              size="texts"
              as="h4"
              className="text-[14px] font-medium text-gray-800_01"
            >
              Password
            </Heading>
            <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg px-4 py-2 border border-gray-300"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
          </div>
          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center sm:flex-col sm:gap-2">
            <CheckBox
              name="Remember Checkbox"
              label="Remember me"
              id="RememberCheckbox"
              className="gap-2 text-[14px] font-medium text-gray-800_01"
            />
            <Link to="/forgotpassword">
              <Heading
                size="texts"
                as="h5"
                className="text-[14px] font-medium text-cyan-a700"
              >
                Forgot Password
              </Heading>
            </Link>
          </div>
          {/* Submit Button */}
          <Button
            type="submit"
            size="4xl"
            className="w-full rounded-lg px-4 py-2 font-medium"
          >
            Sign in
          </Button>
          {/* Error Message */}
          {loginError && (
            <div className="mt-2 text-center text-red-400">
              Sign in failed! Please check your username and password.
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
  {/* Right Section */}
  <div className="mb-8 flex  w-[44%] flex-col lg:flex-row justify-center items-center px-5 lg:px-5">
  {/* Left Section */}
  <div className="relative flex flex-1 flex-col items-center justify-center md:w-full">
  <div className=" flex items-center justify-between gap-5 self-stretch md:mx-0 sm:flex-col sm:items-center sm:gap-6">
    <img
      src="images/Aibot.jpeg"
      alt="Cashier Image"
      className="mb-2.5  object-cover self-end sm:mb-0 sm:h-[8000px] sm:w-[350px] sm:mx-auto"
    />
  </div>
</div>


  {/* Footer Text Section */}
  
</div>
</div>
    </>
  );
}

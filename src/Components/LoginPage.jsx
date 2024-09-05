import React, { useState } from 'react';
import LoginImage from '../Assets/IE.jpg'; 
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.endsWith('@gmail.com')) {
      setEmailError('Insert proper email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length !== 8) {
      setPasswordError('Password must be exactly 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (emailError || passwordError) return;

    try {
      const response = await axios.post('api/login', { email, password });

      if (response.data) {
        
        const { roleId, token } = response.data;
        localStorage.setItem('roleId', roleId);
        localStorage.setItem('authToken', token);
        
        
        navigate(`/${roleId}`); 
      } else {
        setLoginError('Login failed');
      }
    } catch (error) {
      setLoginError('An error occurred while logging in.');
      console.error('Login failed:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginImage})` }}
    >
      {/* Left Side (1/3 of the page) */}
      <div className="hidden md:w-1/3 md:block"></div>

      {/* Right Side (2/3 of the page) with white overlay */}
      <div className="w-full md:w-2/3 flex items-center justify-center bg-white bg-opacity-70">
        <div className="p-6 md:p-16 rounded-lg max-w-lg w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-8 text-center mt-2 md:mt-4">Welcome Back!</h1>
          
          {/* Horizontal Lines with Fields in Between */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="border-t border-gray-400"></div>

            {/* Email Field */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <FaEnvelope className="text-black mr-2 md:mr-3 text-lg md:text-xl" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base"
                />
              </div>
              {emailError && <span className="text-red-500 text-xs md:text-sm mt-1">{emailError}</span>}
            </div>
            <div className="border-t border-gray-400"></div>

            {/* Password Field */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <FaLock className="text-black mr-2 md:mr-3 text-lg md:text-xl" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base"
                />
              </div>
              {passwordError && <span className="text-red-500 text-xs md:text-sm mt-1">{passwordError}</span>}
            </div>
            <div className="border-t border-gray-400"></div>

            {/* Login Error Message */}
            {loginError && <div className="text-red-500 text-xs md:text-sm mt-1">{loginError}</div>}

            {/* Forgot Password Link */}
            <div className="text-right mb-4 md:mb-6">
              <Link 
                to="/forgot-password" 
                className="text-black hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

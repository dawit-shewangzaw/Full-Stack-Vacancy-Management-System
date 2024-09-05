import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import LoginImage from '../Assets/IE.jpg';
import axiosInstance from '../services/axiosConfig';


const ForgotPage = () => {
  const [showForgotPage, setShowForgotPage] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPinPage, setShowPinPage] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [showNewPasswordPage, setShowNewPasswordPage] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.endsWith('@gmail.com')) {
      setEmailError('Insert proper email address');
    } else {
      setEmailError('');
    }
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
    if (!/^\d{6}$/.test(e.target.value)) {
      setPinError('PIN must be exactly 6 digits');
    } else {
      setPinError('');
    }
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (e.target.value.length !== 8) {
      setPasswordError('New Password must be exactly 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  // Function to handle sending reset request
  const handleSendClick = async () => {
    if (!emailError && email) {
      try {
        const response = await  axiosInstance.post('/password-reset-request', { email });
        
        if (response.status === 200) {
          setShowForgotPage(false);
          setShowPinPage(true);
        } else {
          setEmailError('Failed to send reset email');
        }
      } catch (error) {
        setEmailError('Error sending request');
      }
    }
  };

  // Function to handle verifying the PIN
  const handleResetClick = async () => {
    if (!pinError && pin) {
      try {
        const response = await axiosInstance.post('/verify-reset-code', { email, token: pin.toString(), });
         
        if (response.status === 200) {
          setShowPinPage(false);
          setShowNewPasswordPage(true);
        } else {
          setPinError('Invalid PIN or email');
        }
      } catch (error) {
        setPinError('Error verifying PIN');
      }
    }
  }; 

  // Function to handle resetting the password
  const handleSavePasswordClick = async () => {
    if (newPassword === repeatPassword && !passwordError && newPassword) {
      try {
        const response = await  axiosInstance.post('/reset-password', { email, token: pin.toString(), newPassword });
        
        if (response.status === 200) {
          alert('Password changed successfully!');
        } else {
          setPasswordError('Failed to reset password');
        }
      } catch (error) {
        setPasswordError('Error resetting password');
      }
    } else {
      setPasswordError('Passwords do not match or are invalid');
    }
  };

  const handleBackToLoginClick = () => {
    setShowForgotPage(true);
    setShowPinPage(false);
    setShowNewPasswordPage(false);
  };

  return (
    <div className="flex h-screen bg-cover bg-center" style={{ backgroundImage: `url(${LoginImage})` }}>
      <div className="hidden md:w-1/3 md:block"></div>
      <div className="w-full md:w-2/3 flex items-center justify-center bg-white bg-opacity-70">
        <div className="p-6 md:p-16 rounded-lg max-w-lg w-full">
          {showForgotPage ? (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-6 md:mb-8 text-center mt-2 md:mt-4">Forgot Password</h1>
              <p className="text-sm md:text-base text-center text-[#1A1A1A] mb-6 md:mb-8">
                This will reset your password and give a chance to create a new password to Log In.
              </p>
              <div className="space-y-4">
                <div className="border-t border-gray-400"></div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <FaEnvelope className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>
                  {emailError && <span className="text-red-500 text-xs md:text-sm mt-1">{emailError}</span>}
                </div>
                <div className="border-t border-gray-400"></div>
              </div>
              <div className="text-right mb-4 md:mb-6">
                <Link
                  to="/log-in"
                  onClick={handleBackToLoginClick}
                  className="text-[#1A1A1A] hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Back to LogIn
                </Link>
              </div>
              <button
                onClick={handleSendClick}
                className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
              >
                Send
              </button>
            </>
          ) : showPinPage ? (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-4 md:mb-6 text-center mt-2 md:mt-4">Enter PIN</h1>
              <p className="text-sm md:text-base text-center text-[#1A1A1A] mb-6 md:mb-8">
                Please enter the PIN sent to your email.
              </p>
              <div className="space-y-4">
                <div className="border-t border-gray-400"></div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <FaLock className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="text"
                      placeholder="PIN"
                      value={pin}
                      onChange={handlePinChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>
                  {pinError && <span className="text-red-500 text-xs md:text-sm mt-1">{pinError}</span>}
                </div>
                <div className="border-t border-gray-400"></div>
              </div>
              <div className="text-right mb-4 md:mb-6">
                <Link
                  to="/log-in"
                  onClick={handleBackToLoginClick}
                  className="text-[#1A1A1A] hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Back to LogIn
                </Link>
              </div>
              <button
                onClick={handleResetClick}
                className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
              >
                Next
              </button>
            </>
          ) : showNewPasswordPage ? (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-6 md:mb-8 text-center mt-2 md:mt-4">New Password</h1>
              <div className="space-y-4">
                <div className="border-t border-gray-400"></div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <FaLock className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>
                  <div className="flex items-center">
                    <FaLock className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      value={repeatPassword}
                      onChange={handleRepeatPasswordChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>
                  {passwordError && <span className="text-red-500 text-xs md:text-sm mt-1">{passwordError}</span>}
                </div>
                <div className="border-t border-gray-400"></div>
              </div>
              <div className="text-right mb-4 md:mb-6">
                <Link
                  to="/log-in"
                  onClick={handleBackToLoginClick}
                  className="text-[#1A1A1A] hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Back to LogIn
                </Link>
              </div>
              <button
                onClick={handleSavePasswordClick}
                className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
              >
                Save Password
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;

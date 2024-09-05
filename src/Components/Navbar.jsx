import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ role }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);


  const roleId  = localStorage.getItem("roleId")
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on link click
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderNavLinks = () => {
    return (
      <>
        <Link
          to="/"
          className={`text-black font-medium underline-offset-4 ${activeLink === 'Home' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </Link>
        <Link
          to="/jobs"
          className={`text-black font-medium underline-offset-4 ${activeLink === 'Jobs' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
          onClick={() => handleLinkClick('Jobs')}
        >
          Jobs
        </Link>
        <Link
          to="/contact-us"
          className={`text-black font-medium underline-offset-4 ${activeLink === 'Contact Us' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
          onClick={() => handleLinkClick('Contact Us')}
        >
          Contact Us
        </Link>
        
        {roleId === "d3549b88-1642-4074-9c34-74d03d83fd99" && (
          <>
            <Link
              to="/new-employee"
              className={`text-black font-medium underline-offset-4 ${activeLink === 'New Employee' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
              onClick={() => handleLinkClick('New Employee')}
            >
              New Employee
            </Link>
            
            <Link
              to="/employee"
              className={`text-black font-medium underline-offset-4 ${activeLink === 'Employee' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
              onClick={() => handleLinkClick('Employee')}
            >
              Employee
            </Link>
          </>
        )}
        {roleId === "2d12d921-0dd2-4aa6-8c9c-b195dea75cf0" && (
          <>
            <Link
              to="/report"
              className={`text-black font-medium underline-offset-4 ${activeLink === 'Report' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
              onClick={() => handleLinkClick('Report')}
            >
              Report
            </Link>
          </>
        )}
        {roleId === "214240eb-eca5-4966-83e1-27b2083ac489" && (
          <>
            <Link
              to="/new-post"
              className={`text-black font-medium underline-offset-4 ${activeLink === 'New Post' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
              onClick={() => handleLinkClick('New Post')}
            >
              New Post
            </Link>
            <Link
              to="/application"
              className={`text-black font-medium underline-offset-4 ${activeLink === 'Application' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
              onClick={() => handleLinkClick('Application')}
            >
              Application
            </Link>
            
          </>
        )}
        {roleId === "4111bb8a-167c-487f-a80c-5ba01ff6ab49" && (
          <>
            <Link
              to="/application"
              className={`text-black font-medium underline-offset-4 ${activeLink === 'Application' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
              onClick={() => handleLinkClick('Application')}
            >
              Application
            </Link>
          </>
        )}
        
      </>
    );
  };

  return (
    <div>
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="text-black font-bold text-lg ml-12">
          IE Network Solutions
        </div>

        <div className="flex items-center lg:hidden space-x-4">
          {roleId === "2d12d921-0dd2-4aa6-8c9c-b195dea75cf0" || roleId === "214240eb-eca5-4966-83e1-27b2083ac489" || roleId === "4111bb8a-167c-487f-a80c-5ba01ff6ab49" ? (
            <>
              <Link to={"/notification"}>
                <FaBell className="text-black hover:text-blue-500 cursor-pointer" />
              </Link>
              <Link to={"/message"}>
                <FaEnvelope className="text-black hover:text-blue-500 cursor-pointer" />
              </Link>
            </>
          ) : null}
          <button
            className="text-black focus:outline-none"
            onClick={handleToggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className={`hidden lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? 'hidden' : ''}`}>
          {renderNavLinks()}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {roleId === "2d12d921-0dd2-4aa6-8c9c-b195dea75cf0" || roleId === "214240eb-eca5-4966-83e1-27b2083ac489" || roleId === "4111bb8a-167c-487f-a80c-5ba01ff6ab49" ? (
            <>
              <Link to={"/notification"}>
                <FaBell className="text-black hover:text-blue-500 cursor-pointer" />
              </Link>
              <Link to={"/message"}>
                <FaEnvelope className="text-black hover:text-blue-500 cursor-pointer" />
              </Link>
            </>
          ) : null}
            <Link to={roleId ? "/" : "/log-in"}>
              <button
                className={`px-6 py-2 rounded-full transform -rotate-25 lg:mr-4 ${
                  roleId ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
                } text-white`}
                onClick={() => {
                  if (roleId) {
                    // Clear the roleId from local storage
                    localStorage.removeItem('roleId');
                  }
                }}
              >
                {roleId ? 'Log Out' : 'Log In'}
              </button>
            </Link>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'} z-50`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {renderNavLinks()}
          <Link to={roleId ? "/log-out" : "/log-in"}>
            <button 
              className={`px-6 py-2 rounded-full  ${
              roleId ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}`}
              onClick={() => {
                if (roleId) {
                  // Clear the roleId from local storage
                  localStorage.removeItem('roleId');
                }
              }}
              >
              {roleId ? 'Log Out' : 'Log In'}
              
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
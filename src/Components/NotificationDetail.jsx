import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const NotificationDetail = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20 overflow-x-hidden">
      {/* Applicant's Name and Status */}
      <div className="flex flex-col mb-4">
        <h1 className="text-3xl font-bold text-center md:text-left">Selamawit Tesfahun</h1>
        
        {/* Team Name */}
        <div className="text-gray-700 text-lg mb-4 text-center md:text-left">
          <span className="font-medium">SaaS Team Leader</span>
        </div>

        {/* Contact Details */}
        <div className="mt-2 text-gray-700 text-sm flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-2" />
            <span>selamawit@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-gray-500 mr-2" />
            <span>+251912345678</span>
          </div>
        </div>
      </div>

      {/* Application Information Title */}
      <h2 className="text-2xl font-semibold mb-4 mt-16 text-center md:text-left">Application Information</h2>

      {/* Form Fields */}
      <form>
        {/* Flex container for Title of Vacancy and Gender */}
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Title of Vacancy */}
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title of Vacancy
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Gender Selection */}
        <fieldset className="flex-1 mb-4">
          <legend className="block text-gray-700 text-sm font-bold mb-2">Gender</legend>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <input
                id="male"
                name="gender"
                type="radio"
                value="male"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-700">Male</label>
            </div>

            <div className="flex items-center">
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-700">Female</label>
            </div>

            <div className="flex items-center">
              <input
                id="both"
                name="gender"
                type="radio"
                value="both"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="both" className="ml-2 text-sm font-medium text-gray-700">Both</label>
            </div>
          </div>
        </fieldset>

        {/* Number of Employees */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employees">
            Number of Employees
          </label>
          <input
            id="employees"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Responsibility */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibility">
            Responsibility
          </label>
          <textarea
            id="responsibility"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
            rows="7"
            placeholder="Enter the required responsibility"
          ></textarea>
        </div>

        {/* Required Qualification */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
            Required Qualification
          </label>
          <textarea
            id="qualification"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
            rows="7"
            placeholder="Enter the required qualifications"
          ></textarea>
        </div>
      </form>

      {/* Footer Padding */}
      <div className="mt-10"></div>
    </div>
  );
};

export default NotificationDetail;

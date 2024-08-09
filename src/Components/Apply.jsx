import React, { useState } from 'react';

const Apply = () => {
  const [cvError, setCvError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is a PDF
      if (file.type !== 'application/pdf') {
        setCvError('Please upload a PDF file.');
        event.target.value = ''; // Clear the input
        return;
      }
      
      // Check if the file size is less than 5MB
      if (file.size > 5 * 1024 * 1024) { // 5MB in bytes
        setCvError('File size should not exceed 5MB.');
        event.target.value = ''; // Clear the input
        return;
      }
      
      // No errors
      setCvError('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 px-4 mx-auto w-full">
      <div className="flex-grow w-full max-w-full mx-0 shadow-lg p-6 bg-white rounded-md">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Networking Application Form</h1>
        </div>

        {/* Application Form */}
        <div className="space-y-6">
          {/* Full Name and CV Upload */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="full-name"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
                placeholder="Enter your full name"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label htmlFor="cv-upload" className="block text-sm font-medium text-gray-700">Upload CV (PDF)</label>
              <input
                id="cv-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-gray-500 text-sm mt-2">Maximum file size: 5MB (PDF)</p>
              {cvError && <p className="text-red-500 text-sm mt-2">{cvError}</p>}
            </div>
          </div>

          {/* Email Address and Phone Number */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex items-center">
                {/* Country Code */}
                <input
                  id="country-code"
                  type="text"
                  value="+251"
                  readOnly
                  className="block w-20 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 text-center sm:text-base py-3 px-4"
                />
                {/* Phone Number */}
                <input
                  id="phone_number"
                  type="text"
                  className="ml-2 flex-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Institute / University */}
          <div>
            <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute / University</label>
            <input
              id="institute"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              placeholder="Enter your institute or university"
            />
          </div>

          {/* Field of Study */}
          <div>
            <label htmlFor="field-of-study" className="block text-sm font-medium text-gray-700">Field of Study</label>
            <input
              id="field-of-study"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              placeholder="Enter your field of study"
            />
          </div>

          {/* CGPA */}
          <div>
            <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">CGPA</label>
            <input
              id="cgpa"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              placeholder="Enter your CGPA"
            />
          </div>

          {/* Years of Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
            <input
              id="experience"
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              placeholder="Enter your years of experience"
            />
          </div>

          {/* Gender Radio Buttons */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-700">Gender</legend>
            <div className="flex flex-col space-y-4 mt-2">
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
            </div>
          </fieldset>

          {/* Cover Letter */}
          <div>
            <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea
              id="cover-letter"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              rows="10"
              placeholder="Enter your cover letter"
            ></textarea>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Apply;

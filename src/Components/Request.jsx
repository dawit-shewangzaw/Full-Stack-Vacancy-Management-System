import React from 'react';

const NewRequest = () => {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 px-4 mx-auto w-full">
      <div className="flex-grow w-full max-w-4xl mx-auto shadow-lg p-6 bg-white rounded-md">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">New Request</h1>
        </div>

        {/* Request Form */}
        <div className="space-y-6">
          {/* Title of Vacancy */}
          <div>
            <label htmlFor="title-vacancy" className="block text-sm font-medium text-gray-700">Title of Vacancy</label>
            <input
              id="title-vacancy"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              placeholder="Enter the title of the vacancy"
            />
          </div>

          {/* Gender Radio Buttons */}
          <div>
            <fieldset>
              <legend className="block text-sm font-light text-gray-700">Preferred Gender</legend>
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
          </div>

          {/* Number of Vacancy Spaces */}
          <div>
            <label htmlFor="number-vacancy" className="block text-sm font-medium text-gray-700">Number of Vacancy Spaces</label>
            <input
              id="number-vacancy"
              type="number"
              min="1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              placeholder="Enter the number of employees needed"
            />
          </div>

          {/* Job Description */}
          <div>
            <label htmlFor="job-description" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              id="job-description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              rows="7"
              placeholder="Enter the job description"
            ></textarea>
          </div>

          {/* Responsibility */}
          <div>
            <label htmlFor="responsibility" className="block text-sm font-medium text-gray-700">Responsibility</label>
            <textarea
              id="responsibility"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              rows="7"
              placeholder="Enter the responsibilities"
            ></textarea>
          </div>

          {/* Required Qualification */}
          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Required Qualification</label>
            <textarea
              id="qualification"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base py-3 px-4"
              rows="7"
              placeholder="Enter the required qualifications"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;

import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Application = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  // Job listings grouped by page
  const jobLists = [
    [
      { name: '3D Designer', candidates: 10, created: '3m ago', link: '/applicant-list' },
      { name: 'Web Developer', candidates: 8, created: '5m ago', link: '/applicant-list' },
      { name: 'Graphic Designer', candidates: 12, created: '10m ago', link: '/applicant-list' },
      { name: 'Product Manager', candidates: 7, created: '15m ago', link: '/applicant-list' },
      { name: 'Data Scientist', candidates: 9, created: '20m ago', link: '/applicant-list' },
    ],
    [
      { name: 'Marketing Specialist', candidates: 5, created: '25m ago', link: '/applicant-list' },
      { name: 'UX/UI Designer', candidates: 6, created: '30m ago', link: '/applicant-list' },
      { name: 'System Analyst', candidates: 11, created: '35m ago', link: '/applicant-list' },
      { name: 'DevOps Engineer', candidates: 4, created: '40m ago', link: '/applicant-list' },
      { name: 'HR Manager', candidates: 3, created: '45m ago', link: '/applicant-list' },
    ],
  ];

  const totalPages = jobLists.length;

  // Handle navigation to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle navigation to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12 px-4">
      <div className="w-full max-w-7xl mx-auto bg-gray-50 shadow-md rounded-lg p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-3xl font-bold text-black mb-1">Recruitment</h1>
            <p className="text-gray-600">Here’s all job list</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-blue-700 transition duration-200">
            <span className="mr-2">+</span> Add New
          </button>
        </div>

        {/* Job List */}
        <div className="space-y-6 mb-8">
          {jobLists[currentPage - 1].map((job, index) => (
            <Link key={index} to={job.link}>
              <div className="bg-white shadow-lg rounded-lg p-6 w-full mb-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row justify-between items-start">
                  <div>
                    <h2 className="text-lg font-medium text-black">{job.name}</h2>
                    <p className="text-gray-500">10 Candidates Applied</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 sm:mt-0 sm:ml-4">Created {job.created}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <button
              onClick={handlePrevPage}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span className="text-gray-600">{currentPage}</span>
            <button
              onClick={handleNextPage}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
          <span className="text-gray-500 text-sm">Showing {currentPage} of {totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default Application;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobTable = () => {    
  const jobLinks = [
    '/job-description', '/job-description', '/job-description', '/job-description',
    '/job-description', '/job-description', '/job-description', '/job-description',
    '/job-description', '/job-description', '/job-description', '/job-description',
    '/job-description', '/job-description', '/job-description', '/job-description',
    '/job-description', '/job-description', '/job-description', '/job-description'
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;

  const filteredJobs = jobLinks.filter(job =>
    job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page on search
  };

  const navigate = useNavigate();

  const handleRowClick = (jobLink) => {
    navigate(jobLink);
  };

  return (
    <section className="py-12 px-4 lg:px-16 bg-[#F9F9FB]">
      <div className="overflow-x-auto">
        <h2 className="text-xl lg:text-2xl font-semibold text-center mb-4">Find a Job</h2>
        <p className="text-sm lg:text-base text-center text-gray-500 mb-8">
          <span className="block">Please first be sure that you meet all requirements for</span>
          <span className="block">the specific job you want to apply for.</span>
        </p>
        <div className="mb-8 max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:flex-row items-center w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search a job"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 mb-4 lg:mb-0"
            />
            <button
              onClick={handleSearch}
              className="w-full lg:w-auto px-4 py-3 bg-[#4864E1] text-white rounded-lg ml-0 lg:ml-4 flex-shrink-0"
            >
              Find a Job
            </button>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-200 mx-auto max-w-full lg:max-w-screen-lg">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">#</th>
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">Job Name</th>
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">Location</th>
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">Post Time</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job, index) => (
              <tr
                key={startIndex + index}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(job)}
              >
                <td className="py-4 px-3 text-sm lg:text-base text-gray-800 text-center">
                  {startIndex + index + 1}
                </td>
                <td className="py-4 px-3 text-sm lg:text-base text-gray-800 font-semibold text-center">
                  {/* Optional: You can remove the Link if you want the entire row to be clickable */}
                  {`Networking Job ${startIndex + index + 1}`}
                </td>
                <td className="py-4 px-3 text-sm lg:text-base text-gray-500 text-center">Addis Ababa, Ethiopia</td>
                <td className="py-4 px-3 text-sm lg:text-base text-gray-500 text-center">Posted 2 days ago</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 max-w-screen-lg mx-auto">
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          <span className="text-sm text-gray-600">
            Showing {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobTable;

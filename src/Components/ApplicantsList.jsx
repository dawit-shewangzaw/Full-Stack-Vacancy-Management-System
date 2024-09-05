import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicantsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // List of applicants
  const applicants = [
    { name: 'John Doe', phone: '+251 912 345 678', cgpa: '3.8', gender: 'Male', field: 'Computer Science', date: '2024-08-06', stage: 'Interview' },
    { name: 'Jane Smith', phone: '+251 912 345 679', cgpa: '3.9', gender: 'Female', field: 'Information Technology', date: '2024-08-07', stage: 'Review' },
    { name: 'Alice Johnson', phone: '+251 912 345 680', cgpa: '3.7', gender: 'Female', field: 'Software Engineering', date: '2024-08-08', stage: 'Interview' },
    { name: 'Bob Brown', phone: '+251 912 345 681', cgpa: '3.6', gender: 'Male', field: 'Data Science', date: '2024-08-09', stage: 'Review' },
    { name: 'Charlie Davis', phone: '+251 912 345 682', cgpa: '3.8', gender: 'Male', field: 'Cybersecurity', date: '2024-08-10', stage: 'Interview' },
    { name: 'Diana Evans', phone: '+251 912 345 683', cgpa: '3.9', gender: 'Female', field: 'Network Engineering', date: '2024-08-11', stage: 'Review' },
    { name: 'Evan Foster', phone: '+251 912 345 684', cgpa: '3.7', gender: 'Male', field: 'AI & ML', date: '2024-08-12', stage: 'Interview' },
    { name: 'Fiona Green', phone: '+251 912 345 685', cgpa: '3.6', gender: 'Female', field: 'Cloud Computing', date: '2024-08-13', stage: 'Review' }
  ];

  const totalPages = Math.ceil(applicants.length / itemsPerPage);
  
  const currentApplicants = applicants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle row click to navigate
  const handleRowClick = (applicant) => {
    navigate('/applicants-detail' ,  { state: { applicant }}); // Navigates to /applicants-list when a row is clicked
  };

  const rowStyle = {
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 px-4 mx-auto w-full">
      {/* Container for entire recruitment section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Page Title */}
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Recruitment
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          List of Job <span className="text-lg">&gt;</span> Designer Position
        </div>

        {/* Table of applicants */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">Name</th>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">Phone</th>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">CGPA</th>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">Gender</th>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">Field</th>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">Date</th>
                <th className="text-left p-3 font-semibold text-sm text-gray-700 border-b">Stage</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {currentApplicants.map((applicant, index) => (
                <tr
                  key={index}
                  style={{ ...rowStyle }}
                  onClick={() => handleRowClick(applicant)}
                  className="hover:bg-gray-100"
                >
                  <td className="p-3 text-gray-800">{applicant.name}</td>
                  <td className="p-3 text-gray-800">{applicant.phone}</td>
                  <td className="p-3 text-gray-800">{applicant.cgpa}</td>
                  <td className="p-3 text-gray-800">{applicant.gender}</td>
                  <td className="p-3 text-gray-800">{applicant.field}</td>
                  <td className="p-3 text-gray-800">{applicant.date}</td>
                  <td className="p-3 text-gray-800">{applicant.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white bg-blue-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-white bg-blue-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsList;

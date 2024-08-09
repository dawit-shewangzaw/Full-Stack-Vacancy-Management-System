import React, { useState } from 'react';

const Recruitment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const applicants = [
    { name: 'John Doe', phone: '+251 912 345 678', cgpa: '3.8', gender: 'Male', field: 'Computer Science', date: '2024-08-06', stage: 'Interview' },
    { name: 'Jane Smith', phone: '+251 912 345 679', cgpa: '3.9', gender: 'Female', field: 'Information Technology', date: '2024-08-07', stage: 'Review' },
    { name: 'Alice Johnson', phone: '+251 912 345 680', cgpa: '3.7', gender: 'Female', field: 'Software Engineering', date: '2024-08-08', stage: 'Interview' },
    { name: 'Bob Brown', phone: '+251 912 345 681', cgpa: '3.6', gender: 'Male', field: 'Data Science', date: '2024-08-09', stage: 'Review' },
    { name: 'Charlie Davis', phone: '+251 912 345 682', cgpa: '3.8', gender: 'Male', field: 'Cybersecurity', date: '2024-08-10', stage: 'Interview' },
    { name: 'Diana Evans', phone: '+251 912 345 683', cgpa: '3.9', gender: 'Female', field: 'Network Engineering', date: '2024-08-11', stage: 'Review' },
    { name: 'Evan Foster', phone: '+251 912 345 684', cgpa: '3.7', gender: 'Male', field: 'AI & ML', date: '2024-08-12', stage: 'Interview' },
    { name: 'Fiona Green', phone: '+251 912 345 685', cgpa: '3.6', gender: 'Female', field: 'Cloud Computing', date: '2024-08-13', stage: 'Review' },
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowClick = (applicant) => {
    // Replace with your logic to navigate or show details
    alert(`Clicked on ${applicant.name}`);
  };

  const rowStyle = {
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const hoverStyle = {
    backgroundColor: '#f0f0f0'
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
          List of Job <span className="text-lg">&gt;</span> Designer
        </div>

        {/* Applicants Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md border border-gray-200">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">No.</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Phone Number</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">CGPA</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Gender</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Field of Study</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Date of Application</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Stages</th>
              </tr>
            </thead>
            <tbody>
              {currentApplicants.map((applicant, index) => (
                <tr 
                  key={index} 
                  style={rowStyle}
                  onClick={() => handleRowClick(applicant)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  className="border-b"
                >
                  <td className="py-4 px-6 text-sm text-gray-600">{(currentPage - 1) * itemsPerPage + index + 1}</td> {/* Row Number */}
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.phone}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.cgpa}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.gender}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.field}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.date}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button 
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <button 
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}`}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;

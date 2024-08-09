import React, { useState } from 'react';

const Notification = () => {
    const requests = [
        { id: 1, teamLeader: 'Alice Johnson', team: 'Engineering', dateRequested: '2024-08-01' },
        { id: 2, teamLeader: 'Bob Smith', team: 'Marketing', dateRequested: '2024-08-02' },
        { id: 3, teamLeader: 'Charlie Davis', team: 'Design', dateRequested: '2024-08-03' },
        { id: 4, teamLeader: 'David Wilson', team: 'Sales', dateRequested: '2024-08-04' },
        { id: 5, teamLeader: 'Emma Taylor', team: 'HR', dateRequested: '2024-08-05' },
        { id: 6, teamLeader: 'Frank Miller', team: 'Support', dateRequested: '2024-08-06' },
        { id: 7, teamLeader: 'George Brown', team: 'IT', dateRequested: '2024-08-07' },
        { id: 8, teamLeader: 'Hannah Green', team: 'Legal', dateRequested: '2024-08-08' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const totalRows = requests.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return requests.slice(startIndex, endIndex);
    };

    const handleRowClick = (request) => {
        alert(`Team Leader: ${request.teamLeader}\nTeam: ${request.team}\nDate Requested: ${request.dateRequested}`);
    };

    return (
     <div className="pt-[80px] pb-8 px-6 max-w-6xl mx-auto"> 
        <div className="pt-[80px] pb-8 px-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Vacancy Requests</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="py-4 px-6 border-b text-left">Team Leader</th>
                        <th className="py-4 px-6 border-b text-left">Team</th>
                        <th className="py-4 px-6 border-b text-left">Date Requested</th>
                    </tr>
                </thead>
                <tbody>
                    {getCurrentPageData().map((request) => (
                        <tr
                            key={request.id}
                            onClick={() => handleRowClick(request)}
                            className="cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <td className="py-4 px-6 border-b">{request.teamLeader}</td>
                            <td className="py-4 px-6 border-b">{request.team}</td>
                            <td className="py-4 px-6 border-b">{request.dateRequested}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-12 flex justify-center items-center">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                    Previous
                </button>
                <span className="self-center text-gray-700">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                    Next
                </button>
            </div>
        </div>
     </div>  
    );
};

export default Notification;

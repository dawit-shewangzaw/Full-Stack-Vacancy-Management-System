import React, { useState } from 'react';
import axios from '../services/axiosConfig'; // Import your Axios configuration

const AdminNewEmployee = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [team, setTeam] = useState('');

  const handleSave = async () => {
    try {
      const response = await axios.post('/users', {
        email,
        password,
        roleId: role,
        teamId: team !== 'none' ? team : null,
      });

      if (response.status === 201) {
        alert('User created successfully!');
        // Optionally reset form fields
        setEmail('');
        setPassword('');
        setRole('');
        setTeam('');
      }
    } catch (error) {
      console.error('There was an error creating the user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Assigning New Employee</h1>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-6 flex gap-4">
          <div className="flex-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled hidden>Select your role</option>
            <option value="ec52c8d8-e4db-4daa-ae5b-3d06be98f0cc">Employee</option> {/* Replace with actual role IDs */}
            <option value="4111bb8a-167c-487f-a80c-5ba01ff6ab49">Team Leader</option>
            <option value="214240eb-eca5-4966-83e1-27b2083ac489">HR</option>
            <option value="2d12d921-0dd2-4aa6-8c9c-b195dea75cf0">Manager</option>
            <option value="d3549b88-1642-4074-9c34-74d03d83fd99">Admin</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="team" className="block text-sm font-medium text-gray-700">Team</label>
          <select
            id="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled hidden>Select your team</option>
            <option value="482d3f0d-f790-427a-8243-24e8660f2ae9">Development</option> {/* Replace with actual team IDs */}
            <option value="66293f1f-4535-4aa6-bb52-c15ba8e01dad">Network</option>
            
          </select>
        </div> 
        
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNewEmployee;
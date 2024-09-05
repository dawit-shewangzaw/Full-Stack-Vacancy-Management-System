import React, { useState , useEffect } from 'react';

const NewPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    workPlace: '',
    teamLeader: '',
    responsibility: '',
    requirementQualification: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle preview button click
  const handlePreview = () => {
    // Open a new tab and pass form data as query parameters
    const queryParams = new URLSearchParams(formData).toString();
    const previewUrl = `${window.location.origin}/preview?${queryParams}`;
    window.open(previewUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-20 pb-8 px-4">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-black mb-8 text-left">New Post</h1>
        
        {/* Form Fields */}
        <form className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-lg font-medium text-black mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Work Place Field */}
          <div>
            <label className="block text-lg font-medium text-black mb-2">Work Place</label>
            <input
              type="text"
              name="workPlace"
              value={formData.workPlace}
              onChange={handleChange}
              placeholder="Work Place"
              className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Team Leader Field */}
          <div>
            <label className="block text-lg font-medium text-black mb-2">Team Leader</label>
            <select
              name="teamLeader"
              value={formData.teamLeader}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Team Leader</option>
              <option value="Leader1">Leader 1</option>
              <option value="Leader2">Leader 2</option>
              <option value="Leader3">Leader 3</option>
            </select>
          </div>

          {/* Responsibility Field */}
          <div>
            <label className="block text-lg font-medium text-black mb-2">Responsibility</label>
            <textarea
              name="responsibility"
              value={formData.responsibility}
              onChange={handleChange}
              placeholder="Responsibility"
              className="w-full p-3 h-32 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Requirement Qualification Field */}
          <div>
            <label className="block text-lg font-medium text-black mb-2">Requirement Qualification</label>
            <textarea
              name="requirementQualification"
              value={formData.requirementQualification}
              onChange={handleChange}
              placeholder="Requirement Qualification"
              className="w-full p-3 h-32 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={handlePreview}
            >
              Preview
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;

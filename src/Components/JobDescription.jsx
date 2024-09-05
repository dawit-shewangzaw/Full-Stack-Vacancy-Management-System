import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const JobDescription = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-[#F9F9FB]">
      <div className="grid grid-cols-1 gap-8 mt-16"> {/* Reduced mt-16 to decrease space from the Navbar */}
        {/* Job Box */}
        <div className="bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg border border-gray-200 max-w-full mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Networking</h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">Addis Ababa, Ethiopia</p>
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Responsibility</h3>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-xs sm:text-sm">
              <li>Responsibility line 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique, consectetur qui ea atque porro ullam doloribus! Iure unde similique quasi animi hic eveniet doloremque sint. A assumenda minus ullam!</li>
              <li>Responsibility line 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel mollitia deserunt hic quibusdam delectus pariatur, error quasi similique veritatis voluptates cum saepe minima fugiat suscipit tenetur dignissimos amet vitae asperiores!</li>
              <li>Responsibility line 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
              <li>Responsibility line 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique, consectetur qui ea atque porro ullam doloribus! Iure unde similique quasi animi hic eveniet doloremque sint. A assumenda minus ullam!</li>
              <li>Responsibility line 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel mollitia deserunt hic quibusdam delectus pariatur, error quasi similique veritatis voluptates cum saepe minima fugiat suscipit tenetur dignissimos amet vitae asperiores!</li>
              <li>Responsibility line 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
              <li>Responsibility line 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
              <li>Responsibility line 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Requirement Qualification</h3>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-xs sm:text-sm">
              <li>Qualification line 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique, consectetur qui ea atque porro ullam doloribus! Iure unde similique quasi animi hic eveniet doloremque sint. A assumenda minus ullam!</li>
              <li>Qualification line 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel mollitia deserunt hic quibusdam delectus pariatur, error quasi similique veritatis voluptates cum saepe minima fugiat suscipit tenetur dignissimos amet vitae asperiores!</li>
              <li>Qualification line 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
              <li>Qualification line 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique, consectetur qui ea atque porro ullam doloribus! Iure unde similique quasi animi hic eveniet doloremque sint. A assumenda minus ullam!</li>
              <li>Qualification line 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel mollitia deserunt hic quibusdam delectus pariatur, error quasi similique veritatis voluptates cum saepe minima fugiat suscipit tenetur dignissimos amet vitae asperiores!</li>
              <li>Qualification line 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
              <li>Qualification line 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
              <li>Qualification line 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla eos autem? Fugiat deleniti sit perspiciatis magni tenetur officia voluptate iusto nostrum! Sequi facilis repellat, ex dolore placeat rerum a!</li>
            </ul>
          </div>
          <Link to="/apply">
            <button className="bg-[#0A9C4A] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-900">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobDescription;

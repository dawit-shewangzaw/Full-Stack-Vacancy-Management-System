// src/Layouts/Home.js
import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import IntroPage from '../Components/IntroPage';
import Cards from '../Components/Cards';
import JobTable from '../Components/JobTable';
import Footer from '../Components/Footer';
import JobDescription from '../Components/JobDescription';
import Apply from '../Components/Apply';

function Home() {
  const location = useLocation();
  const isJobDescriptionPage = location.pathname.startsWith('/job-description');
  const isApplyPage = location.pathname.startsWith('/apply');

  return (
    <div>
      {!isJobDescriptionPage && !isApplyPage && (
        <>
          <IntroPage />
          <Cards />
          <JobTable />
        </>
      )}
      <Routes>
        <Route path="job-description" element={<JobDescription />} />
        <Route path="apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default Home;

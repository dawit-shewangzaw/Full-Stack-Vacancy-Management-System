// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './Layouts/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NewPost from './Components/NewPost';
import Application from './Components/Application';
import Preview from './Components/Preview';
import ApplicantsList from './Components/ApplicantsList';
import ApplicantDetail from './Components/ApplicantDetail';
import ForgotPage from './Components/ForgotPage';
import LoginPage from './Components/LoginPage';
import Notification from './Components/Notification';
import NewRequest from './Components/Request';
import NotificationDetail from './Components/NotificationDetail';
import AdminNewEmployee from './Components/AdminNewEmployee';
import { RoleProvider } from './Context/RoleContext';

function App() {
  const [userRole, setUserRole] = useState(null); 

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <>
      <Router>
        <RoleProvider>
        <Navbar role={userRole} />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/application" element={<Application />} />
          <Route path="/applicant-list" element={<ApplicantsList />} />
          <Route path="/applicants-detail" element={<ApplicantDetail />} />
          <Route path="/form" element={<ApplicantDetail />} />
          <Route path="/cover-letter" element={<ApplicantDetail />} />
          <Route path="/result" element={<ApplicantDetail />} />
          
          {/* Pages Not inserted */}
          <Route path="/new-employee" element={<AdminNewEmployee/> } />
          <Route path="/employee" element={<Home />} />
          
          <Route path="/notification" element={<Notification />} />
          <Route path="/notification-detail" element={<NotificationDetail />} />
          <Route path="/message" element={<NewRequest />} />

          <Route path="/log-in" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/forgot-password" element={<ForgotPage />} />
        </Routes>
        <Footer />
        </RoleProvider>
      </Router>
    </>
  );
}

export default App;

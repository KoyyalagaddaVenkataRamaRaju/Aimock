import React, { useState } from "react";
import { FaHome, FaFile, FaMicrophone, FaUserAlt, FaCog, FaSignOutAlt, FaTimes, FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToHome = () => {
    navigate('/home');
  };
  const goToMocktest = () => {
    navigate('/MockTests');
  };
  const goToMockint = () => {
    navigate('/MockInterviews');
  };
  const goToProfile = () => {
    navigate('/');
  };
  const goToLogout = () => {
    navigate('/');
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </div>
        {isSidebarOpen && (
          <div>
            <div className="logo">
              <img src="/logoimage.png" alt="AI mock" className="logo-icon" />
            </div>
            <ul className="nav">
              <li onClick={goToHome}>
                <FaHome className="icon" size={18} fill="#4468ef" />
                {isSidebarOpen && <span>Dashboard</span>}
              </li>
              <li onClick={goToMocktest}>
                <FaFile className="icon" size={18} fill="#4468ef" />
                {isSidebarOpen && <span>Mock Tests</span>}
              </li>
              <li onClick={goToMockint}>
                <FaMicrophone className="icon" size={18} fill="#4468ef" />
                {isSidebarOpen && <span>Mock Interviews</span>}
              </li>
              <li onClick={goToProfile}>
                <FaUserAlt className="icon" size={18} fill="#4468ef" />
                {isSidebarOpen && <span>Account</span>}
              </li>
              <li>
                <FaCog className="icon" size={18} fill="#4468ef" />
                {isSidebarOpen && <span>Settings</span>}
              </li>
            </ul>
          </div>
        )}
        <div className="side_footer">
          {isSidebarOpen && (
            <>
              <p className="profileLetter">V</p>
              <div>
                <span className="user-name">Role</span>
                <span className="user-role">Student</span>
                <FaSignOutAlt size={33} fill="#4468ef" onClick={goToLogout} />
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Main content */}
      <div className={`main-content ${isSidebarOpen ? "expanded" : "collapsed"}`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;

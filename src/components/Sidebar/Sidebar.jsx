import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboard, faGlobe, faBook, faCompass, faCalendarAlt, faCode, faMicrophone, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`app-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="logo">{isOpen ? 'Logo' : 'L'}</h2>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span className="menu-item">Dashboard</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faClipboard} className="icon" />
            <span className="menu-item">Assessments</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <span className="menu-item">Global Platform Assess...</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} className="icon" />
            <span className="menu-item">Courses</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCompass} className="icon" />
            <span className="menu-item">Explore</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <span className="menu-item">Schedule</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} className="icon" />
            <span className="menu-item">IDE</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMicrophone} className="icon" />
            <span className="menu-item">AI Interview (new)</span>
          </li>
        </ul>
        <button className="logout-btn">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          <span className="menu-item">Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

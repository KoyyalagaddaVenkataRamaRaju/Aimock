import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";

const Navbar = (props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState(null); // User data from backend

  const toggleProfileCard = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const logOutButton = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get("jwt_token");
        if (!token) {
          setUserData(null);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/userdata", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUserData(null);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="main1">
      <div className="wlogo">
        <div>
          <Link to="/home">
            <img src="" alt="website logo" className="headerimg" />
          </Link>
        </div>
        <div>
          <h2>
            <span>@</span>i mock
          </h2>
        </div>
      </div>
      <div className="nav_list">
        <ul className="header1">
          <Link to="/home">
            <li className="list">Home</li>
          </Link>
          <Link to="/tests">
            <li className="list">Tests</li>
          </Link>
          <Link to="/about">
            <li className="list">About</li>
          </Link>
          <Link to="/contactus">
            <li className="list">Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="profile-section">
        <FaUserCircle
          className="navbar-icon"
          size={36}
          onClick={toggleProfileCard}
        />
        {isProfileOpen &&
          (userData ? (
            <div className="profile-card">
              <div className="profile-header">
                <p className="profile-name">{userData.name}</p>
                <p className="profile-email">{userData.email}</p>
                <p className="profile-role">{userData.role}</p>
              </div>
              <hr />
              <Link to="/settings" className="profile-option">
                Settings
              </Link>
              <Link
                to="/"
                className="profile-option logout-button"
                onClick={logOutButton}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="profile-card">
              <p>Please log in to view profile details.</p>
              <Link to="/" className="profile-option">
                <button>Login</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;

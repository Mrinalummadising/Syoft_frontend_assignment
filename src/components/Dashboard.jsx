import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  FaUser,
  FaCogs,
  FaSignOutAlt,
  FaChartLine,
  FaBell,
  FaClock,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      setRedirectToLogin(true);
    }
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("user");
    setRedirectToLogin(true);
  };

  const onClickHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  const userInitial = user ? user.user_firstname.charAt(0).toUpperCase() : "U";

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <h1>
            syoft<span className="dot">.</span>
          </h1>
        </div>
        <ul className="sidebar-nav">
          <li>
            <FaUser />
            <span>About Syoft</span>
          </li>
          <li>
            <FaCogs />
            <span>Services</span>
          </li>
          <li>
            <FaChartLine />
            <span>Analytics</span>
          </li>
          <li>
            <FaSignOutAlt />
            <span onClick={onClickLogout}>Logout</span>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <div className="hamburger-menu" onClick={onClickHamburgerMenu}>
            <RxHamburgerMenu />
          </div>
          <div className="profile-section">
            <div className="profile-icon">{userInitial}</div>
            <div className="profile-dropdown">
              <p>Profile</p>
              <p>Settings</p>
              <p onClick={onClickLogout}>Logout</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="grid-item">
            <h2>About Syoft</h2>
            <p>
              We help our customers experience splendid digital growth and
              thrive in the digital era. Breaking down the barriers and guiding
              clients to grow faster than the market to maximize operational
              excellence and build a scalable, resilient organization.
            </p>
          </div>
          <div className="grid-item">
            <h2>Career</h2>
            <p>
              We believe that our team is our greatest asset. We are always
              looking for talented, motivated individuals who are eager to make
              a difference. If you are looking for a dynamic and challenging
              work environment, we want to hear from you.
            </p>
          </div>
          <div className="grid-item">
            <h2>Analytics Overview</h2>
            <p>
              <FaChartLine /> Monthly Growth: 8%
            </p>
            <p>
              <FaChartLine /> New Clients: 25
            </p>
            <p>
              <FaChartLine /> Projects Completed: 18
            </p>
          </div>
          <div className="grid-item">
            <h2>Recent Activity</h2>
            <ul>
              <li>
                <FaClock /> User A signed up
              </li>
              <li>
                <FaClock /> Project B completed
              </li>
              <li>
                <FaClock /> New blog post published
              </li>
            </ul>
          </div>
          <div className="grid-item">
            <h2>Quick Links</h2>
            <ul>
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Profile</li>
            </ul>
          </div>
          <div className="grid-item">
            <h2>Notifications</h2>
            <p>
              <FaBell /> You have 3 new messages
            </p>
            <p>
              <FaBell /> Your report is ready for download
            </p>
            <p>
              <FaBell /> No new notifications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

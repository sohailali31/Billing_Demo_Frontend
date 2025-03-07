import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHome, FaChartBar, FaWpforms, FaEnvelope, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import '../Component Css/welcome.css';
function Dashboard() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="logo-container">
          <div className="company-logo">
            <div className="logo-inner"></div>
            
          </div>
          <h3 className="company-name">Bellary Info Tech</h3>
        </div>
        <h3 style={{fontFamily:'sans-serif'}}>Welcome <span style={{color:'green',textTransform:'uppercase'}}>{username}</span></h3>
        <br/>
        
        <ul className="sidebar-menu">
          <li className="active">
            <FaHome className="menu-icon" />
            <span className="menu-text">Dashboard</span>
          </li>
          <li>
            <FaChartBar className="menu-icon" />
            <span className="menu-text">Chart</span>
             
          </li>
          <li>
            <FaWpforms className="menu-icon" />
            <span className="menu-text">Form</span>
          </li>
          <li>
            <FaEnvelope className="menu-icon" />
            <span className="menu-text">Email</span>
          </li>
          <li>
            <FaUser className="menu-icon" />
            <span className="menu-text">Profile</span>
            
          </li>
          <li>
            <FaCog className="menu-icon" />
            <span className="menu-text">Settings</span>
          </li>
        </ul>
        
        <div className="sign-out">
          <button onClick={handleLogout}>
            <span>SIGN OUT</span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <span></span>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <div className="top-nav">
          <button className="home-button">
            <FaHome />
            <span>Dashboard</span>
          </button>
          <div className="search-container">
            <input type="text" placeholder="Search" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Top Chart */}
           

          {/* Middle Row of Charts */}
          <div className="chart-row">
            <div className="chart-container">
              <h3>Bellary Info Tech</h3>
              <div className="circular-progress">
                <div className="progress-text">65%</div>
              </div>
              <div className="chart-footer green">Bellary Info Tech</div>
            </div>
            <div className="chart-container">
              <h3>Bellary Info Tech</h3>
              <div className="trend-chart"></div>
              <div className="chart-footer teal">Bellary Info Tech</div>
            </div>
            <div className="chart-container">
              <h3>Bellary Info Tech</h3>
              <div className="bar-chart"></div>
              <div className="chart-footer orange">Bellary Info Tech</div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <div className="chart-container wide">
              <h3>Bellary Info Tech</h3>
              <h4>consectetur adipiscing elit</h4>
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-bar teal" style={{ width: '70%' }}></div>
                </div>
                <div className="progress-item">
                  <div className="progress-bar green" style={{ width: '60%' }}></div>
                </div>
                <div className="progress-item">
                  <div className="progress-bar orange" style={{ width: '85%' }}></div>
                </div>
                <div className="progress-item">
                  <div className="progress-bar red" style={{ width: '50%' }}></div>
                </div>
                <div className="progress-item">
                  <div className="progress-bar red" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>

            <div className="chart-container wide">
              <h3>Dolor Sit Amet</h3>
              <h4>consectetur adipiscing elit</h4>
              <div className="horizontal-bars">
                <div className="horizontal-bar-item">
                  <div className="horizontal-bar green" style={{ width: '80%' }}></div>
                </div>
                <div className="horizontal-bar-item">
                  <div className="horizontal-bar orange" style={{ width: '90%' }}></div>
                </div>
                <div className="horizontal-bar-item">
                  <div className="horizontal-bar red" style={{ width: '85%' }}></div>
                </div>
                <div className="horizontal-bar-item">
                  <div className="horizontal-bar beige" style={{ width: '60%' }}></div>
                </div>
                <div className="horizontal-bar-item">
                  <div className="horizontal-bar teal" style={{ width: '75%' }}></div>
                </div>
                <div className="horizontal-bar-item">
                  <div className="horizontal-bar dark-teal" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="chart-container">
              <h3>Bellary Info Tech</h3>
              <div className="metrics-list">
                <div className="metric-item">
                  <span>Bellary Info Tech</span>
                  <span className="metric-value orange">654</span>
                </div>
                <div className="metric-item">
                  <span>consectetur</span>
                  <span className="metric-value orange">541</span>
                </div>
                <div className="metric-item">
                  <span>adipiscing elit</span>
                  <span className="metric-value orange">173</span>
                </div>
                <div className="metric-item">
                  <span>sed diam nonummy nibh</span>
                  <span className="metric-value orange">92</span>
                </div>
                <div className="metric-item">
                  <span>euismod tincidunt ut</span>
                  <span className="metric-value orange">324</span>
                </div>
                <div className="metric-item">
                  <span>Duis autem vel</span>
                  <span className="metric-value orange">459</span>
                </div>
              </div>
            </div>

            <div className="chart-container">
              <h3>Bellary Info Tech</h3>
              <div className="column-chart"></div>
            </div>

            <div className="chart-container">
              <div className="semi-circular-progress">
                <div className="progress-text">50%</div>
              </div>
              <div className="progress-info">
                <h4>Bellary Info Tech Solutions</h4>
                <p>consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
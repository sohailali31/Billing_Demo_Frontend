import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../Component Css/Welcome.css';
import logo from '../assets/images/logoooo12345.jpg';


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { username } = useParams();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
//logout
const handleLogout = () => {
  // Remove any stored user session data (like JWT token or user info)
  localStorage.removeItem("userToken");
  localStorage.removeItem("userData");

  // Redirect to home page
  navigate("/");
};
//background: linear-gradient(to right, #0a152f 40%, transparent);
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <div className="header-left">
          <div className="logo">
          <img src={logo} alt="khaja" style={{width:'30px',height:'30px'}}/>
          Bellary Billing Software</div>
          <button className="back-button">
            
          </button>
          <nav className="main-nav">
            <ul>
              <li className="active">Home</li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <button className="notification-btn">
            <span className="notification-dot"></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </button>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </svg>
          </button>
          <div className="user-avatar">
            <img src="https://via.placeholder.com/32" alt="User avatar" />
          </div>
        </div>
      </header>

      <div className="content-wrapper">
        <aside className="sidebar">
          <nav className="sidebar-nav">
          <h1 style={{color:'#0a152f',fontWeight:'bold',fontFamily:'serif'}}>Welcome, {username}!</h1>
            <ul>
              <li className="active">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
                Dashboard
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1z" />
                </svg>
                Analytics
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
                Organization
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                </svg>
                Projects
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
                </svg>
                Transactions
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                Invoices
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
                Payments
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                Members
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                Permissions
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                </svg>
                Chat
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
                Meetings
              </li>
              <li>
              <button onClick={handleLogout} style={{backgroundColor:'#0a152f'}}>Signout from Dashboard</button>
              </li>
            </ul>
            
          
          
          </nav>
        </aside>

        <main className="main-content">
          <h1>Dashboard</h1>

          <div className="dashboard-grid">
            <div className="card accounts-overview">
              <div className="card-header">
                <h2>Accounts Overview</h2>
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2z" />
                  </svg>
                </button>
              </div>
              <div className="total-balance">
                <h3>&#8377;514.54CR</h3>
                <p>Total balance across all accounts</p>
              </div>
              <div className="accounts-list">
                <div className="account-item">
                  <span className="account-name">Checking</span>
                  <span className="account-balance">&#8377;7,500</span>
                </div>
                <div className="account-item">
                  <span className="account-name">Savings</span>
                  <span className="account-balance">&#8377;560,000</span>
                </div>
                <div className="account-item">
                  <span className="account-name">Investment</span>
                  <span className="account-balance">&#8377;5,879,000</span>
                </div>
              </div>
              <div className="action-buttons">
                <button className="btn primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#fff" />
                  </svg>
                  Add
                </button>
                <button className="btn primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#fff" />
                  </svg>
                  Send
                </button>
                <button className="btn secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                  Request
                </button>
                <button className="btn icon-only">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  More
                </button>
              </div>
            </div>

            <div className="card recent-transactions">
              <div className="card-header">
                <h2>Recent Transactions</h2>
              </div>
              <div className="transactions-list">
                <div className="transaction-item">
                  <div className="transaction-info">
                    <span className="merchant">Amazon.com</span>
                    <span className="date">2023-07-15</span>
                  </div>
                  <div className="transaction-amount negative">
                  &#8377;-129.99Cr
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                      <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" fill="#ff5252" />
                    </svg>
                  </div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-info">
                    <span className="merchant">Whole Foods Market</span>
                    <span className="date">2023-07-10</span>
                  </div>
                  <div className="transaction-amount negative">
                  &#8377;-89.72Cr
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                      <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" fill="#ff5252" />
                    </svg>
                  </div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-info">
                    <span className="merchant">Netflix Subscription</span>
                    <span className="date">2023-07-05</span>
                  </div>
                  <div className="transaction-amount negative">
                  &#8377;-15.99Cr
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                      <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" fill="#ff5252" />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="view-all">View All Transactions</button>
            </div>

            <div className="card quick-bill-pay">
              <div className="card-header">
                <h2>Quick Bill Pay</h2>
              </div>
              <div className="bills-list">
                <div className="bill-item">
                  <div className="bill-info">
                    <span className="bill-name">Electricity Bill</span>
                    <span className="due-date">Due: 2023-07-15</span>
                  </div>
                  <div className="bill-actions">
                    <span className="bill-amount">&#8377;85</span>
                    <button className="btn pay-btn">Pay</button>
                  </div>
                </div>
                <div className="bill-item">
                  <div className="bill-info">
                    <span className="bill-name">Internet Service</span>
                    <span className="due-date">Due: 2023-07-18</span>
                  </div>
                  <div className="bill-actions">
                    <span className="bill-amount">&#8377;60</span>
                    <button className="btn pay-btn">Pay</button>
                  </div>
                </div>
                <div className="bill-item">
                  <div className="bill-info">
                    <span className="bill-name">Credit Card Payment</span>
                    <span className="due-date">Due: 2023-07-25</span>
                  </div>
                  <div className="bill-actions">
                    <span className="bill-amount">&#8377;500</span>
                    <button className="btn pay-btn">Pay</button>
                  </div>
                </div>
                <div className="bill-item">
                  <div className="bill-info">
                    <span className="bill-name">Water Bill</span>
                    <span className="due-date">Due: 2023-07-30</span>
                  </div>
                  <div className="bill-actions">
                    <span className="bill-amount">&#8377;45</span>
                    <button className="btn pay-btn">Pay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="business-metrics-section">
            <div className="section-header">
              <h2>Business Metrics</h2>
              <button className="view-details">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>

            <div className="metrics-grid">
              <div className="card metric-card">
                <div className="metric-header">
                  <h3>Revenue Growth</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                  </svg>
                </div>
                <p className="metric-subtitle">Monthly revenue target</p>
                <div className="metric-status on-track">On Track</div>
              </div>

              <div className="card metric-card">
                <div className="metric-header">
                  <h3>Customer Acquisition</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <p className="metric-subtitle">New customers this quarter</p>
                <div className="metric-status behind">Behind</div>
              </div>

              <div className="card metric-card">
                <div className="metric-header">
                  <h3>Average Order Value</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                </div>
                <p className="metric-subtitle">Target AOV for Q3</p>
                <div className="metric-status ahead">Ahead</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
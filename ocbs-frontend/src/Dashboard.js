// src/components/Dashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.module.css'; // Import a custom CSS file for styling

function Dashboard() {
  const navigate = useNavigate();

  // Function to handle the redirection to the home page (Sign In / Sign Up)
  const handleRedirectHome = () => {
    navigate('/');  // This will redirect to the home page, where SignIn/SignUp is placed
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Dashboard</h1>
      <nav className="dashboard-nav">
        <Link to="/search-movies" className="dashboard-link">
          Book Tickets
        </Link>
        <Link to="/booking-management" className="dashboard-link">
          Your Bookings
        </Link>
        
        <Link to="/notifications" className="dashboard-link">
          Notifications
        </Link>
        <Link to="/staff-management" className="dashboard-link">
          Staff Management
        </Link>
        <Link to="/customer-support" className="dashboard-link">
          Customer Support
        </Link>
        <Link to="/edit-profile" className="dashboard-link">
          Edit Profile
        </Link>
      </nav>

      {/* Right-most Button to redirect to Sign-In/Sign-Up page */}
      <button className="dashboard-home-button" onClick={handleRedirectHome}>
        Go to Home
      </button>
    </div>
  );
}

export default Dashboard;

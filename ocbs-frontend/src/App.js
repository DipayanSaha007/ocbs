import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import BookingManagement from './BookingManagement';//change it here
import Notification from './Notification';
import Payment from './Payment';
import SearchMovies from './SearchMovies'; // Ensure correct import
import SeatSelection from './SeatSelection';
import SelectShowTime from './SelectShowTime';
import EditProfile from './EditProfile';
import CustomerSupport from './CustomerSupport';  // Import the CustomerSupport component
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking-management" element={<BookingManagement />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/search-movies" element={<SearchMovies />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/select-showtime" element={<SelectShowTime />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/customer-support" element={<CustomerSupport />} /> {/* Add this route for Customer Support */}
          <Route path="*" element={<div>Page not found</div>} /> {/* Fallback Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
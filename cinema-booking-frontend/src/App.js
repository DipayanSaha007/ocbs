import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import BookingManagement from './BookingManagement';
import Notification from './Notification';
import Payment from './Payment';
import SearchMovies from './SearchMovies'; // Ensure correct import
import SeatSelection from './SeatSelection';
import SelectShowTime from './SelectShowTime';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking-management" element={<BookingManagement />} /> {/* New Route for Booking Management */}
          <Route path="/notification" element={<Notification />} /> {/* New Route for Notifications */}
          <Route path="/payment" element={<Payment />} /> {/* New Route for Payment */}
          <Route path="/search-movies" element={<SearchMovies />} /> {/* New Route for Search Movies */}
          <Route path="/seat-selection" element={<SeatSelection />} /> {/* New Route for Seat Selection */}
          <Route path="/select-showtime" element={<SelectShowTime />} /> {/* New Route for Select Show Time */}
          <Route path="*" element={<div>Page not found</div>} /> {/* Fallback Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

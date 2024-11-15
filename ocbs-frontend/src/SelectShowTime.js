// src/components/SelectShowtime.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectShowtime.css'; // Import the custom CSS file for styling

function SelectShowtime() {
  const [showtime, setShowtime] = useState('');
  const [movieName, setMovieName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the saved movie name from local storage
    const savedMovieName = localStorage.getItem('searchedMovie');
    if (savedMovieName) {
      setMovieName(savedMovieName);
    }
  }, []);

  const handleSelect = () => {
    if (showtime) {
      // Save the selected showtime to local storage
      localStorage.setItem('selectedShowtime', showtime);
      
      navigate('/seat-selection');
    } else {
      alert('Please select a showtime.');
    }
  };

  return (
    <div className="select-showtime-container">
      <h2 className="select-showtime-title">Choose Your Showtime</h2>
      {movieName && <p className="movie-name">Movie: {movieName}</p>}
      <div className="select-wrapper">
        <select 
          className="select-showtime-dropdown"
          onChange={(e) => setShowtime(e.target.value)}
        >
          <option value="">Select a showtime</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>
      </div>
      <button onClick={handleSelect} className="select-showtime-btn">
        Select Showtime
      </button>
    </div>
  );
}

export default SelectShowtime;
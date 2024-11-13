// src/components/SelectShowtime.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectShowtime() {
  const [showtime, setShowtime] = useState('');
  const navigate = useNavigate();

  const handleSelect = () => {
    // Implement showtime selection logic here
    console.log('Selected showtime:', showtime);

    // Redirect to seat selection page after selecting a showtime
    if (showtime) {
      navigate('/seat-selection'); // Redirect to seat selection page
    } else {
      alert('Please select a showtime.'); // Handle empty selection
    }
  };

  return (
    <div className="select-showtime-container">
      <h2>Select Showtime</h2>
      <select onChange={(e) => setShowtime(e.target.value)}>
        <option value="">Select a showtime</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="4:00 PM">4:00 PM</option>
        <option value="7:00 PM">7:00 PM</option>
      </select>
      <button onClick={handleSelect} className="btn">Select</button>
    </div>
  );
}

export default SelectShowtime;

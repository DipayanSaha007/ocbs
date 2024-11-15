// src/components/SeatSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeatSelection.css'; // Import the custom CSS file for styling

function SeatSelection() {
  const [numPersons, setNumPersons] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const totalSeats = 30; // Total number of seats in the theater
  const seatsPerRow = 6; // Number of seats per row

  const handleSeatClick = (seat) => {
    // Only allow selection up to the number of persons specified
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < numPersons) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      alert(`You can only select up to ${numPersons} seat(s).`);
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length > 0) {
      // Save selected seats to local storage
      localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
      navigate('/payment'); // Redirect to payment page
    } else {
      alert('Please select at least one seat.');
    }
  };

  return (
    <div className="seat-selection-container">
      <h2 className="seat-selection-title">Seat Selection</h2>
      <div className="seat-options">
        <label htmlFor="numPersons">Number of Persons:</label>
        <select
          id="numPersons"
          value={numPersons}
          onChange={(e) => {
            setNumPersons(parseInt(e.target.value));
            setSelectedSeats([]); // Reset selected seats when number of persons changes
          }}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="seats">
        {[...Array(totalSeats)].map((_, index) => (
          <div
            key={index}
            className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button onClick={handleConfirm} className="confirm-btn">
        Confirm Selection
      </button>
    </div>
  );
}

export default SeatSelection;
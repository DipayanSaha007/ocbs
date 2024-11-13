// src/components/SeatSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const handleSeatClick = (seat) => {
    // Toggle seat selection
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  const handleConfirm = () => {
    // Implement seat confirmation logic here
    console.log('Selected seats:', selectedSeats);

    // Redirect to payment page after confirming seat selection
    if (selectedSeats.length > 0) {
      navigate('/payment'); // Redirect to payment page
    } else {
      alert('Please select at least one seat.'); // Handle empty selection
    }
  };

  return (
    <div className="seat-selection-container">
      <h2>Select Your Seats</h2>
      <div className="seats">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button onClick={handleConfirm} className="btn">Confirm Selection</button>
    </div>
  );
}

export default SeatSelection;

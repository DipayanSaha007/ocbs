// src/components/BookingManagement.js
import React, { useEffect, useState } from 'react';

function BookingManagement() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Retrieve movie, showtime, and seat data from local storage
    const savedMovie = localStorage.getItem('searchedMovie');
    const savedShowtime = localStorage.getItem('selectedShowtime');
    const savedSeats = JSON.parse(localStorage.getItem('selectedSeats')); // Parse as array
    const paymentMethod = localStorage.getItem('paymentMethod');

    if (savedMovie && savedShowtime && savedSeats) {
      const bookingData = {
        id: 1, // Simplified ID for example
        movie: savedMovie,
        showtime: savedShowtime,
        seats: savedSeats.join(', '), // Display seats as comma-separated values
        paymentMethod,
        status: 'Confirmed',
      };
      setBookings([bookingData]);
    }
  }, []);

  return (
    <div className="booking-management-container">
      <h2>Your Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <strong>Movie:</strong> {booking.movie} <br />
              <strong>Showtime:</strong> {booking.showtime} <br />
              <strong>Seats:</strong> {booking.seats} <br />
              <strong>Payment Method:</strong> {booking.paymentMethod || 'N/A'} <br />
              <strong>Status:</strong> {booking.status}
              {/* Implement cancel booking logic if needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default BookingManagement;

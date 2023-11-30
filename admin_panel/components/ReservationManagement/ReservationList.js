// ReservationList.js
import React, { useState, useEffect } from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations from your API
    // Example: fetch('/api/reservations').then(response => response.json()).then(data => setReservations(data));
  }, []);

  return (
    <div>
      <h2>Reservation Management</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Reservation ID: {reservation.id}, Date: {reservation.date}, User: {reservation.userName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;

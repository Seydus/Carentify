// ReservationDetails.js
import React, { useState, useEffect } from 'react';

const ReservationDetails = ({ match }) => {
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    // Fetch reservation details based on the route parameter (reservationId) from your API
    // Example: fetch(`/api/reservations/${match.params.reservationId}`).then(response => response.json()).then(data => setReservation(data));

    // For demonstration purposes, using a sample reservation object
    const sampleReservation = {
      id: match.params.reservationId,
      date: '2023-01-01',
      userName: 'John Doe',
      // ... other reservation properties
    };
    setReservation(sampleReservation);
  }, [match.params.reservationId]);

  return (
    <div>
      <h2>Reservation Details</h2>
      {reservation ? (
        <div>
          <p>Reservation ID: {reservation.id}</p>
          <p>Date: {reservation.date}</p>
          <p>User: {reservation.userName}</p>
          {/* Display other reservation details as needed */}
        </div>
      ) : (
        <p>Loading reservation details...</p>
      )}
    </div>
  );
};

export default ReservationDetails;

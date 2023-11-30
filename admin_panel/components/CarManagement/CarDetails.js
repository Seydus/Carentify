// CarDetails.js
import React, { useState, useEffect } from 'react';

const CarDetails = ({ match }) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch car details based on the route parameter (carId) from your API
    // Example: fetch(`/api/cars/${match.params.carId}`).then(response => response.json()).then(data => setCar(data));

    // For demonstration purposes, using a sample car object
    const sampleCar = {
      id: match.params.carId,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      color: 'Silver',
      // ... other car properties
    };
    setCar(sampleCar);
  }, [match.params.carId]);

  return (
    <div>
      <h2>Car Details</h2>
      {car ? (
        <div>
          <p>ID: {car.id}</p>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Color: {car.color}</p>
          {/* Display other car details as needed */}
        </div>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
};

export default CarDetails;

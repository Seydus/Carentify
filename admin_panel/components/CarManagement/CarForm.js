// CarForm.js
import React, { useState, useEffect } from 'react';

const CarForm = ({ match }) => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    // ... other car properties
  });

  useEffect(() => {
    // If editing an existing car, fetch its details based on the route parameter (carId) from your API
    if (match.params.carId) {
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
    }
  }, [match.params.carId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform car creation or update logic here
    console.log('Car submitted:', car);
  };

  return (
    <div>
      <h2>{match.params.carId ? 'Edit Car' : 'Add Car'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input type="text" name="make" value={car.make} onChange={handleChange} />
        </label>
        <br />
        <label>
          Model:
          <input type="text" name="model" value={car.model} onChange={handleChange} />
        </label>
        <br />
        <label>
          Year:
          <input type="number" name="year" value={car.year} onChange={handleChange} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" name="color" value={car.color} onChange={handleChange} />
        </label>
        <br />
        {/* Add more input fields for other car properties as needed */}
        <br />
        <button type="submit">{match.params.carId ? 'Update Car' : 'Add Car'}</button>
      </form>
    </div>
  );
};

export default CarForm;

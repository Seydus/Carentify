import React, { useState } from "react";
import CarForm from "../components/carinventory/carform";
import CarFormSubmit from "../components/carinventory/carformsubmit";
import CarInventory from "./carinventory";

const CreateCar = ({ setCurrentComponent }) => {
  const [carData, setCarData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setCarData(data);
    setIsFormSubmitted(true);
  };

  const handleGoBack = () => {
    setIsFormSubmitted(false);
  };

  const handleSubmitButtonClick = () => {
    // Perform any additional actions before form submission if needed
    // For example, form validation or API calls

    // Trigger form submission
    handleFormSubmit(carData);
  };

  return (
    <div>
      {!isFormSubmitted && (
        <div>
          <CarForm onSubmit={handleFormSubmit} />
          <button onClick={handleSubmitButtonClick}>Submit</button>
        </div>
      )}

      {isFormSubmitted && (
        <div>
          <CarFormSubmit carData={carData} onGoBack={handleGoBack} />
        </div>
      )}
    </div>
  );
};

export default CreateCar;
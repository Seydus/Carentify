import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [carData, setCarData] = useState(() => {
    const storedCarData = JSON.parse(localStorage.getItem("carData"));
    return (
      storedCarData || {
        pickUplocation: null,
        dropOfflocation: null,
        pickUpDate: null,
        dropOffDate: null,
        pickUpTime: null,
        dropOffTime: null,
        price: null,
        vehicleID: null,
        vehicleMake: null,
        vehicleType: null,
        transmission: null,
        passengerAmount: null,
        features: [null],
      }
    );
  });

  const [personalData, setPersonalData] = useState(() => {
    const storedInvoiceData = JSON.parse(localStorage.getItem("personalData"));
    return (
      storedInvoiceData || {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
      }
    );
  });

  const updateCarData = (newData) => {
    setCarData((prevData) => ({ ...prevData, ...newData }));
  };

  const updatePersonalData = (newData) => {
    setPersonalData((prevData) => ({ ...prevData, ...newData }));
  };

  useEffect(() => {
    localStorage.setItem("carData", JSON.stringify(carData));
  }, [carData]);

  useEffect(() => {
    localStorage.setItem("personalData", JSON.stringify(personalData));
  }, [personalData]);

  return (
    <AppContext.Provider
      value={{ carData, updateCarData, personalData, updatePersonalData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

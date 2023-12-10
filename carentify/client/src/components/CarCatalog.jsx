import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../AppContext.jsx";
import CarInfo from "./CarInfo.jsx";
import CarFilter from "./CarFilter.jsx";
import TripSummary from "./TripSummary.jsx";

function CarCatalog({ carData }) {
  const { inputValue, handleInputChange } = useContext(AppContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicle/")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center max-w-screen-lg w-full space-y-10 mb-6">
          <div className="flex">
            <div className="py-6 space-y-6">
              <TripSummary />
            </div>
            <div className="p-6 space-y-6">
              {Array(data.length)
                .fill()
                .map((_, index) => (
                  <CarInfo key={index} data={data[index]} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCatalog;

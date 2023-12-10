import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import CarTabRental from "../components/CarTabRental.jsx";
import ConfirmCarInfo from "../components/ConfirmInformation/ConfirmCarInfo.jsx";
import ConfirmTripSummary from "../components/ConfirmInformation/ConfirmTripSummary.jsx";

function ConfirmInformation() {
  const { carData, updateCarData } = useContext(AppContext);

  return (
    <div>
      <NavigationBar />
      <section className="pt-12 pb-24 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="py-6 space-y-6 flex justify-center">
            <CarTabRental />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-2">
                <ConfirmCarInfo />
                <ConfirmTripSummary />
              </div>
              <div className="flex justify-end space-x-5">
                <Link
                  to={`/details/${carData.pickUplocation}/${carData.dropOfflocation}/${carData.pickUpDate}/${carData.dropOffDate}/${carData.pickUpTime}/${carData.dropOffTime}/${carData.price}/${carData.vehicleID}/${carData.vehicleMake}/${carData.vehicleType}/${carData.transmission}/${carData.passengerAmount}`}
                >
                  <button className="text-white w-32 h-11 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ConfirmInformation;

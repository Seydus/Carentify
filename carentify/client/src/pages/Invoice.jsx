import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../AppContext.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import InvoiceSummaryDetails from "../components/Invoice/InvoiceSummaryDetails.jsx";
import BookingNumberAndPriceSummary from "../components/Invoice/BookingNumberAndPriceSummary.jsx";
import CarTabRental from "../components/CarTabRental.jsx";

function Invoice() {
  const { personalData, updatePersonalData } = useContext(AppContext);
  const [data, setData] = useState([]);

  return (
    <div className="Invoice">
      <NavigationBar />
      <div>
        <div className="flex flex-col space-y-10 items-center m-20">
          <CarTabRental />
          <div>
            <InvoiceSummaryDetails />
          </div>
          <div>
            <BookingNumberAndPriceSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Invoice;

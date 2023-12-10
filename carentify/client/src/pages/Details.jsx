import React from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import DetailsForm from "../components/Details/DetailsForm.jsx";
import CarTabRental from "../components/CarTabRental.jsx";

function Details() {
  return (
    <div>
      <NavigationBar />
      <section className="pt-12 pb-24 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="py-6 space-y-6 flex justify-center">
            <CarTabRental />
          </div>
          <div className="flex justify-center">
            <DetailsForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Details;

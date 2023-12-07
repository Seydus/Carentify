import React from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import CarTabRental from "../components/CarTabRental.jsx";
import CatalogBody from "../components/Catalog/CatalogBody.jsx";

function InitialRent() {
  return (
    <div>
      <NavigationBar />
      <section className="pt-12 pb-24 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="py-6 space-y-6 flex justify-center">
            <CarTabRental />
          </div>
          <div className="mb-14 xl:mb-20 bg-white rounded-3xl">
            <div className="block w-full border-b border-gray-200 border-opacity-40">
              <CatalogBody />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default InitialRent;

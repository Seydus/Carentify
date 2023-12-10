import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const [backendData, setBackEndData] = useState({}); // Change here

  useEffect(() => {
    fetch("/api-create-checkout-session")
      .then((response) => response.json())
      .then((data) => {
        setBackEndData(data);
      });
  }, []);

  return (
    <div className="Home">
      <NavigationBar />
      <section className="pt-12 pb-24 bg-blueGray-100">
        {backendData.url}
      </section>
      <Footer />
    </div>
  );
}

export default Home;

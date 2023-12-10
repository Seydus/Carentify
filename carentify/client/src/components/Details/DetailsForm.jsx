import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import typeCardImage from "../../assets/type-of-card.png";
import axios from "axios";
import { Link } from "react-router-dom";

function DetailsForm() {
  const { personalData, updatePersonalData } = useContext(AppContext);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event, field) => {
    const newValue = event.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: newValue,
    }));
    onDataChange(field, newValue);
  };

  const onDataChange = (field, value) => {
    updatePersonalData({ [field]: value });
  };

  const onHandlePurchaseStripe = () => {
    axios
      .post(
        "http://localhost:5000/create-checkout-session",
        {
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);

          return response.data;
        }
        return Promise.reject(response.data);
      })
      .catch((error) => {
        console.error(error.error);
      });
  };

  return (
    <section className="bg-coolGray-50 py-4">
      <div className="container px-4 mx-auto">
        <div className="shadow-dashboard" style={{ width: "50rem" }}>
          <div className="p-6 pb-0 h-full border border-coolGray-100 overflow-hidden bg-white rounded">
            <div className="pb-6 border-b border-coolGray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full p-2">
                  <h2 className="text-coolGray-900 text-lg font-semibold">
                    Customer Information
                  </h2>
                  <p className="text-xs text-coolGray-500 font-medium font-thin">
                    Please enter your information below
                  </p>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-10/12">
                <div className="flex flex-wrap -m-3 mb-2">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Personal Information
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      First Name
                    </p>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="John"
                      value={inputValues.firstName}
                      onChange={(e) => handleInputChange(e, "firstName")}
                      onBlur={() =>
                        onDataChange("firstName", inputValues.firstName)
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3"></div>
                  <div className="w-full md:flex-1 p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      Last Name
                    </p>
                    <div className="flex items-center focus-within:border-blue-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                      <div className="flex-shrink-0 pl-3.5 pr-2">
                        <img
                          src="flex-ui-assets/images/dashboard/forms/card.png"
                          alt=""
                        ></img>
                      </div>
                      <input
                        className="w-full pr-4 py-2.5 text-base text-coolGray-900 font-normal outline-none"
                        type="text"
                        placeholder="Doe"
                        value={inputValues.lastName}
                        onChange={(e) => handleInputChange(e, "lastName")}
                        onBlur={() =>
                          onDataChange("lastName", inputValues.lastName)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6">
              <div className="w-full md:w-10/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Email address
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="johndoe@gmail.com"
                      value={inputValues.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      onBlur={() => onDataChange("email", inputValues.email)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Phone
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="09152489822"
                      value={inputValues.phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                      onBlur={() => onDataChange("phone", inputValues.phone)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 bg-coolGray-50 bg-opacity-60 rounded-b-md">
            <div className="flex flex-wrap justify-start">
              <input type="checkbox" id="myCheckbox" className="mr-2"></input>
              <p>
                I agree to the{" "}
                <a className="text-blue-500 underline" href="">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a className="text-blue-500 underline" href="#">
                  Privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="shadow-dashboard" style={{ width: "50rem" }}>
          <div className="p-6 pb-0 h-full border border-coolGray-100 overflow-hidden bg-white rounded">
            <div className="pb-6 border-b border-coolGray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full p-2">
                  <h2 className="text-coolGray-900 text-lg font-semibold">
                    Payment
                  </h2>
                  <p className="text-xs text-coolGray-500 font-medium font-thin">
                    Please pay with your credit card
                  </p>
                </div>
              </div>
            </div>
            <div className="py-6">
              <div className="flex justify-center">
                <div className="space-x-10">
                  <Link to={`/invoice`}>
                    <button
                      type="button"
                      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                      onClick={onHandlePurchaseStripe}
                    >
                      <img
                        className="h-auto"
                        style={{ width: "10rem" }}
                        src={typeCardImage}
                        alt="image description"
                      ></img>
                      Pay with Card
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsForm;

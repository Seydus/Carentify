import React from "react";
import typeCardImage from "../../assets/type-of-card.png";

function DetailsForm() {
  return (
    <section class="bg-coolGray-50 py-4 space-y-10">
      <div class="container px-4 mx-auto">
        <div class="shadow-dashboard" style={{ width: "50rem" }}>
          <div class="p-6 pb-0 h-full border border-coolGray-100 overflow-hidden bg-white rounded">
            <div class="pb-6 border-b border-coolGray-100">
              <div class="flex flex-wrap items-center justify-between -m-2">
                <div class="w-full p-2">
                  <h2 class="text-coolGray-900 text-lg font-semibold">
                    Customer Information
                  </h2>
                  <p class="text-xs text-coolGray-500 font-medium font-thin">
                    Please enter your information below
                  </p>
                </div>
              </div>
            </div>
            <div class="py-6 border-b border-coolGray-100">
              <div class="w-full md:w-10/12">
                <div class="flex flex-wrap -m-3 mb-2">
                  <div class="w-full md:w-1/3 p-3">
                    <p class="text-sm text-coolGray-800 font-semibold">
                      Personal Information
                    </p>
                  </div>
                  <div class="w-full md:flex-1 p-3">
                    <p class="mb-1.5 font-medium text-base text-coolGray-800">
                      First Name
                    </p>
                    <input
                      class="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="John"
                    ></input>
                  </div>
                </div>
                <div class="flex flex-wrap -m-3">
                  <div class="w-full md:w-1/3 p-3"></div>
                  <div class="w-full md:flex-1 p-3">
                    <p class="mb-1.5 font-medium text-base text-coolGray-800">
                      Last Name
                    </p>
                    <div class="flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                      <div class="flex-shrink-0 pl-3.5 pr-2">
                        <img
                          src="flex-ui-assets/images/dashboard/forms/card.png"
                          alt=""
                        ></img>
                      </div>
                      <input
                        class="w-full pr-4 py-2.5 text-base text-coolGray-900 font-normal outline-none"
                        type="text"
                        placeholder="Doe"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <div class="w-full md:w-10/12">
                <div class="flex flex-wrap -m-3">
                  <div class="w-full md:w-1/3 p-3">
                    <p class="text-sm text-coolGray-800 font-semibold">
                      Email address
                    </p>
                  </div>
                  <div class="w-full md:flex-1 p-3">
                    <input
                      class="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="johndoe@flex.co"
                    ></input>
                  </div>
                </div>
                <div class="flex flex-wrap -m-3">
                  <div class="w-full md:w-1/3 p-3">
                    <p class="text-sm text-coolGray-800 font-semibold">Phone</p>
                  </div>
                  <div class="w-full md:flex-1 p-3">
                    <input
                      class="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="09154289822"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 mx-auto">
        <div class="shadow-dashboard" style={{ width: "50rem" }}>
          <div class="p-6 pb-0 h-full border border-coolGray-100 overflow-hidden bg-white rounded">
            <div class="pb-6 border-b border-coolGray-100">
              <div class="flex flex-wrap items-center justify-between -m-2">
                <div class="w-full p-2">
                  <h2 class="text-coolGray-900 text-lg font-semibold">
                    Payment
                  </h2>
                  <p class="text-xs text-coolGray-500 font-medium font-thin">
                    Please enter your payment information
                  </p>
                </div>
              </div>
            </div>
            <div class="py-6">
              <div class="w-full md:w-10/12">
                <button
                  type="button"
                  class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  <img
                    class="h-auto max-w-full"
                    src={typeCardImage}
                    alt="image description"
                  ></img>
                  Pay with Card
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 bg-coolGray-50 bg-opacity-60 rounded-b-md">
            <div class="flex flex-wrap justify-end -m-1.5">
              <div class="w-full md:w-auto p-1.5">
                <button class="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                  <p>Cancel</p>
                </button>
              </div>
              <div class="w-full md:w-auto p-1.5">
                <button class="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                  <p>Save</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsForm;

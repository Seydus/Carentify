import React from "react";

function CarTabRental() {
  return (
    <section class="py-5">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-center">
          <a class="flex items-center" href="#">
            {/* <div class="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold"> */}
            <div class="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-blueGray-800 text-sm font-bold text-black">
              1
            </div>
            <span class="font-bold text-black">Catalog</span>
          </a>
          <span class="my-4 md:my-0 md:mx-8 lg:mx-16">
            <svg
              width="18"
              height="14"
              viewbox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M10.6667 1.16669L16.5 7.00002M16.5 7.00002L10.6667 12.8334M16.5 7.00002L1.5 7.00002"
                stroke="#84878A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <a class="flex items-center" href="#">
            <div class="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-blueGray-800 text-sm font-bold text-black">
              2
            </div>
            <span class="font-bold text-black">Confirmation</span>
          </a>
          <span class="my-4 md:my-0 md:mx-8 lg:mx-16">
            <svg
              width="18"
              height="14"
              viewbox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M10.6667 1.16669L16.5 7.00002M16.5 7.00002L10.6667 12.8334M16.5 7.00002L1.5 7.00002"
                stroke="#84878A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <a class="flex items-center" href="#">
            <div class="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-blueGray-800 text-sm font-bold text-black">
              3
            </div>
            <span class="font-bold text-black">Payment</span>
          </a>
          <span class="my-4 md:my-0 md:mx-8 lg:mx-16">
            <svg
              width="18"
              height="14"
              viewbox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M10.6667 1.16669L16.5 7.00002M16.5 7.00002L10.6667 12.8334M16.5 7.00002L1.5 7.00002"
                stroke="#84878A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <a class="flex items-center" href="#">
            <div class="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-blueGray-800 text-sm font-bold text-black">
              4
            </div>
            <span class="font-bold">Invoice</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CarTabRental;

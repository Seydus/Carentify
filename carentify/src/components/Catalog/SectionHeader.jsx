import React, { useState } from "react";

function SectionHeader({ title }) {
  return (
    <div className="flex px-6 md:px-20 lg:px-40 items-center text-left">
      <img
        className="mr-3 md:mr-10"
        src="uinel-assets/images/ecommerce-cart/number1.svg"
        alt=""
      />
      <h2 className="text-xl font-heading font-medium">{title}</h2>
    </div>
  );
}

export default SectionHeader;

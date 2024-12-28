//import React from 'react'
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-15 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[500px]">
        <div className="text-xl sm:text-2xl my-4">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="Middle Name"
            required
          />
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          type="email"
          placeholder="abc@xyz.com"
          required
        />
        <input
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          type="text"
          placeholder="Residential Address"
          required
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="State"
            required
          />
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="number"
            placeholder="ZIPCODE"
            required
          />
          <input
            className="border border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
          type="number"
          placeholder="Phone Number"
          required
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 w-500 px-20 py-10">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

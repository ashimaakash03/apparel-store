//import React from 'react'
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("");
  const { navigate } = useContext(ShopContext);
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
        {/* Cart Summary */}
        <div className="mt-8 w-500 px-10 py-10 items-center justify-center border border-gray-400 mr-20">
          <CartTotal />
        </div>
        <div className="mt-12">
          {/* Payment Method */}
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-4 border rounded-full ${
                  method === "stripe" ? "bg-black" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-4 border rounded-full ${
                  method === "razorpay" ? "bg-black" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("COD")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-4 border rounded-full ${
                  method === "COD" ? "bg-black" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-center mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-10 py-2">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

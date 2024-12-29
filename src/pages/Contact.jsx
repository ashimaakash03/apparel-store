//import React from 'react'
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONNECT"} text2={"WITH US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10">
        <img className="w-full max-w-[500px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE:</p>
          <p className="text-gray-500">
            ShopNo. 11, 1st Floor, Spectrum Metro Mall <br /> ECOCITY, Sector
            75, NOIDA <br />
            Uttar Pradesh, India <br />
            PINCODE: 201305
          </p>
          <p>
            Phone: +91-7890-215-456
            <br />
            Email: &nbsp;contact@foreveryou.com
          </p>
          <p className="text-xl font-gray-600">CAREERS AT FOREVER</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings...
          </p>
          <button className="bg-black text-white rounded-full px-10 py-5">
            EXPLORE MORE
          </button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;

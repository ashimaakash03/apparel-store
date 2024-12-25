//import React from 'react'

import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            magni dolore iusto reprehenderit quaerat. Fugiat sapiente quae
            tempore ex perspiciatis amet. Sunt fugit illum at ab error beatae
            doloremque deleniti officiis suscipit nesciunt ducimus laudantium
            officia dolorum voluptates saepe eum ea, reiciendis enim laboriosam
            delectus. Maxime incidunt odit quaerat porro!
          </p>
        </div>
        <div>
          <p className="text-2xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          COPYRIGHT 2024 @ Forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

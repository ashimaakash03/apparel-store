//import React from 'react'
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"ABOUT"} text2={"FOREVER"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full max-w-[500px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-700">
          <p>
            Forever 21 is a multinational fast-fashion retailer headquartered in
            Los Angeles, California, United States. Originally founded as the
            store Fashion 21 in Highland Park, Los Angeles in 1984, it is
            currently operated by Authentic Brands Group and Simon Property
            Group, with about 540 outlets.
          </p>
          <p>
            The company sells accessories, beauty products, home goods, and
            clothing for women, men and children. The company has been involved
            in various controversies that include labor practice issues and
            copyright infringement accusations.
          </p>
          <div className="text-2xl text-start font-bold pt-10">VISION: </div>
          <p>
            In August 2023, Shein and SPARC Group entered into a joint venture
            where each company acquired a minority stake of the other; Shein
            acquired about a third of SPARC Group.
          </p>
        </div>
      </div>
      <div className="text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb:20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cum
            exercitationem laboriosam ipsa eius, mollitia at nesciunt libero
            necessitatibus, tempora veritatis, nisi sequi et minima ducimus vel
            sapiente error recusandae.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cum
            exercitationem laboriosam ipsa eius, mollitia at nesciunt libero
            necessitatibus, tempora veritatis, nisi sequi et minima ducimus vel
            sapiente error recusandae.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cum
            exercitationem laboriosam ipsa eius, mollitia at nesciunt libero
            necessitatibus, tempora veritatis, nisi sequi et minima ducimus vel
            sapiente error recusandae.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;

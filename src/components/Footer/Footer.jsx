import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Techno's Cafe
            </h1>
            <p className="">
              A perfect place to enjoy delicious momos, burgers, and fries in a
              cozy ambiance. Visit us for an unforgettable food experience!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Ahmedabad, Gujarat</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9876543210</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="relative h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.636254134904!2d72.54619635046754!3d23.03628716662322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854651ac1dfb%3A0xc5ea4f399e3d5697!2sD&#39;Caf%20-%20Best%20Cafe%20In%20Ahmedabad!5e0!3m2!1sen!2sin!4v1742315255348!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowFullScreen={true}
                title="Coffee Shop Location"
              ></iframe>
              </div>
            <div className="">
              <div className="py-8 px-24 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer hover:text-yellow-500"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="cursor-pointer hover:text-yellow-500"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="cursor-pointer hover:text-yellow-500"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-right py-4 pr-6 ">
              <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                Created as a Project by <br></br>{" "}
                <span className="text-2xl text-primary">Om Bhati</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

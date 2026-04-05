import React, { useState } from "react";
import { LuHexagon } from "react-icons/lu";
import { Icon } from "@iconify/react";

import contactus from "../images/contactus.svg";

const Contact = () => {
  const workItems = [
    {
      id: 1,
      name: "Phone",
      icon: "uil:phone",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      info: "+152 534-468-854",
    },
    {
      id: 2,
      name: "Email",
      icon: "uil:envelope",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      info: "contact@example.com",
    },
    {
      id: 3,
      name: "Location",
      icon: "uil:map-marker",
      desc: "C/54 Northwest Freeway, Suite 558,Houston, USA 485",
      info: "View on Google map",
    },
  ];
  return (
    <div>
      <div className="container-fluid mt-20">
        <iframe
          className="w-full h-[500px] border-none leading-[0] border-0 mt-6"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
        ></iframe>
      </div>
      <section className=" pb-16 md:pb-24 dark:bg-slate-900">
        {/* contact */}
        <div className="container-2xl mt-16 lg:mt-24">
          <div className="grid-layout-2 items-center mt-8">
            <div className="md:col-span-6 lg:col-span-7">
              <img
                src={contactus}
                className="w-full h-full object-cover"
                alt="get in touch"
              />
            </div>
            <div className="md:col-span-6 lg:col-span-5 ">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                <h1 className="h1 dark:text-white">Get in touch !</h1>
                <form action="">
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <div>
                      <p className="paragraph-3 dark:text-white">Your Name:</p>
                      <input
                        name="search"
                        type="text"
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800  focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Name:"
                      />
                    </div>
                    <div>
                      <p className="paragraph-3 dark:text-white">Your Email:</p>
                      <input
                        name="search"
                        type="text"
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800  focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Email:"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="paragraph-3 dark:text-white">
                      Your Questions:
                    </p>
                    <input
                      name="search"
                      type="text"
                      className="border border-gray-200 rounded overflow-hidden dark:border-slate-800  focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                      placeholder="Subject:"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="paragraph-3 dark:text-white">Your Comment:</p>
                    <textarea
                      name="search"
                      type="text"
                      className="border border-gray-200 rounded overflow-hidden dark:border-slate-800  focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white h-24"
                      placeholder="Message:"
                    />
                  </div>
                  <div className="mt-4">
                    <button className="btn px-5 py-2 sm:px-7 sm:py-[12px] md:px-6 md:py-2 my-1">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* phone,email,location */}
        <div className="container-2xl mt-16 lg:mt-24">
          <div className="grid-layout-3 mt-8">
            {workItems?.map((item) => {
              return (
                <div className="lg:px-8" key={item.id}>
                  <div className="relative">
                    <LuHexagon className=" w-32 h-32 text-[#f3faf6] mx-auto dark:text-slate-900 fill-[#f3faf6] dark:fill-[#0F1e2c]" />
                    <div className="absolute center-h-v ">
                      <Icon
                        icon={item.icon}
                        className=" text-4xl text-green-600"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="sub-header-2 text-center  dark:text-white">
                      {item.name}
                    </h2>
                    <p className="paragraph mt-3">{item.desc}</p>
                  </div>
                  <div className="mt-6">
                    <p className=" paragraph-4 mt-3  ">
                      <span className=" pb-1 cursor-pointer transition duration-150 border-b-[1px] border-transparent hover:border-green-600">
                        {item.info}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

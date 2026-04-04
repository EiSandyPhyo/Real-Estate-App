import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import FeatureProperties from "../Components/FeatureProperties";
import HowItWorks from "../Components/HowItWorks";
import GetInTouch from "../Components/GetInTouch";
import processTabs from "../services/processTabs";

const Buy = ({ properties }) => {
  const [toggle, setToggle] = useState(1);
  const toggleHandler = (id) => {
    setToggle(id);
  };

  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="relative">
        {/*  hero section |  hero-img .css*/}
        <div
          className="relative w-full h-[378px] bg-no-repeat bg-[position:50%_20%] bg-cover"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455")`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">find your dream home</h2>
            </div>
          </div>
        </div>
        {/* custom shape */}
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className=" fill-[#fff] dark:fill-slate-900"
            ></path>
          </svg>
        </div>
      </div>
      {/* search box section */}
      <div className="flex-center-center -translate-y-full lg:-translate-y-2/3 xl:-translate-y-1/2  px-3">
        <div className=" md:w-[672px] shadow-lg rounded-md z-10 bg-white dark:bg-slate-900 dark:shadow-gray-800">
          <form action="" className="flex-between-center gap-2 pl-4 pr-1">
            <div className="flex-center-center gap-1 dark:text-white">
              <BiSearchAlt className="text-xl sm:text-2xl" />
              <input
                type="text"
                className="border border-none focus:outline-none w-48 xs:w-[250px] sm:w-96 md:w-[400px] text-sm md:text-lg p-2 dark:bg-slate-900"
                placeholder="City, Address, Zip :"
              />
            </div>
            <button className="btn px-5 py-2 sm:px-7 sm:py-[12px] md:px-6 md:py-2 my-1">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* feature properties section */}
      <FeatureProperties properties={properties} />

      {/* How It Works */}
      <HowItWorks />

      {/* 6 Tabs */}
      <div className="container-2xl mt-16 lg:mt-24">
        <div className="grid-layout-2 mt-8">
          <div className="md:col-span-5 lg:col-span-4 dark:bg-slate-900 sticky top-20 self-start">
            <ul className="p-6 border shadow-sm rounded-md overflow-hidden dark:shadow-gray-700">
              {processTabs.map((item) => (
                <li key={item.id} onClick={() => toggleHandler(item.id)}>
                  <button
                    className={`${
                      toggle === item.id
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            {processTabs.map((item) => (
              <div
                key={item.id}
                className={toggle === item.id ? "block" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full h-auto"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2 dark:text-white">{item.title}</h2>
                  <p className="paragraph-2 mt-3">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* get in touch section */}
      <GetInTouch />
    </section>
  );
};

export default Buy;

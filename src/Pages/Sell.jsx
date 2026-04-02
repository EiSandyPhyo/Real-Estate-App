import React, { useState } from "react";
import HowItWorks from "../Components/HowItWorks";
import GetInTouch from "../Components/GetInTouch";

const Sell = () => {
  const [value, setValue] = useState(10000);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const decimalValue = (value * 0.01).toFixed(2);
  
  // window.scrollTo(0, 0);

  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="mt-[70px]">
        {/*  hero section */}
        <div className="hero-img">
          <div className="bg-dark-opacity"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">sell faster. save thousands.</h2>
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

      {/* how it works */}
      <HowItWorks />

      {/* Brokerage Calculator */}
      <div className="container-2xl mt-16 lg:mt-24">
        <div className="flex-center-center flex-col pb-8">
          <h1 className="sub-header  dark:text-white">Brokerage Calculator</h1>
          <p className="paragraph">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>
        <div className="md:flex-center-center  pb-8">
          <div className="lg:w-3/5 md:w-4/5 mx-auto">
            <div className="p-6 shadow dark:shadow-gray-700 rounded-md">
              <div className="flex-between-center font-2 dark:text-white">
                <h2 className="">Min $ 10000</h2>
                <h2 className="">Min $ 200000</h2>
              </div>
              <div className="">
                <input
                  type="range"
                  min="10000"
                  max="200000"
                  value={value}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </div>
              <div className="md:flex justify-between items-center text-center mt-4 font dark:text-white">
                <div className="flex flex-col ">
                  <h2 className="font">Total Value ($)</h2>
                  <div className=" md:ms-6 font-2">
                    <span className="text-green-600">$ </span>
                    <p className="inline-block text-green-600 ">{value}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="">Brokerage Fee ($)</h2>
                  <div className=" md:ms-6 font-2">
                    <span className="text-green-600">$ </span>
                    <p className="inline-block text-green-600">
                      {decimalValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get in touch */}
      <GetInTouch />
    </section>
  );
};

export default Sell;

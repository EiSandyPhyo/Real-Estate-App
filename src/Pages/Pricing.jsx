import React from "react";
import { BsShield } from "react-icons/bs";
import { CgTrees } from "react-icons/cg";
import { FaRocket } from "react-icons/fa";

import PricingComponent from "../Components/PricingComponent";
import GetInTouch from "../Components/GetInTouch";

const Pricing = () => {
  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="">
        <div
          className="relative w-full h-[378px] bg-no-repeat bg-[position:50%_20%] bg-cover"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455")`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">Pricing Plans</h2>
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

      <div className="container-2xl relative pt-8 md:pt-20 xl:pt-28 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-2 lg:px-0">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">
            <div className="rounded-md shadow hover:shadow-xl  duration-500 ease-in-out  dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700">
              <div className="border-b dark:border-gray-800 p-6 text-center">
                <div className="w-24 h-24 bg-green-600/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                  <i>
                    <CgTrees />
                  </i>
                </div>
                <h3 className="text-2xl text-green-600 font-medium mt-4">
                  Basic
                </h3>
                <div className="flex justify-center mt-4">
                  <span className="text-xl dark:text-white">$</span>
                  <span className="text-3xl font-semibold dark:text-white">
                    19
                  </span>
                  <span className="text-xl self-end dark:text-white">
                    /month
                  </span>
                </div>
              </div>
              <PricingComponent />
            </div>
            <div className="rounded-md shadow hover:shadow-xl  duration-500 ease-in-out  dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700">
              <div className="border-b dark:border-gray-800 p-6 text-center">
                <div className="w-24 h-24 bg-green-600/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                  <i>
                    <BsShield />
                  </i>
                </div>
                <h3 className="text-2xl text-green-600 font-medium mt-4">
                  Premium
                </h3>
                <div className="flex justify-center mt-4">
                  <span className="text-xl dark:text-white">$</span>
                  <span className="text-3xl font-semibold dark:text-white">
                    39
                  </span>
                  <span className="text-xl self-end dark:text-white">
                    /month
                  </span>
                </div>
              </div>
              <PricingComponent />
            </div>
            <div className="rounded-md shadow hover:shadow-xl  duration-500 ease-in-out  dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700">
              <div className="border-b dark:border-gray-800 p-6 text-center">
                <div className="w-24 h-24 bg-green-600/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                  <i>
                    <FaRocket />
                  </i>
                </div>
                <h3 className="text-2xl text-green-600 font-medium mt-4">
                  Business
                </h3>
                <div className="flex justify-center mt-4">
                  <span className="text-xl dark:text-white">$</span>
                  <span className="text-3xl font-semibold dark:text-white">
                    99
                  </span>
                  <span className="text-xl self-end dark:text-white">
                    /month
                  </span>
                </div>
              </div>
              <PricingComponent />
            </div>
          </div>
        </div>

        <GetInTouch />
      </div>
    </section>
  );
};

export default Pricing;

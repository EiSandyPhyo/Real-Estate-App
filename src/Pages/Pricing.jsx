import React from "react";
import { BsTelephone, BsShield } from "react-icons/bs";
import { CgTrees } from "react-icons/cg";
import { FaRocket } from "react-icons/fa";
import PricingComponent from "../Components/PricingComponent";
import { Link } from "react-router-dom";

const scrollYHandler=()=>{
  window.scroll(0,0);
}

const Pricing = () => {
  return (
    <div className=" mt-[70px] dark:bg-slate-900">
      <div className="relative bgTop table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-slate-900 opacity-80  dark:bg-slate-900"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 text-center mt-10 ">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white z-50">
              Pricing Plans
            </h3>
          </div>
        </div>
      </div>
      <div className="relative lg:py-24 pt-16 pb-32 lg:pb-44 dark:bg-slate-900">
        <div className="container mx-auto px-4 lg:px-24">
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
        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <div className="flex flex-col text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
              Have Question ? Get in touch!
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <div className="mt-6 mx-auto">
              <button
                className="py-3 px-5 bg-green-600 hover:bg-green-700 border border-green-600 text-white rounded-md"
                href="/contact"
              >
                <span className="flex gap-2">
                  <i>
                    <BsTelephone className=" font-semibold align-middle mt-[2px] " />
                  </i>
                  <Link to={"/contact"} onClick={scrollYHandler}>
                  <span className="font-semibold">Contact us</span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

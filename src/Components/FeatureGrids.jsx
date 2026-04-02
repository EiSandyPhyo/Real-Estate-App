import React from 'react'
import {
    BsFillHeartFill,
    BsStarFill,
    BsCurrencyDollar,
  } from "react-icons/bs";
  import { RiShieldStarFill, RiDonutChartFill } from "react-icons/ri";
  import { MdLocationOn } from "react-icons/md";

const FeatureGrids = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20  dark:bg-slate-900">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white  overflow-hidden dark:bg-slate-900">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-32 w-32 fill-green-600/5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center ">
                  <i>
                    <BsFillHeartFill />
                  </i>
                </div>
              </div>
              <div className="mt-6">
                <h1
                  className="text-xl hover:text-green-600 font-medium dark:text-white cursor-pointer"
                  href="/features"
                >
                  Comfortable
                </h1>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white  overflow-hidden dark:bg-slate-900">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-32 w-32 fill-green-600/5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i>
                    <RiShieldStarFill />
                  </i>
                </div>
              </div>
              <div className="mt-6">
                <h1
                  className="text-xl hover:text-green-600 font-medium dark:text-white cursor-pointer"
                  href="/features"
                >
                  Extra Security
                </h1>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white overflow-hidden dark:bg-slate-900">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-32 w-32 fill-green-600/5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i>
                    <BsStarFill />
                  </i>
                </div>
              </div>
              <div className="mt-6">
                <h1
                  className="text-xl hover:text-green-600 font-medium dark:text-white cursor-pointer"
                  href="/features"
                >
                  Luxury
                </h1>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white overflow-hidden dark:bg-slate-900">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-32 w-32 fill-green-600/5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i>
                    <BsCurrencyDollar />
                  </i>
                </div>
              </div>
              <div className="mt-6">
                <h1
                  className="text-xl hover:text-green-600 font-medium dark:text-white cursor-pointer"
                  href="/features"
                >
                  Best Price
                </h1>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white  overflow-hidden dark:bg-slate-900">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-32 w-32 fill-green-600/5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i>
                    <MdLocationOn />
                  </i>
                </div>
              </div>
              <div className="mt-6">
                <h1
                  className="text-xl hover:text-green-600 font-medium dark:text-white cursor-pointer"
                  href="/features"
                >
                  Stratagic Location
                </h1>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white  overflow-hidden dark:bg-slate-900">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-32 w-32 fill-green-600/5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i>
                    <RiDonutChartFill />
                  </i>
                </div>
              </div>
              <div className="mt-6">
                <h1
                  className="text-xl hover:text-green-600 font-medium dark:text-white cursor-pointer"
                  href="/features"
                >
                  Efficient
                </h1>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FeatureGrids

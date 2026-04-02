import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const ListSideBar = ({ properties }) => {
  const [heartFill, setHeartFill] = useState(false);

  return (
    <>
      <div className=" mb-40">
      <div className="mt-[70px]">
        {/*  hero section */}
        <div className="hero-img">
          <div className="bg-dark-opacity"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">grid view layout</h2>
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

        <section className="pt-12 pb-16 lg:py-24">
          <div className="container-2xl">
            <div className="grid-layout-2 mt-8">
              <div className="md:col-span-5 lg:col-span-4">
                <div className="p-6 shadow-md dark:shadow-gray-700 rounded-md overflow-hidden">
                  <form action="">
                    <div className="flex flex-col gap-3">
                      <div className="">
                        <p className="font dark:text-white">
                          search properties
                        </p>
                        <div className="relative border border-gray-200 rounded overflow-hidden mt-2 dark:border-slate-800">
                          <BiSearchAlt className="text-xl sm:text-2xl absolute top-[10px] left-2 dark:text-white " />
                          <input
                            name="search"
                            type="text"
                            className="border-none focus:outline-none form-box dark:bg-slate-900 dark:text-white"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div className="inline-block relative">
                        <p className="font dark:text-white">categories</p>
                        <select
                          name=""
                          id=""
                          className="form-box-2 mt-2 block appearance-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                        >
                          <option value="">Residential</option>
                          <option value="">Land</option>
                          <option value="">Commercial</option>
                          <option value="">Industrial</option>
                          <option value="">Investment</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-slate-500">
                          <HiChevronDown className="text-[23px]" />
                        </div>
                      </div>
                      <div className="inline-block relative">
                        <p className="font dark:text-white">location</p>

                        <select
                          name=""
                          id=""
                          className="form-box-2 mt-2 block appearance-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                        >
                          <option value="">New York</option>
                          <option value="">North Carolina</option>
                          <option value="">South Carolina</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-slate-500">
                          <HiChevronDown className="text-[23px]" />
                        </div>
                      </div>
                      <div className="">
                        <button className="btn-2 active">Apply Filter</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <div className="grid-layout-1">
                  {/* cards */}
                  {properties.map((property) => {
                    return (
                      /* card */
                      <div
                        className="shadow rounded-xl overflow-hidden card-hover w-full lg:max-w-2xl mx-auto dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700"
                        key={property.id}
                      >
                        <div className="md:flex">
                          <div className="relative md:shrink-0">
                            <img
                              src={property.image}
                              alt={property.title}
                              className=" w-full h-full md:w-48 object-cover"
                            />
                            <div className="absolute top-4 end-4">
                              <div className=" w-10 h-10 bg-white rounded-full cursor-pointer flex-center-center dark:bg-slate-900 dark:shadow-gray-700">
                              <button onClick={() => setHeartFill(!heartFill)}>
                      {heartFill ? (
                        <RxHeartFilled size={20} className=" text-red-600  " />
                      ) : (
                        <RxHeartFilled
                          size={20}
                          className="text-slate-100 hover:text-red-600 dark:text-slate-700 dark:hover:text-red-700"
                        />
                      )}
                    </button>
                              </div>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="mb-6">
                              <Link to={`/detail/${property.id}`}>
                                <h2 className="h2 cursor-pointer hover:text-green-600 duration-500 ease-in-out inline-block dark:text-white">
                                  {property.title}
                                </h2>
                              </Link>
                            </div>
                            <div className="border-y border-slate-100 py-6 mb-6 dark:border-gray-800">
                              <div className="flex-between-center">
                                <div className="flex-center-center gap-2 dark:text-white">
                                  <FaCompressArrowsAlt className="icon-color" />
                                  8000sqft
                                </div>
                                <div className="flex-center-center gap-2 dark:text-white">
                                  <IoBedOutline className="icon-color " />4 Beds
                                </div>
                                <div className="flex-center-center gap-2 dark:text-white">
                                  <LuBath className="icon-color" />4 Baths
                                </div>
                              </div>
                            </div>
                            <div className="flex-between-center text-slate-400">
                              <div className="">
                                <div className="">
                                  <p>Price</p>
                                  <p className="text-black font dark:text-white">
                                    $5000
                                  </p>
                                </div>
                              </div>

                              <div className="">
                                <p>Rating</p>
                                <div className="flex-center-center gap-2">
                                  {[...Array(5)].map((x, i) => (
                                    <BsStarFill
                                      key={i}
                                      className="text-amber-400"
                                    />
                                  ))}
                                  <p className="text-black font mt-1 dark:text-white">
                                    5(30)
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ListSideBar;

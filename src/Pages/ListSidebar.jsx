import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  FaCompressArrowsAlt,
  FaHandPointLeft,
  FaHandPointUp,
} from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BsFillBuildingsFill } from "react-icons/bs";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { TiWarning } from "react-icons/ti";

import RatingStars from "../Components/RatingStars";

import { Link } from "react-router-dom";

const ListSideBar = ({ properties }) => {
  const [heartFill, setHeartFill] = useState(false);

  const [selectedPropertyType, setSelectedPropertyType] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showText, setShowText] = useState(true);

  const propertyTypes = [
    ...new Set(properties?.map((item) => item.property_type)),
  ];

  const cities = [...new Set(properties?.map((item) => item.city))];
  //console.log(propertyTypes);

  const handleFilter = () => {
    setShowText(false);

    const filtered = properties.filter((item) => {
      const matchType =
        selectedPropertyType === "All" ||
        item.property_type === selectedPropertyType;

      const matchCity = selectedCity === "All" || item.city === selectedCity;

      return matchType && matchCity;
    });

    setFilteredProperties(filtered);
  };

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  const restFilter = () => {
    setShowText(true);
    setSelectedPropertyType("All");
    setSelectedCity("All");
    setFilteredProperties(properties);
  };

  return (
    <section className=" pb-16 dark:bg-slate-900">
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
              <h2 className="header">browse properties</h2>
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

      <div className="pt-12 pb-16 lg:py-24">
        <div className="container-2xl">
          <div className="grid-layout-2 mt-8">
            {/* left side */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="p-6 shadow-md dark:shadow-gray-700 rounded-md overflow-hidden sticky top-20">
                <div className="flex flex-col gap-3">
                  <div className="inline-block relative">
                    <p className="font dark:text-white">property type</p>
                    <select
                      value={selectedPropertyType}
                      onChange={(e) => setSelectedPropertyType(e.target.value)}
                      className="form-box-2 mt-2 block appearance-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="All">All property types</option>
                      {propertyTypes?.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-slate-500">
                      <HiChevronDown className="text-[23px]" />
                    </div>
                  </div>
                  <div className="inline-block relative">
                    <p className="font dark:text-white">city in UK</p>

                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className={`form-box-2 mt-2 block appearance-none dark:border-slate-800 dark:bg-slate-900 dark:text-white `}
                    >
                      <option value="All">All cities</option>
                      {cities?.map((city, i) => (
                        <option key={i} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-slate-500">
                      <HiChevronDown className="text-[23px]" />
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 mt-3">
                    <button onClick={handleFilter} className="btn-2 active">
                      Apply Filter
                    </button>
                    <button onClick={restFilter} className="btn-2 active">
                      Rest Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="grid-layout-1">
                {showText ? (
                  <div className="flex flex-col justify-center items-center gap-6 md:gap-3 max-w-[20rem] md:max-w-full mx-auto">
                    <p className="text-center text-slate-500 dark:text-slate-400 mt-12 lg:mt-20 text-xl md:text-2xl">
                      Use the filters to search for properties by type or
                      location. <br />
                      Your results will appear here once a selection is made.
                    </p>
                    <FaHandPointUp
                      size={50}
                      className="block md:hidden
             animate-[slideUp_1s_ease-in-out_infinite] dark:text-white"
                    />

                    <FaHandPointLeft
                      size={50}
                      className="hidden md:block
             animate-[slideLeft_1s_ease-in-out_infinite] dark:text-white"
                    />
                  </div>
                ) : filteredProperties.length === 0 ? (
                  <div className="flex justify-center items-center mt-12 md:mt-28 gap-1 ">
                    <TiWarning size={25} className="text-yellow-500" />
                    <p className=" text-slate-500 dark:text-slate-400 text-xl pt-[6px] text-center">
                      No properties found matching your criteria.
                      <span className="block">Try adjusting your filters.</span>
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="bg-[#FEF3C7] w-fit mt-6 md:mt-0">
                      <span className=" font-semibold">
                        {filteredProperties.length}
                      </span>{" "}
                      <span className="text-gray-500">
                        {filteredProperties.length > 1
                          ? "properties"
                          : "property"}{" "}
                        found
                      </span>
                    </p>
                    {/* cards */}
                    {filteredProperties?.map((property) => {
                      return (
                        /* card */
                        <Link to={`/detail/${property.id}`} key={property?.id}>
                          <div className="shadow rounded-xl overflow-hidden card-hover w-full  mx-auto dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700">
                            <div className="md:flex">
                              <div className="relative md:shrink-0">
                                <img
                                  src={property?.image}
                                  alt={property?.property_type}
                                  className=" w-full h-full md:w-48 object-cover"
                                />
                                <div className="absolute top-4 end-4">
                                  <div className=" w-10 h-10 bg-white rounded-full cursor-pointer flex-center-center dark:bg-slate-900 dark:shadow-gray-700">
                                    <button
                                      onClick={() => setHeartFill(!heartFill)}
                                    >
                                      {heartFill ? (
                                        <RxHeartFilled
                                          size={20}
                                          className=" text-red-600  "
                                        />
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
                                {/* property address */}
                                <div className="mb-6">
                                  <h2 className="h2 cursor-pointer hover:text-green-600 duration-500 ease-in-out inline-block dark:text-white tracking-wide">
                                    {`${property?.address}, ${property?.postal_code}, ${property?.city}`}
                                  </h2>
                                </div>

                                {/* property details */}
                                <div className="border-y border-slate-100 py-6 dark:border-gray-800">
                                  <div className="flex-between-center md:flex-col md:items-start gap-0 md:gap-2 lg:gap-5 lg:flex-row text-center">
                                    <div className="flex-center-center gap-1 dark:text-white">
                                      <BsFillBuildingsFill className="icon-color" />
                                      <span className="pt-1">
                                        {property?.year_built} yr
                                      </span>
                                    </div>
                                    <div className="flex-center-center gap-1 dark:text-white">
                                      <FaCompressArrowsAlt className="icon-color" />
                                      <span className="pt-1">
                                        {" "}
                                        {property?.square_footage} sqft
                                      </span>
                                    </div>
                                    <div className="flex-center-center gap-1 dark:text-white">
                                      <IoBedOutline className="icon-color " />
                                      <span className="pt-1">
                                        {property?.beds}{" "}
                                        {property?.beds > 1 ? "Beds" : "Bed"}
                                      </span>
                                    </div>
                                    <div className="flex-center-center gap-1 dark:text-white">
                                      <LuBath className="icon-color" />
                                      <span className="pt-1">
                                        {property?.baths}{" "}
                                        {property?.baths > 1 ? "Baths" : "Bath"}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* price and rating */}
                                <div className="flex-between-center text-slate-400 gap-2 lg:gap-0 pt-6">
                                  <div className="">
                                    <div className="">
                                      <p>Price</p>
                                      <p className="text-black font dark:text-white">
                                        £
                                        {property?.price?.toLocaleString(
                                          "en-GB",
                                        )}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="">
                                    <p>Rating</p>
                                    <div className="flex-center-center gap-2">
                                      <RatingStars rating={property?.rating} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSideBar;

import React, { useState, useEffect, useRef } from "react";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { CgQuote } from "react-icons/cg";

import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import RatingStars from "./RatingStars";
import Pagination from "./Pagination";

import PlaceholderImage from "../images/blurImg.png";

const FeatureProperties = ({
  properties,
  searchLabel,
  searchType,
  propertyType,
  propertiesCount,
  limit,
  showToggle = true,
}) => {
  const sectionRef = useRef(null);

  const [heartFill, setHeartFill] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  let filteredProperties = properties || []; // let - to reassign

  if (propertyType) {
    filteredProperties = filteredProperties.filter(
      (item) => item.property_type === propertyType,
    );
  }

  if (limit) {
    filteredProperties = filteredProperties.slice(0, limit);
  }

  // responsive items per page
  const getItemsPerPage = () => {
    const width = window.innerWidth;

    if (width < 640) return 5; // mobile
    if (width < 1024) return 6; // tablet
    return 9; // desktop
  };

  // resize detect
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(1); // reset page when resize
    };

    setItemsPerPage(getItemsPerPage());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // slice data
  const totalItems = filteredProperties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProperties = filteredProperties.slice(startIndex, endIndex);

  console.log(properties);
  console.log(searchLabel);
  /* <button disabled={!searchTerm.trim()}> */

  const pluralize = (word) => {
    if (word.endsWith("y")) return word.slice(0, -1) + "ies";
    if (
      word.endsWith("s") ||
      word.endsWith("x") ||
      word.endsWith("ch") ||
      word.endsWith("sh")
    ) {
      return word + "es";
    }
    return word + "s";
  };

  return (
    <div
      ref={sectionRef}
      className="container-2xl mt-16 lg:mt-24 dark:bg-slate-900"
    >
      <div className="flex-center-center flex-col pb-8">
        <h1 className="sub-header  dark:text-white">
          {!searchLabel ? (
            "Featured Properties"
          ) : searchType === "city" ? (
            <p>
              Properties in <span className="text-green-600 mx-1">"</span>
              {searchLabel}
              <span className="text-green-700 ml-1">"</span>
            </p>
          ) : searchType === "property_type" ? (
            propertiesCount === 1 ? (
              <p>
                Explore <span className="text-green-600 mx-1">"</span>
                {searchLabel}
                <span className="text-green-700 ml-1">"</span>
              </p>
            ) : (
              <p>
                Explore <span className="text-green-600 mx-1">"</span>
                {pluralize(searchLabel)}
                <span className="text-green-700 ml-1">"</span>
              </p>
            )
          ) : (
            <p>
              Results for <span className="text-green-600 mx-1">"</span>
              {searchLabel}
              <span className="text-green-700 ml-1">"</span>
            </p>
          )}
        </h1>
        <p className="paragraph">
          {!searchLabel
            ? "A great platform to buy, sell and rent your properties without any agent or commissions."
            : propertiesCount === 0
              ? "No properties found."
              : `${propertiesCount} ${propertiesCount === 1 ? "property" : "properties"} found`}
        </p>
      </div>

      {/* cards */}
      <div className="grid-layout-3 mt-8">
        {visibleProperties.map((property) => {
          return (
            /* card */
            <div
              className="shadow rounded-xl overflow-hidden card-hover dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700"
              key={property.id}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl w-full h-60">
                {" "}
                <LazyLoadImage
                  src={`${property.image}?w=800&h=500&fit=crop`}
                  placeholderSrc={PlaceholderImage}
                  className="w-full h-full object-cover"
                  alt={property?.property_name}
                />
                <div className="absolute top-4 end-4">
                  <div className=" w-10 h-10 bg-white rounded-full cursor-pointer flex-center-center dark:bg-slate-900 dark:shadow-gray-700">
                    {property?.id}
                    {/* <button onClick={() => setHeartFill(!heartFill)}>
                      {heartFill ? (
                        <RxHeartFilled size={20} className=" text-red-600  " />
                      ) : (
                        <RxHeartFilled
                          size={20}
                          className="text-slate-100 hover:text-red-600 dark:text-slate-700 dark:hover:text-red-700"
                        />
                      )}
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <Link to={`/detail/${property.id}`}>
                    <h2 className="h2 cursor-pointer hover:text-green-600 duration-500 ease-in-out inline-block  dark:text-white">
                      {`${property?.property_type}, ${property?.property_name}`}
                      {/* {`${property?.address}, ${property?.city}, ${property?.postal_code}`} */}
                    </h2>
                  </Link>
                </div>
                <div className="border-y border-slate-100 dark:border-gray-800 py-6 mb-6">
                  <div className="flex-between-center">
                    <div className="flex-center-center gap-2  dark:text-white">
                      <FaCompressArrowsAlt className="icon-color" />
                      {property?.square_footage} sqft
                    </div>
                    <div className="flex-center-center gap-2  dark:text-white">
                      <IoBedOutline className="icon-color" /> {property?.beds}{" "}
                      Beds
                    </div>
                    <div className="flex-center-center gap-2  dark:text-white">
                      <LuBath className="icon-color" /> {property?.baths} Baths
                    </div>
                  </div>
                </div>
                <div className="flex-between-center text-slate-400">
                  <div className="">
                    <div className="">
                      <p>Price</p>
                      <p className="text-black font  dark:text-white">
                        £{property?.price.toLocaleString()}
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
          );
        })}
      </div>

      {/* pagination */}
      {showToggle && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default FeatureProperties;

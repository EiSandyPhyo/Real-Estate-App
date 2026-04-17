import React from "react";
import { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const scrollYHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/buy");
  };

  return (
    <section className="pb-10 md:pb-0 dark:bg-slate-900">
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
              <h2 className="header">my favorite properties</h2>
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

      <div className="py-10 md:py-16 lg:py-24">
        <div className="container-2xl">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 md:py-16 lg:py-7 xl:py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <FaHeart className="text-red-600 text-xl" />
              </div>

              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                No favorites yet
              </h2>

              <p className="text-gray-400 mt-2">
                Start adding properties you like
              </p>

              <button
                onClick={() => scrollYHandler()}
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                Browse Properties
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {favorites.map((item) => (
                <div
                  key={item?.id}
                  className="bg-gray-100 rounded-2xl p-4 flex gap-4 items-center hover:shadow-md transition"
                >
                  {/* image */}
                  <div className="relative w-36 h-28 flex-shrink-0">
                    <img
                      src={item?.image}
                      alt={item?.property_name}
                      className="w-full h-full object-cover rounded-xl"
                    />

                    {/* rating */}
                    <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-xs font-semibold">
                        {item?.rating || 4.5}
                      </span>
                    </div>
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-900">
                      {item?.property_name}
                    </h2>

                    <p className="text-gray-400 text-sm mt-1">
                      {item?.property_type}
                    </p>

                    <p className="text-md md:text-xl font-bold mt-3 text-slate-800">
                      £{item?.price?.toLocaleString()}
                    </p>
                  </div>

                  {/*  heart */}
                  <button
                    onClick={() => removeFavorite(item.id)}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full  shadow hover:scale-110 transition bg-white/70 backdrop-blur"
                  >
                    <FaHeart className="text-red-500 text-sm md:text-lg" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorite;

import React from "react";
import FeatureGrids from "../Components/FeatureGrids";
import FeatureSlider from "../Components/FeatureSlider";
import GetInTouch from "../Components/GetInTouch";

const Features = () => {
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
              <h2 className="header">services / features</h2>
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
        <FeatureGrids />
        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold dark:text-white">
              What Our Client Say ?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great platform to buy, sell and rent your properties without any
              agent or commissions.
            </p>
          </div>

          <FeatureSlider />
        </div>
      </div>

      <GetInTouch />
    </section>
  );
};

export default Features;

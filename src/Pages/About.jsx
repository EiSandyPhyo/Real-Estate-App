import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import Efficiency from "../Components/Efficiency";
import HowItWorks from "../Components/HowItWorks";
import GetInTouch from "../Components/GetInTouch";
import AgentTeam from "../Components/AgentTeam";

import testimonials from "../services/testimonials";

const About = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  /*   const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1)); //0 === 4-1 ? 0 : 0+1 //1
  }; */

  // responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrent(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= testimonials.length - itemsPerView ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerView]);

  console.log("current: " + current);

  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="">
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
              <h2 className="header">About Us</h2>
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

      {/* Efficiency Section*/}
      <Efficiency showIframe={showIframe} setShowIframe={setShowIframe} />

      {/* how it works */}
      <HowItWorks />

      {/* like parallax image scroll section */}
      <div
        className="relative bg-fixed bg-cover bg-center bg-no-repeat h-[459px] md:h-[281px] lg:h-[320px] flex items-center mt-16 lg:mt-24"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80")',
        }} /* https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80 */
      >
        <div className="absolute inset-0 bg-slate-900/50"></div>

        <div className="relative z-10 max-w-6xl md:max-w-4xl lg:max-w-5xl mx-auto w-full px-11 md:px-15 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                1,548+
              </h2>
              <p className="mt-4 text-lg font-medium">Properties Sell</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                25+
              </h2>
              <p className="mt-4 text-lg font-medium">Award Gained</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                9+
              </h2>
              <p className="mt-4 text-lg font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* meet the agent section */}
      <AgentTeam />

      {/* what our client say */}
      <div className="container-2xl mt-16 lg:mt-24 mb-20 dark:bg-slate-900">
        <div className="flex-center-center flex-col">
          <h1 className="sub-header  dark:text-white">What Our Client Say ?</h1>
          <p className="paragraph">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>

        {/* slider */}
        <div className="overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsPerView) * current}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <div className="text-center p-6">
                  <p className="text-slate-400 italic">{`"${item.text}"`}</p>

                  <ul className="flex justify-center text-amber-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <AiFillStar />
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className="  bg-center bg-cover duration-500 h-14 w-14 rounded-full shadow-md  mx-auto mt-4"
                  ></div>

                  <h6 className="mt-4 fw-semibold dark:text-white">
                    {item.personName}
                  </h6>
                  <span className="text-slate-400 text-sm">{item.job}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="flex justify-center mt-6">
          {Array.from({
            length: testimonials.length - itemsPerView + 1,
          }).map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)}>
              <RxDotFilled
                className={`transition-all duration-300 cursor-pointer ${
                  current === i
                    ? "text-green-500 scale-150"
                    : "text-slate-300 scale-75"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* get in touch */}
      <GetInTouch />
    </section>
  );
};

export default About;

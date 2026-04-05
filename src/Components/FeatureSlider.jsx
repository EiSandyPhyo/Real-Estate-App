import React, { useRef } from "react";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { useEffect } from "react";
import testimonials from "../services/testimonials";

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 2500;
  const timeoutRef = useRef(null);

  const resetTimeOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeOut();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );
    return () => {
      resetTimeOut();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div ref={timeoutRef} className="flex justify-center relative mt-16">
        <div className="relative lg:w-1/3 md:w-1/2 w-full transition-all">
          <div className="absolute -top-20 md:-start-20 -start-0">
            <i className="text-7xl opacity-5">
              <FaQuoteLeft className="dark:text-white dark:opacity-4" />
            </i>
          </div>
          <div className="absolute bottom-24 md:-end-20 md:bottom-15 -end-0">
            <i className=" text-7xl opacity-5">
              <FaQuoteRight className="dark:text-white dark:opacity-4" />
            </i>
          </div>
          <div className="text-center">
            <p className="text-xl text-slate-400 h-[110px] italic">
              {testimonials[currentIndex].text}
            </p>
            <div className="text-center mt-5 ">
              <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="inline-flex ms-1">
                    <AiFillStar />
                  </li>
                ))}
              </ul>
              <div
                style={{
                  backgroundImage: `url(${testimonials[currentIndex].img})`,
                }}
                className="  bg-center bg-cover duration-500 h-14 w-14 rounded-full shadow-md  mx-auto"
              ></div>
              <h6 className="mt-4 lg:mt-2 fw-semibold dark:text-white">
                {testimonials[currentIndex].personName}
              </h6>
              <span className="text-slate-400 text-sm">
                {testimonials[currentIndex].job}
              </span>
            </div>
          </div>
          <ul className=" flex flex-row justify-center mt-10">
            {testimonials.map((testimonial, testimonialIndex) => (
              <li
                key={testimonialIndex}
                onClick={() => goToSlide(testimonialIndex)}
                className="text-2xl cursor-pointer inline-flex    "
              >
                <RxDotFilled
                  className={`text-lg transition-all duration-300 ${
                    currentIndex === testimonialIndex
                      ? "text-green-500 scale-150"
                      : "text-slate-300 scale-75"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FeatureSlider;

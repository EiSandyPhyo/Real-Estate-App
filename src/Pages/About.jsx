import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import HowItWorks from "../Components/HowItWorks";
import GetInTouch from "../Components/GetInTouch";

const About = () => {
  const slides = [
    {
      id: 1,
      img: "https://hously-landing.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg",
      personName: "Calvin Carlo",
      job: "Manager",
      text: " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. ",
    },
    {
      id: 2,
      img: "https://hously-landing.vercel.app/static/media/02.7df14e12e444ad660802.jpg",
      personName: "Christa Smith",
      job: "Manager",
      text: " I highly recommend Hously as the new way to sell your home 'by owner'. My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. ",
    },
    {
      id: 3,
      img: "https://hously-landing.vercel.app/static/media/04.35463172278c4051b5f4.jpg",
      personName: "Christina Jalk",
      job: "Manager",
      text: " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! ",
    },
    {
      id: 4,
      img: "https://hously-landing.vercel.app/static/media/03.ba5f8794c055cc1488b5.jpg",
      personName: "Lily June",
      job: "Manager",
      text: " Great experience all around! Easy to use and efficient. ",
    },
  ];

  const [showIframe, setShowIframe] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1)); //0 === 4-1 ? 0 : 0+1 //1
  };

  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (!autoSlide) {
      return;
    } else {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  console.log(autoSlide);
  console.log(current);

  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="mt-[70px] dark:bg-slate-900">
        {/*  hero section */}
        <div className="hero-img">
          <div className="bg-dark-opacity"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">about us</h2>
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

      {/* Efficiency Section Start*/}
      <div className="container-fluid h-fit">
        <div className="container-2xl  mx-auto relative flex flex-col lg:flex-row justify-between items-center py-10 lg:my-20 dark:bg-slate-900  lg:px-62">
          <div className=" basis-5/12 relative mb-5">
            <div className=" relative ">
              <img
                className=" rounded-xl w-full h-[400px] lg:h-[550px]"
                src="	https://hously-landing.vercel.app/static/media/about.f67dcc77d84a6e14d5de.jpg"
                alt=""
              />
              <div
                onClick={() => setShowIframe(true)}
                className=" dark:bg-black absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center item-end w-[70px] h-[70px] border-2 rounded-full changeLight bg-white"
              >
                <button className="">
                  <BsPlayFill color="#16a34a" size={"2rem"} />
                </button>
              </div>
            </div>
          </div>
          <div className=" basis-6/12 mb-5 my-10 px-4">
            <div className="">
              <h1 className=" text-2xl md:text-3xl mb-3 text-black dark:text-white font-medium">
                Efficiency. Transparency. <br />
                Control.
              </h1>
              <p className=" text-slate-400 mb-3">
                Hously developed a platform for the Real Estate marketplace that
                allows buyers and sellers to easily execute a transaction on
                their own. The platform drives efficiency, cost transparency and
                control into the hands of the consumers. Hously is Real Estate
                Redefined.
              </p>
              <button className="btn flex-center-center gap-2 px-7 py-2 mt-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${showIframe ? "" : "hidden"} z-50 `}>
        <div
          className={`absolute inset-0 bg-black opacity-60 w-screen h-[2500px] xl:h-[5000px] z-20`}
        ></div>
        <div className="">
          <iframe
            width="560"
            height="315"
            src={`${
              showIframe ? "https://www.youtube.com/embed/yba7hPeTSjk" : ""
            }`}
            title="YouTube video player"
            allow=" web-share"
            className={` ${
              showIframe ? "" : "hidden"
            } z-50  fixed top-[50%] right-[10%] md:right-[50%] md:translate-x-[50%] translate-y-[-50%] w-[80%] lg:w-[50%]`}
          ></iframe>
          <button
            onClick={() => setShowIframe(false)}
            className={`fixed top-[26%] lg:top-[20%] right-[9%] lg:right-[22%] w-10 h-10 p-2 border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full mx-1 z-50 `}
          >
            <AiOutlineClose size={"1.5rem"} color="white" />
          </button>
        </div>
      </div>

      {/* Efficiency Section End*/}

      {/* how it works */}
      <HowItWorks />

      {/* what our client say */}
      <div className="container-2xl mt-16 lg:mt-24 mb-20 dark:bg-slate-900">
        <div className="flex-center-center flex-col">
          <h1 className="sub-header  dark:text-white">What Our Client Say ?</h1>
          <p className="paragraph">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>

        <div className="flex-center-center mt-8">
          <div className="relative lg:w-1/3 md:w-1/2 w-full">
            {" "}
            {/* max-w-lg w-400*/}
            <div className="">
              {" "}
              {/* tiny-single-item */}
              <div className=" overflow-hidden">
                <div className="text-center">
                  <p className="text-xl text-slate-400 h-[110px] italic">
                    {` " ` + slides[current].text + ` " `}
                  </p>
                  <div className="text-center mt-5">
                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                      {[...Array(5)].map((_, index) => (
                        <li className="inline-flex ms-1" key={index}>
                          <AiFillStar />
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{ backgroundImage: `url(${slides[current].img})` }}
                      className="  bg-center bg-cover transition-transform ease-out duration-500 h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                    ></div>
                    <h6 className="mt-4 lg:mt-2 fw-semibold dark:text-white">
                      {slides[current].personName}
                    </h6>
                    <span className="text-slate-400 text-sm">
                      {slides[current].job}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-center-center mt-5">
                <div className="flex-center-center gap-2">
                  {slides.map((_, i) => {
                    return (
                      <div
                        onClick={() => goToSlide(i)}
                        className={` transition-all w-1 h-1 bg-green-600 rounded-full cursor-pointer ${
                          current === i ? "p-[5px]" : " bg-opacity-50"
                        }
                                `}
                        key={i}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get in touch */}
      <GetInTouch />
    </section>
  );
};

export default About;

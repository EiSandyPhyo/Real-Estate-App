import React from "react";
import { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import FeatureSlider from "../Components/FeatureSlider";
import HowItWorks from "../Components/HowItWorks";
import FeatureProperties from "../Components/FeatureProperties";
import GetInTouch from "../Components/GetInTouch";

const Home = ({ properties }) => {
  const [showBuyBtnColor, setShowBuyBtnColor] = useState(true);
  const [showSellBtnColor, setShowSellBtnColor] = useState(false);
  const [showRentBtnColor, setShowRentBtnColor] = useState(false);

  const [showHomeIframe, setShowHomeIframe] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const BuyHandler = (e) => {
    e.preventDefault();
    setShowBuyBtnColor(true);
    setShowSellBtnColor(false);
    setShowRentBtnColor(false);
  };

  const SellHandler = (e) => {
    e.preventDefault();
    setShowSellBtnColor(true);
    setShowBuyBtnColor(false);
    setShowRentBtnColor(false);
  };

  const RentHandler = (e) => {
    e.preventDefault();
    setShowRentBtnColor(true);
    setShowBuyBtnColor(false);
    setShowSellBtnColor(false);
  };

  return (
    <>
      <div className=" container-fluid dark:bg-slate-900 ">
        {/* Hero Section Start*/}
        <div className=" container-fluid lg:h-screen pb-30  bg-[#E7F6ED]  dark:bg-[#13252F] ">
          <div className=" container-2xl mx-auto flex flex-col lg:flex-row justify-between items-center h-fit md:h-screen mb-10 pt-32 lg:pt-10 bg-[#E7F6ED] dark:bg-[#13252F] ">
            <div className=" basis-5/12 my-10 ">
              <div className="px-2 ">
                <h1 className=" text-4xl font-extrabold text-black dark:text-white leading-loose mb-6	text-center lg:text-left ">
                  Find Your
                  <span className=" text-[#16a34a]">
                    {" "}
                    Perfect <br />& Wonderful{" "}
                  </span>{" "}
                  Home
                  <br />
                </h1>
                <p className=" text-slate-400 mb-8 font-[17px] tracking-wide text-center lg:text-left">
                  A great plateform to buy, sell and rent your properties
                  without any agent or commisions.
                </p>
              </div>

              <div className="px-2">
                <div className="w-[100%] bg-white dark:bg-slate-900 dark:text-white text-black  rounded-t-xl px-6 py-4 h-fit flex justify-center lg:justify-start items-center lg:w-fit">
                  <button
                    onClick={BuyHandler}
                    className={` w-[80px] h-[40px] fs-[17px] leading-[24px] rounded-lg ${
                      showBuyBtnColor
                        ? "bg-[#16a34a] text-white"
                        : " hover:text-[#16a34a] "
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={SellHandler}
                    className={` w-[80px] h-[40px] fs-[17px] leading-[24px] rounded-lg   ${
                      showSellBtnColor
                        ? "bg-[#16a34a] text-white"
                        : "hover:text-[#16a34a]"
                    }`}
                  >
                    Sell
                  </button>
                  <button
                    onClick={RentHandler}
                    className={` w-[80px] h-[40px] fs-[17px] leading-[24px] rounded-lg ${
                      showRentBtnColor
                        ? "bg-[#16a34a] text-white"
                        : " hover:text-[#16a34a] "
                    }`}
                  >
                    Rent
                  </button>
                </div>
                <div className="w-[100%] lg:w-[100%] bg-white dark:bg-slate-900 h-fit rounded-b-xl rounded-tr-xl px-6 py-4">
                  <div className="flex border-2 border-slate-200  dark:border-slate-600 rounded-full w-full  h-[45px] justify-between items-center dark-bg-slate-900">
                    <BiSearchAlt
                      className=" ms-2 lg:ml-3 p-1 font-extrabold text-slate-300 dark:text-slate-600"
                      size={30}
                    />
                    <input
                      placeholder="City, Address, Zip:"
                      type="text"
                      className=" py-2 dark:bg-slate-900 outline-none w-[60%] xxs:ms-2"
                    />
                    <button className=" p-2 w-[90px] fs-[17px] leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-full border-none cursor-pointer">
                      Find Out{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="  basis-5/12 my-10 mx-2 lg:mx-3">
              <div className=" relative w-fit z-0">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt=""
                  className=" border-[15px] rounded-t-full border-white dark:border-black lg:w-[500px]  h-[600px] object-cover object-center  " /* md:h-[600px] h-[440px] */
                />
                <div className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center item-end w-[70px] h-[70px] border-none rounded-full changeLight bg-white dark:bg-black">
                  <button onClick={() => setShowHomeIframe(true)} className="">
                    <BsPlayFill color="#16a34a" size={"2rem"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${showHomeIframe ? "" : "hidden"} z-50 `}>
          <div
            className={`absolute inset-0 bg-black opacity-60 w-screen h-[2500px] xl:h-[5000px] z-20`}
          ></div>
          <div className="">
            <iframe
              width="560"
              height="315"
              src={`${
                showHomeIframe
                  ? "https://www.youtube.com/embed/yba7hPeTSjk"
                  : ""
              }`}
              title="YouTube video player"
              allow=" web-share"
              className={` ${
                showHomeIframe ? "" : "hidden"
              } z-50  fixed top-[50%] right-[10%] md:right-[50%] md:translate-x-[50%] translate-y-[-50%] w-[80%] lg:w-[50%]`}
            ></iframe>
            <button
              onClick={() => setShowHomeIframe(false)}
              className={`fixed top-[26%] lg:top-[20%] right-[9%] lg:right-[22%] w-10 h-10 p-2 border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full mx-1 z-50 `}
            >
              <AiOutlineClose size={"1.5rem"} color="white" />
            </button>
          </div>
        </div>
        {/* Hero Section End*/}

        {/* Efficiency Section Start*/}
        <div className="container-fluid h-fit">
          <div className="container-2xl  mx-auto relative flex flex-col lg:flex-row justify-between items-center py-10 lg:my-20 dark:bg-slate-900  lg:px-62">
            <div className=" basis-5/12 relative mb-5">
              <div className=" relative ">
                <img
                  className=" rounded-xl w-full h-[400px] lg:h-[550px]"
                  src="https://images.unsplash.com/photo-1460317442991-0ec209397118"
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
                  Hously developed a platform for the Real Estate marketplace
                  that allows buyers and sellers to easily execute a transaction
                  on their own. The platform drives efficiency, cost
                  transparency and control into the hands of the consumers.
                  Hously is Real Estate Redefined.
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

        {/* How is work Section Start*/}
        <HowItWorks />
        {/* How is work Section End*/}

        {/* Feature property Section Start*/}
        <div className="">
          <FeatureProperties
            properties={properties}
            propertyType={"Duplex"}
            limit={6}
          />
        </div>
        {/* Feature property Section End*/}

        {/* Our clients Section Start*/}
        <div className="container lg:mt-24 mt-16 mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal text-black dark:text-white font-semibold">
              What Our Client Say ?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great platform to buy, sell and rent your properties without any
              agent or commissions.
            </p>
          </div>
          <FeatureSlider />
        </div>
        {/* Our clients Section End*/}

        {/* Questions Section Start*/}
        <div className=" pb-16 md:pb-24">
          <GetInTouch />
        </div>
        {/* Questions Section End*/}
      </div>
    </>
  );
};

export default Home;

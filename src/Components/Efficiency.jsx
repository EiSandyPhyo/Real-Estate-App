import React from "react";
import "../App.css";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Efficiency = ({ showIframe, setShowIframe }) => {
  return (
    <>
      {/* Efficiency Section Start*/}
      <div className="container-fluid h-fit">
        <div className="container-2xl  mx-auto relative flex flex-col lg:flex-row justify-between items-center py-10 lg:my-20 dark:bg-slate-900  lg:px-62">
          <div className=" basis-5/12 relative mb-5">
            <div className=" relative ">
              <img
                className=" rounded-xl w-full h-[400px] lg:h-[550px]"
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118"
                alt="efficiency section image"
              />
              <div
                onClick={() => setShowIframe(true)}
                className=" dark:bg-slate-900 absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center item-end w-[70px] h-[70px] rounded-full changeLight bg-white"
              >
                <button className="">
                  <BsPlayFill color="#16a34a" size={"1.2rem"} />
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
    </>
  );
};

export default Efficiency;

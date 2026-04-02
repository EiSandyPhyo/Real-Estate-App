import React from "react";
import "../App.css";
import { BsPlayFill } from "react-icons/bs";

const Efficiency = () => {
  return (
    <div className=" container mx-auto flex justify-between items-center my-10 lg:my-20">
      <div className=" basis-4/12 relative">
        <div className=" relative ">
          <img
            className=" rounded-xl w-[350px] h-[400px] lg:w-[500px] lg:h-[550px]"
            src="	https://hously-react.vercel.app/static/media/about.f67dcc77d84a6e14d5de.jpg"
            alt=""
          />
          <div className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center item-end w-[70px] h-[70px] border-2 rounded-full changeLight">
            <button className="">
              <BsPlayFill color="#16a34a" size={"2rem"} />
            </button>
          </div>
        </div>
      </div>
      <iframe src="" className=" hidden"></iframe>
      <div className=" basis-7/12">
        <div className=" lg:w-[600px]">

        <h1 className=" text-2xl md:text-3xl mb-3 font-semibold">
          Efficiency. Transparency. <br />
          Control.
        </h1>
        <p className=" text-slate-400 mb-3">
          Hously developed a platform for the Real Estate marketplace that
          allows buyers and sellers to easily execute a transaction on their
          own. The platform drives efficiency, cost transparency and control
          into the hands of the consumers. Hously is Real Estate Redefined.
        </p>
        <button className="btn flex-center-center gap-2 px-7 py-2 mt-6">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
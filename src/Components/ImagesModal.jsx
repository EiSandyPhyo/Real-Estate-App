import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const ImagesModal = (props) => {
  const { showModal, setShowModal, item } = props;

  const toggleModal = (i, value) => {
    if (i !== null) {
      setShowModal(true);
      document.getElementById(
        "modalImage"
      ).src = `https://hously-react.vercel.app/static/media/${i}.${value}.jpg`;
    }
  };

  return (
    <div className="container-fluid">
      <div className=" md:flex">
        <div className="md:w-1/2 lg:w-1/2 p-1">
          <div className="group relative overflow-hidden">
            <img
              className="w-full md:h-[300px] lg:h-[646px] "
              src={item.image}
              alt=""
            />{" "}
            {/* max-h-[620px] */}
            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
            <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
              <button
                id="btn"
                onClick={() =>
                  toggleModal(
                    item.image.slice(45, 46),
                    item.image.slice(47, 67)
                  )
                }
                className=" w-full bg-green-600 text-center ps-3 pe-7 py-3  hover:bg-green-700 text-white rounded-full lightbox"
              >
                <FiCamera className="text-center " />
              </button>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 lg:w-1/2">
          <div className=" flex   ">
            <div className="w-1/2 p-1">
              <div className="  group relative overflow-hidden">
                <img
                  className=""
                  src="https://hously-react.vercel.app/static/media/2.270944ce288edc7e8dce.jpg"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
                  <button
                    id="btn"
                    onClick={() => toggleModal("2", "270944ce288edc7e8dce")}
                    className=" w-full bg-green-600 text-center ps-3 pe-7 py-3  hover:bg-green-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="text-center " />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-1">
              <div className="  group relative overflow-hidden">
                <img
                  className=""
                  src="https://hously-react.vercel.app/static/media/3.c00def8851920add8615.jpg"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
                  <button
                    id="btn"
                    onClick={() => toggleModal("3", "c00def8851920add8615")}
                    className=" w-full bg-green-600 text-center ps-3 pe-7 py-3  hover:bg-green-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="text-center " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex ">
            <div className="w-1/2 p-1">
              <div className="  group relative overflow-hidden">
                <img
                  className=""
                  src="https://hously-react.vercel.app/static/media/4.939a280581f228ba8f6c.jpg"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
                  <button
                    id="btn"
                    onClick={() => toggleModal("4", "939a280581f228ba8f6c")}
                    className=" w-full bg-green-600 text-center ps-3 pe-7 py-3  hover:bg-green-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="text-center " />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-1">
              <div className="  group relative overflow-hidden">
                <img
                  className=""
                  src="https://hously-react.vercel.app/static/media/5.ff80099f4a4308516e24.jpg"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
                  <button
                    id="btn"
                    onClick={() => toggleModal("5", "ff80099f4a4308516e24")}
                    className=" w-full bg-green-600 text-center ps-3 pe-7 py-3  hover:bg-green-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="text-center " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- */}

      <div
        className={
          showModal
            ? "fixed top-0 lg:top-0 left-0 z-80 w-screen h-screen bg-black/70 flex  justify-center items-center cursor-pointer z-50"
            : "hidden"
        }
      >
        <a
          className="fixed z-90 top-[240px] lg:top-16 right-8 lg:right-[280px] text-white text-5xl font-bold"
          onClick={() => setShowModal(false)}
        >
          <RxCross2 />
        </a>

        <img
          id="modalImage"
          src=""
          className=" w-[100%] max-w-[800px] max-h-[600px] object-cover z[1000] "
        />
      </div>
    </div>
  );
};

export default ImagesModal;

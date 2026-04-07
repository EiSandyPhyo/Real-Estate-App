import React, { useState, useEffect } from "react";
import { FiCamera, FiArrowLeft } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import { useNavigate } from "react-router-dom";

const ImagesModal = (props) => {
  const { showModal, setShowModal, detail } = props;

  const [selectedImage, setSelectedImage] = useState("");

  const navigate = useNavigate();

  /* const toggleModal = (i, value) => {
    if (i !== null) {
      setShowModal(true);
      document.getElementById("modalImage").src =
        `https://hously-react.vercel.app/static/media/${i}.${value}.jpg`;
    }
  }; */
  const toggleModal = (imgUrl) => {
    if (imgUrl) {
      setSelectedImage(imgUrl);
      setShowModal(true);
    }
  };

  //const interiorImages = detail?.interiorImages || [];
  //console.log(interiorImages);

  // no scroll when modal open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="container-fluid">
      <div className=" md:flex">
        {/* Left Side ONE big image */}
        <div className="md:w-1/2 lg:w-1/2 p-1">
          <div className="group relative overflow-hidden">
            <img
              className="w-full h-[260px] md:h-[408px] lg:h-[646px] object-cover"
              src={detail?.image}
              alt={detail?.property_name}
            />
            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible">
              <button
                id="btn"
                onClick={() => toggleModal(detail?.image)}
                className=" w-full bg-green-600 text-center p-4  hover:bg-green-700 text-white rounded-full lightbox"
              >
                <FiCamera className="text-center " />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Four small images */}
        <div className="md:w-1/2 lg:w-1/2 grid grid-cols-2 gap-2 p-1">
          {detail?.interiorImages?.slice(0, 4).map((img, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={img}
                alt={i}
                className="w-full h-[150px] md:h-[200px] lg:h-[319px] object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible
                "
              >
                <button
                  id="btn"
                  onClick={() => toggleModal(img)}
                  className="w-full bg-green-600 text-center p-2 md:p-3 lg:p-4 hover:bg-green-700 text-white rounded-full lightbox"
                >
                  <FiCamera className="text-center" />
                </button>
              </div>
            </div>
          ))}
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
        <button
          className="fixed top-16 right-8 text-white text-5xl font-bold z-[1100]"
          onClick={() => setShowModal(false)}
        >
          {" "}
          {/* fixed z-90 top-[240px] lg:top-16 right-8 lg:right-[280px] text-white text-5xl font-bold */}
          <RxCross2 />
        </button>

        <img
          src={selectedImage}
          alt="Preview"
          className="w-[90%] max-w-[800px] max-h-[600px] object-cover z-[1000]"
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm md:text-lg text-gray-500 hover:text-green-600 ml-3 md:ml-5 mt-2 md:mt-4"
      >
        <FiArrowLeft />
        Back
      </button>
    </div>
  );
};

export default ImagesModal;

import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const ImagesModal = (props) => {
  const { showModal, setShowModal, detail } = props;

  const [selectedImage, setSelectedImage] = useState("");

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

  const interiorImages = detail?.interiorImages || [];

  console.log(interiorImages);

  return (
    <div className="container-fluid">
      <div className=" md:flex">
        {/* Left Side ONE big image */}
        <div className="md:w-1/2 lg:w-1/2 p-1">
          <div className="group relative overflow-hidden">
            <img
              className="w-full md:h-[300px] lg:h-[646px] "
              src={detail?.image}
              alt={detail?.property_name}
            />{" "}
            {/* max-h-[620px] */}
            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
            <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
              <button
                id="btn"
                onClick={() => toggleModal(detail?.image)}
                className=" w-full bg-green-600 text-center ps-3 pe-7 py-3  hover:bg-green-700 text-white rounded-full lightbox"
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
                className="w-full h-[150px] lg:h-[319px] object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
              <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
                <button
                  id="btn"
                  onClick={() => toggleModal(img)}
                  className="w-full bg-green-600 text-center ps-3 pe-7 py-3 hover:bg-green-700 text-white rounded-full lightbox"
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
        {/* <a
          className="fixed z-90 top-[240px] lg:top-16 right-8 lg:right-[280px] text-white text-5xl font-bold"
          onClick={() => setShowModal(false)}
        >
          <RxCross2 />
        </a> */}
        <button
          className="fixed top-16 right-8 text-white text-5xl font-bold z-[1100]"
          onClick={() => setShowModal(false)}
        >
          <RxCross2 />
        </button>

        <img
          src={selectedImage}
          alt="Preview"
          className="w-[90%] max-w-[800px] max-h-[600px] object-cover z-[1000]"
        />
      </div>
    </div>
  );
};

export default ImagesModal;

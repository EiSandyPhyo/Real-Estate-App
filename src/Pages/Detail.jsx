import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbArrowsMinimize } from "react-icons/tb";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import ImagesModal from "../Components/ImagesModal";


const Detail = ({ properties }) => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const filter = properties.filter((property) => property.id === id);
    console.log(filter);
    setDetail(filter);
  }, []);

  console.log(detail[0]);

  const item = detail[0];

  return (
    <section className="pt-12 pb-16 lg:py-24 dark:bg-slate-900">
      {item ? (
        <>
          <ImagesModal
            showModal={showModal}
            setShowModal={setShowModal}
            item={item}
          />
          <div className="container-2xl md:mt-24 mt-16 mx-auto px-4 ">
            <div className=" md:flex">
              <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                <h4 className="text-2xl font-medium dark:text-white">{item.title}</h4>
                <ul className="py-6 flex items-center list-none">
                  <li className="flex items-center lg:me-6 me-4">
                    <i className="me-2">
                    <FaCompressArrowsAlt className="icon-color" />
                    </i>
                    <span className="lg:text-xl dark:text-white">8000sqf</span>
                  </li>
                  <li className="flex items-center lg:me-6 me-4">
                    <i className="me-2 ">
                      <IoBedOutline className="icon-color" />
                    </i>
                    <span className="lg:text-xl dark:text-white">4 Beds</span>
                  </li>
                  <li className="flex items-center">
                    <i className="me-2 ">
                      <LuBath className="icon-color" />
                    </i>
                    <span className="lg:text-xl dark:text-white">4 Baths</span>
                  </li>
                </ul>
                <p className="text-slate-400 text-[17px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p className="text-slate-400 mt-4 text-[17px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
                <p className="text-slate-400 mt-4 text-[17px]">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances occur in which toil and pain can
                  procure him some great pleasure.
                </p>

                <iframe
                  className="w-full h-[500px] border-none leading-[0] border-0 mt-6"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                ></iframe>
              </div>

              <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0 ">
                <div className={showModal ? "  top-20" : " sticky top-20"}>
                  <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-2xl font-medium dark:text-white">Price:</h5>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-medium dark:text-white">$ 5000</span>
                        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                          For Sale
                        </span>
                      </div>
                      <ul className="list-none mt-4">
                        <li className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm">
                            Days on Hously
                          </span>
                          <span className="font-medium text-sm dark:text-white">124 Days</span>
                        </li>
                        <li className="flex justify-between items-center mt-2">
                          <span className="text-slate-400 text-sm">
                            Price per sq ft
                          </span>
                          <span className="font-medium text-sm dark:text-white">$ 186</span>
                        </li>
                        <li className="flex justify-between items-center mt-2">
                          <span className="text-slate-400 text-sm">
                            Monthly Payment (estimate)
                          </span>
                          <span className="font-medium text-sm dark:text-white">
                            $ 1497/Monthly
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex">
                      <div className="p-1 w-1/2">
                        <button className="btn w-full px-7 py-2">
                          Book Now
                        </button>

                      </div>
                      <div className="p-1 w-1/2">
                        <button className="btn w-full px-7 py-2">
                          Offer Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                      Have Question ? Get in touch!
                    </h3>
                    <div className="mt-6">
                      <button className="btn-3 flex-center-center gap-2 px-7 py-2 mt-6 mx-auto">
                        <HiOutlinePhone className="xs:mb-[4px] md:mb-1 text-md sm:text-lg" />
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading details...</p>
      )}
    </section>
  );
};

export default Detail;

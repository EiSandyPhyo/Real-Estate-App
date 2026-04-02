import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineBehance } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Icon } from '@iconify/react';

const Footer = () => {
    const scrollYHandler=()=>{
      window.scroll(0,0);
    }
  
  // const socialIcons = [
  //   {
  //     id:1,
  //     icon: 'AiOutlineShoppingCart'
  //   },
  //   {
  //     id:2,
  //     icon: 'FiDribbble'
  //   },
  //   {
  //     id:3,
  //     icon: 'AiOutlineBehance'
  //   },
  //   {
  //     id:4,
  //     icon: 'FiLinkedin'
  //   },
  //   {
  //     id:5,
  //     icon: 'FiFacebook'
  //   },
  //   {
  //     id:6,
  //     icon: 'FiInstagram'
  //   },
  //   {
  //     id:7,
  //     icon: 'FiTwitter'
  //   },
  //   {
  //     id:8,
  //     icon: 'FiMail'
  //   }];
  //   console.log(socialIcons)

  return (
    <div className=" container-fluid bg-slate-900 dark:bg-slate-800 px-3 lg:px-[18rem] mt-24">
      <div className=" container mx-auto relative">
        {/* Subscribe Section Start*/}

        <div className="container mx-auto absolute top-[-120px] left-0 my-10 overflow-hidden bg-white dark:drop-shadow-[0_10px_10px_rgba(2555,255,255,0.25)] drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] rounded-xl dark:bg-slate-900 ">
          <div className="flex flex-col lg:flex-row gap-3 p-10 justify-between items-center relative z-30 shadow-lg ">
            <div>
              <h1 className="text-black text-center lg:text-left text-2xl md:text-3xl font-semibold mb-3 dark:text-white">
                Subscribe to Newsletter!
              </h1>
              <p className=" text-center lg:text-left text-slate-400 mb-3">
                Subscribe to get latest updates and information.
              </p>
            </div>
            <div className="flex gap-3 border-2 pl-3 border-slate-200 dark:border-slate-50 rounded-full lg:w-[500px] overflow-hidden">
              <input
                type="text"
                placeholder="Enter your email:"
                className="  px-3 py-2 w-full focus:border-none focus:outline-none text-black dark:bg-slate-900 dark:text-white"
              />
              <button className=" p-2 w-[150px] fs-[17px] leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-full">
                Subscribe
              </button>
            </div>
          </div>
          {/*for desktop view */}
          <div className=" hidden lg:inline-block  absolute left-[-20px] top-[-5px] w-full z-10">
            <div className=" flex justify-between items-center relative">
              <FiMail
                className=" rotate-[-45deg]  text-gray-100 dark:text-slate-700	"
                size={"9rem"}
              />
              <BsPencil
                className=" top-[-50px]  text-gray-100 dark:text-slate-700	"
                size={"9rem"}
              />
            </div>
          </div>

          {/*for mobile view*/}
          <div className=" lg:hidden absolute rotate-[25deg] md:rotate-[15deg] top-12 right-0 md:top-7 md:left-0 w-full -z-10">
            <div className=" flex justify-between items-center ">
              <FiMail
                className=" rotate-[-50deg] text-gray-100 dark:text-slate-700		"
                size={"9rem"}
              />
              <BsPencil
                size={"9rem"}
                className=" rotate-[-20deg] text-gray-100 dark:text-slate-700		"
              />
            </div>
          </div>
        </div>
        {/* Subscribe Section End*/}
        {/* Footer Section Start*/}
        <div className=" flex flex-col lg:flex-row justify-between pb-9 pt-52 px-3 lg:pt-36 mb-3 lg:px-2">
          <div className=" basis-4/12 mb-5">
            <div className=" mb-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAcCAYAAACajWq/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhCNUREM0NGRTE5NzExRUNCNUVGQUE0RDEwQ0JBRjc4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhCNUREM0QwRTE5NzExRUNCNUVGQUE0RDEwQ0JBRjc4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEI1REQzQ0RFMTk3MTFFQ0I1RUZBQTREMTBDQkFGNzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEI1REQzQ0VFMTk3MTFFQ0I1RUZBQTREMTBDQkFGNzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6wRp5pAAAGuElEQVR42uyaCWxUVRSG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"
                alt=""
              />
            </div>
            <p className=" text-gray-300">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>

          <div className=" basis-4/12 flex flex-col lg:flex-row justify-evenly items-start mb-3">
            <div className=" mb-5">
              <p className=" text-white mb-3 text-md font-semibold">Company</p>
              <ul className=" text-slate-400">
                <Link to={"/home"}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                    <IoIosArrowForward className="mr-3" />
                    Home
                  </li>
                </Link>
                <Link to={"/aboutus"}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                    <IoIosArrowForward className="mr-3" />
                    About us
                  </li>
                </Link>

                <Link to={"/pricing"}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                    <IoIosArrowForward className="mr-3" />
                    Pricing
                  </li>
                </Link>
                <Link to={'/faqs'}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                  <IoIosArrowForward className="mr-3" />
                  FAQs
                </li>
                </Link>
                
                <Link to={"/"}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                    <IoIosArrowForward className="mr-3" />
                    Login
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" mb-3">
              <p className=" text-white mb-3 text-md font-semibold">
                Useful Links
              </p>
              <ul className=" text-gray-300">
              <Link to={"/features"}>
                <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                  <IoIosArrowForward className="mr-3" />
                  Features
                </li>
                </Link>
                <Link to={"/list-sidebar"}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                    <IoIosArrowForward className="mr-3" />
                    Listing
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li onClick={scrollYHandler} className=" flex justify-start items-center mb-2 hover:text-[#16a34a]">
                    <IoIosArrowForward className="mr-3" />
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className=" basis-3/12 fs-[17px] mb-3">
            <p className=" text-white mb-3 text-md font-semibold">
              Contact Details
            </p>
            <div>
              <div className=" mb-3 flex justify-start item-start">
                <Icon icon="uil:map-marker" className="text-[#16a34a] text-2xl"/>
                <div className=" flex flex-col">
                  <p className="text-gray-300 mb-2 ml-3">
                    C/54 Northwest Freeway,
                    <br />
                    Suite 558,Houston,
                    <br />
                    USA 485
                  </p>
                  <span className=" cursor-pointer text-[#16a34a] mb-2 ml-3">
                    View on Google map
                  </span>
                </div>
              </div>
              <div className=" mb-3 flex justify-start item-center">
              <Icon icon="uil:phone" className="text-[#16a34a] text-2xl"/>
                <p className=" text-gray-300 mb-3 ml-5"> contact@gmail.com</p>
              </div>
              <div className=" mb-3 flex justify-start item-center">
              <Icon icon="uil:envelope" className="text-[#16a34a] text-2xl"/>
                <p className=" text-gray-300 mb-3 ml-5">+152-532-468-854</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700">
          <div className=" flex flex-col lg:flex-row justify-between items-center py-5 gap-3 ">
            <span className=" text-gray-300 flex justify-start items-start">
              <AiOutlineCopyright className=" lg:mr-2" />
              <span>2023 Hously. Design & Develop with</span>
              <AiTwotoneHeart className="lg:mx-2" color="red" />
              <span>by Team-F.</span>
            </span>
            <div className=" basis-4/12">
              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <AiOutlineShoppingCart size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiDribbble size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <AiOutlineBehance size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiLinkedin size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiFacebook size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiInstagram size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiTwitter size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiMail size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Section End*/}
      </div>
    </div>
  );
};

export default Footer;

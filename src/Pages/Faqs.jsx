import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import FaqComponent from "../Components/FaqComponent";
import { Link } from "react-router-dom";


const Faqs = () => {
  const [links,setLinks]=useState(
    [
      {
        id:1,
        linkName:"Buying Questions",
        goLink:"#buying-questions",
        isActive:false
      },
      {
        id:2,
        linkName:"General Questions",
        goLink:"#general-questions",
        isActive:false
      },
      {
        id:3,
        linkName:"Payments Questions",
        goLink:"#payment-questions",
        isActive:false
      },
      {
        id:4,
        linkName:"Support Questions",
        goLink:"#support-questions",
        isActive:false
      }
    ]
  )
 
  const activeLink = (id) => {
    setLinks(
      links.map((link) => {
        if (link.id === id) {
          link.isActive = !link.isActive;
        } else {
          link.isActive = false;
        }
        return link;
      })
    );
  };

  const scrollYHandler=()=>{
    window.scroll(0,0);
  }
    
  return (
    <div className=' dark:bg-slate-900 mt-[70px]'>
      <div className="relative bgTop table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover ">
        <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 text-center mt-10 ">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white z-50">
              Frequently Asked Questions
            </h3>
          </div>
        </div>
      </div>
      <div className="relative lg:py-24 pt-16 pb-32 lg:pb-44 dark:bg-slate-900 mt-10">
        <div className="container mx-auto px-2 lg:px-20">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-md shadow  p-6 sticky top-20  dark:text-white dark:shadow-gray-700">
                <ul
                  className="list-unstyled sidebar-nav mb-0 py-0"
                >
                  {links?.map((link)=>{
                    return(
                      <li key={link.id} className="navbar-item p-0 mt-3 hover:text-green-600">
                      <a
                     href={link.goLink}
                     onClick={()=>activeLink(link.id)}
                     className={link.isActive ? "text-base font-medium text-green-600":"text-base font-medium"}>
                      {link.linkName}
                    </a>
                      </li>
                    )
                  })}
                  {/* <li className="navbar-item p-0">
                    <a
                      href="#buying-questions"
                      onClick={()=>setIsActive(true)}
                      className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"} 
                    >
                      Buying Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                    href="#general-questions"
                    onClick={()=>setIsActive(true)}
                      className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"}
                    >
                      General Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                      href="#payment-questions"
                      onClick={()=>setIsActive(true)}
                      className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"}
                    >
                      Payments Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                     href="#support-questions"
                     onClick={()=>setIsActive(true)}
                     className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"}                    >
                      Support Questions
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-7">
              <div id="buying-questions " className=" ">
                <h5 className="text-2xl font-semibold dark:text-white dark:bg-slate-900">Buying Product</h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
              <div id="general-questions" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">General Questions</h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
              <div id="payment-questions" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">Payments Questions</h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
              <div id="support-questions" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">Support Questions</h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black ">
              Have Question ? Get in touch!
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <div className="mt-6">
              <button
                className="py-3 px-5 bg-green-600 hover:bg-green-700 border border-green-600 text-white rounded-md"
                href="/contact"
              >
                <span className="flex gap-2">
                  <i>
                    <BsTelephone className=" font-semibold align-middle mt-[2px] " />
                  </i>
                  <Link to={"/contact"} onClick={scrollYHandler}>
                  <span className="font-semibold">Contact us</span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

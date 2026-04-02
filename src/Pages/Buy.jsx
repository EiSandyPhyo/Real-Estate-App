import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import FeatureProperties from "../Components/FeatureProperties";
import HowItWorks from "../Components/HowItWorks";
import GetInTouch from "../Components/GetInTouch";

const Buy = ({ properties }) => {

  const [toggle, setToggle] = useState(1);
  const toggleHandler = (id) => {
    setToggle(id);
  };

  return (
    <div>
      <div className="mt-[70px] dark:bg-slate-900">
        {/*  hero section */}
        <div className="hero-img">
          <div className="bg-dark-opacity"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">find your dream home</h2>
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

      <section className=" pb-16 md:pb-24 dark:bg-slate-900">
        {/* search box section */}
        <div className="flex-center-center -mt-[43px] px-3">
          <div className=" md:w-[672px] shadow-lg rounded-md z-10 bg-white dark:bg-slate-900 dark:shadow-gray-800">
            <form action="" className="flex-between-center gap-2 pl-4 pr-1">
              <div className="flex-center-center gap-1 dark:text-white">
                <BiSearchAlt className="text-xl sm:text-2xl" />
                <input
                  type="text"
                  className="border border-none focus:outline-none w-48 xs:w-[250px] sm:w-96 md:w-[400px] text-sm md:text-lg p-2 dark:bg-slate-900"
                  placeholder="City, Address, Zip :"
                />
              </div>
              <button className="btn px-5 py-2 sm:px-7 sm:py-[12px] md:px-6 md:py-2 my-1">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* feature properties section */}
        <FeatureProperties properties={properties}/>

        {/* How It Works */}
        <HowItWorks/>

         {/* 6 Tabs */}
         <div className="container-2xl mt-16 lg:mt-24">
          <div className="grid-layout-2 mt-8">
            <div className="md:col-span-5 lg:col-span-4 dark:bg-slate-900 ">
              <ul className="p-6 shadow rounded-md overflow-hidden dark:shadow-gray-700">
                <li onClick={() => toggleHandler(1)}>
                  <button
                    className={`${
                      toggle === 1
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"}`
                    }
                  >
                    {/* hover:bg-gray-50 text-green-600 */}
                    Pre Approval Letter
                  </button>
                </li>
                <li onClick={() => toggleHandler(2)}>
                  <button
                    className={`${
                      toggle === 2
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"} `
                    }
                  >
                    Schedule a Showing
                  </button>
                </li>
                <li onClick={() => toggleHandler(3)}>
                <button
                    className={`${
                      toggle === 3
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"} `
                    }
                  >
                    Submit an Offer
                  </button>
                </li>
                <li onClick={() => toggleHandler(4)}>
                <button
                    className={`${
                      toggle === 4
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"} `
                    }
                  >
                    Property inspection
                  </button>
                </li>
                <li onClick={() => toggleHandler(5)}>
                <button
                    className={`${
                      toggle === 5
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"} `
                    }
                  >
                    Appraisal
                  </button>
                </li>
                <li onClick={() => toggleHandler(6)}>
                <button
                    className={`${
                      toggle === 6
                        ? "btn-2 mt-3 active"
                        : "btn-2 mt-3 hover:bg-gray-50 hover:text-green-600 dark:text-white dark:hover:bg-slate-700 hover:rounded"} `
                    }
                  >
                    Closing Deal
                  </button>
                </li>
              </ul>
            </div>
            <div className="md:col-span-7 lg:col-span-8">

              {/* single tab */}
              <div className={toggle === 1 ? "block" : "hidden"}>
                <img
                  src="https://hously-landing.vercel.app/static/media/Agent_Monochromatic.9caa4de69758b93b9bcd106143effd9b.svg"
                  alt="Pre Approval Letter"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2 dark:text-white">Pre Approval Letter</h2>
                  <p className="paragraph-2 mt-3">
                    Most buyers think the first step is finding their dream
                    house, but the truth is finding the funding is the first
                    step. Hously streamlines the Loan Pre-Approval process with
                    our ecosystem of Premier Partners or simply upload your own
                    Pre-Approval letter.
                  </p>
                </div>
              </div>

              <div className={toggle === 2 ? "block" : "hidden"}>
                <img
                  src="https://hously-landing.vercel.app/static/media/presentation_Flatline.2c6c401c6e6cd7dd0d2e75d71fbc266b.svg"
                  alt="Schedule a Showing"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2  dark:text-white">Schedule a Showing</h2>
                  <p className="paragraph-2 mt-3">
                    Hously allows a buyer to schedule an instant showing and
                    gain a private viewing without the need for multiple parties
                    to be involved. You pick the time that works for you!
                  </p>
                </div>
              </div>

              <div className={toggle === 3 ? "block" : "hidden"}>
                <img
                  src="https://hously-landing.vercel.app/static/media/session_Flatline.24c0e9d372d3b457165d68fa71f47756.svg"
                  alt="Submit an Offer"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2  dark:text-white">Submit an Offer</h2>
                  <p className="paragraph-2 mt-3">
                  Hously walks a buyer through the purchase agreement process making the paperwork appear effortless. With our custom workflows and progress analytics, you will always know where your purchase stands. No more phone tag and unreturned emails!
                  </p>
                </div>
              </div>

              <div className={toggle === 4 ? "block" : "hidden"}>
                <img
                  src="https://hously-landing.vercel.app/static/media/Startup_Flatline.ce512f774b033a648c07e5886a206645.svg"
                  alt="Property Inspection"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2  dark:text-white">Property Inspection</h2>
                  <p className="paragraph-2 mt-3">
                  No one wants to buy a lemon. Book an inspection with a licensed inspector, then submit the repair requests all via the Hously platform.
                  </p>
                </div>
              </div>

              <div className={toggle === 5 ? "block" : "hidden"}>
                <img
                  src="https://hously-landing.vercel.app/static/media/team_Flatline.c0956c9748f22a80354be0e13461c58e.svg"
                  alt="Appraisal"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2  dark:text-white">Appraisal</h2>
                  <p className="paragraph-2 mt-3">
                  Hously monitors the appraisal process ensuring the home you are purchasing meets or exceeds the price you are paying.
                  </p>
                </div>
              </div>

              <div className={toggle === 6 ? "block" : "hidden"}>
                <img
                  src="https://hously-landing.vercel.app/static/media/Team_meeting_Two.91eb9525d3698eab69f682f4a27a6921.svg"
                  alt="Closing Deal"
                />
                <div className="mt-6">
                  <h2 className="sub-header-2  dark:text-white">Closing Deal</h2>
                  <p className="paragraph-2 mt-3">
                  Finally the closing packet is sent to the Title office, and the day has come… You have Hously the home of your dreams!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* get in touch section */}
        <GetInTouch/>
      </section>

    </div>
  );
};

export default Buy;

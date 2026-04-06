import React, { useState, useRef } from "react";
import FaqComponent from "../Components/FaqComponent";
import GetInTouch from "../Components/GetInTouch";

const Faqs = () => {
  const buyingRef = useRef(null);
  const generalRef = useRef(null);
  const paymentRef = useRef(null);
  const supportRef = useRef(null);

  const [links, setLinks] = useState([
    {
      id: 1,
      linkName: "Buying Questions",
      isActive: false,
    },
    {
      id: 2,
      linkName: "General Questions",
      isActive: false,
    },
    {
      id: 3,
      linkName: "Payments Questions",
      isActive: false,
    },
    {
      id: 4,
      linkName: "Support Questions",
      isActive: false,
    },
  ]);

  const activeLink = (id) => {
    setLinks(
      links.map((link) => {
        if (link.id === id) {
          link.isActive = !link.isActive;
        } else {
          link.isActive = false;
        }
        return link;
      }),
    );
  };

  const scrollToSection = (id) => {
    activeLink(id);

    let targetRef = null;

    if (id === 1) targetRef = buyingRef;
    if (id === 2) targetRef = generalRef;
    if (id === 3) targetRef = paymentRef;
    if (id === 4) targetRef = supportRef;

    if (targetRef?.current) {
      const navbarOffset = 100;

      const y =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="">
        <div
          className="relative w-full h-[378px] bg-no-repeat bg-[position:50%_20%] bg-cover"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455")`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">Frequently Asked Questions</h2>
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

      <div className="container-2xl relative pt-8 md:pt-20 xl:pt-28 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-2 lg:px-0">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-md shadow  p-6 sticky top-20  dark:text-white dark:shadow-gray-700">
                <ul className="list-unstyled sidebar-nav mb-0 py-0">
                  {links?.map((link) => {
                    return (
                      <li
                        key={link.id}
                        className="navbar-item p-0 mt-3 hover:text-green-600"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.id)}
                          className={
                            link.isActive
                              ? "text-base font-medium text-green-600"
                              : "text-base font-medium"
                          }
                        >
                          {link.linkName}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-7">
              <div ref={buyingRef} className=" ">
                <h5 className="text-2xl font-semibold dark:text-white dark:bg-slate-900">
                  Buying Product
                </h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
              <div ref={generalRef} className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  General Questions
                </h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
              <div ref={paymentRef} className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  Payments Questions
                </h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
              <div ref={supportRef} className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  Support Questions
                </h5>
                <div className="mt-6">
                  <FaqComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        <GetInTouch />
      </div>
    </section>
  );
};

export default Faqs;

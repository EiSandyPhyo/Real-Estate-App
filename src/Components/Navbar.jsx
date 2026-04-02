import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {BiUpArrowAlt} from "react-icons/bi"

import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addTheme } from "../services/themeSlice";

const Navbar = () => {
  const [showDeskMenu, setShowDeskMenu] = useState(false);
  const [showAni, setShowAni] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [uparrow,setUparrow]=useState();

  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    dispatch(addTheme({ theme: theme }));
    console.log("dispatch", theme);
    const Theme = JSON.parse(Cookies.get("theme"));
    console.log(" After Theme", Theme.theme);

    console.log("Show ani", showAni);
  }, [theme]);

  const changeAni = () => {
    const Theme = JSON.parse(Cookies.get("theme"));
    if (Theme.theme == "light") {
      setShowAni(true);
    } else if (Theme.theme == "dark") {
      setShowAni(false);
    }
  };

  const changeMood = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    const Theme = JSON.parse(Cookies.get("theme"));
    changeAni();
  };

  const changeDark = () => {
    setTheme( "dark");
    const Theme = JSON.parse(Cookies.get("theme"));
    console.log('changedark',Theme);
    changeAni();

  };

  const changeLight = () => {
    setTheme("light" );
    const Theme = JSON.parse(Cookies.get("theme"));
    console.log('changelight',Theme)
    changeAni();

  };

  /*** 90Yoffset -> change bg color ***/
  const [color, setColor] = useState(false);
  const colorHandler = () => {
    if (window.pageYOffset >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
    if(window.scrollY>1020){
      setUparrow(true);
    }else{
      setUparrow(false);
    }
  };
  window.addEventListener("scroll", colorHandler);

  const navActive = 'text-green-600 font-bold dark:text-green-600'
  const navNormal = 'text-black font-medium dark:text-white'


/**
 * Scrolls the window to the top of the page.
 */

  const scrollYHandler=()=>{
    window.scroll(0,0);
  }

  return (
    <div>
      <div className="container-fluid h-fit" id="mystart">
        <div
          className={` ${
            color
              ? "container-fluid w-full myGlassBg dark:bg-slate-900 fixed top-0  h-[70px] z-50 nav_color"
              : "container-fluid w-full myGlassBg dark:bg-[#0F262E] fixed top-0  h-[70px] z-50"
          }`}
        >
          <div className={`container-2xl lg:mx-auto lg:px-48  py-4 flex justify-between items-center `}>
            <div className=" ml-4">
              <Link to={"/home"}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAcCAYAAACajWq/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwRTVBMUY3RTE5NzExRUM5MzUxODgzMzNFRjczNTgxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkwRTVBMUY4RTE5NzExRUM5MzUxODgzMzNFRjczNTgxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTBFNUExRjVFMTk3MTFFQzkzNTE4ODMzM0VGNzM1ODEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTBFNUExRjZFMTk3MTFFQzkzNTE4ODMzM0VGNzM1ODEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sm4++AAAGm0lEQVR42uyaCWxUVRSG77TTMqUCTcEirQYQkbBEjCBggAISjLFiTY2K4hYialQ0Ro0biBUBd5GgFRSDaEHciOAKCgIaUEQUFFERqVgFguzWlsKM55bv4uXy5s1rKZHYOcmf9+at9531P6cNxWIxlZT/XsJmJ6c4P8j1uYLLBHmCzwVvCar9bghFwqpiQZnaM299UtseYgIhXIt7cgR3C4YIsgTnCLIFJUl1HrmkBLyut2CxYITgeEGaoLPgWcFrghZJVR59Q9womC/oINgneERwuWAu5y8WLBT0SKrz6BjiOMFzgmcEGYJfBQWkp5mCQsFIQVTQRfCRYJjnk/b/bwlBGjVzuKD70TCE9v55guv5rZWcz7GDdUYwFoP8IWgimCqYiOEwQlSF2zaTqh1y3zFZ8KngpjhrkJvUbK45/xg1RARHnULtrFdDFFIPzuL3k0RCWZxnvCPoyz2KOvK+oHWNtaqjKr1dlmrU6bAy0ova08HH2/pzTd6xSnoEu9ivrC9DaAZ1nuANGJJ+wRWC2wV7EzznZ8G5eIeWfoJ3KeyaxKpI1xw3Kv5mu9fnIyvY39eQakQhqUYb5Ae8sbQWz9KKvVlwnaAKVjWiRqP79qtwbhMVCoeSVTmAIQZSdBVRsJL97ADsKoMaoeV5wQzLuBE6l6S2g3TWIo2t3xvZ6tz/qmAdxfUzwVbSSYROWxvwBn7r9LQemIIbSZA/46Wm3aQnP+lEDWkq2CL4xFr7weYeB8vkXHnAc1pORgc6Vf8lWC5YneB7UgVnsF3PutzadzrbMvPOsJOTXQOdgLJzYU17YEiV0Ft9vJHDdMxiFNQ2kTL1c+/yWEumFWVebOVRaGPEOr6d9PqEE/UzSZXFggcCntNZ4X6MbMsowUMJCvh4HLSUOmvLBdThnYJBXobwEn3DJVDMXii/vXPNLhq6CVY6q430BrWRiRjBsLZf8DLtvY9T5Escz487DvM41pnnKJQ+B6co4n1+EoXODoR2t8J5jZiWYAYRFmjWpK37OmjPAk8irHRUbBB8S7NXV9GhvsypQzE8vYiUaUsPywi3YhQjJaTJYkYvf1rKUXGi0+tcM+vYXEthCwJ+01yYZDvBhZZTnCYYQDqeFK9GJJKfgEk9++upTmkPu9fjeCMW7RpiENvvHSNoGScYCm3Wne6HHo4VRFai9LMFS9SBKfMH9EdbAjLI6TjEUMsQw9D5m4I1dRn6GWlP3ttI6DavB0Ok+4xYvNIGvUlNNLqy1YqCFpbyY5Zx3WiIeehCK/IiwYOCH+mapwlWWI6QSKaTIntBKjIYhygPBwpsiAgzpmUM/FpRzL4QXJ0gB9e3/M62o4cRW0MwlMWAtLK3WaMb19gtnQbTyA7BaEFXWJCOkBOphekB1rmBaE8lPRXAvpaAQIawQ7iAec94eorNFPFK6N00UkD3OqSAuqYy/ceoNoKHrdTVEiYVIT9/ad2z2Epr/awifRvKUY5ywnixMaROVYusiEwPuNYpVkoayf7TXvpJicMeqqBtr/Dh3Tj+suBMdWD03ZthoPlA/SGPOc9K8TFK2KG6ftfY69S5dQz7WpHf4K1fCwZTu+6AatsDxt/4pvkYZgU5XMsswVKHYq6GLWkFvii4h3ML6Sn81mhkEetqR2StZfTj29CtIxyzCEmtwEs595XgPgpWcxb6Hga4klzaBgXo+/tw3ypHIcrh/Nt9zsfI92keaWMMRfNOwSnAvG8UCrSlnMh+itFNX4t6l/KcqHV9NWOewcCkLm2wWyznMmts7BhHWTOyyVaxnhSvGQyZv5nmFOfnQQtHO9csV//+0Wc4TY7Old/BduZgnFU0eHZUDajxtNSQiu6oUtsmLq+ZxiJNcIRKD0WbqGqKp1XwPK+C3oWUuYk1JBoQdqKWVKHscp/pb0cmv1WkuzKfNcb7jhEU5028e/sh3ubxN+tyQlV76DWEUwTP6063mu80PW8zAhnDC3LpGFfSCC31UcjuAD3MzgTX7IFA1EbWuNQxjlRj2FVHsMYMBqFaprpG8CvWMWhpN2tw14f8b4wwGxpmlDwEZbTl91gi4eNDnyyPjja4wZ9mS6eStl4IOn1VTlqpdAZ3a1F6EVHQn2K5mTRj2EvF4b1rTIUy01RKdqQhGSFCXVVMJjbUxRCmkBnFjqMxmeVMTTWn7knYxeKmHDmTkpmuGvfMa0iGaAnJeQlaHXgM7koJyl7IeDme6AJ2Le2/qRue2TSUkdaQDKH1clXQi0PJf7k8NuQfAQYACh2z7zlDdS4AAAAASUVORK5CYII="
                  className={`inline-block dark:hidden`}
                  alt=""
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAcCAYAAACajWq/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhCNUREM0NGRTE5NzExRUNCNUVGQUE0RDEwQ0JBRjc4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhCNUREM0QwRTE5NzExRUNCNUVGQUE0RDEwQ0JBRjc4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEI1REQzQ0RFMTk3MTFFQ0I1RUZBQTREMTBDQkFGNzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEI1REQzQ0VFMTk3MTFFQ0I1RUZBQTREMTBDQkFGNzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6wRp5pAAAGuElEQVR42uyaCWxUVRSG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"
                  height="24"
                  className="hidden dark:inline-block"
                  alt=""
                ></img>
              </Link>
            </div>
              <ul className="hidden md:flex justify-end items-center mr-5 ">
                <NavLink to={"/home"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                  <li onClick={scrollYHandler} className=" w-[60px] h-[40px] flex justify-center items-center cursor-pointer">
                    <span className="fs-[17px] hover:text-[#16a34a]   dark:hover:text-[#16a34a]">
                      Home
                    </span>
                  </li>
                </NavLink>
                <NavLink to={"/buy"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                  <li onClick={scrollYHandler} className=" w-[60px] h-[40px] flex justify-center items-center cursor-pointer">
                    <span className="fs-[17px] hover:text-[#16a34a] dark:hover:text-[#16a34a]">
                    Buy
                    </span>
                  </li>
                </NavLink>
                <NavLink to={"/sell"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                  <li onClick={scrollYHandler} className=" w-[60px] h-[40px] flex justify-center items-center cursor-pointer">
                    <span className="fs-[17px] hover:text-[#16a34a] dark:hover:text-[#16a34a]">
                    Sell
                    </span>
                  </li>
                </NavLink>
                {/* <Link to={"/buy"}>
                  <li onClick={scrollYHandler} className=" w-[60px] h-[40px] flex justify-center items-center mx-3 cursor-pointer">
                    <span className=" fs-[17px] font-medium dark:text-white dark:hover:text-[#16a34a]  hover:text-[#16a34a]">
                    Buy
                    </span>
                  </li>
                </Link> */}
                {/* <Link to={"/sell"}>
                  <li onClick={scrollYHandler} className=" w-[60px] h-[40px] flex justify-center items-center mx-3 cursor-pointer">
                    <span className=" fs-[17px] font-medium text-black  dark:text-white dark:hover:text-[#16a34a]  hover:text-[#16a34a]">
                      Sell
                    </span>
                  </li>
                </Link> */}
                <li
                  onClick={() => setShowDeskMenu(!showDeskMenu)}
                  className=" w-fit h-[40px] flex justify-center items-center mx-3 cursor-pointer relative myliForDropDown"
                >
                  <span className=" fs-[17px] font-medium text-black dark:text-white dark:hover:text-[#16a34a] hover:text-[#16a34a]">
                    Pages
                  </span>
                  <BsChevronDown
                    className=" ml-2 font-extrabold text-black dark:text-white  dark:hover:text-[#16a34a] hover:text-[#16a34a]"
                    size={"0.8rem"}
                  />
                  <div
                    className={` ${
                      showDeskMenu ? "" : "hidden"
                    }  bg-white w-[150px] absolute top-[38px] left-0 shadow-lg p-5 rounded-md dark:bg-[#0F172A] z-50`}
                  >
                    <ul>
                      
                      <NavLink to={"/list-sidebar"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                        <li onClick={scrollYHandler} className="fs-[17px]  dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                        List Side bar
                        </li>
                      </NavLink>
                      <NavLink to={"/features"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                        <li onClick={scrollYHandler} className="fs-[17px]  dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                        Features
                        </li>
                      </NavLink>
                      <NavLink to={"/pricing"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                        <li onClick={scrollYHandler} className="fs-[17px]  dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                        Pricing
                        </li>
                      </NavLink>
                      <NavLink to={"/faqs"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                        <li onClick={scrollYHandler} className="fs-[17px] dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                        FAQs
                        </li>
                      </NavLink>
                      {/* <Link to={"/list-sidebar"}>
                        <li onClick={scrollYHandler} className="fs-[17px] font-medium text-black dark:text-white dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                          List Side bar
                        </li>
                      </Link> */}
                      {/* <Link to={"/features"}>
                        <li onClick={scrollYHandler} className="fs-[17px] font-medium text-black dark:text-white dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                          Features
                        </li>
                      </Link> */}
                      {/* <Link to={"/pricing"}>
                        <li onClick={scrollYHandler} className="fs-[17px] font-medium text-black dark:text-white dark:hover:text-[#16a34a] hover:text-[#16a34a] mb-2">
                          Pricing
                        </li>
                      </Link> */}
                      {/* <Link to={"/faqs"}>
                        <li onClick={scrollYHandler} className="fs-[17px] font-medium text-black dark:text-white dark:hover:text-[#16a34a] hover:text-[#16a34a]">
                          FAQs
                        </li>
                      </Link> */}
                    </ul>
                  </div>
                </li>
                <NavLink to={"/aboutus"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                <li onClick={scrollYHandler} className=" w-fit h-[40px] flex justify-center items-center mx-3 cursor-pointer relative myliForDropDown">
                  <span className=" fs-[17px] dark:hover:text-[#16a34a] hover:text-[#16a34a]">
                    About us
                  </span>
                </li>
              </NavLink>
              <NavLink to={"/contact"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                <li onClick={scrollYHandler} className=" w-[60px] h-[40px] flex justify-center items-center mx-3 cursor-pointer">
                  <span className=" fs-[17px] dark:hover:text-[#16a34a] hover:text-[#16a34a]">
                    Contact
                  </span>
                </li>
              </NavLink>
              </ul>
            {/* Login Icon Section Start*/}

            <div className=" flex justify-end items-start">
              <Link to={"/"}>
                <button className=" w-10 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full ">
                  <BiUser size={"1.5rem"} />
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="hidden lg:inline-block w-24 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full mx-1">
                  Sign up
                </button>
              </Link>

              <div className=" block md:hidden  myliForDropDown">
                <button
                  onClick={() => setCloseMenu(!closeMenu)}
                  className="w-10 h-30 p-2 leading-[24px] border-0 text-black mx-1 "
                >
                  {closeMenu ? (
                    <AiOutlineClose
                      size={"1rem"}
                      className="text-black dark:text-white"
                    />
                  ) : (
                    <FiMenu
                      size={"1rem"}
                      className="text-black dark:text-white"
                    />
                  )}
                </button>
                <div
                  className={` ${
                    closeMenu ? "block" : "hidden"
                  } bg-white absolute top-[68px] right-0 p-5  rounded-md w-[80%] shadow-xl dark:bg-[#0F172A] `}
                >
                  <ul>
                  <NavLink to={"/home"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                      <li onClick={scrollYHandler} className="fs-[17px] hover:text-[#16a34a] mb-2">
                        Home
                      </li>
                    </NavLink>
                    <NavLink to={"/buy"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                      <li onClick={scrollYHandler} className="fs-[17px] hover:text-[#16a34a] mb-2">
                        Buy
                      </li>
                    </NavLink>
                    <NavLink to={"/sell"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                      <li onClick={scrollYHandler} className="fs-[17px] hover:text-[#16a34a] mb-2">
                        Sell
                      </li>
                    </NavLink>
                    <NavLink to={"/aboutus"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                      <li onClick={scrollYHandler} className="fs-[17px] hover:text-[#16a34a] mb-2">
                        About us
                      </li>
                    </NavLink>
                    <div className=" ">
                      <li className="flex justify-between items-center fs-[17px] font-medium hover:text-[#16a34a] mb-2 text-black dark:text-white">
                        Pages
                        {showMenu ? (
                          <BsChevronUp
                            onClick={() => setShowMenu(false)}
                            className="text-black dark:text-white font-medium"
                            size={"1rem"}
                          />
                        ) : (
                          <BsChevronDown
                            onClick={() => setShowMenu(true)}
                            className="text-black dark:text-white font-medium"
                            size={"1rem"}
                          />
                        )}
                      </li>
                      <ul
                        className={`${
                          showMenu ? "block" : "hidden"
                        } bg-white dark:bg-slate-900`}
                      >
                        <NavLink to={"/list-sidebar"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                          <li onClick={scrollYHandler} className="ml-5 fs-[17px] hover:text-[#16a34a] mb-2">
                            Listing
                          </li>
                        </NavLink>
                        <NavLink to={"/features"} className={({ isActive })=> (isActive? navActive: navNormal)}>
                          <li onClick={scrollYHandler} className=" ml-5 fs-[17px] hover:text-[#16a34a] mb-2">
                            Features
                          </li>
                        </NavLink>
                        <NavLink to={"/pricing" } className={({ isActive })=> (isActive? navActive: navNormal)}>
                          <li onClick={scrollYHandler} className=" ml-5 fs-[17px] hover:text-[#16a34a] mb-2">
                            Pricing
                          </li>
                        </NavLink>
                        <NavLink to={"/faqs" } className={({ isActive })=> (isActive? navActive: navNormal)}>
                          <li onClick={scrollYHandler} className=" ml-5 fs-[17px] hover:text-[#16a34a] mb-2">
                            FAQs
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                    <NavLink to={"/contact" } className={({ isActive })=> (isActive? navActive: navNormal)}>
                      <li onClick={scrollYHandler} className="fs-[17px] hover:text-[#16a34a]">
                        Contact
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
            {/* Login Icon Section End*/}
          </div>
        </div>

        {/* dark mode Section Start*/}
        <div className=" w-14 h-8 overflow-hidden fixed top-[40%] left-0 z-50  flex flex-col justify-center items-center bg-slate-900 dark:bg-white rounded-2xl rotate-90">
          <div className="w-14 h-7 flex justify-center items-center	relative">
          <button
              onClick={changeMood}
              className={` ${
                showAni == true ? "myDarkBtnMoveUp" : "myDarkBtnMoveDown"
              } absolute top-0 left-0 w-7 h-7 rounded-full z-50 dark:bg-slate-900 bg-white `}
            ></button>
            
            <p onClick={changeDark} className="w-7 h-7 p-1 border-0 text-yellow-500 ">
              <BsMoon size={"1.3rem"} />
            </p>
            <p onClick={changeLight} className=" w-7 h-7 p-1 border-0 text-yellow-500">
              <BsFillSunFill size={"1.3rem"} />
            </p>
            
            
                      </div>

        </div>
        {/* dark mode Section End*/}

        {/* Up-arrow Section Start*/}

        <div className={`${uparrow? "block": "hidden"}`}>
          <a href="#mystart" className="duration-[1500ms]	">
            <button className=" fixed right-3 bottom-[5%] w-10 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full z-50">
              <BiUpArrowAlt size={"1.5rem"} />
            </button>
          </a>
        </div>
        {/* Up-arrow Section End*/}
      </div>
    </div>
  );
};

export default Navbar;
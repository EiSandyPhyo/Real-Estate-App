import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import ListSidebar from "./Pages/ListSidebar";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPW from "./Pages/ForgetPW";
import Pricing from "./Pages/Pricing";
import Features from "./Pages/Features";
import Faqs from "./Pages/Faqs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Sell from "./Pages/Sell";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { getListings } from "./services/api";
import "./index.css";

const Buy = lazy(() => import("./Pages/Buy"));

const App = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListings();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" container-fluid dark:bg-slate-900">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/*  <Route path={"/"} element={<Login />} />
      <Route path={"/forgetPW"} element={<ForgetPW />} />
      <Route path={"/signup"} element={<Signup />} /> */}

          <Route
            path={"/home"}
            element={
              <>
                <Navbar pageType={"home"} />
                <Home properties={properties} />
                <Footer />
              </>
            }
          />

          <Route
            path="/pricing"
            element={
              <>
                <Navbar />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Navbar />
                <Features />
                <Footer />
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
                <Navbar />
                <Faqs />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path={"/buy"}
            element={
              <>
                <Navbar pageType={"buy"} />
                <Buy properties={properties} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/sell"}
            element={
              <>
                <Navbar pageType={"sell"}/>
                <Sell properties={properties} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/list-sidebar"}
            element={
              <>
                <Navbar />
                <ListSidebar properties={properties} />
                <Footer />
              </>
            }
          />

          <Route
            path={"/detail/:id"}
            element={
              <>
                <Navbar />
                <Detail properties={properties} />
                <Footer />
              </>
            }
          />

          {/* <Route path={'/*'} element={<><Error/></>}/> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

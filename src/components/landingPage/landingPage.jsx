import { motion } from "framer-motion";
import React from "react";
import logo from "../../assets/images/Hero Images.png";
import Footer from "../Views/Footer";
import Header from "../Views/Header";
import AltWaveExplore from "./Explore";
import Why from "./Whyaltwave";
import { NavLink, useLocation } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="flex flex-col md:mt-11  mt-8 md:ml-24 mr-4 ml-4  md:mr-24 justify-between md:flex-row sm:flex-col ">
          <div className=" px-8 md:my-0 md:py-22 md:flex-1 sm:w-full md:h-full sm:items-center">
            
            <h1 className="md:block hidden leading-13  mt-36 font-normal text-6xl  text-customBlack my-8 font-millik">
              Empowering Dreams, Bridging <br />
              <span className="text-red-500">Borders.</span>
            </h1>
            <h2 className="block md:hidden  leading-44 font-normal text-34    text-customBlack  my-4 font-millik">
              Empowering  <br /> Dreams, Bridging
              <span className="text-red-500">  <br /> Borders.</span>
            </h2>
            <div>
              <p className="md:leading-8  leading-6 font-Modarat md:text-xl text-lg ">
                Your Passport to Global Education! Fulfill your dreams
                effortlessly as we streamline the process for you. Focus on your
                aspirations – we'll handle the rest!
              </p>
            </div>
            <div className="flex space-x-4 md:my-12 my-8 ml-0">
              <NavLink to="/signup" className="bg-customButton border rounded-md text-white py-3 px-6 hover:bg-blue-900">
                {" "}
                Get started
              </NavLink>
              <button className="border-customButton border text-blue-900 rounded-md px-6 py-3 ">
                <NavLink to="/enroll">Enroll your institution</NavLink>
                
              </button>
            </div>
          </div>
          <div className="absolute inset-10  ml-96 mr-96 mt-20 bg-customBackgroundImage  bg-left"></div>
          <div className="md:my-0 my-8 mx-6  flex-1 md:mb-0 mb-6 sm:w-full ">
  
  <img src={logo} className="w-full  h-auto relative z-10" alt="Logo" />
</div>

        </div>

        <Why />
        <AltWaveExplore />
        <Footer />
      </motion.div>
    </>
  );
}

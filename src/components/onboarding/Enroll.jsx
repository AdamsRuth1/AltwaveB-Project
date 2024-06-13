
import Footer from "../views/footer";
import Header from "../views/header";
import { motion } from "framer-motion";
import ReactFlagsSelect from "react-flags-select";

import React, { useState, useEffect } from "react";

export default function Enroll() {
  const [selected, setSelected] = useState("");

 

  
  return (
    <>
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
           <Header />
          <div className="flex md:mt-16">
<div className="flex-1  ml-24 "> <h1 className="md:text-6xl text-customBlack md:mb-6 font-millik font-normal"> Enroll your institution</h1>
<p>With Tuition, no matter your location in the world, your students can easily pay their education fees without hassle <br/> <br/>
Please complete the form to connect with a member of our team.
</p>
</div>
<div className="flex-1 mr-80  ml-20 mb-36">
<div className="mb-6 ml-28 ">
          <input
            className=" border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 border-opacity-30 "
            id="schoolName"
            type="text"
            placeholder="School name"
          />
        </div>
        <div className="mb-6">
        <ReactFlagsSelect 
    selected={selected}
    searchable
    onSelect={(code) => setSelected(code)} className="ml-24 text-gray-700 w-96 " 
  />
        </div>
        <input className="p-5 border border-gray-700 border-opacity-30 rounded  w-96 ml-28 h-48 "  placeholder="Address"/>
        <input
            className=" border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 ml-28 mt-6 border-opacity-30 "
            id="schoolName"
            type="text"
            placeholder="School name"
          />
          <div className="relative inline-block">
  <select
    className="border ml-28 rounded w-96 py-2 px-3 text-gray-700 border-gray-700 mt-6 border-opacity-30 appearance-none"
    id="paymentType"
  >
    <option value="">Type of payment</option>
    <option value="school1">School 1</option>
    <option value="school2">School 2</option>
    <option value="school3">School 3</option>
    {/* Add more options as needed */}
  </select>
  <div className="absolute inset-y-20 insert-x-10 right-0 flex items-center px-2 pointer-events-none">
    <svg
      className="h-6 w-6 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
  <button className="border w-96 p-6   mt-8 ml-28 rounded-lg bg-customBlack text-white font-Modarat">
Send Message
  </button>
</div>

       
</div>
          </div>
        </motion.div>
      
      <Footer />
    </>
  );
}

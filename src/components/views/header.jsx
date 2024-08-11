import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Vector (1).png";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  console.log(isOpen);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <nav className="bg-white-400 py-2 font-Modarat">
          <div className="flex items-center justify-between md:ml-24 mr-100 ml-100  md:mr-24  py-2 ">
            <div className="flex">
              <img src={logo} alt="Tuition Logo" className=" mx-4" />
            </div>

            <div className="md:hidden border border-black-500 px-2 py-1 rounded ">
              <button className="text-black border-black" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-black hover:bg-white hover:text-customButton hover:border-customButton px-4 py-2 border-b border-transparent transition-all duration-300 relative inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-black hover:bg-white hover:text-customButton hover:border-customButton px-4 py-2 border-b border-transparent transition-all duration-300 relative inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black hover:bg-white hover:text-customButton hover:border-customButton px-4 py-2 border-b border-transparent transition-all duration-300 relative inline-block"
                >
                  Testimonial
                </Link>
              </li>
              {/* <li>
                <div className="relative">
                  <a
                    onClick={toggleDropdown}
                    href="#"
                    className="flex items-center text-black hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:rounded-full px-4 border-2 border-transparent transition-all duration-300"
                  >
                    Developer
                    <svg
                      className="h-6 w-6 mr-2 ml-2 text-gray-700"
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
                  </a>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md mt-1 shadow-md">
                     
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Item 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Item 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Item 3
                      </a>
                    </div>
                  )}
                </div>
              </li> */}
              <li>
                <NavLink
                  to="/contactUs"
                  className="text-black hover:bg-white hover:text-customButton hover:border-customButton px-4 py-2 border-b border-transparent transition-all duration-300 relative inline-block"
                >
                  Support
                </NavLink>
              </li>
            </ul>
            <div className="md:flex justify-between space-x-4 mx-3 hidden">
              <Link className="border border-customButton rounded-md text-customButton py-3 text-center px-6">
                Download App
              </Link>
              <Link
                to="/signin"
                className="bg-customButton border rounded-md text-white text-center py-3 px-6 hover:bg-blue-900"
              >
                Sign in
              </Link>
            </div>
          </div>
          {/* mobile display */}
          {isOpen ? (
            <ul className="flex-col md:hidden md:mr-0 md:ml-0 mr-6 ml-6  py-4 ">
              <li className=" text-black hover:text-blue-900 hover:border-blue-900  hover:rounded-full  px-4 py-4 border border-transparent transition-all duration-300">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className=" text-black hover:text-blue-900 hover:border-blue-900 hover:rounded-full px-4 py-4 border border-transparent  transition-all duration-300">
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-black hover:bg-white hover:text-customButton hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300"
                >
                  Testimonial
                </Link>
              </li>
              <li className=" text-black hover:text-blue-900 hover:border-blue-900  hover:rounded-full px-4 py-4 border border-transparent transition-all duration-300 ">
                <NavLink to="/contactUs">Support</NavLink>
              </li>
              <div className=" flex flex-col mb-4 justify-between my-6  md:mr-0 md:ml-0 mr-6 ml-4 ">
                <Link
                  to="/signup"
                  className="bg-blue-900 border rounded-md text-white py-4 w-full text-center my-4  hover:bg-blue-900 "
                >
                  Sign in
                </Link>
                <button className="border-2 border-customButton rounded-md text-blue-800 py-4 w-full ">
                  Download App
                </button>
              </div>
            </ul>
          ) : null}
        </nav>
        {/* <Landing />
        <Why />
        <AltWaveExplore /> */}
      </motion.div>
    </>
  );
}


import logo from "../../assets/images/Vector (1).png";
import { Link } from "react-router-dom";
import Notification from "../../assets/images/Notification icon.png";

import Profile from "../../assets/images/Profile empty.png";
export default function Sidebar() {
  return (
    <>
      <div className="flex justify-end p-2 sticky top-0 bg-white z-10">
    <button className="flex">
      <img src={Notification} alt="Notification icon" className="mr-10" />
    </button>
    <button className="flex">
      <img src={Profile} alt="Profile icon" className="mr-6" />
    </button>
    <div className="mr-10 text-customBlack font-Modarat">
      <h1 className="text-base">Ayodele Grace</h1>
      <p className="text-customGray text-xs">ayodelegrace@gmail.com</p>
    </div>
  </div>
      <div className="flex">
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full border-r sm:translate-x-0 bg-white"
          aria-label="Sidebar"
        >
          <div className="flex items-center mt-4">
            <a href="https://flowbite.com" className="flex ml-16 md:me-24">
              <img src={logo} className="h-8 me-3" alt="tuition Logo" />
            </a>
          </div>
          <div className="h-full overflow-y-auto bg-white">
            <ul className="space-y-2 font-medium">
              <li className="mb-4 mt-12">
                <Link
                  to="/dashboard"
                  className="flex items-center p-3 w-full hover:text-customButton text-customButton hover:bg-gray-200 hover:border-customButton group"
                >
                  <svg
                    className="mr-4 ml-7 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-customButton"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ms-3 text-customEnroll dark:group-hover:text-customButton font-Modarat">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center p-3 w-full text-customButton hover:bg-gray-200 hover:border-customButton group"
                >
                  <svg
                    className="mr-4 ml-7 flex-shrink-0 w-5 h-5 text-gray-500 transitio duration-75 group-hover:text-gray-900 dark:group-hover:text-customButton"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 dark:group-hover:text-customButton ms-3 text-customEnroll whitespace-nowrap font-Modarat">
                    Pay Tuition
                  </span>
                </Link>
              </li>
              <li className="">
                <a
                  href="#"
                  className="flex items-center p-3 w-full text-customButton hover:bg-gray-200 hover:border-customButton group"
                >
                  <svg
                    className="mr-4 ml-7 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-customButton"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap font-Modarat text-customEnroll dark:group-hover:text-customButton">
                    Wallet
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 w-full text-customButton hover:bg-gray-200 hover:border-customButton group"
                >
                  <svg
                    className="mr-4 ml-7 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-customButton"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-customEnroll dark:group-hover:text-customButton font-Modarat">
                    Pay E-services
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 w-full text-customButton hover:bg-gray-200 hover:border-customButton group"
                >
                  <svg
                    className="mr-4 ml-7 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-customButton"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-customEnroll dark:group-hover:text-customButton font-Modarat">
                    Target Savings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
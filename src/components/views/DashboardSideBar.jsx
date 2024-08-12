import { useState } from "react";
import { Navbar } from "../../constants/SidebarData";
import { Link, useLocation } from "react-router-dom";
import LogoExtension from "../../assets/images/Logo Extended.png";

const DashboardSideBar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-3 text-gray-500 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 md:w-64  w-[50%] h-screen transition-transform bg-white border-r sm:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex items-center mt-4 w-full px-4 sm:px-6">
          <img
            src={LogoExtension}
            width={118.31}
            height={36.92}
            className="w-[118.31px] h-[36.92px]"
            alt="tuition Logo"
          />
        </div>

        <nav className="pt-4">
          {Navbar.map((nav, index) => (
            <Link
              key={index}
              to={`/dashboard/${nav.to}`}
              className={`flex items-center gap-4 mb-2 h-12 py-3 px-4 text-gray-600 font-Modarat ${
                location.pathname.endsWith(`/dashboard/${nav.to}`)
                  ? "border-l-4 border-blue-700 bg-gray-100"
                  : ""
              }`}
            >
              <img
                src={
                  location.pathname.endsWith(`/dashboard/${nav.to}`)
                    ? nav.InActiveIcon
                    : nav.ActiveIcon
                }
                alt="nav-icons"
                className="w-6 h-6"
              />
              <span>{nav.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default DashboardSideBar;

import { motion } from "framer-motion";
import { useState } from "react";
import Notification from "../../assets/images/Notification icon.png";
import Profile from "../../assets/images/Profile empty.png";
import ProfilePopup from "./ProfilePopup";

const dashboardHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = JSON.parse(localStorage.getItem("email"));
  const firstname = JSON.parse(localStorage.getItem("first_name"));
  const lastname = JSON.parse(localStorage.getItem("last_name"));

  const toggleprofile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex md:flex justify-end p-2 sticky top-0 bg-white z-10 dashboardheader">
       <div className="flex flex-col md:flex-col"> 
        <div className="">
        <button className="">
          <img src={Notification} alt="Notification icon" className="mr-10" />
        </button>

        <button className="" onClick={toggleprofile}>
          <img src={Profile} alt="Profile icon" className="mr-6" />
        </button>
        </div>
       
        <div className="mr-10 text-customBlack font-Modarat">
          <h1 className="text-base">
            {firstname} {lastname}
          </h1>
          <p className="text-customGray text-xs">{email}</p>
        </div></div>
       
        {isOpen && (
          <div className="relative">
            <ProfilePopup />
          </div>
        )}

      
      </div>
    </motion.div>
  );
};
export default dashboardHead;

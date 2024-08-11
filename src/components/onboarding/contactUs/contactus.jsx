import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../Views/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../Views/Footer";
import Vector from "../../../assets/images/Vector (3).png";
import Email from "../../../assets/images/email container.png";
import Phone from "../../../assets/images/Phone container.png";
import X from "../../../assets/images/X socials container.png";
import Faq from "../../../assets/images/FAQs container.png";
import Bob from "../../../assets/images/Blob 1 (1).png";
import Small from "../../../assets/images/3d_small_people_-_global_manager-removebg-preview 1 (1).png";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.email ||
        !formData.message
      ) {
        alert("Please fill in all fields");
        setIsLoading(false);
        return;
      }

      const endpoint =
        "https://flutter-backend-54cafc79c811.herokuapp.com/api/contact/contacts/";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("sending data", formData);
      if (response.ok) {
        navigate("/enrollsuccess");
      }
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div className="text-center font-millik font-normal text-customBlack mt-24 mb-16 px-4 sm:px-8">
        <div className="flex flex-col items-center mb-8">
          <img src={Vector} className="w-10 h-10" alt="Vector Icon" />
          <h1 className="text-2xl sm:text-4xl mt-4">Let’s sort you out</h1>
        </div>
        <p className="font-Modarat text-customGray text-base sm:text-lg leading-6 mb-8">
          Need help with something? Our 24/7 support team is ready to assist you
          on <br /> your preferred channel.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 mb-16">
        <form onSubmit={handleSubmit} className="flex-1 mb-8 md:mb-0">
          <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="font-Modarat text-lg text-customBlack">First name</label>
              <input
                id="first_name"
                type="text"
                onChange={handleInputChange}
                className="border px-5 py-2 border-customLine rounded-md w-full"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex-1">
              <label className="font-Modarat text-lg text-customBlack">Last name</label>
              <input
                id="last_name"
                type="text"
                onChange={handleInputChange}
                className="border px-5 py-2 border-customLine rounded-md w-full"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="font-Modarat text-lg text-customBlack">Email address</label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              className="border px-5 py-2 border-customLine rounded-md w-full"
              placeholder="example@flutterwave.com"
            />
          </div>
          <div className="mb-6">
            <label className="font-Modarat text-lg text-customBlack">Message</label>
            <textarea
              id="message"
              onChange={handleInputChange}
              className="border w-full py-5 px-3 border-customLine rounded-md resize-none"
              placeholder="Leave an enquiry or complaint for us..."
              style={{ height: "150px", paddingTop: "1rem" }}
            />
          </div>
          <button
            type="submit"
            className={`border w-full md:w-96 p-6 mt-4 rounded-lg bg-customBlack text-white font-Modarat ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="hidden md:block w-px bg-customLine mx-8" />

        <div className="flex-1 flex-col md:ml-8">
          <div className="flex items-start mb-8">
            <img src={Email} className="w-12 h-12" alt="Email Icon" />
            <div className="ml-4">
              <h1 className="font-millik text-customBlack text-xl">Email Us</h1>
              <p className="font-Modarat text-customGray text-base">
                <a href="mailto:support@flutter.com">support@flutter.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <img src={Phone} className="w-12 h-12" alt="Phone Icon" />
            <div className="ml-4">
              <h1 className="font-millik text-customBlack text-xl">Call Us</h1>
              <p className="font-Modarat text-customGray text-base">+234 (xxx) xxxx xxxx</p>
              <p className="font-Modarat text-customGray text-base">
                <a href="tel:0700Flutterwave">0700 Flutterwave</a>
              </p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <a href="https://x.com/theflutterwave">
              <img src={X} className="w-12 h-12" alt="X Icon" />
            </a>
            <div className="ml-4">
              <h1 className="font-millik text-customBlack text-xl">Contact us on X</h1>
              <p className="font-Modarat text-customGray text-base">@x.com/tuitionbyflutter</p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <NavLink to="/faq">
              <img src={Faq} className="w-12 h-12" alt="FAQ Icon" />
            </NavLink>
            <div className="ml-4">
              <h1 className="font-millik text-customBlack text-xl">FAQs</h1>
              <p className="font-Modarat text-customGray text-base">
                <NavLink to="/faq">
                  Check out our FAQ’s. You just might <br /> find what you need here
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={Bob} alt="Blob Image" className="absolute bottom-0 right-0 w-48 h-auto" />
        <img src={Small} alt="Small People Image" className="absolute bottom-0 right-24 w-48 h-auto" />
      </div>

      <Footer />
    </motion.div>
  );
}

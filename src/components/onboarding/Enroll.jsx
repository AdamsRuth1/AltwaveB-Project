import Footer from "../Views/Footer";
import Header from "../Views/Header";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

export default function Enroll() {
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: "",
    countryName: "",
    address: "",
    paymentType: "",
    contactEmail: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (
        !formData.schoolName ||
        !formData.countryName ||
        !formData.address ||
        !formData.paymentType ||
        !formData.contactEmail
      ) {
        alert("Please fill in all fields");
        return;
      }

      const endpoint =
        "https://flutter-backend-54cafc79c811.herokuapp.com/api/institution/institutions";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log("sending data", formData);
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="flex md:mt-16">
          <div className="flex-1 ml-24 ">
            <h1 className="md:text-6xl text-customBlack md:mb-6 font-millik font-normal">
              {" "}
              Enroll your institution
            </h1>
            <p className="text-customEnroll font-Modarat text-xl leading-8">
              With Tuition, no matter your location in the world, your students
              can easily pay their education fees without hassle <br /> <br />
              Please complete the form to connect with a member of our team.
            </p>
          </div>
          <div className="flex-1 mr-80 ml-20 mb-36">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 ml-28">
                <input
                  className="border rounded w-96 py-2 px-3 text-gray-700   border-gray-700 border-opacity-30 "
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="School name"
                />
              </div>
              <div className="mb-6">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => {
                    setSelected(code);
                    setFormData({ ...formData, countryName: code }); // Update formData with selected country code
                  }}
                  searchable
                  id="countryName"
                  className="ml-28 text-gray-700 w-96"
                />
              </div>
              <input
                className="p-5 border border-gray-700 border-opacity-30 rounded  w-96 ml-28 h-48 "
                placeholder="Address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                id="address"
              />
              <input
                className="border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 ml-28 mt-6 border-opacity-30 "
                id="paymentType"
                type="text"
                value={formData.paymentType}
                onChange={handleInputChange}
                placeholder="Payment type"
              />
              <input
                className="border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 ml-28 mt-6 border-opacity-30 "
                id="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="contact Email"
              />
              <div className="relative inline-block">
              <button
                  type="submit"
                  className={`border w-96 p-6 mt-8 ml-28 rounded-lg bg-customBlack text-white font-Modarat ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading} 
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

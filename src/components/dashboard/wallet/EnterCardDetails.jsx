import React, { useState } from "react";
import Arrow from "../../../assets/images/Icons Right.png";
import Close from "../../../assets/images/close.png";
import TopUpCard from "./topupCard";

export default function EnterCardDetails({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showTopUpCard, setShowTopUpCard] = useState(false);

  const handleProceedClick = (event) => {
    event.preventDefault(); 
    setShowTopUpCard(true);
  };

  const options = ["Single-use virtual card", "Multi-use virtual card"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {showTopUpCard ? (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5">
            <TopUpCard onClose={() => setShowTopUpCard(false)} />
          </div>
        </div>
      ) : (
        <form onSubmit={handleProceedClick}>
          <div className="flex justify-between items-center mb-[36px]">
            <h6 className="font-millik text-customBlack text-lg text-center flex-1">
              Enter Card Details
            </h6>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#CCCCCC1A] text-white rounded-full p-0 w-12 h-12 flex items-center justify-center"
            >
              <img src={Close} className="w-6 h-6" alt="close" />
            </button>
          </div>

          <div>
            <label className="moderat-font">Description</label> <br />
            <input
              type="text"
              name="description"
              placeholder="Enter a name for your card"
              className="px-8 py-2 w-[100%] rounded border border-[#CCCCCC] mt-[8px]"
              required
            />
          </div>
          <br />
          <div className="relative">
            <label className="moderat-font">Card type</label> <br />
            <div className="relative">
              <input
                type="text"
                name="cardType"
                placeholder="Select card type"
                value={selectedOption}
                className="px-12 py-2 w-[100%] rounded border border-[#CCCCCC] mt-[8px]"
                style={{ minWidth: "200px" }}
                readOnly
                required
              />
              <img
                src={Arrow}
                alt="Arrow"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ width: "20px", height: "20px" }}
                onClick={toggleDropdown}
              />
            </div>
            {isOpen && (
              <div className="absolute top-full right-0 w-auto bg-white border border-[#CCCCCC] mt-1 z-10">
                {options.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleOptionClick(option)}
                    required
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#252E6A] mt-[40px] rounded-lg px-3 py-3 w-[100%] text-white"
          >
            Proceed
          </button>
        </form>
      )}
    </>
  );
}

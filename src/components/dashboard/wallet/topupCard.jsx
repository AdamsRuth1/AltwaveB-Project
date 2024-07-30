import React, { useState } from "react";
import Close from "../../../assets/images/close.png";
import USFlag from "../../../assets/images/Frame 373.png";
import Arrow from "../../../assets/images/Icons Right.png";
import PrepingCard from "./prepingCard";

export default function TopUpCard({ onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showPrepingCard, setShowPrepingCard] = useState(false);

  const handleProceedClick = (event) => {
    event.preventDefault(); // Prevent form from submitting if using manual handling
    setShowPrepingCard(true);
  }

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const getFlag = (currency) => {
    switch (currency) {
      case "USD":
        return (
          <img src={USFlag} alt="USD" className="w-6 h-6 inline-block mr-2" />
        );
      case "NGN":
        return (
          <img src={USFlag} alt="NGN" className="w-6 h-6 inline-block mr-2" />
        );
      default:
        return null;
    }
  };

  const getDisplayValue = (currency) => {
    switch (currency) {
      case "USD":
        return "USD";
      case "NGN":
        return "NGN";
      default:
        return "Select Currency";
    }
  };

  return (
    <div>
      {showPrepingCard ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5">
            <PrepingCard onClose={() => setShowPrepingCard(false)} />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-[36px]">
            <h6 className="font-millik text-customBlack text-lg text-center flex-1">
              Top-Up Card
            </h6>
            <button
              onClick={onClose}
              className="bg-[#CCCCCC1A] text-white rounded-full p-0 w-12 h-12 flex items-center justify-center"
            >
              <img src={Close} className="w-6 h-6" alt="close" />
            </button>
          </div>
          <p className="text-center font-Moderat mt-8 mb-12 text-[#606569] text-lg font-medium">
            To avoid topping up failures, please make sure your wallet balance is
            enough to cover the desired top-up amount.
          </p>
          <div className="flex items-center">
            <div className="relative w-[20%] mr-4">
              <select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className="border border-[#CCCCCC] rounded w-full py-3 pl-10 pr-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 absolute opacity-0 z-10"
              >
                <option value="USD">United States Dollar (USD)</option>
                <option value="NGN">Nigerian Naira (NGN)</option>
              </select>
              <div className="relative flex items-center pl-1 border border-[#CCCCCC] rounded py-3">
                {getFlag(selectedCurrency)}
                <span>{getDisplayValue(selectedCurrency)}</span>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className="cursor-pointer"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center w-[70%] relative">
              <input
                className="py-3 pl-10 pr-3 border border-[#CCCCCC] rounded w-full"
                placeholder="Enter top-up amount"
                required
              />
            </div>
          </div>
          <button
            onClick={handleProceedClick}
            className="bg-[#252E6A] mt-10 rounded-lg px-3 py-3 w-[100%] text-white"
          >
            Proceed
          </button>
          <button className="border border-[#252E6A] mt-4 rounded-lg px-3 py-3 w-[100%] text-customBlack">
            Skip for now
          </button>
        </div>
      )}
    </div>
  );
}

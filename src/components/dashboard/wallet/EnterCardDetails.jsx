import React from 'react';
import { useCardContext } from '../../../context/CardContext';
import TopUpCard from './TopupCard';
import Close from "../../../assets/images/close.png";
import Arrow from "../../../assets/images/Icons Right.png";

export default function EnterCardDetails({ onClose }) {
  const { setEnteredDetails } = useCardContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [showTopUpCard, setShowTopUpCard] = React.useState(false);

  const handleProceedClick = (event) => {
    event.preventDefault();
    setEnteredDetails({ description: event.target.description.value, cardType: selectedOption });
    setShowTopUpCard(true);
  };

  const options = ["Single-use virtual card", "Multi-use virtual card"];
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      {showTopUpCard ? (
        <div className="fixed inset-0 flex items-center justify-center">
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
                className="px-12 py-2 rounded border border-[#CCCCCC] mt-[8px] w-full text-[#A1A4A8]"
                
                onClick={() => setIsOpen(!isOpen)}
                required
              />
              <img
                src={Arrow}
                alt="Arrow"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ width: "20px", height: "20px" }}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            {isOpen && (
              <div className="absolute top-full right-0 p-4 w-[248px] mt-2 bg-white border border-[#CCCCCC] rounded shadow-lg">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#252E6A] text-white rounded-lg py-2 px-4 mt-4 w-full"
          >
            Proceed
          </button>
        </form>
      )}
    </>
  );
}

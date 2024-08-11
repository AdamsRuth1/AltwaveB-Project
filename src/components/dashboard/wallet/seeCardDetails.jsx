import React, { useEffect } from "react";
import { useCardContext } from "../../../context/CardContext";
import barner from "../../../assets/images/Banner how to pay.png";
import { useNavigate } from "react-router-dom";

export default function SeeCardDetails() {
  const navigate = useNavigate();
  const { cardDetails, enteredDetails } = useCardContext();
  const Exp = "12/23";
  const Cvv = "123";

  // const handleClick = () => {
  //   navigate("/dashboard/wallet");
  // };

  useEffect(() => {
    // Retrieve existing card data from local storage
    const savedCardData = localStorage.getItem("cardData");

    // Parse the saved card data
    let cardData = [];
    try {
      cardData = savedCardData ? JSON.parse(savedCardData) : [];
     
    } catch (error) {
      // console.error("Error parsing cardData:", error);
      cardData = [];
    }

    const now = new Date();
    const creationDate = now.toLocaleDateString(); // Format as desired
    const creationTime = now.toLocaleTimeString();
    const newCard = {
      cardDetails,
      enteredDetails: {
        ...enteredDetails,
        Exp,
        Cvv,
        creationDate,
        creationTime
      }
    };

    // Save updated card data back to local storage
    const updatedCardData = [...cardData, newCard];
    localStorage.setItem("cardData", JSON.stringify(updatedCardData));  }, 
    [cardDetails, enteredDetails]);

  return (
    <div className="mt-10">
      <button >
        <img src={barner} alt="Banner" />
      </button>
      <div className="flex justify-center">
        <div className="mt-[26px] mb-[29px]">
          {cardDetails ? <div>{cardDetails}</div> : <p>No card selected.</p>}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Name</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{enteredDetails.cardType || "N/A"}</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Number</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">1234 5678 9101 1213</p>
        </div>
      </div>
      <div className="flex justify-between mt-[24px]">
        <div className="flex">
          <div className="flex flex-col">
            <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Exp Date</p>
            <p className="moderat-font text-lg font-bold text-[#0A0E27]">{Exp}</p>
          </div>
          <div className="flex flex-col ml-[44px]">
            <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">CVV</p>
            <p className="moderat-font text-lg font-bold text-[#0A0E27]">{Cvv}</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Type</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{enteredDetails.description || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

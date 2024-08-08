import React from "react";
import { useCardContext } from "../../../context/CardContext"; // Update path as necessary
import barner from "../../../assets/images/Banner how to pay.png"
export default function SeeCardDetails() {
  const { cardDetails, enteredDetails, topUpDetails } = useCardContext();
  const Exp = "12/23";
  const Cvv = "123";

  return (
    <div className="mt-10 ">
         <button
        //   className="bg-[#252E6A] text-white py-6 px-6 rounded-lg"
        //   style={{ width: "100%" }}
        >
          <img src={barner}/>
        </button>
      <div className=" flex justify-center">
       
        <div className=" mt-[26px] mb-[29px]">
          {cardDetails ? <div>{cardDetails}</div> : <p>No card selected.</p>}
        </div>
      </div>

      <div className="flex justify-between ">
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Name</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{enteredDetails.cardType || "N/A"}</p>
        </div>
        <div className=" flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">
           Card Number
          </p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">
          1234 5678 9101 1213
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-[24px]">
        <div className="flex">
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Exp Date</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{Exp}</p>
        </div>
        <div className="flex flex-col ml-[44px]">
            <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">
          CVV
          </p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{Cvv}</p>

          </div>
        </div>
        <div className=" flex flex-col justify-end">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">
          Card Type
          </p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">
          {enteredDetails.description || "N/A"}
          </p>
        </div>
    
    </div>
    </div>
  );
}

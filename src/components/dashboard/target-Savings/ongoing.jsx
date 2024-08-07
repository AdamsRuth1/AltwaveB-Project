import Vector from "../../../assets/images/VectorX.png";
import { React , useState } from "react";
export default function Ongoing() {

    // const items = [
    //     { instituition: "Institution",

    //     }
    // ]
  return (
    <div
      className=" justify-between  bg-white  rounded-xl"
      style={{ border: "1px solid #CCCCCC0D" }}
    >
      <div className="flex border-b mb-6 p-4">
        <button
          className=" text-[#FF9B00] py-2 px-2 bg-[#FFF6E9] 
                  font-Modarat text-base text-center mr-[355px]"
          style={{ borderRadius: "99px", }}
        >
          {" "}
          Ongoing
        </button>
        <div
          className="bg-[#CCCCCC0D] "
          style={{ borderRadius: "100%", padding: "8px" }}
        >
          <img className="w-[24px] h-[24px]" src={Vector} />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center items-center">
        <p className="text-customBlack mb-4 font-Modarat text-2xl">$760.00</p>
        <p className="text-base font-Modarat text-[#606569] mb-[32px]">
          Balance left to Maturity
        </p>
      </div>
      <div className="ml-4 mr-4">
        <div className="flex justify-between rounded-2xl p-5 mb-4	bg-[#CCCCCC0D]">
            <p className="text-[#606569] text-base font-Modarat">Institution</p>
            <p className="text-[#51575D] font-Modarat text-lg font-bold">Algonquin College</p>
        </div>
        <div className="flex justify-between rounded-2xl p-5 mb-4	bg-[#CCCCCC0D]">
            <p className="text-[#606569] text-base font-Modarat">Description</p>
            <p className="text-[#51575D] font-Modarat text-lg font-bold">Accommodation</p>
        </div>
        <div className="flex justify-between rounded-2xl p-5 mb-4	bg-[#CCCCCC0D]">
            <p className="text-[#606569] text-base font-Modarat">Maturity Amount</p>
            <p className="text-[#51575D] font-Modarat text-lg font-bold">$760.00 </p>
        </div>
      </div>
    </div>
  );
}

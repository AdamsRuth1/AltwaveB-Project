import React from "react";
import SuccessfulImage from "../../../assets/images/Success checkmark.png";
export default function Successful() {
    return(
        <div>
            <div className="flex justify-center align-center text-center">
               <img src={SuccessfulImage} className="w-[165px] h-[165px]"/>
            </div>
            <div className="flex flex-col justify-between items-center mt-[24px]">
                <h6 className="font-millik text-black text-lg text-center flex-1">
                    Successful
                </h6>
                <p className='font-Modarat text-lg text-[#606569] mt-6 font-medium'>
                Your virtual card is ready to go
            </p>
            </div>
            <button
            type="submit"
            className="bg-[#252E6A] mb-[40px] mt-[40px] rounded-lg px-3 py-3 w-[100%] text-white"
          >
            See Card Details
          </button>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import Close from "../../../assets/images/close.png";
import SpinningWheel from "../../../assets/images/Spinning wheel.png";
import "./animation.css";
import CardSuccessful from "./successful";

export default function PrepingCard({ onClose }) {
  const [isSpinning, setIsSpinning] = useState(true);
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
      setIsSuccessful(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-[36px]">
        <h6 className="font-millik text-black text-lg text-center flex-1">
          {isSuccessful ? '' : 'Please Wait'}
        </h6>
        <button
          onClick={onClose}
          className="bg-[#CCCCCC1A] text-white rounded-full p-0 w-12 h-12 flex items-center justify-center"
        >
          <img src={Close} className="w-6 h-6" alt="close" />
        </button>
      </div>

      {isSpinning ? (
        <div role="status" className="flex flex-col items-center justify-center min-h-[200px]">
          <img
            src={SpinningWheel}
            alt="Loading"
            className="w-[165px] h-[165px] slow-spin"
          />
          <div className='mt-8 mb-[24px] text-center'>
            <h6 className="font-millik text-customBlack text-lg">
              Please Wait
            </h6>
            <p className='font-Modarat text-lg text-[#606569] mt-6 font-medium'>
              We are preparing your virtual card
            </p>
          </div>
        </div>
      ) : (
        <CardSuccessful />
      )}
    </>
  );
}

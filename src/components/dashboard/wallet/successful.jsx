import React from "react";
import SuccessfulImage from "../../../assets/images/Success checkmark.png";
import CardDetails from "./seeCardDetails";
import Close from "../../../assets/images/close.png";

export default function Successful() {
  const [showCardDetails, setShowCardDetails] = React.useState(false);

  const handleShowCardDetails = () => {
    setShowCardDetails(true);
  };

  return (
    <div>
      {showCardDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 relative">
            <button
              onClick={() => setShowCardDetails(false)}
              className="absolute top-3 right-3 bg-[#CCCCCC1A] rounded-full p-2 flex items-center justify-center"
            >
              <img src={Close} className="w-6 h-6" alt="close" />
            </button>
            <CardDetails onClose={() => setShowCardDetails(false)} />
          </div>
        </div>
      )}
      <div>
        <div className="flex justify-center items-center text-center">
          <img
            src={SuccessfulImage}
            className="w-[165px] h-[165px]"
            alt="Success"
          />
        </div>
        <div className="flex flex-col justify-between items-center mt-[24px]">
          <h6 className="font-millik text-black text-lg text-center flex-1">
            Successful
          </h6>
          <p className="font-Modarat text-lg text-[#606569] mt-6 font-medium">
            Your virtual card is ready to go
          </p>
        </div>
        <button
          type="button"
          onClick={handleShowCardDetails}
          className="bg-[#252E6A] mb-[40px] mt-[40px] rounded-lg px-3 py-3 w-[100%] text-white"
        >
          See Card Details
        </button>
      </div>
    </div>
  );
}

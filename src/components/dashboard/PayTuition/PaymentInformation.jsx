import { useState } from "react";
import ArrowDown from "../../../assets/Icons/Arrrow-down.svg";
import { By } from "../../../constants/TuitionDropdown";
import { For } from "../../../constants/TuitionDropdown";
import { paymentCountry } from "../../../constants/TuitionDropdown";
import TuitionHeader from "./TuitionHeader";
import paymentFooter from "../../../assets/Icons/dashboardFooter.svg";
import PaymentInforSummary from "./PaymentInforSummary";
import TuitionButton from "./TuitionButton";
const PaymentInformation = ({ Next }) => {
  const [isPaymentByOpen, setIsPaymentByOpen] = useState(false);
  const [isPaymentForOpen, setIsPaymentForOpen] = useState(false);
  const [isCountryPaymentOpen, setIsCountryPaymentOpen] = useState(false);
  const [Paymentselect, setPaymentselect] = useState(null);
  const [selectCountryPayment, setselectCountryPayment] = useState(null);
  const [PaymentSelectFor, setPaymentSelectFor] = useState(null);
  const handlePaymentBy = () => {
    setIsPaymentByOpen(!isPaymentByOpen);
  };
  const handlePaymentFor = () => {
    setIsPaymentForOpen(!isPaymentForOpen);
  };
  const handleCountryOpen = () => {
    setIsCountryPaymentOpen(!isCountryPaymentOpen);
  };
  const handlePaymentSelect = (PayBy) => {
    setPaymentselect(PayBy);
    setIsPaymentByOpen(false);
  };
  const handlePaymentSelectFor = (PayFor) => {
    setPaymentSelectFor(PayFor);
    setIsPaymentForOpen(false);
  };
  const handleCountrySelect = (Payment) => {
    setselectCountryPayment(Payment);
    setIsCountryPaymentOpen(false);
  };

  return (
    <div className="-ml-[2rem]">
      <div className="w-full  pt-[4rem]">
        <TuitionHeader
          count="2"
          Total={5}
          Header=" Payment Information"
          Paragraph="Confirm the amount you’re sending before proceeding"
        />
      </div>
      <form>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Payment by
          </label>
          <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
            {Paymentselect || "Choose an option"}
            {isPaymentByOpen && (
              <div>
                {By.map((PayBy, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul className="pt-3 ">
                      <li
                        onClick={() => handlePaymentSelect(PayBy)}
                        className="pb-3"
                      >
                        {PayBy}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div onClick={handlePaymentBy} className="pt-1 cursor-pointer">
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Payment for
          </label>
          <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
            {PaymentSelectFor || "Choose an option"}
            {isPaymentForOpen && (
              <div>
                {For.map((PayFor, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[14rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul className="pt-3 ">
                      <li
                        onClick={() => handlePaymentSelectFor(PayFor)}
                        className="pb-3"
                      >
                        {PayFor}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div onClick={handlePaymentFor} className="pt-1 cursor-pointer">
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Country you are paying from
          </label>
          <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
            {selectCountryPayment || "Choose an option"}
            {isCountryPaymentOpen && (
              <div>
                {paymentCountry.map((Payment, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[14rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul className="pt-3 ">
                      <li
                        onClick={() => handleCountrySelect(Payment)}
                        className="pb-3"
                      >
                        {Payment}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div onClick={handleCountryOpen} className="pt-1 cursor-pointer">
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Your school will receive
          </label>

          <div className="pt-[0.2rem] mb-[2rem] flex">
            <div className="w-[138px] h-[48px] flex justify-between border border-[#CCCCCC] py-3 px-[1.25rem] ">
              <h4 className="font-Modarat font-normal text-[18px] leading-[22px] text-[#000000]">
                CAD
              </h4>
              <div className="pt-2">
                <img src={ArrowDown} alt="Arrow down icon" />
              </div>
            </div>
            <div className="w-[298px] h-[48px] border border-[#CCCCCC]"></div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Discount code
          </label>

          <div className="pt-[0.2rem] mb-[2rem] flex">
            <div className="w-[341px] h-[48px] border border-[#CCCCCC]"></div>
            <button className="w-[95px] bg-[#2A3362] text-white font-Moderate text-[18px] leading-[24px]">
              Apply
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Your total payment (plus fees)
          </label>

          <div className="pt-[0.2rem] mb-[0.5rem] flex">
            <div className="w-[83px] h-[48px] border border-[#CCCCCC] py-2 px-[1.25rem] ">
              <h4 className="font-Modarat font-normal text-[18px] leading-[22px] text-[#000000]">
                Naira
              </h4>
            </div>
            <div className="w-[353px] h-[48px] border border-[#CCCCCC]"></div>
          </div>
        </div>
        <div className="flex gap-3 mb-[2.5rem]">
          <div>
            <img src={paymentFooter} alt="footer icon" />
          </div>
          <span className="font-Modarat font-normal text-[16px] leading-[16px] text-[#A1A4A8]">
            Total payment in CAD = CA$ 2,344.50
          </span>
        </div>
        <PaymentInforSummary />

        <TuitionButton back="Back" forward="continue" Next={Next} />
      </form>
    </div>
  );
};

export default PaymentInformation;

import PenIcon from "../../../assets/Icons/pencil-edit-01.svg";
import TuitionHeader from "./TuitionHeader";
import StudentInformation from "./StudentInformation";
const TransactionSummary = ({
  Next,
  ThreeStepsBack,
  TwoStepsBack,
  OneStepBack,
}) => {
  const style = "w-[470px]";
  return (
    <div className=" pt-[4rem]  ">
      <TuitionHeader
        count="4"
        Total={5}
        Header="Transaction Summary"
        Paragraph=" To ensure a successful transaction, verify your details and confirm
        before proceeding to payment."
        className={style}
      />

      <div className="flex justify-between mb-[1.5rem] ">
        <h3 className="font-Modarat font-medium text-[20px] leading-[24px] text-[#51575D]">
          Institution Information
        </h3>
        <div
          className="flex w-[100px] h-[40px] -mt-[0.4rem] rounded-[99px] bg-[#E0E2F0] cursor-pointer  px-[17px] pt-[12px] gap-5"
          onClick={ThreeStepsBack}
        >
          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#252E6A]">
            Edit
          </h3>
          <div className="">
            <img src={PenIcon} alt="a pen Icon" />
          </div>
        </div>
      </div>
      <div className="border-b  border-[#51575D] mb-[2rem]"></div>
      {/* <div> */}
      <div className="flex gap-[12.25rem] mb-[1.5rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Institution:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Alberta University
        </h4>
      </div>
      <div className="flex gap-[12.8rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Address:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Ontario
        </h4>
      </div>
      {/* </div> */}
      <div className="flex justify-between mt-[4.5rem] mb-[1.5rem]">
        <h3 className="font-Modarat font-medium text-[20px] leading-[24px] text-[#51575D]">
          Payment Information
        </h3>
        <div
          className="flex w-[100px] h-[40px] -mt-[0.4rem] rounded-[99px] bg-[#E0E2F0]  px-[17px] pt-[12px] gap-5"
          onClick={TwoStepsBack}
        >
          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#252E6A]">
            Edit
          </h3>
          <div className="">
            <img src={PenIcon} alt="a pen Icon" />
          </div>
        </div>
      </div>
      <div className="border-b  border-[#51575D] mb-[2rem]"></div>
      <div className="flex gap-[11rem] mb-[1.5rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Payment for:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Tuition
        </h4>
      </div>
      <div className="flex gap-[4.6rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Country you're paying from:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Nigeria
        </h4>
      </div>
      <div className="flex gap-[10.6rem] mt-[1.5rem] mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Total payment</h4>

          <span>(plus fees):</span>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CAD 1,615.10 (NGN 1,589,760.81)
        </h4>
      </div>
      <div className="flex gap-[10.2rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Institution gets:</h4>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CAD 1,500.00 (NGN 1,476,465.15)
        </h4>
      </div>
      <div className="flex gap-[10.3rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Transactio fee:</h4>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CAD 100
        </h4>
      </div>
      <div className="flex gap-[11.2rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Current rate:</h4>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CA$ 1 = NGN 984.3100970529757
        </h4>
      </div>
      <div className="flex gap-[8.4rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>School fee invoice:</h4>
        </div>
        <a
          href="#"
          className="font-Modarat font-normal text-[16px] leading-[24px] text-[#4B56A0] underline"
        >
           screencapturejpegyadiyadiya
        </a>
      </div>
      <div className="flex justify-between mt-[4.5rem] mb-[1.5rem]">
        <h3 className="font-Modarat font-medium text-[20px] leading-[24px] text-[#51575D]">
          Student Information
        </h3>
        <div
          className="flex w-[100px] h-[40px] -mt-[0.4rem] rounded-[99px] bg-[#E0E2F0]  px-[17px] pt-[12px] gap-5"
          onClick={OneStepBack}
        >
          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#252E6A]">
            Edit
          </h3>
          <div className="">
            <img src={PenIcon} alt="a pen Icon" />
          </div>
        </div>
      </div>
      <div className="border-b  border-[#51575D] mb-[2rem]"></div>
      <StudentInformation />
      <div>
        <button
          onClick={Next}
          className="w-full bg-[#252E6A] py-[24px] px-[12px] mb-[2.5rem] font-Modarat font-normal text-[16px] leading-[16px] text-white rounded-[8px] "
        >
          Proceed to payment
        </button>
      </div>
    </div>
    // </div>
  );
};

export default TransactionSummary;

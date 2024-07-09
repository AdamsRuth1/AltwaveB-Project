const TuitionButton = ({ disable, handleSubmit, back, forward, Next, className }) => {
  return (
    <div className="flex justify-between w-[436px] mb-[2.5rem]">
      <button
        disabled={disable}
        // onClick={handleSubmit}
        className={`w-[206px]  rounded-[5px] bg-[#CCCCCC] px-[24px] py-[12px]  text-[#1B2025] font-normal text-[18px] leading-[22px] moderat-font ${
          disable ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {back}
      </button>
      <button
        disabled={disable}
        onClick={Next}
        className={`w-[206px]  rounded-[5px] bg-[#252E6A] px-[24px] py-[12px] text-[#FFFFFF]  font-normal text-[18px] leading-[22px] moderat-font ${
          disable ? "cursor-not-allowed" : "cursor-pointer"
        }  ${className}`}
      >
        {forward}
      </button>
    </div>
  );
};

export default TuitionButton;

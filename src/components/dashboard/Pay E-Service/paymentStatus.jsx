import check from "../../../assets/Icons/check-circle.svg";
import Mark from "../../../assets/Icons/TuitionMark.svg";
const PaymentStatus = ({ activeState }) => {
  const Steps = [
    {
      CheckIcon: check,
      Mark: Mark,
      status: "E-Service Information",
      id: 1,
    },
    {
      CheckIcon: check,
      Mark: Mark,
      status: "Payment Information",
      id: 2,
    },
    {
      CheckIcon: check,
      Mark: Mark,
      status: "Student Information",
      id: 3,
    },

  ];

  return (
    <div className="  pt-[2.5rem] pl-[2.5rem] pr-[6.125rem] mt-[8rem] border border-[#CCCCCC] rounded-[8px]">
      {Steps.map((step, index) => (
        <div key={index} className="flex gap-[2rem] w-[222px] mb-[1.5rem]">
          {index < activeState ? (
            <div>
              <img
                src={step.Mark}
                alt="a check icon"
                className="w-[30px] h-[30px] rounded-full markBG py-[8px] px-[7px] "
              />
            </div>
          ) : (
            <div>
              <img src={step.CheckIcon} alt="a check icon" />
            </div>
          )}

          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#353C42]">
            {step.status}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PaymentStatus;

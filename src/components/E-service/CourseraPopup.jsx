import StarIcon from "../../assets/Icons/StarIcon.svg";
import CloseIcon from "../../assets/Icons/closeIcon.svg";
import Button from "../Dashboard/Button";
import { Link } from "react-router-dom";
const CourseraPopup = ({ handleClose }) => {
  return (
    <div className="popup  ">
      <div className="bg-[#F8F8F8]  w-[526px]  rounded-[16px] border py-[2rem]">
        <div className="flex justify-end  pr-7 pb-3">
          <div
            className="close rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={handleClose}
          >
            <img src={CloseIcon} alt="close icon" width={15} />
          </div>
        </div>

        <div className=" bg-[#252E6A]  flex justify-center  mx-auto  w-[478px] h-[104px] rounded-[8px] ">
          <h6 className="py-[2.5rem] font-millik text-[16px] font-normal leading-[24px] text-white ">
            Pay for Coursera
          </h6>
        </div>
        <div className="pt-[1.6rem]">
          <div className="w-[478px] mx-auto h-[48px] flex gap-[1rem] my-[1.2rem]">
            <img src={StarIcon} alt="A star icon" width={21} />

            <p className="font-Modarat font-normal text-[20px] text-[#51575D] leading-[24px]">
              Pay for <span className="font-bold "> Coursera </span> by creating
              a new virtual card or using existing card
            </p>
          </div>
          <div className="w-[478px] mx-auto h-[48px] flex gap-[1rem] my-[1.2rem]">
            <img src={StarIcon} alt="A star icon" width={21} />
            <p className="font-Modarat font-normal text-[20px] text-[#51575D] leading-[24px]">
              To avoid payment issues, ensure your virtual card balance covers
              the <span className="font-bold "> Coursera </span> course price
            </p>
          </div>
          <div className="w-[478px] mx-auto h-[48px] flex gap-[1rem] my-[1.2rem]">
            <img src={StarIcon} alt="A star icon" width={21} />
            <p className="font-Modarat font-normal text-[20px] text-[#51575D] leading-[24px]">
              On the <span className="font-bold "> Coursera </span> platform;
              Select the course you wish to enroll for and proceed to checkout
            </p>
          </div>
          <div className="w-[478px] mx-auto h-[48px] flex gap-[1rem] my-[1.2rem]">
            <img src={StarIcon} alt="A star icon" width={21} />

            <p className="font-Modarat font-normal text-[20px] text-[#51575D] leading-[24px]">
              Select “cards” as your preferred payment methodt
            </p>
          </div>
          <div className="w-[478px] mx-auto h-[48px] flex gap-[1rem] my-[1.2rem]">
            <img src={StarIcon} alt="A star icon" width={21} />

            <p className="font-Modarat font-normal text-[20px] text-[#51575D] leading-[24px]">
              At checkout on <span className="font-bold "> Coursera, </span> use
              your virtual card information to complete your payment.
            </p>
          </div>
        </div>
        <Link className="flex justify-center" to="/dashboard/wallet">
          <Button text="Continue" />
        </Link>
      </div>
    </div>
  );
};

export default CourseraPopup;

import React, { useState } from "react";
import EnterCardDetails from "./EnterCardDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import successLogo from "../../../assets/images/Success checkmark.png";
import { Navigation } from "swiper/modules";

export default function Swip() {
  const [showEnterCardDetails, setShowEnterCardDetails] = useState(false);

  const handleProceedClick = () => {
    setShowEnterCardDetails(true);
  };

  return (
    <>
      {showEnterCardDetails ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5">
            <EnterCardDetails onClose={() => setShowEnterCardDetails(false)} />
          </div>
        </div>
      ) : (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={successLogo}/></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
          <button
            className="bg-[#252E6A] text-white py-[12px] px-[24px] rounded-lg"
            style={{ width: "100%" }}
            onClick={handleProceedClick}
          >
            Proceed
          </button>
        </>
      )}
    </>
  );
}

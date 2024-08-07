import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../src/swipper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation } from "swiper/modules";
import { useCardContext } from "../../../context/CardContext";
import FirstCard from "./cardDesign";
import SecondCard from "./cardDesign1";
import ThirdCard from "./cardDesign3";
import FourthCard from "./cardDesign4";
import EnterCardDetails from "./EnterCardDetails";

export default function Swip() {
  const { setCardDetails } = useCardContext();
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [showEnterCardDetails, setShowEnterCardDetails] = React.useState(false);

  const handleCardClick = (card) => {
    console.log("Card clicked:", card);
    setSelectedCard(card);
    setCardDetails(card);
  };

  const handleProceedClick = () => {
    console.log("Proceed clicked");
    if (selectedCard) {
      setShowEnterCardDetails(true);
    }
  };

  return (
    <>
      {showEnterCardDetails ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 relative">
            <EnterCardDetails onClose={() => setShowEnterCardDetails(false)} />
          </div>
        </div>
      ) : (
        <>
          <div className="mb-[36px]">
            <h6 className="font-millik text-customBlack text-lg text-center flex-1">
              Choose Preferred Card Style
            </h6>
          </div>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide
              onClick={() => handleCardClick(<FirstCard />)}
              className="swiper-slide img mr-10 ml-4"
            >
              <FirstCard />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => handleCardClick(<SecondCard />)}
              className="swiper-slide img ml-10 "
            >
              <SecondCard />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => handleCardClick(<ThirdCard />)}
              className="swiper-slide img  mr-10 ml-10"
            >
              <ThirdCard />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => handleCardClick(<FourthCard />)}
              className="swiper-slide img"
            >
              <FourthCard />
            </SwiperSlide>
          </Swiper>

          <button
            onClick={handleProceedClick}
            className="bg-[#252E6A] text-white py-[12px] px-[24px] rounded-lg mt-10"
            style={{ width: "100%" }}
          >
            Proceed
          </button>
        </>
      )}
    </>
  );
}

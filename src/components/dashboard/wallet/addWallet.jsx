import React, { useRef, useState } from "react";
import AddWallet from "./addCardComponent";
import Pop from "./PopUp";
import Card1 from "./cardDesign2";
import Card2 from "./cardDesign1";
import Card3 from "./cardDesign3";
import card1 from "../../../assets/images/Card 7.png";
import card2 from "../../../assets/images/Cards.png";
import card3 from "../../../assets/images/Group 56.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Prev.css";
// import "../../../../src/swipper.css"

import { Pagination } from "swiper/modules";
import { useCardContext } from "../../../context/CardContext";
export default function AddWalletPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-customDash  mt-20" style={{ marginLeft: "92px" }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[202px] w-{364px} rounded-lg"
        >
          <div className="flex">
          <SwiperSlide className=" mr-10 ">
             {Card1}
            </SwiperSlide>
            <SwiperSlide className=" mr-10 ">
            {Card2}
            </SwiperSlide>
            <SwiperSlide className=" mr-10">
            {Card3}
            </SwiperSlide>
            {/* <SwiperSlide className="mr-10">
              <img src={card3} />{" "}
            </SwiperSlide> */}
          </div>
        </Swiper>
        <div
          className="flex bg-customDash mt-5 py-4 flex-col items-center text-center rounded-lg mb-3.5 bg-white"
          style={{
            width: "100%",
            border: "1px dotted #CCCCCC",
          }}
        >
          <button
            className="hover flex items-center justify-center rounded-full text-white font-bold mb-2"
            style={{
              backgroundColor: "#8690D5",
              width: "40px",
              height: "40px",
            }}
            onClick={handleOpenModal} // Open modal on click
          >
            +
          </button>
          <span className="font-medium">Create New Card</span>
        </div>
        <div
          className="rounded-lg bg-white"
          style={{ border: "1px solid #CCCCCC" }}
        >
          <div className="flex border-b mb-8 justify-between items-center py-4 mr-4 ml-4 mt-3.5">
            <h3 className="font-Modarat font-bold text-customBlack text-lg">
              Manage Cards
            </h3>
            <p className="font-Modarat text-base">View all</p>
          </div>
          <AddWallet className="mt-19" />
        </div>
      </div>
      <Pop isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

import React, { useState } from "react";
import Details from "./DetailsComponent";
import RoundedCircleButton from "./Dotted";
import Search from "./SearchFilter"; 
// import Card1 from './cardDesign';
// import Card2 from './cardDesign1';
// import Card3 from './cardDesign3';
// import Card4 from './cardDesign4';

const Cards = [
  {
    bank: "Monobank Card",
    date: "2nd May 2021",
    showCircle: false,
  },
  {
    bank: "Subscription Card",
    date: "26th May 2021",
    showCircle: false,
  },
  {
    bank: "Coursera Card",
    date: "13th June 2021",
    showCircle: false,
  },
];

const AddWallet = () => {
  const [cards, setCards] = useState(Cards);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCircle = (index) => {
    const updatedCards = cards.map((card, i) => ({
      ...card,
      showCircle: i === index ? !card.showCircle : false, // Ensure only one showCircle is true
    }));
    setCards(updatedCards);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter cards based on search term
  const filteredCards = cards.filter((card) =>
    card.bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 ">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      {filteredCards.map((card, index) => (
        <div key={index} className="mb-10 mt-10 flex justify-between">
          <RoundedCircleButton
            onClick={() => toggleCircle(index)}
            showCircle={card.showCircle}
          />
          <div style={{ marginLeft: "-50px" }}>
            <p className="font-medium font-Modarat text-base  text-BlackFont">
              {card.bank}
            </p>
            <p
              style={{ color: "#606569" }}
              className="text-base font-normal font-Modarat"
            >
              Created: {card.date}
            </p>
          </div>
          <Details onClick={() => toggleCircle(index)}>Details</Details>
        </div>
      ))}
    </div>
  );
};

export default AddWallet;

import React, { useState, useEffect } from "react";
import Details from "./DetailsComponent";
import RoundedCircleButton from "./Dotted";
import Search from "./SearchFilter";

// Sample cards data
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
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [savedCardDetails, setSavedCardDetails] = useState([]);
  const [showRedDot, setShowRedDot] = useState(false);

  // Retrieve card details from local storage
  useEffect(() => {
    const savedCardData = localStorage.getItem("cardData");
    try {
      const parsedData = savedCardData ? JSON.parse(savedCardData) : [];
      if (Array.isArray(parsedData)) {
        // Sort cards by creation date in descending order
        const sortedCards = parsedData.sort((a, b) => new Date(b.enteredDetails.creationDate) - new Date(a.enteredDetails.creationDate));
        setSavedCardDetails(sortedCards);
      } else {
        setSavedCardDetails([]);
      }
    } catch (error) {
      setSavedCardDetails([]);
    }
  }, []);

  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter saved cards based on search term
  const filteredSavedCards = savedCardDetails.filter((card) =>
    card.enteredDetails?.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle selecting a card
  const handleSelectCard = (index) => {
    setSelectedCardIndex(index);
    setShowRedDot(!showRedDot); // Toggle the red dot
  };

  // Function to handle clicking the Details button
  const handleDetailsClick = (index) => {
    setShowRedDot(!showRedDot); // Toggle the red dot
    setSelectedCardIndex(index); // Update selected card index
  };

  return (
    <div className="mt-10 h-[400px] overflow-y-auto">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Render saved card details if available and filtered */}
      {filteredSavedCards.length > 0 ? (
        filteredSavedCards.map((card, index) => (
          <div key={index} className="mt-10 mb-10 flex justify-between">
            <RoundedCircleButton showCircle={showRedDot && index === selectedCardIndex} />
            <div style={{ marginLeft: "-50px" }}>
              <p className="font-medium font-Modarat text-base text-BlackFont">
                {card.enteredDetails?.description || "N/A"}
              </p>
              <p style={{ color: "#606569" }} className="text-base font-normal font-Modarat">
                Created: {card.enteredDetails?.creationDate || "N/A"}
              </p>
            </div>
            <Details onClick={() => handleDetailsClick(index)}>Details</Details>
          </div>
        ))
      ) : (
        // Render "No cards found" message if no saved card details
        filteredSavedCards.length === 0 && searchTerm ? (
          <p className="text-center mt-10">No cards found</p>
        ) : (
          // Render static cards if no saved card details and no search term
          cards.map((card, index) => (
            <div key={index} className="mb-10 mt-10 flex justify-between">
              <RoundedCircleButton
                onClick={() => handleSelectCard(index)}
                showCircle={index === selectedCardIndex && showRedDot}
              />
              <div style={{ marginLeft: "-50px" }}>
                <p className="font-medium font-Modarat text-base text-BlackFont">
                  {card.bank}
                </p>
                <p style={{ color: "#606569" }} className="text-base font-normal font-Modarat">
                  Created: {card.date}
                </p>
              </div>
              <Details onClick={() => handleSelectCard(index)}>Details</Details>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default AddWallet;

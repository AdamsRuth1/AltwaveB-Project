import React, { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [enteredDetails, setEnteredDetails] = useState({});
  const [topUpDetails, setTopUpDetails] = useState({});

  return (
    <CardContext.Provider value={{ cardDetails, setCardDetails, enteredDetails, setEnteredDetails, topUpDetails, setTopUpDetails }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);

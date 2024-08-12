import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../../assets/images/Profile empty.png";
import logo from "../../../assets/images/Vector (4).png";
import Dashboard from "../../views/dashboard";
import PaginationBtn from './pagination';
import HeaderMessage from "../../views/messageDashboard";

const DashboardHome = () => {
  const [hasMadePayment, setHasMadePayment] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [savedCardDetails, setSavedCardDetails] = useState([]);
  const firstname = JSON.parse(localStorage.getItem("first_name"));

  useEffect(() => {
    // Fetch transactions from local storage
    const fetchTransactions = () => {
      const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
      if (savedTransactions.length > 0) {
        setHasMadePayment(true);
        setTransactions(savedTransactions);
      } else {
        setHasMadePayment(false);
        setTransactions([]); // Ensure transactions is set to an empty array if no data
      }
    };

    // Fetch saved card details from local storage
    const fetchSavedCards = () => {
      const savedCardData = localStorage.getItem("cardData");
      try {
        const parsedData = savedCardData ? JSON.parse(savedCardData) : [];
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setSavedCardDetails(parsedData);
        } else {
          setSavedCardDetails([]);
        }
      } catch (error) {
        setSavedCardDetails([]);
      }
    };

    fetchTransactions();
    fetchSavedCards();
  }, []);

  return (
    <Dashboard className="relative">
      <div className="absolute right-10 top-[18]">
        <HeaderMessage />
      </div>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4">
          <img src={Profile} alt="Profile" />
        </div>
        <div>
          <h1 className="font-millik text-3xl mb-2 leading-10">
            Hello {firstname}
          </h1>
          <p className="text-center font-Modarat text-customGray text-lg">
            Welcome to Tuition
          </p>
        </div>
      </div>

      {savedCardDetails.length > 0 ? (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-[90%] mx-auto flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">
              Your Transactions
              </h1>
              <div className="mt-8" style={{ marginLeft: "32px", marginRight: "32px" }}>
                {savedCardDetails.map((card, index) => (
                  <div key={index} className="flex pb-10 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-center">
                        <p className="font-medium font-Modarat text-lg">
                        {card.enteredDetails?.description || "N/A"}
                        </p>
                        <p style={{ color: "#606569" }} className="text-sm font-Modarat">
                        Created: {card.enteredDetails?.creationDate || "N/A"}
                        </p>
                        <p style={{ color: "#606569" }} className="text-sm font-Modarat">
                        Created: {card.enteredDetails?.creationTime || "N/A"}
                        </p>
                        {/* Include additional card details if necessary */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : hasMadePayment ? (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-[90%] flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">
                Your Transactions
              </h1>
              <div className="mt-8" style={{ marginLeft: "32px", marginRight: "32px" }}>
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex pb-10 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-center">
                        <p className="font-medium font-Modarat text-lg">
                          Transaction Id: <span className="font-bold">{transaction.id}</span>
                        </p>
                        <p style={{ color: "#606569" }} className="text-sm font-Modarat">
                          {transaction.paymentType}
                        </p>
                        <p className="text-right font-base font-Modarat text-customBlack">
                          Amount: ₦{transaction.amount.toFixed(2)}
                        </p>
                        <p className="text-right font-base font-Modarat text-customBlack">
                          Date: {new Date(transaction.date).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-2/4 flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">
                No transactions
              </h1>
              <p className="font-Modarat text-customGray text-base mb-10">
                You are yet to make any payment here. Click “Make payment” to
                get started.
              </p>
            </div>
            <Link
              to="/dashboard/tuition"
              className="bg-customButton text-white font-Modarat text-lg py-3 px-6 rounded-lg mb-10"
            >
              Make Payment
            </Link>
          </div>
        </div>
      )}

      <div className="mt-10 flex mb-72">
        <PaginationBtn previousUrl="/previous-page" nextUrl="/next-page" />
      </div>
    </Dashboard>
  );
};

export default DashboardHome;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Looper from "../../../assets/images/Looper-1.png";
import ReactFlagsSelect from "react-flags-select";
import Framer from "../../../assets/images/Frame.png";
import Framer2 from "../../../assets/images/Frame (1).png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import History from "./history";
import Button from "../Target-Savings/Button";
import AddWallet from ".";

export default function Card() {
  const [selected, setSelected] = useState("US");
  const [showAmount, setShowAmount] = useState(true);
  const [amount, setAmount] = useState(() => {
    const savedAmount = localStorage.getItem("amount");
    const numericAmount = savedAmount ? parseFloat(savedAmount) : 0;
    return isNaN(numericAmount) ? 0 : numericAmount;
  });
  const [inputAmount, setInputAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    const numericAmount = parseFloat(inputAmount.replace(/[^0-9.]/g, ""));
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Invalid amount");
      return;
    }

    const config = {
      public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
      tx_ref: Date.now(), // Use unique tx_ref
      amount: numericAmount, 
      currency: 'NGN',
      customer: {
        email: 'user@gmail.com',
        phone_number: '070********',
        name: 'john doe',
      },
      customizations: {
        title: 'my Payment Title',
        description: 'Funding my wallet',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };

    const handleFlutterPayment = useFlutterwave(config);

    handleFlutterPayment({
      callback: function (data) {
        const newBalance = amount + numericAmount;
        setAmount(newBalance);
        localStorage.setItem("amount", newBalance); 
        // Save transaction details in localStorage
        const transaction = {
          id: data.tx_ref,
          amount: numericAmount,
          date: new Date().toISOString(),
          payment_options
        };
        
        let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));

        navigate("/dashboard/wallet");
        closePaymentModal(); 
        setShowModal(false); 
      },
      onClose: function () {
        setShowModal(false); 
      }
    }).catch(error => {
      console.error('Payment error:', error);
      closePaymentModal(); 
      setShowModal(false); 
    });
  };

  const toggleVisibility = () => {
    setShowAmount(!showAmount);
  };

  const renderAmount = () => {
    return showAmount ? `₦${amount.toFixed(2)}` : "******";
  };

  const handleInputChange = (event) => {
    setInputAmount(event.target.value);
  };

  return (
    <>
      <div className="flex">
        <div className="">
          <div
            className="flex bg-customBlack rounded-2xl"
            style={{
              width: "620px",
              marginTop: "64px",
              backgroundImage: `url(${Looper})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="ml-8 mt-9 mb-10"
              style={{
                marginBottom: "37px",
              }}
            >
              <div className="flex align-center text-center items-center">
                <p className="text-center" style={{ color: "#A1A4A8" }}>
                  Wallet Balance
                </p>
                <ReactFlagsSelect
                  className="ml-6"
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                />
              </div>
              <div className="flex mt-4 relative">
                <h3 className="text-white font-millik text-3xl">
                  {renderAmount()}
                </h3>
                <button
                  className="text-white w-24 absolute top-2 right-2"
                  onClick={toggleVisibility}
                >
                  {showAmount ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
              <div className="mt-4 flex">
                <Button onClick={() => setShowModal(true)} className="flex text-lg mr-6">
                  <img src={Framer} />
                  <span className="ml-2">TopUp</span>
                </Button>
                <button
                  className="flex text-white text-lg bg-customBlack rounded-lg ml-4"
                  style={{
                    border: "1px solid white",
                    padding: "8px 24px",
                    color: "#A1A4A8",
                  }}
                >
                  <span className="mr-2">Send</span>
                  <img src={Framer2} />
                </button>
              </div>
              <div
                className="text-white mt-10 text-base font-Modarat"
                style={{ color: "#A1A4A8" }}
              >
                <p className="">Unique Id: </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex">
            <History />
          </div>
        </div>
        <AddWallet />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Enter Amount</h3>
            <input
              type="text"
              value={inputAmount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <button
              className="w-full bg-customBlack font-Modarat text-white p-2 rounded-lg"
              onClick={handlePayment}
            >
              Pay
            </button>
            <button
              className="w-full mt-2 bg-gray-300 text-black p-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

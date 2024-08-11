import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
export default function Footer() {
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showAPIStatus, setShowAPIStatus] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLegal, setLegal] = useState(false);
  const [selected, setSelected] = useState("NG");

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  const toggleAPIStatus = () => {
    setShowAPIStatus(!showAPIStatus);
  };

  const toggleCompany = () => {
    setShowCompany(!showCompany);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  const toggleLegal = () => {
    setShowLegal(!showLegal);
  };
  const Arrow = <path d="M4 6h16M4 12h16M4 18h16"></path>;
  return (
    <>
      <div className="hidden sm:flex ml-24 mr-24 flex-cols  md:flex-cols lg:flex-cols xl:flex-cols gap-5">
        <div className=" p-5 flex-1 ">
          <p className="mb-5 font-bold">Products</p>
          <div className="flex flex-col font-Modarat text-customGray">
            <a href="./invoice" className=" mb-5">
              Send Money
            </a>
            <a href="./invoice" className=" mb-5">
              Store
            </a>
            <a href="./invoice" className=" mb-5">
              Payments Links
            </a>
            <a href="./invoice" className=" mb-5">
              Invoices
            </a>
            <a href="./invoice" className=" mb-5">
              Invoices
            </a>
            <a href="./invoice" className=" mb-5">
              Capital
            </a>
            <a href="./invoice" className=" mb-5">
              Grow
            </a>
            <a href="./invoice" className=" mb-5">
              Card Issuing
            </a>
            <a href="./invoice" className="mb-5">
              Faas
            </a>
            <a href="./invoice" className=" mb-5">
              Send App
            </a>
            <a href="./invoice" className=" mb-5">
              Tuition
            </a>
          </div>
        </div>
        <div className=" flex-1   p-5">
          <p className="mb-5 font-bold">Resources</p>
          <div className="flex flex-col font-Modarat text-customGray">
            <a href="./invoice" className=" mb-5">
              Pricing
            </a>
            <a href="./invoice" className=" mb-5">
              Support
            </a>
            <a href="./invoice" className=" mb-5">
              Blog
            </a>
            <a href="./invoice" className=" mb-5">
              Integrations
            </a>
            <a href="./invoice" className=" mb-5">
              Why you get charged
            </a>
            <a href="./invoice" className="mb-5">
              Payment Protection Promise
            </a>
          </div>
        </div>

        <div className=" flex-1  p-5">
          <p className=" font-bold mb-5">API Status</p>
          <div className="flex flex-col font-Modarat text-customGray ">
            <a href="" className=" mb-5">
              API Documentation
            </a>
            <a href="" className=" mb-5">
              API Reference
            </a>
            <a href="" className=" mb-5">
              ApPI Status
            </a>
          </div>
        </div>
        <div className=" flex-1  p-5">
          <p className="font-bold mb-5">Company</p>
          <div className="flex flex-col font-Modarat text-customGray">
            <a href="" className=" mb-5">
              Customers
            </a>
            <a href="" className=" mb-5">
              Career
            </a>
            <a href="" className=" mb-5">
              Press
            </a>
            <a href="" className=" mb-5">
              Covid 19
            </a>
          </div>
        </div>
        <div className=" flex-1  p-5">
          <p className="font-bold mb-5">Contact</p>
          <div className="flex flex-col font-Modarat text-customGray">
            <a href="" className=" mb-5">
              hi@flutterwavego.com
            </a>
            <a href="" className=" mb-5">
              +234 201-8889595
            </a>
            <a href="" className=" mb-5">
              0700-FLUTTERWAVE
            </a>
            <a href="" className=" mb-5">
              X Support
            </a>
            <a href="" className=" mb-5">
              Our call lines are available 24/7.
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex border-b border  justify-between p-4 ">
        <ReactFlagsSelect
          selected={selected}
          searchable
          onSelect={(code) => setSelected(code)}
          className="ml-20"
        />

        <div className="flex space-x-2 font-Modarat text-lg font-normal text-customGray mr-24 ">
          <a href="" className="">
            X (formerly Twitter)
          </a>
          <a href="" className="">
            Facebook
          </a>
          <a href="" className="">
            Instagram
          </a>
          <a href="" className="">
            YouTube
          </a>
          <a href="" className="">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-b border  hidden sm:flex justify-between space-x-2 font-Modarat text-lg font-normal text-customGray p-4 ">
        <div className="ml-20 space-x-20 ">
          <a href="" className="">
            Privacy notice
          </a>
          <a href="" className="">
            Terms of use
          </a>
          <a href="" className="">
            Cookie notice
          </a>
          <a href="" className="">
            Merchant service management
          </a>
          <a href="" className="">
            IMS policy
          </a>
          <a href="" className="">
            Send App licenses
          </a>
        </div>
      </div>
      {/* <div className="flex mt-2 ml-20">
            <div className="ml-4 text-customGray ">&copy;</div>
            <p className="font-Modarat text-customGray text-base leading-6 ml-2 mt-1">
              Flutterwave Technology Solutions Limited Licensed by Central Bank
              of Nigeria
            </p>
          </div> */}

      <div className="block sm:hidden">
        <div className="grid grid-cols-1">
          <div className="p-5">
            <button
              className=" py-4 flex justify-between items-center w-full border-b border-gray-300"
              onClick={toggleProducts}
            >
              <span>Products</span>
              {showProducts ? "⌄" : "⌄"}
            </button>
            {showProducts && (
              <div className="flex flex-col mt-5 font-Modarat">
                <a href="./invoice" className="mb-5">
                  Send Money
                </a>
                <a href="./invoice" className="mb-5">
                  Store
                </a>
                <a href="./invoice" className="mb-5">
                  Payments Links
                </a>
                <a href="./invoice" className="mb-5">
                  Invoices
                </a>
                <a href="./invoice" className="mb-5">
                  Invoices
                </a>
                <a href="./invoice" className="mb-5">
                  Capital
                </a>
                <a href="./invoice" className="mb-5">
                  Grow
                </a>
                <a href="./invoice" className="mb-5">
                  Card Issuing
                </a>
                <a href="./invoice" className="mb-5">
                  Faas
                </a>
                <a href="./invoice" className="mb-5">
                  Send App
                </a>
                <a href="./invoice" className="mb-5">
                  Tuition
                </a>
              </div>
            )}
          </div>
          <div className="p-5">
            <button
              className=" py-4  flex justify-between items-center w-full border-b border-gray-300"
              onClick={toggleResources}
            >
              <span>Resources</span>
              {showResources ? "⌄" : "⌄"}
            </button>
            {showResources && (
              <div className="flex flex-col mt-5 font-Modarat">
                <a href="./invoice" className="mb-5">
                  Pricing
                </a>
                <a href="./invoice" className="mb-5">
                  Support
                </a>
                <a href="./invoice" className="mb-5">
                  Blog
                </a>
                <a href="./invoice" className="mb-5">
                  Integrations
                </a>
                <a href="./invoice" className="mb-5">
                  Why you get charged
                </a>
                <a href="./invoice" className="mb-5">
                  Payment Protection Promise
                </a>
              </div>
            )}
          </div>
          <div className="p-5">
            <button
              className="py-4  flex justify-between items-center w-full border-b border-gray-300"
              onClick={toggleAPIStatus}
            >
              <span>API Status</span>
              {showAPIStatus ? "⌄" : "⌄"}
            </button>
            {showAPIStatus && (
              <div className="flex flex-col mt-5 font-Modarat ">
                <a href="./invoice" className="mb-5">
                  API Documentation
                </a>
                <a href="./invoice" className="mb-5">
                  API Reference
                </a>
                <a href="./invoice" className="mb-5">
                  API Status
                </a>
              </div>
            )}
          </div>
          <div className="p-5">
            <button
              className=" py-4  flex justify-between items-center w-full border-b border-gray-300"
              onClick={toggleCompany}
            >
              <span>Company</span>
              {showCompany ? "⌄" : "⌄"}
            </button>
            {showCompany && (
              <div className="flex flex-col mt-5 font-Modarat">
                <a href="./invoice" className="mb-5">
                  Customers
                </a>
                <a href="./invoice" className="mb-5">
                  Career
                </a>
                <a href="./invoice" className="mb-5">
                  Press
                </a>
                <a href="./invoice" className="mb-5">
                  Covid 19
                </a>
              </div>
            )}
          </div>
          <div className="p-5">
            <button
              className="py-4  flex justify-between items-center w-full border-b border-gray-300"
              onClick={toggleContact}
            >
              <span>Contact</span>
              {showContact ? "⌄" : "⌄"}
            </button>
            {showContact && (
              <div className="flex flex-col mt-5 font-Modarat">
                <a href="./invoice" className="mb-5">
                  hi@flutterwavego.com
                </a>
                <a href="./invoice" className="mb-5">
                  +234 201-8889595
                </a>
                <a href="./invoice" className="mb-5">
                  0700-FLUTTERWAVE
                </a>
                <a href="./invoice" className="mb-5">
                  X Support
                </a>
                <a href="./invoice" className="mb-5">
                  Our call lines are available 24/7.
                </a>
              </div>
            )}
          </div>
          <div className="p-5">
            <button
              className="py-4  flex justify-between items-center w-full border-b border-gray-300"
              onClick={toggleContact}
            >
              <span>Legal</span>
              {showContact ? "⌄" : "⌄"}
            </button>
            {showContact && (
              <div className="flex flex-col mt-5 font-Modarat">
                <a href="./invoice" className="mb-5">
                  Privacy notice
                </a>
                <a href="./invoice" className="mb-5">
                  Terms of use
                </a>
                <a href="./invoice" className="mb-5">
                  Cookie notice
                </a>
                <a href="./invoice" className="mb-5">
                  Merchant service management
                </a>
                <a href="./invoice" className="mb-5">
                  IMS policy
                </a>{" "}
                <a href="./invoice" className="mb-5">
                  Send App licenses
                </a>
              </div>
            )}
          </div>
          <div className="">
            <ReactFlagsSelect
              selected={selected}
              searchable
              onSelect={(code) => setSelected(code)}
              className=""
            />
          </div>

          <div className="flex mt-2">
            <div className="ml-4 text-customGray ">&copy;</div>
            <p className="font-Modarat text-customGray text-base leading-6 ml-2 mt-1">
              Flutterwave Technology Solutions Limited Licensed by Central Bank
              of Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

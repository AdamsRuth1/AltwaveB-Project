import Dashboard from "../views/dashboard";
import EserviceInfor from "../E-service/EserviceInfor";
import { useState } from "react";
import TuitionStatus from "../Dashboard/PayTuition/TuitionStatus";
import PaymentInformation from "../E-service/PaymentInformation";
import { servicesStatus } from "../../constants/SidebarData";
// import CompletePayment from "../dashboard/PayTuition/CompletePayment";
import CompletePayment from "../Dashboard/PayTuition/CompletePayment";
const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <EserviceInfor Next={handleNext} />;
      case 2:
        return <PaymentInformation Next={handleNext} />;
      case 3:
        return <CompletePayment />;
      default:
        return;
    }
  };
  return (
    <Dashboard>
      <div className="w-full flex justify-between">
        <div className="">{renderPage()}</div>
        <div className=" mr-[4rem]">
          <TuitionStatus Steps={servicesStatus} activeState={currentPage} />
        </div>
      </div>
    </Dashboard>
  );
};

export default Services;

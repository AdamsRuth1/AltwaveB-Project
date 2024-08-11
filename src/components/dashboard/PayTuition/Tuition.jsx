import InstituteInfor from "./InstituteInfor";
import PaymentInformation from "./PaymentInformation";
import TuitionStatus from "./TuitionStatus";
import Dashboard from "../../Views/Dashboard";
import StudentInfor from "./StudentInfor";
import TransactionSummary from "./TransactionSummary";
import CompletePayment from "./CompletePayment";
import { useState } from "react";
import { Steps } from "../../../constants/SidebarData";
const Tuition = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = () => {
    setCurrentForm((prevForm) => Math.min(prevForm + 1, 5)); // Ensure it doesn't exceed the number of steps
  };
  const handleThreeBack = () => {
    setCurrentForm((prevForm) => Math.max(prevForm - 3, 1)); // Ensure it doesn't go below the first step
  };
  const handleTwoBack = () => {
    setCurrentForm((prevForm) => Math.max(prevForm - 2, 1)); // Ensure it doesn't go below the first step
  };
  const handleOneBack = () => {
    setCurrentForm((prevForm) => Math.max(prevForm - 1, 1)); // Ensure it doesn't go below the first step
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <InstituteInfor Next={handleNext} />;
      case 2:
        return <PaymentInformation Next={handleNext} />;
      case 3:
        return <StudentInfor Next={handleNext} />;
      case 4:
        return (
          <TransactionSummary
            Next={handleNext}
            ThreeStepsBack={handleThreeBack}
            TwoStepsBack={handleTwoBack}
            OneStepBack={handleOneBack}
          />
        );
      case 5:
        return <CompletePayment Next={handleNext} />;
      default:
        return;
    }
  };
  return (
    <Dashboard>
      <div className=" flex gap-[10rem]">
        <div className="">{renderForm()}</div>
        <div className=" mr-5">
          <TuitionStatus Steps={Steps} activeState={currentForm} />
        </div>
      </div>
    </Dashboard>
  );
};

export default Tuition;

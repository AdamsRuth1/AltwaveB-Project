
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { CardProvider } from "./context/CardContext"; // Updated import name
import { SignupContextProvider } from "./context/SignupContext";
import Landing from "./components/landingPage/landingPage";
import EnrollPage from "./components/onboarding/Enroll";
import SignIn from "./components/onboarding/SignIn";
import SignUp from "./components/onboarding/SignUp";
import Blog from "./components/onboarding/BlogPage";
import EnrollSuccess from "./components/onboarding/EnrollSuccess";
import ContactUs from "./components/onboarding/contactUs/contactus";
import Faq from "./components/landingPage/faq";
// import Dashboard from "./components/dashboard/DashboardHome";
import Dashboard from "./components/dashboard/dashbord/DashboardHome"
import Eservice from "./components/E-service/Services";
import Tuition from "./components/dashboard/PayTuition/Tuition";
import Wallet from "./components/dashboard/wallet/Wallets";
import TargetSavings from "./components/dashboard/target-Savings/Target";

import "./index.css";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <SignupContextProvider>
      <CardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enrollsuccess" element={<EnrollSuccess />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<div>Not Found</div>} />

          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <SignIn />}
          />
          <Route
            path="/dashboard/tuition"
            element={isLoggedIn ? <Tuition /> : <SignIn />}
          />
          <Route
            path="/dashboard/e-service"
            element={isLoggedIn ? <Eservice /> : <SignIn />}
          />
          <Route
            path="/dashboard/wallet"
            element={isLoggedIn ? <Wallet /> : <SignIn />}
          />
           <Route
              path="/dashboard/target-savings"
              element={isLoggedIn ? <TargetSavings /> : <SignIn />}
            />

          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/tuition" element={<Tuition />} />
          <Route path="/dashboard/e-service" element={<Eservice />} />
          <Route path="/dashboard/wallet" element={<Wallet />} /> */}
        </Routes>
      </Router>
      </CardProvider>
    </SignupContextProvider>
  );
}

export default App;

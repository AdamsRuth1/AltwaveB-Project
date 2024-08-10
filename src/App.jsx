import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SignupContextProvider } from "./context/SignupContext";
import { CardProvider } from "./context/CardContext"; // Updated import name
import Landing from "./components/LandingPage/LandingPage";
import EnrollPage from "./components/Onboarding/Enroll";
import SignIn from "./components/Onboarding/SignIn";
import SignUp from "./components/Onboarding/SignUp";
import Blog from "./components/Onboarding/BlogPage";
import EnrollSuccess from "./components/Onboarding/EnrollSuccess";
import ContactUs from "./components/Onboarding/ContactUs/Contactus";
import Faq from "./components/LandingPage/Faq";
import Dashboard from "./components/Dashboard/Dashbord/DashboardHome";
import Eservice from "./components/E-service/Services";
import Tuition from "./components/Dashboard/PayTuition/Tuition";
import Wallet from "./components/Dashboard/wallet/Wallets";
import TargetSavings from "./components/Dashboard/Target-Savings/target";

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
          </Routes>
        </Router>
      </CardProvider>
    </SignupContextProvider>
  );
}

export default App;

import dashboard from "../assets/Icons/dashboard.svg";
import Tuition from "../assets/Icons/Pay-Tuition.svg";
import Wallet from "../assets/Icons/Wallet.svg";
import Service from "../assets/Icons/E-service.svg";
import Piggi from "../assets/Icons/Wallet icons.svg";
import ActiveDashboard from "../assets/Icons/dashoboardInactive.svg";
import ActiveSaving from "../assets/Icons/ActiveSaving.svg";
import ActiveEservice from "../assets/Icons/E-serviceAcive.svg";
import ActiveWallet from "../assets/Icons/ActiveWallet.svg";
import PayTuition from "../assets/Icons/TuitionActive.svg";
import check from "../assets/Icons/check-circle.svg";
import Mark from "../assets/Icons/TuitionMark.svg";
import Line from "../assets/Icons/Line 9.svg";

export const Navbar = [
  {
    name: "Dashboard",
    ActiveIcon: ActiveDashboard,
    InActiveIcon: dashboard,
    to: "",
  },
  {
    name: "Pay Tuition",
    ActiveIcon: Tuition,
    InActiveIcon: PayTuition,
    to: "Tuition",
  },
  {
    name: "Wallet",
    ActiveIcon: Wallet,
    InActiveIcon: ActiveWallet,
    to: "wallet",
  },
  {
    name: "Pay E-Service",
    ActiveIcon: Piggi,
    InActiveIcon: ActiveEservice,
    to: "E-service",
  },
  {
    name: "Target Saving",
    ActiveIcon: Service,
    InActiveIcon: ActiveSaving,
    to: "target-savings",
  },
];

export const Steps = [
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Institution Information",
    id: 1,
    line: Line,
  },
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Payment Information",
    id: 2,
    line: Line,
  },
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Student Information",
    id: 3,
    line: Line,
  },
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Transaction Summary",
    id: 4,
    line: Line,
  },
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Complete Payment",
    id: 5,
  },
];

export const servicesStatus = [
  {
    CheckIcon: check,
    Mark: Mark,
    status: "E-Service Information",
    id: 1,
    line: Line,
  },
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Payment Information",
    id: 2,
    line: Line,
  },
  {
    CheckIcon: check,
    Mark: Mark,
    status: "Complete Payment",
    id: 3,
  },
];

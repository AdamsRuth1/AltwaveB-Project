import { motion } from "framer-motion";
import SidebarHeader from "./dashboardHeader";
import DashboardSideBar from "./DashboardSideBar";

const Dashboard = ({ children }) => {
  
  return (
    <main className="min-h-screen flex">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" w-full h-full relative"
      >
        <SidebarHeader />
        <div className="flex">
          <DashboardSideBar />
          <section className="w-full bg-[#FAFAFB] items-center ml-[15rem] flex flex-col">
            {children}
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default Dashboard;

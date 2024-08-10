import Header from "../Views/Header";
import Logo from "../../assets/images/SigninLogo copy.svg";
import Input from "../Blog/Input";
import { useState } from "react";
import { motion } from "framer-motion";
import Post from "../Blog/Post";
import Blog1 from "../../assets/images/Blogimage1.png";
import Blog2 from "../../assets/images/Blogimage2.png";
import Blog3 from "../../assets/images/Blogimage3.png";
import Blog4 from "../../assets/images/Blogimage4.png";
import Blog5 from "../../assets/images/Blogimage5.png";
import Blog6 from "../../assets/images/Blogimage6.png";
import Pagination from "../Blog/Pagination";
import Newsletter from "../Blog/Newletter";
import searchIcon from "../../assets/Icons/search-icon.png";
import Footer from "../Views/Footer";
const BlogPage = () => {
  const Blogs = [
    {
      imgUrl: Blog1,
      heading: "So You Want To Study Abroad? Top 10 Schools To Choose",
      choice1: "Study abroad",
      choice2: "School",
      choice3: "Finance",
    },
    {
      imgUrl: Blog2,
      heading:
        "How To Properly Write A Proposal Letter To Your University Of Choice",
      choice1: "Travel",
      choice2: "School",
      choice3: "Visa",
    },
    {
      imgUrl: Blog3,
      heading: "Visa Voyage: Demystifying the Application Process",
      choice1: "Travel",
      choice2: "Study abroad Visa",
      choice3: "Visa",
    },
    {
      imgUrl: Blog4,
      heading: "Easy Steps To Pay For Your Next Coursera Certificate",
      choice1: "Payment",
      choice2: "E-learning",
      choice3: "Finance",
    },
    {
      imgUrl: Blog5,
      heading: "Easy Steps To Pay For Your Next Coursera Certificate",
      choice1: "Scholarships",
      choice2: "E-learning",
      choice3: "Visa",
    },
    {
      imgUrl: Blog6,
      heading: "So You Want To Study Abroad? Top 10 Schools To Choose",
      choice1: "Study abroad",
      choice2: "School",
    },
    {
      imgUrl: Blog4,
      heading: "Easy Steps To Pay For Your Next Coursera Certificate",
      choice1: "Payment",
      choice2: "E-learning",
      choice3: "Finance",
    },
    {
      imgUrl: Blog1,
      heading: "So You Want To Study Abroad? Top 10 Schools To Choose",
      choice1: "Study abroad",
      choice2: "School",
      choice3: "Finance",
    },
    {
      imgUrl: Blog3,
      heading: "Visa Voyage: Demystifying the Application Process",
      choice1: "Travel",
      choice2: "Study abroad Visa",
      choice3: "Visa",
    },
  ];
  const [active, setActiveTab] = useState("All");
  const Tabs = [
    "All",
    "Study Abroad",
    "School",
    "Scholarships",
    "Travel",
    "Student Loans",
  ];
  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const contentToRender = (blogs) => {
    switch (active) {
      case "All":
        return <Post Blogs={Blogs} />;
      case "Study Abroad":
        return (
          <Post
            Blogs={blogs.filter((abroad) => abroad.choice1 === "Study abroad")}
          />
        );

      case "Scholarships":
        return (
          <Post
            Blogs={blogs.filter((abroad) => abroad.choice1 === "Scholarships")}
          />
        );
      case "Travel":
        return (
          <Post Blogs={blogs.filter((school) => school.choice3 === "Visa")} />
        );
      case "Student Loans":
        return (
          <Post
            Blogs={blogs.filter((school) => school.choice3 === "Finance")}
          />
        );
      case "School":
        return (
          <Post Blogs={blogs.filter((school) => school.choice2 === "School")} />
        );
      default:
        return null;
    }
  };
  const handleGo = () => {
    alert("clicked Goal.......");
  };

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="">
          <div className="flex justify-center gap-[1.5rem] lg:pt-[5.75rem]">
            <img src={Logo} alt=" website logo" />
            <h1 className="font-millik font-normal text-[38px] leading-[48px] text-[#0A0E27]">
              All you need in one place
            </h1>
          </div>
          <div className="text-center m-auto w-[609px] lg:pt-[1rem]">
            <p className="font-Modarat font-normal text-[16px] leading-[24px] text-[#606569]">
              Find essential resources on everything you need to know, from
              program options and visa requirements to budgeting and cultural
              do's and don'ts
            </p>
          </div>
          <Input
            text="Go"
            placeholder="Search topics, information"
            handleClick={handleGo}
            icon={searchIcon}
          />
          <div className=" lg:mx-[6rem] pt-[5.125rem]">
            <div className="flex justify-between lg:pr-[3rem]">
              <div className="flex gap-[1.5rem]">
                {Tabs.map((tab, index) => (
                  <div key={index}>
                    <h4
                      className={`py-[12px] px-[24px] font-Modarat
                       font-normal text-[16px] leading-[16px] cursor-pointer
                       ${
                         active === tab
                           ? "text-[#0A0E27] border-b border-[#0A0E27]"
                           : "text-[#51575D]"
                       }
                       `}
                      onClick={() => handleTabs(tab)}
                    >
                      {tab}
                    </h4>
                  </div>
                ))}
              </div>
              <div className="">
                <select className=" py-[12px] px-[24px] -mt-[1.6rem] text-[#51575D] font-normal text-[16px] leading-[16px] cursor-pointer outline-none border border-[#CCCCCC] rounded-[8px]">
                  <option>See all</option>
                  <option value="All">All</option>
                  <option value="Study Abroad">Study Abroad</option>
                  <option value="School">School</option>
                  <option value="Scholarships">Scholarships</option>
                  <option value="Travel">Student Loans</option>
                </select>
              </div>
            </div>
            {contentToRender(Blogs)}
            <Pagination />
            <Newsletter />
           
          </div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default BlogPage;

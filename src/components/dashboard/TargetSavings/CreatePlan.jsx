import React, { useState } from "react";
import Coin from "../../../assets/images/151055041_b058e357-f1d4-48f6-8977-25b8bead6dcc-removebg-preview 1.png";
import Coin1 from "../../../assets/images/151055041_b058e357-f1d4-48f6-8977-25b8bead6dcc-removebg-preview 2.png";
import Image from "../../../assets/images/2151266604 (1) 1.png";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import Tuition from "./PlanCreate";
import Terminated from "./Terminated";
import Button from "./Button";

export default function CreatePlan() {
    const [showTuition, setTuition] = useState(false);

    const handleClick = () => {
        console.log("Button clicked");
        setTuition(true); // Show Tuition component
    };

    return (
        <>
            {!showTuition ? (
                <>
                    <div className="w-[90%] mt-[64px] mr-[40px] ml-[40px] mb-[128px]">
                        <div className="bg-[#CCCCCC0D] flex justify-between relative px-18 rounded">
                            <div className="ml-[42px] mt-8">
                                <h3 className="font-millik text-[30px] leading-[40px] text-customBlack mb-4">
                                    Hedge Your Funds With <br />
                                    <span className="text-[#252E6A]">Target Savings</span>
                                </h3>
                                <Button onClick={handleClick} className="text-white">
                                    <span className="text-white text-sm">Create New Plan</span>
                                </Button>
                            </div>
                            <div className="flex">
                                <img src={Coin1} alt="coin" className="w-[143px] h-[120px] mt-[80px] mr-2" />
                                <img src={Coin} alt="coin" className="w-[143px] h-[120px] right-20 top-20 absolute" />
                                <img src={Image} alt="coin" className="w-[200px] h-[200px]" />
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="flex justify-between">
                        <div className="mr-10"><Ongoing /></div>
                        <Completed />
                    </div>
                    <div ><Terminated/></div>
                    </div>
                   

                </>
            ) : (
                <div className="">
                    <Tuition />
                </div>
            )}
        </>
    );
}

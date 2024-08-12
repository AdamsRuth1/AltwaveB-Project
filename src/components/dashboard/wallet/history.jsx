import React from "react";
import HistoryComponent from "./historyComponent";
const history = () => {
  return (
    <>
      <div
        className="rounded-lg bg-white  "
        style={{
          border: "#CCCCCC",
          marginTop: "60px",
          width: "620px",
        }}
      >
        <div
          className="flex py-4 justify-between items-center border-b "
          style={{ marginLeft: "32px", marginRight: "32px" }}
        >
          <p className="font-Modarat font-bold text-customBlack text-lg">
            Transaction History
          </p>
          <p className="font-Modarat text-base">View all</p>
        </div>
        {/* <div
          style={{
            marginLeft: "32px",
            marginRight: "32px",
            width: "556px",
            height: "2px",
            backgroundColor: "#CCCCCC",
          }}
          className="mb-10"
        ></div> */}
        <div>
          <HistoryComponent />
        </div>
      </div>
    </>
  );
};
export default history;

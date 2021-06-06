import React from "react";
import Customer from "./Customer";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div style={{ height: 500, width: 500, backgroundColor: "yellowgreen" }}>
      <div>profile</div>
      <div>bids</div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Filter from "../components/Filter";
import BidList from "../components/BidList";

const Home = () => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Filter />
      <BidList />
    </div>
  );
};

export default Home;

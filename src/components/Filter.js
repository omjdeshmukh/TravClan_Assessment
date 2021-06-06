import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Filter = (props) => {
  const [toogle, setToogle] = useState(false);

  return (
    <Container>
      <h4 style={{ color: "#fff" }}>Filter</h4>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <h5
            style={{
              visibility: !toogle ? "hidden" : "visible",
              color: "#fff",
              position: "absolute",
              right: "20%",
            }}
          >
            Min Bids
          </h5>
          <h5
            style={{
              visibility: toogle ? "hidden" : "visible",
              color: "#fff",
              position: "absolute",
              right: "20%",
            }}
          >
            Max Bids
          </h5>
        </div>
        <div
          style={{
            backgroundColor: toogle ? "#fff" : "green",
            height: 30,
            width: 40,
            marginLeft: 20,
          }}
          onClick={() => setToogle(false)}
        ></div>
        <div
          style={{
            backgroundColor: !toogle ? "#fff" : "green",
            height: 30,
            width: 40,
          }}
          onClick={() => setToogle(true)}
        ></div>
      </div>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  height: 50px;
  width: 90%;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

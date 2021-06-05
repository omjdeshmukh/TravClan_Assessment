import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Customer from "./Customer";
import axios from "axios";

const title = {
  width: 100,
  display: "flex",
  alignItems: "center",
};

const BidList = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://intense-tor-76305.herokuapp.com/merchants")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title>
        <p style={{ ...title, width: 50 }}> S.No.</p>
        <p style={{ ...title, width: 200 }}> Profile </p>
        <p style={{ ...title, width: 100 }}> Premium</p>
        <p style={{ ...title, width: 150 }}> Phone</p>
        <p style={{ ...title, width: 200 }}> Email </p>
        <p style={{ ...title, width: 100 }}> Bid </p>
      </Title>
      {data &&
        data.map((item, id) => {
          return <Customer item={item} key={id} id={id} />;
        })}
    </Container>
  );
};

export default BidList;

const Container = styled.div`
  height: 400px;
  width: 92%;
  background-color: gray;
  border-radius: 10px;
`;

const Title = styled.div`
  background-color: #36486b;
  height: 40px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

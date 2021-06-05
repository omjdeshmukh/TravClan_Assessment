import React, { useEffect } from "react";
import styled from "styled-components";
import Customer from "./Customer";
import axios from "axios";

const titleStyle = {
  color: "#fff",
  width: 100,
  display: "flex",
  alignItems: "center",
};
const titleStyle1 = {
  color: "#fff",
  width: 20,
  display: "flex",
  alignItems: "center",
};
const titleStyle2 = {
  color: "#fff",
  width: 200,
  display: "flex",
  alignItems: "center",
};



const BidList = () => {

    useEffect(() => {}, []);
    
  return (
    <Container>
      <Title>
        <p style={titleStyle1}> S.No.</p>
        <p style={titleStyle2}> Profile </p>
        <p style={titleStyle}> Premium</p>
        <p style={titleStyle}> Phone</p>
        <p style={titleStyle}> Email </p>
        <p style={titleStyle}> Bid </p>
      </Title>
      <Customer />
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
  padding-left: 10px;
`;

/*
 "id": "1",
    "firstname": "Smauel",
    "lastname": "Matthew",
    "avatarUrl": "https://prod_membership_avatars.s3.amazonaws.com/avatar-file-d84b533b09f34ab6908345833dc21773.jpg",
    "email": "test@tes.com",
    "phone": "9876543210",
    "hasPremium": true,
*/

import React, { useEffect } from "react";
import styled from "styled-components";

const width2 = {
  width: 100,
  display: "flex",
  alignItems: "center",
};
const width1 = {
  width: 20,
  display: "flex",
  alignItems: "center",
};

const Customer = (props) => {
  return (
    <Container>
      <p style={width1}> 1 </p>
      <Profile>
        <Avatar />
        <div>
          <p>fffnnn</p>
          <p>lllnnn</p>
        </div>
      </Profile>
      <p style={width2}>Preamium</p>
      <p style={width2}>Phone</p>
      <p style={width2}>Email</p>
      <p style={width2}>Bid</p>
    </Container>
  );
};

export default Customer;

const Container = styled.div`
  height: 70px;
  background-color: #8d9db6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

const Profile = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #fff;
`;

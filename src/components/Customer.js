import React, { useEffect, useState } from "react";
import styled from "styled-components";

const title = {
  width: 100,
  display: "flex",
  alignItems: "center",
};

const Customer = (props) => {
  const data = props.item;

  return (
    <Container style={{ backgroundColor: "#667292" }}>
      <p style={{ ...title, width: 50 }}> {props.id + 1} </p>
      <Profile>
        <img
          style={{ width: 50, borderRadius: 25, marginRight: 20 }}
          src={data.avatarUrl}
          alt="Avatar"
        />
        <div>
          <p>{data.firstname}</p>
          <p>{data.lastname}</p>
        </div>
      </Profile>
      <p style={{ ...title, width: 100 }}>
        {data.hasPremium ? "True" : "False"}
      </p>
      <p style={{ ...title, width: 150 }}>{data.phone}</p>
      <p style={{ ...title, width: 200 }}>{data.email}</p>
      <p style={{ ...title, width: 100 }}>Bid</p>
    </Container>
  );
};

export default Customer;

const Container = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

const Profile = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
`;

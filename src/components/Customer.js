import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const title = {
  width: 100,
  display: "flex",
  alignItems: "center",
};

const Customer = (props) => {
  const data = props.item;
  const [toggle, setToggle] = useState(true);
  console.log(props.amount);

  return (
    <>
      <Container
        style={{ backgroundColor: props.color ? "#667292" : "#8d9db6" }}
      >
        <p style={{ ...title, width: 50 }}> {props.id + 1} </p>
        <Link
          to={{
            pathname: `/dashboard/${data.id}/${data.firstname}-${data.lastname}`,
          }}
        >
          <Profile>
            <img
              style={{ width: 50, borderRadius: 25, marginRight: 20 }}
              src={data.avatarUrl}
              alt="Avatar"
            />
            <p style={{ color: "black", textDecorationLine: "none" }}>
              {data.firstname} {data.lastname}
            </p>
          </Profile>
        </Link>

        <p style={{ ...title, width: 100 }}>
          {data.hasPremium ? "True" : "False"}
        </p>
        <p style={{ ...title, width: 150 }}>{data.phone}</p>
        <p style={{ ...title, width: 200 }}>{data.email}</p>
        <p style={{ ...title, width: 100 }}>
          $ {toggle ? props.amountm : props.amount || 0}
        </p>
      </Container>
    </>
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

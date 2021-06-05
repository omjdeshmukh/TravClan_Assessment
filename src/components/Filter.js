import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <Container>
      <h1 style={{ color: "#fff" }}>Filter</h1>
      <h1 style={{ color: "#fff" }}>Filter</h1>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  height: 50px;
  width: 90%;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

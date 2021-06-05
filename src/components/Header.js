import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
        
      <h1>header</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 56px;
  background-color: #2f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

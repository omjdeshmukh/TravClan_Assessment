import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Customer from "./Customer";
import axios from "axios";
import Paginaion from "./Pagination";
import Dashboard from "./Dashboard"; 

const title = {
  width: 100,
  display: "flex",
  alignItems: "center",
};

const BidList = () => {
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://intense-tor-76305.herokuapp.com/merchants")
      .then((res) => {
        setData(res.data);
        // console.log(res.data.map(item=> console.log(item.bids)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data && data.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(currentPosts);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <Title>
          <p style={{ ...title, width: 50 }}> S.No.</p>
          <p style={{ ...title, width: 200 }}> Profile </p>
          <p style={{ ...title, width: 100 }}> Premium</p>
          <p style={{ ...title, width: 150 }}> Phone</p>
          <p style={{ ...title, width: 200 }}> Email </p>
          <p style={{ ...title, width: 100 }}> Bid </p>
        </Title>
        {currentPosts &&
          currentPosts.map((item, id) => {
            return (
              <>
                <Customer
                  item={item}
                  key={id}
                  id={id}
                  color={Boolean(id % 2)}
                  index={id + 1}
                />
              </>
            );
          })}
      </Container>
      <Paginaion
        posts={currentPage}
        totalsuggestions={data}
        postperpages={postsPerPage}
        paginate={paginate}
      />
      <div style={{ visibility: "hidden", position: "absolute" }}>
        {currentPosts &&
          currentPosts.map((item, index) => {
            <Dashboard list={item} key={index} />;
          })}
      </div>
    </>
  );
};

export default BidList;

const Container = styled.div`
  height: 395px;
  width: 92%;
  background-color: gray;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.div`
  background-color: #36486b;
  height: 40px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

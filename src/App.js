import React from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Filter from "./components/Filter";
import BidList from "./components/BidList";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <BidList />
    </div>
  );
}

export default App;

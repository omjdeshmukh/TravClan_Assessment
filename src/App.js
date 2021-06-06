import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Home from "./Screens/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/dashboard/:username/:userId"
            component={Dashboard}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

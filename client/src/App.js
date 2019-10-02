import React from "react";
import { Route, Redirect } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNavigation from "./components/BottomNav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { login } from "./services/api";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNav />

        <h1>Last Man Standing</h1>

        <BottomNavigation />
      </div>
    );
  }
}

export default App;

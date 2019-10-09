import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import BottomNav from "./BottomNav";

import "../css/Home.scss";

function Home(props) {
  return (
    <>
      <div id="homeContainer">
        <div id="homeRowTop">
          <h2>Welcome to LMS</h2>
          <p>
            To join the competition please sign in below. The rules can be found
            in the menu.
          </p>
        </div>
        <div id="homeRowBottom">
          <Button id="signupBtn">
            <Link to="/signup">
              <h5>Sign up</h5>
            </Link>
          </Button>
          <Button id="loginBtn">
            <Link to="/login">
              <h5>Log in</h5>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;

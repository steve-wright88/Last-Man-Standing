import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import video from "../assets/BK-club.mp4";

import "../css/Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: video
    };
  }

  render() {
    return (
      <>
        <div id="homeContainer">
          <video id="background-video" loop autoPlay playsInline>
            <source src={this.state.video} type="video/mp4" />
            <source src={this.state.video} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div id="homeRowTop">
            <h2>Last Man Standing</h2>
            <p>
              To join the competition please sign in below. The rules can be
              found in the menu above.
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
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../css/Rules.scss";

const Rules = () => {
  return (
    <>
      <div id="rulesContainer">
        <div id="rulesContent">
          <h1>How to play</h1>
          <ul>
            <li>Entry is £5</li>
            <li>
              Each round you choose a team from either the Premier League or
              Championship
            </li>
            <li>If that team wins you pass through to then next round</li>
            <li>If they lose or draw, you're out</li>
            <li>You can't choose the same team twice</li>
          </ul>
        </div>
        <Button id="backBtn">
          <Link to="/">
            <h5>back Home</h5>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Rules;

import React from "react";
import BottomNav from "./BottomNav";
import "../css/Rules.scss";

const Rules = () => {
  return (
    <>
      <div id="rulesContainer">
        <div id="rulesContent">
          <h1>How to play</h1>
          <ol>
            <li>Entry is £5</li>
            <li>
              Each round you choose a team from either the Premier League or
              Championship
            </li>
            <li>If that team wins you pass through to then next round</li>
            <li>If they lose or draw, you're out</li>
            <li>You can't choose the same team twice</li>
          </ol>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Rules;

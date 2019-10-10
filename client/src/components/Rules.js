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
            <li>You choose a team each round from either the Premier League</li>
            <li>If that team wins you pass through to then next round</li>
            <li>If they lose or draw, you're out</li>
            <li>You can't choose the same team twice</li>
            <hr />
            <li>The competition keeps going until there is one player left</li>
            <li>If all remaining players lose then there is a rollover</li>
            <li>
              In the event of a rollover, players must pay £5 again to double
              the pot and the game starts again
            </li>
            <li>
              New players can enter the game at this point but their entry fee
              is £10
            </li>
          </ul>
        </div>
        <Button id="backBtn">
          <Link to="/main">
            <h5>Let's play!</h5>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Rules;

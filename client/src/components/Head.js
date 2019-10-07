import React from "react";
import Dropdown from "./Dropdown";
import CompWelcome from "./CompWelcome";

const Head = props => {
  return (
    <div id="headContainer">
      <div id="welcomeComponent">
        <CompWelcome user={props.user} />
      </div>
      <div id="dropdownComponent">
        <Dropdown />
      </div>
    </div>
  );
};

export default Head;

import React from "react";
import Dropdown from "./Dropdown";
import CompWelcome from "./CompWelcome";

const Head = props => {
  return (
    <>
      <div id="welcomeComponent">
        <CompWelcome user={props.user} />
      </div>
      <div id="dropdownComponent">
        <Dropdown />
      </div>
    </>
  );
};

export default Head;

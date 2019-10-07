import React from "react";
import Head from "./Head";

import "../css/Main.scss";

const Main = props => {
  return (
    <div className="mainContainer">
      <Head />
      {/* <CompWelcome user={props.user} /> */}
    </div>
  );
};

export default Main;

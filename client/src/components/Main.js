import React from "react";
import Head from "./Head";

import "../css/Main.scss";

const Main = props => {
  return (
    <div className="mainContainer">
      <Head user={props.user} />
      {/* <CompWelcome user={props.user} /> */}
    </div>
  );
};

export default Main;

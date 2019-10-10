import React from "react";

import "../css/CompWelcome.scss";

const CompWelcome = props => {
  return (
    <>
      <div id="welcomeMessage">
        {props.user && <h2>Welcome, {props.user.firstName}</h2>}
      </div>

      <div>
        <p id="roundChoice">Please choose your team.</p>
        {/* Choose your team for round {props.choices.round} */}
      </div>
    </>
  );
};

export default CompWelcome;

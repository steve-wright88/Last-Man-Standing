import React from "react";

const CompWelcome = props => {
  console.log("user", props);
  return (
    <div>
      <div>{props.user && <h2>Welcome, {props.user.lastName}</h2>}</div>
      <div>{/* Choose your team for round {props.choices.round} */}</div>
    </div>
  );
};

export default CompWelcome;

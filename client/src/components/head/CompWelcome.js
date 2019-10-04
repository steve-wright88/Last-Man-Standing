import React, { Component } from "react";
import { Box } from "@material-ui/core";

function CompWelcome(props) {
  return (
    <Box display="flex">
      {props.user && (
        <Box flexDirection="row">Welcome, {props.user.firstName}</Box>
      )}
      <Box flexDirection="row">
        {/* Choose your team for round {props.choices.round} */}
      </Box>
    </Box>
  );
}

export default CompWelcome;

import React, { Component } from "react";
import { Box } from "@material-ui/core";

export default class CompWelcome extends Component {
  render() {
    return (
      <Box display="flex">
        props.user &&{" "}
        <Box flexDirection="row">Welcome, {props.user.username}</Box>
        <Box flexDirection="row">
          Choose your team for round {props.choices.round}
        </Box>
      </Box>
    );
  }
}
